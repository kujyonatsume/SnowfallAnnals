import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },
  tailwindcss: {
    viewer: false,
    cssPath: "~/assets/scss/tailwind.scss",
  },
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
          },
        },
      },
    },
  },
  appConfig: {
  },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-twemoji",
  ],
  app: {
    head: {
      title: "VTuber Project",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#111827" },
        {
          name: "description",
          content: "VTuber 企劃：檔期、剪輯、關於與贊助合作",
        },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
