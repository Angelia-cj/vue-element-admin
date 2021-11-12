/*
 * @description:
 * @version:
 * @Author: changjia
 * @Date: 2021-11-10 16:11:53
 * @LastEditors: changjia
 * @LastEditTime: 2021-11-11 22:29:44
 */
// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App'
import router from './router'
// import store from './store'

import Element from 'element-ui'

createApp(App).use(Element)

createApp(App).config.productionTip = false

createApp(App).use(router)
// createApp(App).use(router).use(store)

/* new Vue({
  el: '#app',
  router, // 注册路由器 ————> 所有组件都可以直接方法2个对象：$router(路由器对象)与$route(当前路由对象)
  // store,
  render: h => h(App)
}) */
