import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Input from "../../src/components/Input.vue"
import chai from "chai"
import Sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const expect = chai.expect

describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.be.exist
    })

    it('可以设置value.', () => {
        const wrapper = mount(Input, {
            propsData: {
               value: 'testValue'
            }
        })
        const tValue = wrapper.props().value
        expect(tValue).to.eq('testValue')
    })

    it('可以设置placeholder.', () => {
        const wrapper = mount(Input, {
            propsData: {
                placeholder: 'testPlaceholder'
            }
        })
        const tPlaceholder = wrapper.props().placeholder
        expect(tPlaceholder).to.eq('testPlaceholder')
    })

    it('可以设置error.', () => {
        const wrapper = mount(Input, {
            propsData: {
                error: 'testError'
            }
        })
        const tError = wrapper.text()
        expect(tError).to.eq('testError')
    })

    it('可以设置success.', () => {
        const wrapper = mount(Input, {
            propsData: {
                success: 'testSuccess'
            }
        })
        const tSuccess = wrapper.text()
        expect(tSuccess).to.eq('testSuccess')
    })

    it('可以设置type.', () => {
        const wrapper = mount(Input, {
            propsData: {
                type: 'number'
            }
        })
        const tType = wrapper.props().type
        expect(tType).to.eq('number')
    })

    it('可以设置disabled.', () => {
        const wrapper = mount(Input, {
            propsData: {
                disabled: ''
            }
        })
        const tDisabled = wrapper.props().disabled
        expect(tDisabled).to.eq(true)
    })

   

})