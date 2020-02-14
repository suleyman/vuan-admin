import Vue from 'vue'
import router from './router'
import store from './store'
import axios from './api/http'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

Vue.use(Antd);

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
