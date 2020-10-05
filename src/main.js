// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB4SZ6gT2aAO1EAs4Aw0FNMGm32IFgwxN8',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  VueGoogleMaps,
  components: { App },
  template: '<App/>'
});
