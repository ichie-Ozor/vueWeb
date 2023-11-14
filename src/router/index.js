import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import Job from '../views/Job/Job.vue'
import JobDetail from '../views/Job/JobDetail.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/job',
    name: 'job',
    component: Job
  },
  {
    path: '/job/:id',
    name: 'jobDetails',
    component: JobDetail,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',  //this is the old path that no longer exist
    redirect: '/jobs'   //this is the new path we want it to go to
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
