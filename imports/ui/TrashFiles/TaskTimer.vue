<template>
    <div class="task-timer">
    <svg
      class="task-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="task-timer__rectangle">
        
      </g>
    </svg>
    <span class="task-timer__label">
      {{ formattedTimeLeft }}
    </span>
  </div>
</template>

<script>
export default {

  props: {
    timeLeft: {
      type: Number,
      required: true
    }
  },

  computed: {
    formattedTimeLeft() {
      const timeLeft = this.timeLeft
      /* The largest round integer less than or equal 
         to the result of time divided being by 60. */
      const minutes = Math.floor(timeLeft / 60)
      /* Seconds are the remainder of the time divided
         by 60 (modulus operator)*/
      let seconds = timeLeft % 60
      /* If the value of seconds is less than 10,
         then display seconds with a leading zero*/
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      // The output in MM:SS format
      return `${minutes}:${seconds}`
    }
  }
}
</script>