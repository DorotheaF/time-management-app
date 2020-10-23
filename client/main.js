import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker'; 
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.vue';
import router from './routes'

// Create router instance

Meteor.startup(() => {
  Vue.use(VueMeteorTracker)
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');
});
 
//Meteor.startup(() => {
  
  //new Vue({
    //route = whatever is in the top bar (or whatever) "www.app.com/xxx"
    //route =  Calender (or Diagnostic or whatever)
    //el: '#app',
    //if route = ""
    //...MainPage,
    //if route = calendar 
    // ...Calendar
  
  //});
//});