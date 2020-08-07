import Vue from "vue";
import VueRouter from "vue-router";
import Signin from "../components/Signin.vue";
import Login from "../components/Login.vue";
import MisPronosticos from "../components/MisPronosticos.vue";
import MisQuinelas from "../components/MisQuinelas.vue";
import CrearQuinela from "../components/CrearQuinela.vue";
import Quinela from "../components/Quinela.vue";
import Survival from "../components/Survival.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Signin },
  { path: "/login", component: Login },
  {
    path: "/pronosticos",
    component: MisPronosticos,
  },
  { path: "/quinelas", name:'quinielas', component: MisQuinelas },
  { path: "/nueva_quinela", component: CrearQuinela },
  { path: "/nombre_quinela", component: Quinela },
  { path: "/survival", component: Survival },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
