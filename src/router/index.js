import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Getdiet from '../views/Getdiet.vue'
import Exercise from '../views/Exercise.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/getdiet',
    name: 'getdiet',
    component:Getdiet
     
  },
  {
    path: '/exercise',
    name: 'exercise',
    component:Exercise
     
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
