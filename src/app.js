// import Vue from 'vue';
// import App from './App.vue';
// var app = new Vue({
//     el: '#app',
//     components: {
//         App
//     }
// });

// const Vue = require('vue');
// const App = require('./App.vue').default;
import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';

export default function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router };
}
