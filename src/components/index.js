import KyyHeader        from './header/header.vue'
const components = [
  KyyHeader,
]
export  default {
  install(Vue){
    components.map(component => {
      Vue.component(component.name, function (resolve) {
        setTimeout(function () {
          // Pass the component definition to the resolve callback
          resolve(component)
        }, 0)
      });
    })
  }
}
