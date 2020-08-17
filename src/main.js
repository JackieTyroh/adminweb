import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFirestore);

let app = '';

const firebaseConfig = {
  apiKey: "AIzaSyBF5UfT_6jf92AIh4cXTmix7FJIx8eIpMI",
  authDomain: "fishing1-929bb.firebaseapp.com",
  databaseURL: "https://fishing1-929bb.firebaseio.com",
  projectId: "fishing1-929bb",
  storageBucket: "fishing1-929bb.appspot.com",
  messagingSenderId: "68554026217",
  appId: "1:68554026217:web:231794d70a8f582327d478",
  measurementId: "G-Q9VY86MGQ5"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyBF5UfT_6jf92AIh4cXTmix7FJIx8eIpMI",
//   authDomain: "fishing1-929bb.firebaseapp.com",
//   databaseURL: "https://fishing1-929bb.firebaseio.com",
//   projectId: "fishing1-929bb",
//   storageBucket: "fishing1-929bb.appspot.com",
//   messagingSenderId: "68554026217",
//   appId: "1:68554026217:web:231794d70a8f582327d478",
//   measurementId: "G-Q9VY86MGQ5"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(()=>{
  if (!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
