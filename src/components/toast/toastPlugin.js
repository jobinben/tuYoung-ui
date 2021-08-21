import Toast from "./Toast"

/**
 * 
 * @param {Vue} Vue 
 * @param {'object'} propsData 
 * @returns toast本身
 */
function createToast(Vue, propsData) {
    const Constructor = Vue.extend(Toast)
    const toastComponent = new Constructor({ propsData })
    toastComponent.$slots.default = [propsData.title]
    toastComponent.$mount()
    document.body.appendChild(toastComponent.$el)
    return toastComponent
}

let hasToast
export default {
    install(Vue, options) {

        Vue.prototype.$showToast = function (Obj) {

            hasToast && hasToast.close()
            hasToast = createToast(Vue, Obj)

        }

    }
}