<template>
  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg">
            
      <g class="base-timer__circle">
        <circle
          class="base-timer__path-elapsed"
          cx="50"
          cy="50"
          r="46.5"
       />
      
        <path
          class="base-timer__path-remaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "></path>
      </g>
    </svg>
  <span class="base-timer__label">
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
          // The largest round integer less than or equal 
              //to the result of time divided being by 60.
          const minutes = Math.floor(timeLeft / 60)
          // Seconds are the remainder of the time divided
              //by 60 (modulus operator)
          let seconds = timeLeft % 60
          // If the value of seconds is less than 10,
              //then display seconds with a leading zero
          if (seconds < 10) {
              seconds = `0${seconds}`
          }
          // The output in MM:SS format
          return `${minutes}:${seconds}`
        },
    // Update the dasharray value as time passes, starting with 283 (the circumference)
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },
    timeFraction() {
      // Divides time left by the defined time limit.      
      return this.timeLeft / this.timeLimit;
    },
  },
}
</script>