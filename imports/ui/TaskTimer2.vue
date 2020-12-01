<template>
       <div v-if=isActive class="c-timer">
       <div class="c-timebar">
         <div class="c-timebar__background"></div> <div class="c-timebar__remaining" v-bind:style="transitionBarWithStyle"></div>
       </div>
     </div>
     
</template>

<script>
//this component came from https://codepen.io/gpelelis/pen/xrNwvr. We were working on trying to correspond the timer running down with the main circle base timer.  
export default {
 

data: function() {
    return {
      isActive: true, //false in the orginal component, but this timer should only be called upon when we want the bar to show up, so isActive starts out true
      timeoutId: -1,
      transitionBarWithStyle: {},
      duration: 3000 // default
    }
  },
  
  // all methods of timer component
  methods: {
    start: function(time){
      var self = this;
      
      if (self.isActive){
        console.log('timer is already active. Please wait to finish')
        return;
      }
        
      if (time)
        self.duration = time;
      
      if (self.duration < 0)
        return;
      
      self.isActive = true;
      self.timeoutId = setTimeout(function(){ self.finished(); } /* 1 */
        , self.duration);
      
      self.transitionBarWithStyle = {
        animationDuration: (self.duration / 1000) + 's',
        animationName: 'timebar_progress_y' /* 2 */
      }
    },
    cancel: function(){
      if (this.isActive && this.timeoutId > -1){
        clearTimeout(this.timeoutId);
        this.transitionBarWithStyle = {};
        this.isActive = false;
        console.log('timer has been canceled');
      }
    }, 
    finished: function(){
      this.transitionBarWithStyle = {};
      this.isActive = false;
      console.log('timer has finished after ' + this.duration + ' ms');
    },
    
  }, 
  
  created(){
    /*var self = this;
    //var triggerTimer= new Vue();
    triggertimer.$on('start-timer', function(time){
      self.start(time);
    });
    triggerTimer.$on('start-cancel', function(time){
      self.cancel();
    })*/
  }
};





// use the following to start the timer
// triggerTimer.$emit('start-timer', this.timerDuration);
// triggerTimer.$emit('start-cancel');

</script>