import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from '@/firebase_config/firebase';
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const messaging = firebase.messaging();

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
