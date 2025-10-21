/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION?: string
  readonly VITE_COMMIT_SHA?: string
  readonly VITE_BUILD_NUMBER?: string
  readonly VITE_BUILD_TIMESTAMP?: string
  readonly VITE_AMBIENTE?: string
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
