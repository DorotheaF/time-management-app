<template>
    <div class="text" >      
        {{ show() }}  
      <div class="title" v-if="render==true">
        {{ this.task.taskName }}      
        </div>  
    </div>  

  
</template>
 
<script>
import { Tasks } from "../api/tasks.js";
 
export default {
  props: ["task", "day"],
  data() { 
    return {
        render: false,
        day2: ""
    };
  },
  methods: {
    show() {      
      var due = this.task.dueDate;
      var day = new Date(this.day.date);
      if (due.getTime() == day.getTime()){
          this.render = true;
      }
    }
  }
};
</script>