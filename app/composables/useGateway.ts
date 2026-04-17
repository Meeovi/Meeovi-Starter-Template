import useAdapterRequest from '#social/app/composables/core/useAdapterRequest'

export function useGateway() {
  const content = useAdapterRequest()

  return {
    content,
  }
}

export default useGateway