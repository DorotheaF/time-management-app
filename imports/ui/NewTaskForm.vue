<template>
  <form class="needs-validation" novalidate @submit.prevent="mySubmit">
    <div class="form-row" >
      <div class="col-md-4 mb-3">
        <label for="validationCustom01">What subject?</label>
        <input type="text" class="form-control" id="subject" placeholder="ex: MATH" required v-model="subject">
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <label for="validationCustom02">What do you want to call the task?</label>
        <input type="text" class="form-control" id="title" placeholder="ex: Math Homework 3" required v-model="title">
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      
    </div>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="validationCustom03">When is it due?</label>
        <input type="text" class="form-control" id="dueDate" placeholder="MM/DD/YYYY" required v-model="dueDate">
        <div class="invalid-feedback">
          Please provide a valid Date.
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <label for="validationCustom04">Estimated Time to finish</label>
        <input type="text" class="form-control" id="timeEst" placeholder="hh:mm" required v-model="timeEst">
        <div class="invalid-feedback">
          Please provide a valid time.
        </div>
      </div>
      
    </div>
    
    <div onSubmit="mySubmit" >
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
      array = [title._value, timeEst._value, dueDate._value, subject._value];
      Meteor.call('task.addTask', array);
      title = "";
      timeEst = "";
      dueDate = "";
      subject = "";
   },
    
  }
};
</script>
