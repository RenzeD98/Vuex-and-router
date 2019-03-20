import Vue from 'vue'

import router from './router.js'
import store from './store.js'

import App from './App.vue'

require('./bootstrap');

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');