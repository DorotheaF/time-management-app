<template>


    <div class="text">        
      <div class="title">
        {{ this.task.taskName }}      
        </div>  
    </div>  

  
</template>
 
<script>
import { Tasks } from "../api/tasks.js";
 
export default {
  props: ["task"],
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