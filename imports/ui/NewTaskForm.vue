<template>
  <form @submit.prevent="mySubmit">
    <div class="form-row" >
      <div class="col-md-4 mb-3">
        <label >What subject?</label>
        <input type="text" class="form-control" id="subject" placeholder="ex: MATH" v-model="subject">        
      </div>
      <div class="col-md-4 mb-3">
        <label>What do you want to call the task?</label>
        <input type="text" class="form-control" id="title" placeholder="ex: Math Homework 3" v-model="title">
      </div>
      
    </div>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="validationCustom03">When is it due?</label>
        <input type="text" class="form-control" id="dueDate" placeholder="MM/DD/YYYY" v-model="dueDate">
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom04">Estimated Time to finish</label>
        <input type="text" class="form-control" id="timeEst" placeholder="hh:mm" v-model="timeEst">
      </div>
      
    </div>
    
    <div>
      <Button class="submit-button" type="submit"> Submit </Button> 
    </div>

  </form>
</template>

<script>
import { Tasks } from "../api/tasks.js";
 
export default {
  data() { 
    return {
      title: "",
      timeEst: "",
      dueDate: "",
      subject: "",
    };
  },
  methods: {
    mySubmit: function(){
      if(title._value!=""){
        console.log("Submitting " + title._value);
        array = [title._value, timeEst._value, dueDate._value, subject._value];
        Meteor.call('task.addTask', array);
        this.title = "";
        this.timeEst = "";
        this.dueDate = "";
        this.subject = "";
        this.$router.push('/');
      }
      else{
        console.log("Please add a title for the task")
      }         
   },    
  }
};
</script>
