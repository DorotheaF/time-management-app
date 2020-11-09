<template>

  <li class="task">
    <div class="text">
       <div class="index">
        {{ index + ")"}}
      </div> 
      <div class="title">
        {{ this.task.taskName }}
      </div>
      <div class="due-label-late" v-if="calcDate() <=0"> <!-- TODO: Style these -->
        {{ " " }} Days until due: {{ calcDate() }}
      </div>
      <div class="due-label" v-else>
        {{ " :) " }} Days until due: {{ calcDate() }}
      </div>
    </div>   
    <div class="time-est">
      {{ this.task.timeEst }}
    </div>
    
  </li>
  
</template>
 
<script>
import { Tasks } from "../api/tasks.js";
 
export default {
  props: ["task", "index"],
  data() { 
    return {};
  },
  methods: {
    calcDate() {
      this.task.dueDate 
      var today = new Date();
      var due = new Date(this.task.dueDate);
      var time_diff = Math.round((due.getTime() - today.getTime())/(1000*3600*24))
      return time_diff;
    }
  }
};
</script>