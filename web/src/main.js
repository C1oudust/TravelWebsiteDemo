import Vue from 'vue';
import App from './App.vue';
import router from './router';
import fastClick from 'fastclick';
import './styles/reset.css';
import './styles/border.css';
import './styles/iconfont.css';
import 'swiper/css/swiper.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
