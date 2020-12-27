import Vue from 'vue'

import siteHeader from '~/components/layout/Header.vue'
import siteFooter from '~/components/layout/Footer.vue'

Vue.mixin(
  {
    components: {
      siteHeader,
      siteFooter,
    }
  }
)