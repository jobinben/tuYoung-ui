import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Input from "../../src/components/Input.vue"
import chai from "chai"
import Sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const expect = chai.expect

describe('Input:', () => { // 检测元素

    it('存在.', () => {
        expect(Input).to.be.exist
    })

    describe('Props:', () => { // 检测属性
        
        it('可以设置value.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: 'testValue'
                }
            })
            const tValue = wrapper.props().value
            expect(tValue).to.eq('testValue')
            wrapper.destroy()
        })

        it('可以设置placeholder.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    placeholder: 'testPlaceholder'
                }
            })
            const tPlaceholder = wrapper.props().placeholder
            expect(tPlaceholder).to.eq('testPlaceholder')
            wrapper.destroy()
        })

        it('可以设置error.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: 'testError'
                }
            })
            const tError = wrapper.text()
            expect(tError).to.eq('testError')
            wrapper.destroy()
        })

        it('可以设置success.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    success: 'testSuccess'
                }
            })
            const tSuccess = wrapper.text()
            expect(tSuccess).to.eq('testSuccess')
            wrapper.destroy()
        })

        it('可以设置type.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    type: 'number'
                }
            })
            const tType = wrapper.props().type
            expect(tType).to.eq('number')
            wrapper.destroy()
        })

        it('可以设置disabled.', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: ''
                }
            })
            const tDisabled = wrapper.props().disabled
            expect(tDisabled).to.eq(true)
            wrapper.destroy()
        })

    })


    describe('Events:', () => { // 检测事件
        
        it('可以触发change事件', () => {
            const wrapper = mount(Input, {})
            const vm = wrapper.vm
            const callback = Sinon.fake()
            

            const event = new Event('change') // 创建事件
            vm.$on('change', callback) // 添加监听事件
            const inputElement = vm.$el.querySelector('input') // 找到目标元素
            inputElement.dispatchEvent(event) // 派遣事件，也就是调用事件
            // 事件调用call的断言需要sinon-chai
            expect(callback).to.have.been.calledWith(event)
        })

        it('可以触发input事件', () => {
            const wrapper = mount(Input, {})
            const vm = wrapper.vm
            const callback = Sinon.fake()

            const event = new Event('input') // 创建事件
            vm.$on('input', callback)  // 添加监听事件
            const inputElement = vm.$el.querySelector('input') // 找到目标元素
            inputElement.dispatchEvent(event) // 派遣事件，也就是调用事件
            // 事件调用call的断言需要sinon-chai
            expect(callback).to.have.been.calledWith(event)
        })

        it('可以触发focus事件', () => {
            const wrapper = mount(Input, {})
            const vm = wrapper.vm
            const callback = Sinon.fake()

            const event = new Event('focus') // 创建事件
            vm.$on('focus', callback)  // 添加监听事件
            const inputElement = vm.$el.querySelector('input') // 找到目标元素
            inputElement.dispatchEvent(event) // 派遣事件，也就是调用事件
            // 事件调用call的断言需要sinon-chai
            expect(callback).to.have.been.calledWith(event)
        })

        it('可以触发blur事件', () => {
            const wrapper = mount(Input, {})
            const vm = wrapper.vm
            const callback = Sinon.fake()

            const event = new Event('blur') // 创建事件
            vm.$on('blur', callback)  // 添加监听事件
            const inputElement = vm.$el.querySelector('input') // 找到目标元素
            inputElement.dispatchEvent(event) // 派遣事件，也就是调用事件
            // 事件调用call的断言需要sinon-chai
            expect(callback).to.have.been.calledWith(event)
        })
        
    })




})