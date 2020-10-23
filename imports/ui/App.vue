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
import Calendar from "./calendarstuff/Calendar.vue";
 
export default {
  components: {
    Task, 
    Calendar
    
  },
  data() {
    return {
      newTask: "",
      hideCompleted: false,
      temp: 23,

    };
  }, //Checkbox for hiding added components starts empty when you first open the website, and the newTask is also set to blank
  methods: {
    handleSubmit(event) {
      Tasks.insert({
        text: this.newTask,
        createdAt: new Date(), // current time
      }); 
 
      // Clear form
      this.newTask = "";
    }, //This takes a submission to newTask, assigns it to Tasks, and associates the time it was created, and then allows you to put another newTask in
    toggleHideCompleted() {
      this.hideCompleted = !this.hideCompleted;
    } // When you change the Completed tasks checkmark, it changes from true to false or from false to true
  },
  meteor: {
    tasks() {
      let filteredTasks = Tasks.find({}, { sort: { createdAt: -1 } }).fetch(); //takes tasks, and sorts them in the order that they were created
      if (this.hideCompleted) {
        filteredTasks = filteredTasks.filter(task => !task.checked);
      } //If hideCompleted is true, it only filters tasks that are not checked
      return filteredTasks;
    },
    incompleteCount() {
      return Tasks.find({ checked: { $ne: true } }).count();
    } //How many tasks are not checked
  }
};
</script>