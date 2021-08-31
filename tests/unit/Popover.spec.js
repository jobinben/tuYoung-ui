import { mount } from '@vue/test-utils'
import Popover from "../../src/components/popover/Popover"
import chai from "chai"
import Sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const expect = chai.expect

describe('Popover:', () => { // 检测元素

    it('存在.', () => {
        expect(Popover).to.be.exist
    })


    // | 名称 | 类型 | 可选值 | 默认值 | 说明 |
    // | --- | --- | --- |  --- | --- |
    // | position | `string`| `top` \| `bottom` \| `left` \| `right`| `top`  | popover 的弹出位置 |
    // | trigger | `string` |`click` \| `hover` | `click` | popover 的触发方式 |

    describe('Props', () => {
        it('可设置 position 属性.', () => {
            const wrapper = mount(Popover, {
                slots: {
                    default: {
                        template: `<button>点击我</button>`
                    },
                    content: '<div>弹出内容</div>'
                },

                propsData: {
                    position: 'bottom'
                }
            })
            wrapper.find('button').trigger('click')
            setTimeout(() => {
                let classes = wrapper.find('.content-wrapper').classes()
                expect(classes).to.include('position-bottom')
            })
        })

        it('可设置 trigger 属性.', () => {
            const wrapper = mount(Popover, {
                slots: {
                    default: {
                        template: `<button>点击我</button>`
                    },
                    content: '<div>弹出内容</div>'
                },

                propsData: {
                    position: 'bottom',
                    trigger: 'hover'
                }
            })
            wrapper.find('.popover').trigger('mouseenter')
            setTimeout(() => {
                let elements = wrapper.find('.content-wrapper').element
                expect(elements).to.exist
                wrapper.destroy()
            })

        })



    })

})