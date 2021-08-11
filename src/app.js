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
// 单元测试 (1) t-button的icon属性
{
    const Construtor = Vue.extend(Button)
    const vm = new Construtor({
        propsData: { //该属性可以传入button组件的属性
            icon: 'settings'
        }
    })

    // button.$mount('#test') //挂载dom上测试
    vm.$mount() // 非css测试可以挂载内存测试

    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')

    // 测试完后销毁button
    vm.$el.remove()
    vm.$destroy()
}
// 单元测试 (2) t-button的loading属性
{
    const Construtor = Vue.extend(Button)
    const vm = new Construtor({
        propsData: { //该属性可以传入button组件的属性
            icon: 'settings',
            loading: true
        }
    })

    vm.$mount() //挂载在内存中测试
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    // 测试完后销毁button
    vm.$el.remove()
    vm.$destroy()
}

// 单元测试 (3) t-button的iconPosition属性
{
    // 测试css需要创建div挂载测试 因为css需要挂载了才能触发
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Construtor = Vue.extend(Button)
    const vm = new Construtor({
        propsData: {
            icon: 'settings',
        }
    })

    vm.$mount(div)

    let svg = vm.$el.querySelector('svg')
    // let order = window.getComputedStyle('svg').order
    let {order} = window.getComputedStyle(svg)

    expect(order).to.eq('1')
    
    // 测试完后销毁button
    vm.$el.remove()
    vm.$destroy()
}

// 单元测试 (4) t-button的iconPosition属性
{
    // 测试css需要创建div挂载测试 因为css需要挂载了才能触发
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Construtor = Vue.extend(Button)
    const vm = new Construtor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })

    vm.$mount(div)

    let svg = vm.$el.querySelector('svg')
    // let order = window.getComputedStyle('svg').order
    let {order} = window.getComputedStyle(svg)

    expect(order).to.eq('2')
    
    // 测试完后销毁button
    vm.$el.remove()
    vm.$destroy()
}


// 单元测试 (5) t-button的click点击事件
{
    

    const Construtor = Vue.extend(Button)
    const vm = new Construtor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })

    vm.$mount()
    vm.$on('click', function() {
        // 可以被点击就会触发此次
        console.log('可以被点击')
        expect(1).to.eq(1)  // 错误写法的测试
    })
    // 希望button可以被点击
    let button = vm.$el
    button.click()
  
}