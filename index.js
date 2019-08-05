export default {
  install(Vue, options) {
    const requireComponent = require.context(
      '~/components',
      false,
      /[\w-]+\.vue$/
    )

    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = fileName.replace(/(^\.\/|\.\w+$)/g, '')
      Vue.component(componentName, componentConfig.default || componentConfig)
    })
  }
}
