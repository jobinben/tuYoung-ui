import Button from "./src/components/button/Button"
import ButtonGroup from "./src/components/button/ButtonGroup"
import Collapse from "./src/components/collapse/Collapse"
import CollapseItem from "./src/components/collapse/CollapseItem"
import Column from "./src/components/grid/Column"
import Row from "./src/components/grid/Row"
import Icon from "./src/components/icon/Icon"
import Input from "./src/components/input/Input"
import Layout from "./src/components/layout/Layout"
import Header from "./src/components/layout/Header"
import Content from "./src/components/layout/Content"
import Footer from "./src/components/layout/Footer"
import Sider from "./src/components/layout/Sider"
import Popover from "./src/components/popover/Popover"
import Tabs from "./src/components/tabs/tabs"
import TabsHead from "./src/components/tabs/tabs-head"
import TabsBody from "./src/components/tabs/tabs-body"
import TabsItem from "./src/components/tabs/tabs-item"
import TabsPane from "./src/components/tabs/tabs-pane"
import ToastPlugin from "./src/components/toast/toastPlugin"
import Cascader from "./src/components/cascader/Cascader"
import Carousel from "./src/components/carousel/Carousel"
import CarouselItem from "./src/components/carousel/CarouselItem"
const components = [
    Button,
    ButtonGroup,
    Collapse,
    CollapseItem,
    Column,
    Row,
    Icon,
    Input,
    Layout,
    Header,
    Content,
    Footer,
    Sider,
    Popover,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Cascader,
    Carousel,
    CarouselItem
]

const install = function (Vue, opt = {}) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
    Vue.use(ToastPlugin)
}


components.forEach(component => {
    component.install = (Vue, opt) => {
        Vue.component(component.name, component)
    }
})

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default install

export {
    Button,
    ButtonGroup,
    Collapse,
    CollapseItem,
    Column,
    Row,
    Icon,
    Input,
    Layout,
    Header,
    Content,
    Footer,
    Sider,
    Popover,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    ToastPlugin,
    Cascader,
    Carousel,
    CarouselItem,
}