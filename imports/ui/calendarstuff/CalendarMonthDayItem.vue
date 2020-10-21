<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday
    }"
  >
    <span>{{ label }}</span>
    <ol>Figure out how to</ol>
  </li>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "CalendarMonthDayItem",

  props: {
    day: {
      type: Object,
      required: true
    },

    isCurrentMonth: {
      type: Boolean,
      default: false
    },

    isToday: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    }
  }
};
</script>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background-color: #fff;
  color: var(--grey-800);
  padding: 4px;
  border-right:1.25px solid black;
  border-left: 1.25px solid black;
  border-top: 1.25px solid black;
  border-bottom:1.25px solid black;  
  
}

.calendar-day > span {
  display: flex;
  justify-content: left;
  align-items: left;
  position: left;
 
  width: var(--day-label-size);
  height: var(--day-label-size);
  }

.calendar-day--not-current {
  background-color: grey;
  color: var(--grey-300);
}

.calendar-day--today {
  padding-top: 4px;
  background-color: lightgreen;
  
}

.calendar-day--today > span {
    border-radius: 9999px;
  background-color: var(--grey-800);
}
</style>