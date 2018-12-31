// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker';
import Vue from 'vue';
import vSelect from 'vue-select';
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css';
import App from './App';
import router from './router';


const datepickerOptions = {};

// make sure we can use it in our components
Vue.use(AirbnbStyleDatepicker, datepickerOptions);
Vue.config.productionTip = false;
Vue.component('v-select', vSelect);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
