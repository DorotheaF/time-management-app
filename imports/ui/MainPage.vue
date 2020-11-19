<template>
  <div class="content">
    <div class="column">
      <div class="priorities">
        <div class="title">
          Priorities
        </div>
        <ul class="task-list" >
          <Task v-for="(task, index) in prioritiesTaskList" v-bind:key="index" v-bind:task="task" v-bind:index="index+1"/>
        </ul>
      </div>
      <div class="new-task">
        <button class="new-task-button" @click="$router.push('/newTask')">
          +
        </button>
        <div>
          Add a task
        </div>
      </div>
    </div>
    <div class="column">
      <div class="mini-calendar-tray">
        Calendar
        <div class="mini-calendar">
          <div class="cal-column">
            {{ dayName()[0] }}
            <div class="line" />
            <CalTask v-for="task in proximalTaskList1" v-bind:key="task._id" v-bind:task="task"/>
          </div>
          <div class="cal-column">
            {{ dayName()[1] }}
            <div class="line" />
            <CalTask v-for="task in proximalTaskList2" v-bind:key="task._id" v-bind:task="task"/>
          </div>
          <div class="cal-column">
            {{ dayName()[2] }}
            <div class="line" />
            <CalTask v-for="task in proximalTaskList3" v-bind:key="task._id" v-bind:task="task"/>
          </div>
        </div>        
      </div>      
      <div class="classes-tray">
        Class List
        <div class="classes">
          <div class="class-item"> Math </div>
          <div class="class-item"> English </div>
          <div class="class-item"> Chemistry </div>
          <div class="class-item"> Subject 4 </div>
          <div class="class-item"> Subject 5 </div>
          <div class="class-item"> Subject 6 </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Task from "./Task.vue"
import CalTask from "./CalTask.vue"
import { Meteor } from 'meteor/meteor'

export default {
  components: {
    Task,
    CalTask
  },
  data() {
    return {
      proximalTaskList1: [],
      proximalTaskList2: [],
      proximalTaskList3: [],
      prioritiesTaskList: []
    };
  },
  created() {
    Meteor.call('task.returnByDate', (error, result) => { //TODO: add watcher for database, check if component needs to rerender on page reload
        if (this.prioritiesTaskList!=result){
          this.prioritiesTaskList = result.filter(item => item.completed != 1);
        }     
        const dayjs = require('dayjs');
        var i = 0;
        var time = new Date()
        var date = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate()
        var today = dayjs(date);
        var currentTask = this.prioritiesTaskList[0];
        var day2 = today.add(2, 'days');
        var day1 = today.add(1, 'days');
       
        var mydueDate = new Date(currentTask.dueDate);
        var temp = dayjs(mydueDate)
        mydueDate = temp.add(1, 'days').subtract(17, 'hours').toDate();

        console.log(mydueDate + " " + today.toDate());


        while (mydueDate.getTime() <= today.toDate().getTime()){
          console.log("here1" + currentTask)
          if (mydueDate.getTime() == today.toDate().getTime()){
            console.log("to 1");
            this.proximalTaskList1.push(currentTask)
          }
          i = i+1;
          currentTask = this.prioritiesTaskList[i];
          var mydueDate = new Date(currentTask.dueDate);
          var temp = dayjs(mydueDate)
          mydueDate = temp.add(1, 'days').subtract(17, 'hours').toDate();          
        }
        while (mydueDate.getTime() <= day1.toDate().getTime()){
          console.log("here2" + currentTask.taskName)
          if (mydueDate.getTime() == day1.toDate().getTime()){
            console.log("to 2");
            this.proximalTaskList2.push(currentTask)
          }
          i = i+1;
          currentTask = this.prioritiesTaskList[i];
          var mydueDate = new Date(currentTask.dueDate);
          var temp = dayjs(mydueDate)
          mydueDate = temp.add(1, 'days').subtract(17, 'hours').toDate();          
        }
        while (mydueDate.getTime() <= day2.toDate().getTime()){
          if (mydueDate.getTime() == day2.toDate().getTime()){
            console.log("to 3");
            this.proximalTaskList3.push(currentTask)
          }
          i = i+1;
          currentTask = this.prioritiesTaskList[i];
          var mydueDate = new Date(currentTask.dueDate);
          var temp = dayjs(mydueDate)
          mydueDate = temp.add(1, 'days').subtract(17, 'hours').toDate();
        }
        console.log("Added to mini cal ")
           
      });

  },
  methods: { 
    dayName() {
      //TODO: Implement this!
      var today = new Date();
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var dayName = days[today.getDay()];
      var days = [days[today.getDay()], days[(today.getDay() + 1)%7], days[(today.getDay() + 2)%7]]
      return days;
    }
        
  }
}
</script>


