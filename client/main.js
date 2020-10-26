import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker'; 
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.vue';
import router from './routes'


Meteor.startup(() => {
  
  Vue.use(VueMeteorTracker)
  
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');
  
});
