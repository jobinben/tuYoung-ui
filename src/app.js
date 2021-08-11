import Vue from "vue"
import Button from "./components/Button.vue"
import Icon from "./components/Icon.vue"

Vue.component('t-button', Button)
Vue.component('t-icon', Icon)



new Vue({
    el:'#app',
    data: {
        flag : false,
    }
})