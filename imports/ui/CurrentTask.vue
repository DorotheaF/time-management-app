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
      v-if="this.task.current==1"
      />
              
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
      vita: {
        type: Boolean,
        required: true,
      },
  components: {
    TaskTimer2,
  },
  data() { 
    return {
      timeLimit: 20,
      timePassed: 0,
      
    };
  },

  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed
    }
  },
  methods: {

   updateStatus(){ //change to show bar if this.task.timeSpent!=0
     console.log("Updating");
     if (this.task.current==0){
       Meteor.call('task.updateWorkingStatus', this.task._id, 1, (error, result) => { //TODO: add watcher for database, check if component needs to rerender on page reload
            this.task.current = 1
            if(result == true){
              console.log("Updated to 1: "  +  this.task.current + " = " + this.icecream);
            }       
        });
     }else{
       Meteor.call('task.updateWorkingStatus', this.task._id, 0, (error, result) => { //TODO: add watcher for database, check if component needs to rerender on page reload
            this.task.current = 0 //task isn't dynamic based on database
            if(result == true){
              console.log("Updated to 0: " + this.icecream);
            }       
        });
     }
    this.$emit('welcome')
   }
  }
};
</script>