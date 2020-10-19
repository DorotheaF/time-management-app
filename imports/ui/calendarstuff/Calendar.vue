<template>
    <div class="calendar-month">
        <div class="calendar-month-header">

            <CalendarDateIndicator 
            :selected-date="selectedDate"
            class="calendar-month-header-selected-month"
            />
            <CalendarDateSelector
            :current-date="today"
            :selected-date="selectedDate"
            @dateSelected="selectDate"
            />
        </div>
        <CalendarWeekdays />

        <ol class="days-grid">
            <CalendarMonthDayItem />
        </ol>
    </div>
</template>

<script>
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import CalendarDateIndicator from "./CalendarDateIndicator";
import CalendarDateSelector from "./CalendarDateSelector";
import CalendarMonthDayItem from "./CalendarMonthDayItem";
import CalendarWeekdays from "./CalendarWeekdays";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);
export default {
    name: "Calendar",

    components: {
        CalendarDateIndicator,
        CalendarDateSelector,
        CalendarMonthDayItem,
        CalendarWeekdays
    },

    computed: {
    data() {
        numberOfDaysInMonth(){
            return dayjs(this.selectedDate).daysInMonth();
        }
    }
    },

    methods: {
        selectDate(newSelectedDate) {
            this.selectedDate=newSelectedDate;
        }
    }
};
</script>