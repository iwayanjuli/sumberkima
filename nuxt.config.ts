// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css"
  ],
  plugins: [
    { src: "~/plugins/bootstrap.client", mode: "client" }
  ],
  app: {
    head: {
      title: "Desa Sumberkima",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    }
  }
})
