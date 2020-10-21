<template>
  <ol class="day-of-week">
    <li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
  </ol>
</template>

<script>
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default {
  name: "CalendarWeekdays",

  computed: {
    weekdays() {
      return WEEKDAYS;
    }
  }
};
</script>

<style scoped>
.day-of-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  }

.day-of-week > * {
  text-align: center;
  text-emphasis: bold black;
  padding-right: 5px;
  border-right: 2.5px solid black;
  border-left: 2.5px solid black;
  border-top: 2.5px solid black;
  border-bottom: 1.25px solid black;
}
</style>