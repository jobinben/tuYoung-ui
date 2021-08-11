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

// 单元测试需要的库

import chai from "chai"

const expect = chai.expect
// 单元测试
{
    const Construtor = Vue.extend(Button)
    const button = new Construtor({
        propsData: { //该属性可以传入button组件的属性
            icon: 'settings'
        }
    })

    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
}