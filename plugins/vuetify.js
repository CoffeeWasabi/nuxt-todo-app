import { createVuetify } from "vuetify";
import * as components from "vuetify/components"
import * as directives from "vuetify/directives";

const customTheme = {
    dark: false,
    colors: {
      background: '#E1F5FE',
      surface: '#E1F5FE',
    }
  }

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: "customTheme",
            themes: {
                customTheme,
            }
        }
    });
    nuxtApp.vueApp.use(vuetify);
});