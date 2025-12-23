import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

export interface Notification {
  id: string
  title: string
  content: string
  date: string
  type: 'order' | 'account' | 'social' | 'system'
  isRead: boolean
  source: 'magento' | 'directus'
  payload?: any
}

export function useNotifications() {
  const notifications = ref<Notification[]>([])
  const unreadCount = ref(0)
  const { $directus, $readItems, $updateItem } = useNuxtApp()

  // Fetch notifications from Directus
  const fetchDirectusNotifications = async () => {
    try {
      const { data } = await useAsyncData<unknown[]>('directusNotifications', () => {
        return $directus.request($readItems('notifications', {
          filter: {
            recipient: { _eq: 'current_user' }
          },
          sort: ['-date_created']
        }))
      })
      
      if (data.value) {
        const formattedNotifications: Notification[] = (data.value as Array<Record<string, unknown>>).map((notification) => {
          const n = notification as Record<string, unknown>
          const id = n['id'] ?? ''
          const subject = n['subject'] ?? ''
          const message = n['message'] ?? ''
          const timestamp = n['timestamp'] ?? ''
          const collection = n['collection'] ?? 'system'
          const status = n['status'] ?? ''
          return {
            id: String(id),
            title: String(subject),
            content: String(message),
            date: String(timestamp),
            type: String(collection) as Notification['type'],
            isRead: String(status) === 'read',
            source: 'directus',
            payload: n['item']
          }
        })
        notifications.value = [...notifications.value, ...formattedNotifications]
      }
    } catch (error) {
      console.error('Error fetching Directus notifications:', error)
    }
  }

  // Fetch notifications from Magento
  const fetchMagentoNotifications = async () => {
    try {
      // Replace with your Magento API endpoint
      const response = await fetch('/api/magento/notifications')
      const data = await response.json()
      
      const formattedNotifications: Notification[] = (data as Array<Record<string, unknown>>).map((notification) => {
        const n = notification as Record<string, unknown>
        return {
          id: String(n['id'] ?? ''),
          title: String(n['title'] ?? n['subject'] ?? ''),
          content: String(n['message'] ?? n['message'] ?? ''),
          date: String(n['created_at'] ?? ''),
          type: String(n['type'] ?? 'system') as Notification['type'],
          isRead: Boolean(n['is_read'] ?? n['is_read']),
          source: 'magento',
          payload: n['payload']
        }
      })
      notifications.value = [...notifications.value, ...formattedNotifications]
    } catch (error) {
      console.error('Error fetching Magento notifications:', error)
    }
  }

  // Mark notification as read
  const markAsRead = async (notificationId: string, source: 'magento' | 'directus') => {
    try {
      if (source === 'directus') {
        await $directus.request($updateItem('notifications', notificationId, {
          status: 'read'
        }))
      } else {
        // Update Magento notification
        await fetch(`/api/magento/notifications/${notificationId}/read`, {
          method: 'POST'
        })
      }
      
      // Update local state
      const notification = notifications.value.find(n => n.id === notificationId)
      if (notification) {
        notification.isRead = true
        unreadCount.value = Math.max(0, unreadCount.value - 1)
      }
    } catch (error) {
      console.error('Error marking notification as read:', error)
    }
  }

  // Mark all notifications as read
  const markAllAsRead = async () => {
    try {
      // Update Directus notifications
      await $directus.request($updateItem('notifications', {
        filter: {
          recipient: { _eq: 'current_user' },
          status: { _eq: 'inbox' }
        },
        data: {
          status: 'read'
        }
      }))

      // Update Magento notifications
      await fetch('/api/magento/notifications/read-all', {
        method: 'POST'
      })

      // Update local state
      notifications.value.forEach(notification => {
        notification.isRead = true
      })
      unreadCount.value = 0
    } catch (error) {
      console.error('Error marking all notifications as read:', error)
    }
  }

  // Calculate unread count
  const updateUnreadCount = () => {
    unreadCount.value = notifications.value.filter(n => !n.isRead).length
  }

  onMounted(async () => {
    await Promise.all([
      fetchDirectusNotifications(),
      fetchMagentoNotifications()
    ])
    updateUnreadCount()
  })

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    updateUnreadCount
  }
} 