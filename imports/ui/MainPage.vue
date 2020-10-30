<template>
  <div class="content">
    <div class="column">
      <div class="priorities">
        <div class="title">
          Priorities
        </div>
        <ul class="task-list" >
          <Task v-for="(task, index) in prioritiesTaskList" v-bind:key="index" v-bind:task="task" v-bind:index="index+1"/>
        </ul>
      </div>
      <div class="new-task">
        <button class="new-task-button" @click="$router.push('/newTask')">
          +
        </button>
        <div>
          Add a task
        </div>
      </div>
    </div>
    <div class="column">
      <div class="mini-calendar-tray">
        Calendar
        <div class="mini-calendar">
          <div class="cal-column">
            Monday
            <div class="line" />
            <div class="cal-item"> Test Task 1 </div> <!-- TODO: Make these responsive-->
            <div class="cal-item"> Test Task 2 </div>
          </div>
          <div class="cal-column">
            Tuesday
            <div class="line" />
          </div>
          <div class="cal-column">
            Wednesday
            <div class="line" />
            <div class="cal-item"> Test Task 3 </div>
          </div>
        </div>
        
      </div>
      <div class="classes-tray">
        Class List
        <div class="classes">
          <div class="class-item"> Subject 1 </div>
          <div class="class-item"> Subject 2 </div>
          <div class="class-item"> Subject 3 </div>
          <div class="class-item"> Subject 4 </div>
          <div class="class-item"> Subject 5 </div>
          <div class="class-item"> Subject 6 </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Task from "./Task.vue"
import { Meteor } from 'meteor/meteor'

export default {
  components: {
    Task
  },
  data() {
    return {
      proximalTaskList: [],
      prioritiesTaskList: []
      /*prioritiesTaskList: [
        {_id: "ibbaBWC8F7GMvfumM", taskName: "task 3", timeEst: "00:30", dueDate: "10/10/2020", subject: "MCEN 3025"},
        {_id: "GBdSNWhudZ2m77tvv", taskName: "task 5", timeEst: "00:30", dueDate: "11/1/2020", subject: "GEEN 2400"},
        {_id: "3KtSh62ParYNKxpgz", taskName: "task 7", timeEst: "00:45", dueDate: "11/05/2020", subject: "MCEN 3025"}
      ],*/
    };
  },
  created() {
    Meteor.call('task.returnNextX', (error, result) => { //TODO: add watcher for database, check if component needs to rerender on page reload
        if (this.prioritiesTaskList!=result){
          this.prioritiesTaskList = result;
        }        
      });
  },
  methods: { 
        
  }
}
</script>


