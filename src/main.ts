import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles' // Global CSS has to be imported
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import router from "./router";

loadFonts()

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',           
    },
    theme: {
        defaultTheme: 'dark',
    }
})

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')