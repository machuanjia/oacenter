import Vue from 'vue'
import Setup from './setup.vue'
import i18n from 'i18n'
import iView from 'iview'
import 'register'
import 'iview/dist/styles/iview.css'
import bodyParser from 'body-parser'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(bodyParser)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#setup',
  template: '<Setup/>',
  components: { Setup },
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
