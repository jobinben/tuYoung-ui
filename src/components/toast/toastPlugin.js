import Toast from "./Toast"

/**
 * 
 * @param {Vue} Vue 
 * @param {'object'} propsData 
 * @returns toast本身
 */
function createToast(Vue, propsData, onClose) {
    const Constructor = Vue.extend(Toast)
    const toastComponent = new Constructor({ propsData })
    toastComponent.$slots.default = [propsData.title]
    toastComponent.$mount()
    toastComponent.$on('beforeClose', onClose) // 防止重复close
    document.body.appendChild(toastComponent.$el)
    return toastComponent
}

let currentToast
export default {
    install(Vue, options) {

        Vue.prototype.$showToast = function (Obj) {

            currentToast && currentToast.close()
            
            currentToast = createToast(Vue, Obj, () => currentToast = null)

        }

    }
}