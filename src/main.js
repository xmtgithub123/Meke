// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueRouter from 'vue-router'

import {sync } from 'vuex-router-sync'
import * as filters from './filters'
import components from './components/' //加载公共组件
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload/vue-lazyload'
import moment from 'moment'
import VueScroller from 'vue-scroller'
import { scrollRecord } from './lib/route-data/index.js'
// import VueStar from 'vue-star'
// import 'moment/locale/Zh-cn.js'
import 'element-ui/lib/theme-default/index.css'
sync(store,router)


import ElementUI from 'element-ui'
import 'normalize.css'
import 'animate.css'
import '@/css/common.css'
import '@/less/common.less'
import '@/less/fonts.less'
import '@/less/element.less'
import 'flex.css'


import error from './assets/error1.png'
import loading from './assets/loadinga.gif'


//自定义组件


Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})
Vue.use(VueLazyload, {
	error:error,
	loading:loading,
	attempt:1
})
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueScroller)
Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.directive('scroll-record',scrollRecord)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
