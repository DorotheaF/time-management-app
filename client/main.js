import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
 
Vue.use(VueMeteorTracker);

 
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.vue';
import MainPage from '../imports/ui/MainPage.vue';
 
Meteor.startup(() => {
  new Vue({
    //route = whatever is in the top bar (or whatever) "www.app.com/xxx"
    //route =  Calender (or Diagnostic or whatever)
    el: '#app',
    //if route = ""
    ...MainPage,
    //if route = calendar 
    // ...Calendar
  });
  new Vue({
    el: '#mainpage',
    ...MainPage,
  })
});