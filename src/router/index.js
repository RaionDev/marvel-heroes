
import Vue from "vue";
import Router from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import DetailsView from "@/views/DetailsView.vue";
import HistoryView from "@/views/HistoryView.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Home', component: HomeView},
        {path: '/details/:id', name: 'Details', component: DetailsView},
        {path: '/history', name: 'History', component: HistoryView},
    ]
})