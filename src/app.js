import Vue from "vue"
import Button from "./components/Button.vue"
import Icon from "./components/Icon.vue"
import ButtonGroup from "./components/ButtonGroup.vue"

Vue.component('t-button', Button)
Vue.component('t-icon', Icon)
Vue.component('t-button-group', ButtonGroup)



new Vue({
    el:'#app',
    data: {
        flag : false,
    }
})