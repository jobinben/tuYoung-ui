import Toast from "./Toast"

export default {
    install(Vue, options) {

        Vue.prototype.$showToast = function (Obj) {
            const Constructor = Vue.extend(Toast)
            const toastComponent = new Constructor({
                propsData: Obj
            })
            toastComponent.$slots.default = [Obj.title]
            toastComponent.$mount()
            document.body.appendChild(toastComponent.$el)


        }

    }
}