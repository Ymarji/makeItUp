import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import appLayout from "./components/layout/appLayout";
import { inputTextComp } from "./components/shared";
import buttonComp from "@/components/shared/buttonComp";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBagShopping, faMarker } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnswnxZExLn_-VVFdKThCd-g0a0TFP_Z0",
  authDomain: "vue-make-up.firebaseapp.com",
  projectId: "vue-make-up",
  storageBucket: "vue-make-up.appspot.com",
  messagingSenderId: "782263920471",
  appId: "1:782263920471:web:a797b8b0ceee4184454012",
};

initializeApp(firebaseConfig);
router.beforeEach((to, from, next) => {
  console.log("loggeed", store.state.user.isLogged);
  if (!store.state.user.isLogged && to.meta.requiresAuth) {
    next("/login");
  } else {
    next();
  }
});

library.add(faBagShopping);
library.add(faTrashCan);
library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faMarker);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.component("button-Comp", buttonComp);
Vue.component("app-layout", appLayout);
Vue.component("text-input", inputTextComp);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
