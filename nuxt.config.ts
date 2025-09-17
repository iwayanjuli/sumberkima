export default defineNuxtConfig({
  devtools: { enabled: true },

    css: ["bootstrap/dist/css/bootstrap.min.css"],

  // postcss: {
  //   plugins: {
  //     "@tailwindcss/postcss": {},   // ✅ gunakan plugin baru
  //     autoprefixer: {},
  //   },
  // },

  routeRules: {
    "/": { prerender: true },
  },
})
