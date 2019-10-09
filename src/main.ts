import Vue, { PluginObject } from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import Antd, { Form, Input, Radio } from "ant-design-vue";
Vue.config.productionTip = false;

// TODO: Individualize imports
Vue.use(Antd);
// const components: PluginObject<any>[] = [Form, Input, Radio];
// components.forEach(x => Vue.use(x));

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
