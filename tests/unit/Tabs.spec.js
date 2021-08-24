import { mount } from '@vue/test-utils'
import chai from "chai"
import Sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Tabs from "../../src/components/tabs/tabs"
import TabsBody from "../../src/components/tabs/tabs-body"
import TabsHead from "../../src/components/tabs/tabs-head"
import TabsItem from "../../src/components/tabs/tabs-item"
import TabsPane from "../../src/components/tabs/tabs-pane"
import Vue from '/node_modules/vue/dist/vue.js'


Vue.config.productionTip = false
Vue.config.devtools = false

chai.use(sinonChai)

const expect = chai.expect

describe('Tabs:', () => { // 检测元素

    it('Tabs 存在.', () => {
        expect(Tabs).to.be.exist
    })
    it('TabsBody 存在.', () => {
        expect(TabsBody).to.be.exist
    })
    it('TabsHead 存在.', () => {
        expect(TabsHead).to.be.exist
    })
    it('TabsItem 存在.', () => {
        expect(TabsItem).to.be.exist
    })
    it('TabsPane 存在.', () => {
        expect(TabsPane).to.be.exist
    })

    describe('Props', () => {

        it('Tabs 的 selected 属性.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <t-tabs selected="front">
                <t-tabs-head>
                    <t-tabs-item name="front">前端 </t-tabs-item>
                    <t-tabs-item name="back"> 后端 </t-tabs-item>
                </t-tabs-head>
                 <t-tabs-body>
                    <t-tabs-pane name="front"> 前端路线 </t-tabs-pane>
                 <t-tabs-pane name="back"> 后端战略 </t-tabs-pane>
                 </t-tabs-body>
             </t-tabs>`
            const vm = new Vue({
                el: div,
                components: {
                    TTabs: Tabs,
                    TTabsBody: TabsBody,
                    TTabsHead: TabsHead,
                    TTabsItem: TabsItem,
                    TTabsPane: TabsPane
                }
            })
            setTimeout(()=> {
                let element = vm.$el.querySelector('.tabsItem')
                let className = element.classList.contains('active')
                expect(className).to.be.true
                vm.$el.remove()
                vm.$destroy()
            })
        })

        it('TabsItem 的 name 属性.', () => {
            const wrapper = mount(TabsItem, {
                propsData: {
                    name: 'tab1'
                }
            })
            let tabName = wrapper.attributes('data-name')
            expect(tabName).to.be.eq('tab1')
            wrapper.destroy()
        })
        it('TabsItem 的 disabled 属性.', () => {
            const wrapper = mount(TabsItem, {
                propsData: {
                    name:'tabx',
                    disabled: true
                }
            })
            const callback = Sinon.fake()
            wrapper.vm.$on('click', callback)
            wrapper.vm.$el.click()
            expect(callback).to.have.not.been.called
            wrapper.destroy()
        })

        it('TabsPane 的 name 属性.', () => {
            const wrapper = mount(TabsPane, {
                propsData: {
                    name: 'myname'
                }
            })
            let tabName = wrapper.attributes('data-name')
            expect(tabName).to.be.eq('myname')
        })

    })

})