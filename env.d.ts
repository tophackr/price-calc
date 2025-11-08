interface ImportMetaEnv {
  VITE_TITLE: string
  VITE_DESCRIPTION: string
  VITE_CROWDIN_LINK: string
}

declare namespace ImportMeta {
  ImportMetaEnv
}
