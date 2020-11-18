<template>

  <li class="task">
    <div class="text">
       <div class="index">
        {{ index + ")"}}
      </div> 
      <div class="title">
        {{ this.task.taskName }}
      </div>
    </div>   
    <div class="time-est">


      <TaskTimer2
      v-if="icecream==2"
      />
        

       <!--button @click="$emit('welcome', this.timerDuration)"-->      
        

       <button @click="updateStatus()">

          Start Session
        </button>
      <div>
        
        {{this.task.timeEst}}
    </div>

    </div>
    
  </li>
  
</template>
 
<script>
import { Tasks } from "../api/tasks.js";
import TaskTimer2 from "./TaskTimer2.vue";

 
export default {
  props: ["task", "index"],

  components: {
    TaskTimer2,
  },
  data() { 

    return {
      timeLimit: 20,
      timePassed: 0,
      icecream: this.task.completed,
      
    };
  },

  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed
    }
  },
  methods: {

   updateStatus(){
     console.log("Updating");
     Meteor.call('task.updateWorkingStatus', this.task._id, 2, (error, result) => { //TODO: add watcher for database, check if component needs to rerender on page reload
            if(result == true){
              console.log("Updated to 2");
            }       
        });
   }

  }
};
</script>