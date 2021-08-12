import Vue from 'vue'
import Button from "../src/components/Button"
import chai from "chai"
import Sinon from 'sinon'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    // BDD 行为驱动测试

    it('存在.', () => {
        expect(Button).to.be.exist
    })

    it('可以设置icon.', () => {
        const Construtor = Vue.extend(Button)
        const vm = new Construtor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.equal('#i-settings')
        vm.$destroy()
    })

    it('可以设置loading.', () => {
        const Construtor = Vue.extend(Button)
        const vm = new Construtor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$destroy()
    })

    it('icon 默认 order is 1.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)

        const Construtor = Vue.extend(Button)
        const vm = new Construtor({
            propsData: {
                icon: 'settings',
            }
        }).$mount(div)

        let svg = vm.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)

        expect(order).to.eq('1')
        // 测试完后销毁div
        vm.$el.remove()
        vm.$destroy()
    })

    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)

        const Construtor = Vue.extend(Button)
        const vm = new Construtor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div)

        let svg = vm.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)

        expect(order).to.eq('2')
        // 测试完后销毁div
        vm.$el.remove()
        vm.$destroy()
    })

    it('点击 t-button 触发 click事件', () => {
       
        const Construtor = Vue.extend(Button)
        const vm = new Construtor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()

        const callback = Sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
        
    })




})