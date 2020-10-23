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

    <ul>
      <Task v-for="(task, index) in tasks" v-bind:key="task._id" v-bind:task="task" v-bind:yello="index+1"/>
    </ul>

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
    Task
  },
  
 
  data() {
    return {
      newTask: "",
      hideCompleted: false,
      temp: 23
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