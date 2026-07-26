/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: "ai" | "fullstack" | "development" | "production" | string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
