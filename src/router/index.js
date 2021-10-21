import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Question from '../views/Question.vue'
import Slider from '../views/Slider.vue'
import NhanDienKhacBiet from '../views/NhanDienKhacBiet.vue'
import QuestionMoiQuanHeGiuaBoMe from '../views/QuestionMoiQuanHeGiuaBoMe.vue'
import QuestionMoiQuanHeGiuaToiVaBoMe from '../views/QuestionMoiQuanHeGiuaToiVaBoMe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question-1',
    name: 'Question',
    component: Question
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/nhan-dien-khac-biet.html',
    name: 'nhan-dien-khac-biet',
    component: NhanDienKhacBiet
  },
  {
    path: '/moi-quan-he-giua-bo-va-me.html',
    name: 'moi-quan-he-giua-bo-va-me',
    component: QuestionMoiQuanHeGiuaBoMe
  },
  {
    path: '/moi-quan-he-giua-toi-va-bo-me.html',
    name: 'moi-quan-he-giua-toi-va-bo-me',
    component: QuestionMoiQuanHeGiuaToiVaBoMe
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
