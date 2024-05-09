import { createRouter, createWebHistory } from 'vue-router'
import ExaminerPerformance from "@/nursing/pages/Examiner-Performance.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'', component:()=>import('../public/pages/home-page.component.vue')},
    {path:'/home', component: ()=> import('../public/pages/home-page.component.vue') },
    { path: '/nursing/mental-state-exams',  component: ExaminerPerformance , meta: { title: 'Mental state exams' }},
    {path:'/:pathMatch(.*)*', component:()=>import('../public/pages/NotFound-page.component.vue')}
  ]
})

export default router
