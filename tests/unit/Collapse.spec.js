import { mount } from '@vue/test-utils'
import Collapse from "../../src/components/collapse/Collapse"
import CollapseItem from "../../src/components/collapse/CollapseItem"
import chai from "chai"
import Sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const expect = chai.expect

describe('Collapse:', () => { // 检测元素

    it('Collapse 存在.', () => {
        expect(Collapse).to.be.exist
    })

    it(' CollapseItem 存在.', () => {
        expect(CollapseItem).to.be.exist
    })

    // Props属性未测试

})