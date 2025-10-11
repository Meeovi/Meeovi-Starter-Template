import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@storefront-ui/nuxt"]?: ModuleDependencyMeta<typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/i18n"]?: ModuleDependencyMeta<typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-security"]?: ModuleDependencyMeta<typeof import("nuxt-security").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@logto/nuxt"]?: ModuleDependencyMeta<typeof import("@logto/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module"]?: ModuleDependencyMeta<typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@storefront-ui/nuxt`
     */
    ["storefrontUi"]: typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-security`
     */
    ["security"]: typeof import("nuxt-security").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@logto/nuxt`
     */
    ["logto"]: typeof import("@logto/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     */
    ["devtools"]: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@storefront-ui/nuxt`
     */
    ["storefrontUi"]?: typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-security`
     */
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@logto/nuxt`
     */
    ["logto"]?: typeof import("@logto/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     */
    ["devtools"]?: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@storefront-ui/nuxt", Exclude<NuxtConfig["storefrontUi"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-security", Exclude<NuxtConfig["security"], boolean>] | ["@logto/nuxt", Exclude<NuxtConfig["logto"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/tailwindcss"]?: ModuleDependencyMeta<typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@storefront-ui/nuxt"]?: ModuleDependencyMeta<typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/i18n"]?: ModuleDependencyMeta<typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-security"]?: ModuleDependencyMeta<typeof import("nuxt-security").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@logto/nuxt"]?: ModuleDependencyMeta<typeof import("@logto/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module"]?: ModuleDependencyMeta<typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@storefront-ui/nuxt`
     * @see https://www.npmjs.com/package/@storefront-ui/nuxt
     */
    ["storefrontUi"]: typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-security`
     * @see https://www.npmjs.com/package/nuxt-security
     */
    ["security"]: typeof import("nuxt-security").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@logto/nuxt`
     * @see https://www.npmjs.com/package/@logto/nuxt
     */
    ["logto"]: typeof import("@logto/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module
     */
    ["devtools"]: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@storefront-ui/nuxt`
     * @see https://www.npmjs.com/package/@storefront-ui/nuxt
     */
    ["storefrontUi"]?: typeof import("@storefront-ui/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-security`
     * @see https://www.npmjs.com/package/nuxt-security
     */
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@logto/nuxt`
     * @see https://www.npmjs.com/package/@logto/nuxt
     */
    ["logto"]?: typeof import("@logto/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module`
     * @see https://www.npmjs.com/package/C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module
     */
    ["devtools"]?: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@storefront-ui/nuxt", Exclude<NuxtConfig["storefrontUi"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-security", Exclude<NuxtConfig["security"], boolean>] | ["@logto/nuxt", Exclude<NuxtConfig["logto"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}