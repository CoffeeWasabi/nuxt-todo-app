// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "vuetify/lib/styles/main.sass",
        "mdi/css/materialdesignicons.min.css",
        "@/assets/css/style.css"],
      build: {
        transpile: ["vuetify"],
      },
      modules: ["@pinia/nuxt"],
      vite: {
        define: {
          "process.env.DEBUG": false,
        },
      }
})