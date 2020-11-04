<template>
  <div class="content">
    <div class="column">
      <div class="priorities">
        <div class="title">
          Priotities
        </div>
        <ul class="task-list" >
          <Task v-for="(task, index) in prioritiesTaskList" v-bind:key="index" v-bind:task="task" v-bind:index="index+1"/>
        </ul>
      </div>
      <div class="new-task">
        <Button class="new-task-button">
          +
        </Button>
        <div>
          Add a task
        </div>
      </div>
    </div>
    <div class="column">
      <div class="mini-calendar">
        Mini Calendar
      </div>
      <div class="classes">
        Class List
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
  created: function () {
  },
  created() {
    Meteor.call('task.returnNextX', (error, result) => { 
        this.prioritiesTaskList = result;
      });
  },
  methods: { //pre loading
        
  }
}
</script>

