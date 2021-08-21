import { mount } from '@vue/test-utils'
import Toast from "../../src/components/toast/Toast"
import chai from "chai"
import Sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const expect = chai.expect

describe('Toast:', () => { // 检测元素

    it('存在.', () => {
        expect(Toast).to.be.exist
    })

    describe('Props', () => {

        it('接收 showClose/closeText 属性.', (done) => {
            let wrapper = mount(Toast, {
                propsData: {
                    showClose: true,
                    closeText: 'off'
                }
            })

            expect(wrapper.find('.toastClose').text()).to.be.eq('off')
            setTimeout(() => {
                wrapper.destroy()
                done()
            })
        })

        it('接收 autoClose 属性.', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const wrapper = mount(Toast,{
                propsData: {
                    autoClose: true
                }
            }).vm.$mount(div)
            wrapper.$on('beforeClose', () => {
                expect(document.body.contains(wrapper.$el)).to.be.eq(false)
                wrapper.$el.remove()
                wrapper.$destroy()
                done()
            })

        })

        it('接收 duration 属性.', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const wrapper = mount(Toast,{
                propsData: {
                    duration: 1000
                }
            }).vm.$mount(div)
            setTimeout(() => {
                expect(document.body.contains(wrapper.$el)).to.be.eq(false)
                wrapper.$el.remove()
                wrapper.$destroy()
                done()
            }, 1100)

        })


        it('接收 position 属性.', () => {
            let wrapper = mount(Toast, {
                propsData: {
                    position: 'bottom'
                }
            })
            expect(wrapper.classes()[1]).to.be.eq('position-bottom')
            wrapper.destroy()
        })

        it('接收关闭回调 callback.', (done) => {
            const callback = Sinon.fake()
            let wrapper = mount(Toast,{
                propsData: {
                    showClose: true,
                    callback
                }
            })
            let closeBtn = wrapper.vm.$el.querySelector('.toastClose')
            setTimeout(() => {
                closeBtn.click()
                expect(callback).to.have.been.called
                wrapper.destroy()
                done()
            }, 0);
        })

    })

})