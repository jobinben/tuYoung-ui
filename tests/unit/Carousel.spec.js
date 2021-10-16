import { mount } from '@vue/test-utils'
import Carousel from "../../src/components/carousel/Carousel"
import CarouselItem from "../../src/components/carousel/CarouselItem"
import chai from "chai"
import Sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'

chai.use(sinonChai)

const expect = chai.expect

describe('轮播图 Carousel.', () => {

    it('Carousel 存在.', () => {
        expect(Carousel).to.be.exist
    })

    it('CarouselItem 存在.', () => {
        expect(CarouselItem).to.be.exist
    })

    it('renders two CarouselItem.', () => {

        Vue.component('TCarouselItem', CarouselItem)
        const wrapper = mount(Carousel, {
            propsData: {
                selected: 'b',
            },
            slots: {
                default: `
                        <t-carousel-item name = 'a'>
                            <div class="box1">1</div>
                        </t-carousel-item>
                        
                        <t-carousel-item name = 'b'>
                            <div class="box2">2</div>
                        </t-carousel-item>
                        `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box2').isVisible()).to.equal(true)
        }, 100)

    })

})