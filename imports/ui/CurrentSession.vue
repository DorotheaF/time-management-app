<template>
  <div class="content">
    <div class="column-a">
      <div class="priorities">
        <div class="title">
          Current Tasks
        </div>
        <ul class="task-list" >
          <CurrentTask v-for="(task, index) in prioritiesTaskList" v-bind:key="index" v-bind:task="task" v-bind:index="index+1"/>
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
        <div class="base-timer">
            <svg
                class="base-timer__svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg">
            
                <g class="base-timer__circle">
                <circle
                    class="base-timer__path-elapsed"
                    cx="50"
                    cy="50"
                    r="46.5"
                />
                </g>
            </svg>
            <span class="base-timer__label">
                {{ formattedTimeLeft }}
            </span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Task from "./Task.vue"
import CurrentTask from "./CurrentTask.vue"
import { Meteor } from 'meteor/meteor'

export default {
    props: {
    },
    components: {
        Task,
        CurrentTask
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
        Meteor.call('task.returnByDate', (error, result) => { //TODO: add watcher for database, check if component needs to rerender on page reload
            if (this.prioritiesTaskList!=result){
            this.prioritiesTaskList = result;
            }        
        });
    },
    computed: {
        formattedTimeLeft() {
        const timeLeft = this.timeLeft
        // The largest round integer less than or equal 
            //to the result of time divided being by 60.
        const minutes = Math.floor(timeLeft / 60)
        // Seconds are the remainder of the time divided
            //by 60 (modulus operator)
        let seconds = timeLeft % 60
        // If the value of seconds is less than 10,
            //then display seconds with a leading zero
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        // The output in MM:SS format
        return `${minutes}:${seconds}`
        }
    },
    methods: { 
            
    }
}
</script>