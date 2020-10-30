import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//To add a route, add here and in App menu

import MainPage from '../imports/ui/MainPage.vue';
import CurrentSession from '../imports/ui/CurrentSession.vue';
import Calendar from '../imports/ui/calendarstuff/Calendar.vue';
import Diagnostics from '../imports/ui/Diagnostics.vue';
import NewTask from '../imports/ui/NewTaskForm.vue';

const routes = [
    {
        path: "/",
        name: "Main Page",
        component: MainPage
    },
    {
        path: "/currentsession",
        name: 'Current Session',
        component: CurrentSession
    },
    {
        path: "/calendar",
        name: 'Calendar',
        component: Calendar
    },
    {
        path: "/diagnostics",
        name: "Diagnostics",
        component: Diagnostics
    },
    {
        path: "/newtask",
        name: "New Task",
        component: NewTask
    }      
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router