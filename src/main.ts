import { createApp } from 'vue';
import { useElementPlus } from "../src/plugins/element-plus";
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router';

const app = createApp(App)
app.use(Vant)
  .use(useElementPlus)
  .use(router)
  .mount('#app')


