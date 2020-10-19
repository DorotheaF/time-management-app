<template>
  <div className="container">
    <header>
      <h1>Todo List ({{ incompleteCount }}) </h1>
       <label className="hide-completed">
        <input
          type="checkbox"
          readOnly
          checked="hideCompleted"
          v-model="hideCompleted"
          @click="toggleHideCompleted"
        />
        Hide Completed Tasks
      </label>

      <!-- <blaze-template template="loginButtons" tag="span"></blaze-template> -->

      <form className="new-task" @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Type to add new tasks"
          v-model="newTask"
        />
      </form>
      
    </header>
    <div id="app">
      <Calendar />
    </div>
    <ul>
      <Task v-for="task in tasks" v-bind:key="task._id" v-bind:task="task" />
    </ul>
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
      hideCompleted: false
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