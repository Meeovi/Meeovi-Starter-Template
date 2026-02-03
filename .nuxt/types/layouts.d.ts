import _default from "/home/meebuzo/github/alternate-framework/themes/framework/starter-template/app/layouts/default.vue";
import auth from "/home/meebuzo/github/alternate-framework/layers/auth/app/layouts/auth.vue";
import type { ComputedRef, MaybeRef } from 'vue'
declare module 'nuxt/app' {
  interface NuxtLayouts {
    'default': InstanceType<typeof _default>['$props'],
    'auth': InstanceType<typeof auth>['$props'],
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}