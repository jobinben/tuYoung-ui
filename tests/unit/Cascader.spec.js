import Cascader from "../../src/components/cascader/Cascader"
import CascaderItem from "../../src/components/cascader/CascaderItem"
import chai from "chai"
import { mount } from '@vue/test-utils'
const expect = chai.expect

describe('Cascader:', () => { // 检测元素

    it('Cascader 存在.', () => {
        expect(Cascader).to.be.exist
    })

    it(' CascaderItem 存在.', () => {
        expect(CascaderItem).to.be.exist
    })
    // Props 属性未测试
})