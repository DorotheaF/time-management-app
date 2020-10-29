<template>
  <li class="task">
    <div class="number">
      {{ index }}
    </div> 
    <div>
      <span class="text">{{ this.task.taskName }}</span>
    </div>
    <div>
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