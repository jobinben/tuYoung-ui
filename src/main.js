import Vue from 'vue'
import Test from './test.vue'
// // import Button from './components/Button.vue'
// import Icon from './components/icon/Icon.vue'
// console.log(Icon.name)
// // import ButtonGroup from './components/ButtonGroup.vue'

// // Vue.component('t-button', Button)
// Vue.component(Icon.name, Icon)
// // Vue.component('t-button-group', ButtonGroup)

// import ToastPlugin from "./components/toast/toastPlugin"
// Vue.use(ToastPlugin)
import {Button} from "../index"

Vue.component(Button.name, Button)

Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({

  render: function (h) { return h(Test) },
}).$mount('#app')
