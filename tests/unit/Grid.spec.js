import Vue from '/node_modules/vue/dist/vue.js'
import { mount } from '@vue/test-utils'
import TRow from "../../src/components/grid/Row"
import TCol from "../../src/components/grid/Column"
import chai from "chai"
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const expect = chai.expect


describe('Grid', () => { // 检测元素
    // BDD 行为驱动测试
    
    it('Row存在.', () => expect(TRow).to.be.exist)
    it('Col存在.', () => expect(TCol).to.be.exist)

    describe('Props Of Row', () => { // 检测 Row 属性
        it('接收 gutter 属性',  () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <t-row gutter="20">
                <t-col span="12"></t-col>
                <t-col span="12"></t-col>
            </t-row> `
            const vm = new Vue({
                el: div,
                components: {
                    TRow,
                    TCol
                }
            })
            
            // 因为测试用例代码执行完同步代码就直接关掉
            // 所以把断言放进异步上
            setTimeout(()=> {
                const row = vm.$el.querySelector('.row')
                let marginLeft = getComputedStyle(row).marginLeft
                let marginRight = getComputedStyle(row).marginRight
                expect(marginLeft).to.eq('-10px')
                expect(marginRight).to.eq('-10px')

                const col = vm.$el.querySelector('.col')
                let paddingLeft = getComputedStyle(col).paddingLeft
                let paddingRight = getComputedStyle(col).paddingRight
                expect(paddingLeft).to.eq('10px')
                expect(paddingRight).to.eq('10px')
                div.remove()
                vm.$destroy()
            }, 0)
        })

        it('接收 align 属性', () => { // css样式无法测试，只能测试内联样式就是在标签上的style
           
            // const div = document.createElement('div')
            // document.body.appendChild(div)
            // const wrapper = mount(TRow, {
            //     propsData: {
            //         align: 'center'
            //     }
            // })
            // const element = wrapper.find('.row').element
            // console.log((element))

            // 测试内联即可
            const wrapper = mount(TRow, {
                propsData: {
                    align: 'center'
                }
            })
           
            const element = wrapper.classes()
            expect(element[1]).to.be.eq('align-center')
            wrapper.destroy()
        })

    })

    describe('Props Of Row', () => { // 检测 Col属性
        // <t-col span="24" :ipad="{span: 12}" :narrowPc="{span: 8}">
        let createWrapper = (equipment, span=1, offset=2) => {
            let wrapper = mount(TCol, {
                 propsData: {
                     [equipment]: {
                         span: span,
                         offset: offset
                     }
                 }
             })
             const elementClass = wrapper.classes()
             expect(elementClass[1]).to.be.eq(`col-${equipment}-${span}`)
             expect(elementClass[2]).to.be.eq(`offset-${equipment}-${offset}`)
             wrapper.destroy()
         }

        it('接收 span/offset 属性', () => {
           let wrapper = mount(TCol, {
                propsData:{
                    span: '12',
                    offset: '2'
                }
            })
            const elementClass = wrapper.classes()
            expect(elementClass[1]).to.be.eq('col-12')
            expect(elementClass[2]).to.be.eq('offset-2')
            wrapper.destroy()
        })

        it('接收 ipad 属性',() => createWrapper('ipad', 12, 2))
        it('接收 narrowPc 属性',() => createWrapper('narrowPc', 4, 2))
        it('接收 pc 属性',() => createWrapper('pc', 4, 3))
        it('接收 widePc 属性',() => createWrapper('widePc', 10, 5))

    })




})