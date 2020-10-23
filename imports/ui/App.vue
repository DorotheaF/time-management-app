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
    Task
  },
  data() {
    return {
      newTask: "",
      hideCompleted: false,
      temp: 23
    };
  },
  methods: {
    handleSubmit(event) {
      Tasks.insert({
        text: this.newTask,
        createdAt: new Date(), // current time
      });
 
      // Clear form
      this.newTask = "";
    },
    toggleHideCompleted() {
      this.hideCompleted = !this.hideCompleted;
    }
  },
  meteor: {
    tasks() {
      let filteredTasks = Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
      if (this.hideCompleted) {
        filteredTasks = filteredTasks.filter(task => !task.checked);
      }
      return filteredTasks;
    },
    incompleteCount() {
      return Tasks.find({ checked: { $ne: true } }).count();
    }
  }
};
</script>