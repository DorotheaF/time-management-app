<template>
    <div class="mainpage">
        <div class="header">
            Main Page
        </div>
        <div class="content">   

            <div class="menu">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="">Main Page</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="CurrentSession">Current Session</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Calendar">Calendar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Diagnostics">Diagnostics</a>
                    </li>
                </ul>
            </div>
                

            <div class="todo">            
                <header>
                <h1>Todo List ({{ incompleteCount }}) </h1>
                <label class="hide-completed">
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

                <form class="new-task" @submit.prevent="handleSubmit">
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
