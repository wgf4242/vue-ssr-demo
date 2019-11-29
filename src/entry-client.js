const {createApp} = require('./app');

const { app, router } = createApp();

router.onReady(() => {
  app.$mount('#app');
});
