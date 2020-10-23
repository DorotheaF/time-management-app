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
  components: {
    //Task
  },
  data() {
    return {
      newTask: "",
      hideCompleted: false,
      temp: 23
    };
  },
  methods: {
    
  }
};
</script>