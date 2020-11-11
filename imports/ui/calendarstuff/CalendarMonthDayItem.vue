<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday
    }"
  >
    <span>{{ label }}</span>
    <CalTask2 v-for="task in tasks" v-bind:key="task._id" v-bind:task="task" :day="day"/>
    <!-- Replace with <ol insert other fun components herer similar to the li above
    class="task"
    :class="{
      'task today': isToday
      'task later': !day.isToday" -->
  </li>
</template>

<script>
import dayjs from "dayjs";
import CalTask2 from "../CalTask2.vue"

export default {
  components: {
    CalTask2
  },
  name: "CalendarMonthDayItem",

  props: ["tasks", "day", "isCurrentMonth","isToday"],   
  
  data(){
    return{
      nowtasks: [],
    }
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");      
    }
  },
  methods: {
    Psych(){
      console.log("today: " + day);
      return true;
    }
  }
};
</script>

