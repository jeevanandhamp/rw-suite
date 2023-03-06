import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import vue3GoogleLogin from 'vue3-google-login';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vue3GoogleLogin, {
  clientId: `34550497836-jbrt8cefhel4dqpsq1shfnv2o9801j0j.apps.googleusercontent.com`
});
app.mount('#app');
