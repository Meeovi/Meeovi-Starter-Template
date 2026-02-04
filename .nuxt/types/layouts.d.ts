import auth from "/home/meebuzo/github/alternate-framework/themes/framework/starter-template/node_modules/@meeovi/layer-auth/app/layouts/auth.vue";
import type { ComputedRef, MaybeRef } from 'vue'
declare module 'nuxt/app' {
  interface NuxtLayouts {
    'auth': InstanceType<typeof auth>['$props'],
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}