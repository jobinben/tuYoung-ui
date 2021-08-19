import Vue from 'vue'
import App from './App.vue'
// import Button from './components/Button.vue'
import Icon from './components/icon/Icon.vue'
// import ButtonGroup from './components/ButtonGroup.vue'

// Vue.component('t-button', Button)
Vue.component('t-icon', Icon)
// Vue.component('t-button-group', ButtonGroup)

import Index from "./index.vue"



Vue.config.productionTip = false

new Vue({
  
  render: function (h) { return h(App) },
}).$mount('#app')
