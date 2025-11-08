interface ImportMetaEnv {
  VITE_TITLE: string
  VITE_DESCRIPTION: string
  VITE_CROWDIN_LINK: string
  VITE_SENTRY_DSN: string
  VITE_SENTRY_ENABLED: string
  VITE_MIXPANEL_HOST: string
  VITE_MIXPANEL_TOKEN: string
}

declare namespace ImportMeta {
  ImportMetaEnv
}
