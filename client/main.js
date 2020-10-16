import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
 
Vue.use(VueMeteorTracker);

 
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.vue';
import MainPage from '../imports/ui/MainPage.vue';
 
Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
  new Vue2({
    el: '#mainpage',
    ...MainPage,
  })
});