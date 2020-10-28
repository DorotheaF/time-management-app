<template>
  <div className="container">
    <header>
      <h1>To do List ({{ incompleteCount }}) </h1>
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

      <form className="newTask" @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="What Class?"
          v-model="newTask"
        />
       
        <input
          type="text"
          placeholder="Assignment Title"
          v-model="newTask1"
        />
        
       
        <input
          type="text"
          placeholder="Due Date (mm/dd/yyyy)"
          v-model="newTask2"
        />
       
       
        <input
          type="text"
          placeholder="Time estimated to finish (hh:mm)"
          v-model="newTask3"
        />
          <button type="submit" class="btn btn-primary">Submit Task</button>
       
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