import Vue from 'vue'
import Bulma from 'bulma'
import 'bulma/css/bulma.css'
Vue.use(Bulma)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
