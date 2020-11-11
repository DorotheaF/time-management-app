<template>
  <div class="content">
    <div class="column-a">
      <div class="priorities">
        <div class="title">
          Current Tasks
        </div>
        <ul class="task-list" >
          <CurrentTask v-for="(task, index) in prioritiesTaskList" v-bind:key="index" v-bind:task="task" v-bind:index="index+1" v-bind:color="color"/>
        </ul>
      </div>
      <div class="priorities">
        <div class="title">
          Finished Tasks
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
    <div class="column-b">      
      <div class="break-time-tray">
        Time until next break <!-- TODO: Finish this!! https://medium.com/js-dojo/how-to-create-an-animated-countdown-timer-with-vue-89738903823f -->
        <BaseTimer
          :time-left="timeLeft"
          :time-limit="timeLimit"
        />
      </div>
    </div>
  </div>

</template>

<script>
import Task from "./Task.vue"
import CurrentTask from "./CurrentTask.vue"
import { Meteor } from 'meteor/meteor'
import BaseTimer from "./BaseTime.vue";

export default {
    props: {
    },
    components: {
        Task,
        CurrentTask,
        BaseTimer
    },
    data() {
        
        return {
        color: "Whatever I want? Waffles",
        proximalTaskList: [],
        prioritiesTaskList: [],
        /*prioritiesTaskList: [
            {_id: "ibbaBWC8F7GMvfumM", taskName: "task 3", timeEst: "00:30", dueDate: "10/10/2020", subject: "MCEN 3025"},
            {_id: "GBdSNWhudZ2m77tvv", taskName: "task 5", timeEst: "00:30", dueDate: "11/1/2020", subject: "GEEN 2400"},
            {_id: "3KtSh62ParYNKxpgz", taskName: "task 7", timeEst: "00:45", dueDate: "11/05/2020", subject: "MCEN 3025"}
        ],*/
        timeLimit: 45,
        timePassed:0,
        timerInterval: null,
        };
    },
    created() {
        Meteor.call('task.returnByDate', (error, result) => { //TODO: add watcher for database, check if component needs to rerender on page reload
            if (this.prioritiesTaskList!=result){
            this.prioritiesTaskList = result;
            }        
        });
    },
    computed: {

        timeLeft(){
          if (this.timeLimit>=this.timePassed){
          return this.timeLimit - this.timePassed
          }
          else {
            return 0
          }
        },

    },

    methods: { 
      startTimer() {
        this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);    
      },
 
    },

    mounted() {
      this.startTimer();
    },

}
</script>