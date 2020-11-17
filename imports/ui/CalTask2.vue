<template>
    <div class="text" v-if="render==true">      
         
      <div class="title" >
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
        render: this.show(),
        day2: ""
    };
  },
  methods: {
    show() {  
      var due = new Date(this.task.dueDate);
      due.setHours(17,00,00);
      var today = new Date(this.day.date); 
      console.log(today + " " + due);     
      if (due.getTime() == today.getTime()){
        console.log("Added!");
        this.render = true;
        return true;
      }
    }
  }
};
</script>