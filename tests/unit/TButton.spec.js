import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Button from "../../src/components/button/Button"
import chai from "chai"
import Sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const expect = chai.expect


describe('Button', () => {
    // BDD 行为驱动测试

    it('存在.', () => {
        expect(Button).to.be.exist
    })

    it('可以设置icon.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            }
        })
        const vm = wrapper.vm
        const useElement = vm.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.equal('#i-settings')
        vm.$destroy()
    })

    it('可以设置loading.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        const vm = wrapper.vm

        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$destroy()
    })

    xit('icon 默认 order is 1.', () => {
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

    xit('设置 iconPosition 可以改变 order', () => {
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
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            }
        })
        const vm = wrapper.vm
        const callback = Sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        // 事件调用call的断言需要sinon-chai
        expect(callback).to.have.been.called
        wrapper.destroy()

    })

    it('可以设置 type 属性', () => {
        const wrapper = mount(Button, {
            propsData: {
                type: 'success'
            }
        })
        const btype = wrapper.props().type
        expect(btype).to.eq('success')
        wrapper.destroy()
    })



})