import { registerMicroApps, start } from "qiankun";
import "./mainStore";
const getActiveRule = (hash) => (location) => {
  return location.hash.startsWith(hash);
};
registerMicroApps([
  {
    name: "micro",
    entry: "//localhost:3001",
    container: "#app",
    // activeRule: /main/micro1,
    activeRule: getActiveRule("#/main/micro1"),
  },
  {
    name: "micro2",
    entry: "//localhost:3002",
    container: "#app",
    activeRule: "/main/micro2",
  },
]);
start();
import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "/main/*",
          name: "Main",
          component: Home,
        },
      ],
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#root-app");
