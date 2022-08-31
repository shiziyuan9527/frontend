import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'element-ui/lib/theme-chalk/index.css';
import {createPinia, PiniaVuePlugin} from 'pinia'
import PersistedState from 'pinia-plugin-persistedstate'
Vue.config.productionTip = false

const pinia = createPinia()
pinia.use(PersistedState)
Vue.use(pinia)
Vue.use(PiniaVuePlugin)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

new Vue({
  pinia,
  render: h => h(App),
}).$mount('#app')
