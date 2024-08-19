import 'vuetify/styles'
import '../assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

export default createVuetify({
    icons: {
        defaultSet: 'mdi',
      },
    components,
    directives,
  })