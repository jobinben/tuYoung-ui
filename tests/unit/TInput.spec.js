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

        let wrapper
        // mocha的hook函数 runs before each test in this block
        beforeEach( () => {
            wrapper = mount(Input, {
                propsData: {
                    value: 'testValue',
                    placeholder: 'testPlaceholder',
                    error: 'testError',
                    success: 'testSuccess',
                    type: 'number',
                    disabled: ''
                }
            })
        })
        // runs after each test in this block
        afterEach( () => {
            wrapper.destroy()
        })

        it('可以设置value.', () => {
            const tValue = wrapper.props().value
            expect(tValue).to.eq('testValue')
        })

        it('可以设置placeholder.', () => {
            const tPlaceholder = wrapper.props().placeholder
            expect(tPlaceholder).to.eq('testPlaceholder')
        })

        it('可以设置error.', () => {
            const tError = wrapper.props().error
            expect(tError).to.eq('testError')
        })

        it('可以设置success.', () => {
            const tSuccess = wrapper.props().success
            expect(tSuccess).to.eq('testSuccess')
        })

        it('可以设置type.', () => {
            const tType = wrapper.props().type
            expect(tType).to.eq('number')
        })

        it('可以设置disabled.', () => {
            const tDisabled = wrapper.props().disabled
            expect(tDisabled).to.eq(true)
        })

    })


    describe('Events:', () => { // 检测事件
        const wrapper = mount(Input, {}).vm
        // mocha提供的hook函数, 每一个test的测试好之后运行
        afterEach( () => {
            wrapper.$destroy()
        })
        // 优化测试用例
        it('支持 change/focus/blur 事件.', () => {   
            let eventList = ['change', 'focus', 'blur']
            eventList.forEach( eventName => {
                const callback = Sinon.fake()

                const event = new Event(eventName) // 创建事件
                wrapper.$on(eventName, callback) // 添加监听事件
                const inputElement = wrapper.$el.querySelector('input') // 找到目标元素
                inputElement.dispatchEvent(event) // 派遣事件，也就是调用事件
                // 事件调用call的断言需要sinon-chai
                expect(callback).to.have.been.calledWith(event)
            })
            
        })

        it('支持 input 事件 且支持 v-model双向绑定.', () => {   
            let eventList = ['input']
            eventList.forEach( eventName => {
                const callback = Sinon.fake()
                const event = new Event(eventName) // 创建事件
                // event的target属性是只读的，把它设置为可读
                Object.defineProperty(event, 'target', {
                    value: {
                        value: 'helloWorld'
                    },
                    enumerable: true
                })
                wrapper.$on(eventName, callback) // 添加监听事件
                const inputElement = wrapper.$el.querySelector('input') // 找到目标元素
                inputElement.dispatchEvent(event) // 派遣事件，也就是调用事件
                // 事件调用call的断言需要sinon-chai
                expect(callback).to.have.been.calledWith('helloWorld')
            })
            
        })
        
    })




})