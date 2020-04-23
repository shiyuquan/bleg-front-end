import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import { Constant } from "@/shared/constant";

// 声明全局方法
declare module "vue/types/vue" {
  interface Vue {
    /* eslint-disable */
    $constant: any;
  }
}

Vue.config.productionTip = false;
Vue.prototype.$constant = new Constant();
Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
