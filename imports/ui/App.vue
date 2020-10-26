<template>
    <div class="app">
        <div class="header">
            Time Management App 
            <!-- add text for what component is currently rendered -->
        </div>
        <div class="content">   

            <div class="menu">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link to="/">Main Page</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/currentsession">Current Session</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/calendar">Calendar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/diagnostics">Diagnostics</router-link>
                    </li>
                </ul>
            </div>
                

            <div class="todo">            
              <router-view></router-view>
            </div>      

        </div>           
    </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import Vue from "vue";
import Task from "./Task.vue";
import { Tasks } from "../api/tasks.js";
export default {
  name: 'app',
  components: {
    //Task
  },
  
 
  data() {
    return {
      newTask: "",
      hideCompleted: false,
      temp: 23
    };
  }, //Checkbox for hiding added components starts empty when you first open the website, and the newTask is also set to blank
  methods: {
    
  }
};
</script>


<style>
html {
   height: 100%;
   overflow:hidden;
 }

 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
   background: rgb(101,31,87);
   background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
 }

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>