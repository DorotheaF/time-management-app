<template>
    <div class="calendar-date-selector">
        <span @click="selectPrevious"> Go Back </span>
        <span @click="selectCurrent">Today</span>
        <span @click="selectNext">Go Forward</span>
    </div>
</template>

<script>
import dayjs from "dayjs";
export default {
    name: "CalendarDateSelector",

    props: {
        currentDate:{
            type: String,
            required: true
        },

        selectedDate: {
            type: Object,
            required: true
        }
    },

    methods: {
        selectPrevious() {
            let newSelectedDate=dayjs(ths.selectedDate).subtract(1,"month");
            this.$emit("dateSelected", newSelectedDate);
        },
        selectCurrent(){
            let newSelectedDate=dayjs(this.currentDate);
            this.$emit("dateSelected", newSelectedDate);
        },
        selectNext(){
            let newSelectedDate=dayjs(this.selectedDate).add(1, "month");
            this.$emit("dateSelected",newSelectedDate);
        }
    }
};
</script>