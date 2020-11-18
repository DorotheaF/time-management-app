<template>
  <div class="ScrollStyle2">
  <div class="content">
    <div class="column-c">
      <div class="priorities">
        <div class="title">
          Current Tasks
        </div>
        <ul class="task-list" >
          <Task2 v-for="(task, index) in prioritiesTaskList" v-bind:key="index" v-bind:task="task" v-bind:index="index+1"/>
        </ul>
      </div>
    </div>
    <div class="column-c">
      <div class="priorities">
        <ul class="title">
          Finished Tasks
        </ul>
        <ul class="task-list" >
          <Task2 v-for="(task, index) in FinTasks" v-bind:key="index" v-bind:task="task" v-bind:index="index+1"/>
        </ul>
      </div>
      </div>
      <div class="column-c">
      <div class="new-task">
        <button class="new-task-button" @click="$router.push('/newTask')">
          +
        </button>
        <div>
          Add a task
        </div>
        </div>
    </div>
    </div>
    </div>

</template>

<script>
import Task from "./Task.vue"
import Task2 from "./Task2.vue"
import CurrentTask from "./CurrentTask.vue"
import { Meteor } from 'meteor/meteor'

export default {
    props: {
    },
    components: {
        Task,
        Task2,
        CurrentTask,
        
    },
    data() {
        return {
        proximalTaskList: [],
        prioritiesTaskList: [],
        FinTasks: []
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
            this.prioritiesTaskList = result.filter(item => item.completed == 0);
            this.FinTasks = result.filter(item => item.completed == 1)
            }        
        });
    },
    
    methods: { 
            
    }
}
</script>