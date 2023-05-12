import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import SiteSurvey from "../views/SiteSurvey.vue";
import SurveyDetails from "../views/SurveyDetails.vue";
import BaseStation from "../views/BaseStation.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/site_surveyList",
    name: "SiteSurvey",
    component: SiteSurvey,
  },
  
  {
    path: "/surveyDetails/:id",
    name: "SurveyDetails",
    component: SurveyDetails,
  },

  {
    path: "/base_stations",
    name: "BaseStation",
    component: BaseStation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;