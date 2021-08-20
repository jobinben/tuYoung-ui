import Toast from "./Toast"

export default {
    install(Vue, options) {
        
        Vue.prototype.$showToast = function(msg) {
            const Constructor = Vue.extend(Toast)
            const toastComponent = new Constructor()
            toastComponent.$slots.default = [msg]
            toastComponent.$mount()
            document.body.appendChild(toastComponent.$el)


        }

    }
}