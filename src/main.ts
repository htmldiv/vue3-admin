import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router';

const app = createApp(App)
app.use(Vant)
  .use(ElementPlus)
  .use(router)
  .mount('#app')


