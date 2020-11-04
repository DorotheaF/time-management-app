<template>

  <li class="task">
    <div class="text">
       <div class="index">
        {{ index + ")"}}
      </div> 
      <div class="title">
        {{ this.task.taskName }}
      </div>
      <div class="due-date">
        {{ this.task.dueDate }}
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
   
  }
};
</script>