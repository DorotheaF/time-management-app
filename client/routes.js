import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MainPage from '../imports/ui/MainPage.vue';
import CurrentSession from '../imports/ui/CurrentSession.vue';
import Calendar from '../imports/ui/Calendar.vue';
import Diagnostics from '../imports/ui/Diagnostics.vue';


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
    }    
]

const router = new VueRouter({
  routes
})

export default router