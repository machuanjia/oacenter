// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import i18n from 'i18n'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  i18n,
  beforeCreate: function () {
    this.$i18n.locale = 'en-us'
  },
  created: function () {
    console.log('调用了created钩子函数')
  },
  beforeMount: function () {
    console.log('调用了beforeMount钩子函数')
  },
  mounted: function () {
    console.log('调用了mounted钩子函数')
  }
})
