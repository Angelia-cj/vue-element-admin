import Vue from "vue";

import App from "./App"
import router from "./router";
import store from "./store";

import Element from "element-ui"

Vue.use(Element)

new Vue({
  el: "#app",
  router,
  store,
  render:h=>h(App)
})