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
    <div>
      {{this.color}}
      </div>
      <TaskTimer2
      />
    </div>
    
  </li>
  
</template>
 
<script>
import { Tasks } from "../api/tasks.js";
//import TaskTimer from "./TaskTimer.vue";
import TaskTimer2 from "./TaskTimer2.vue";

 
export default {
  props: ["task", "index","color"],
  components: {
    TaskTimer2,
  },
  data() { 
    return {
      timeLimit: 20,
      timePassed: 0
    
    };
  },

  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed
    }
  },
  methods: {
   
  }
};
</script>