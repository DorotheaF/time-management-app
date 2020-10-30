<template>
  <li v-bind:class="taskClassName">

    <button type="button" class="btn btn-outline-warning" @click="deleteThisTask">{{yello}}</button>
 
    <input
      type="checkbox"
      readOnly
      v-bind:checked="!!this.task.checked"
      @click="toggleChecked"
    />
     
    <span class="text">{{ this.task.text }}</span>
  <!-- <li class="task">
    <div class="number">
      {{ index }}
    </div> 
    <div>
      <span class="text">{{ this.task.taskName }}</span>
    </div>
    <div>
      {{ this.task.timeEst }}
    </div>
    
  </li> -->
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