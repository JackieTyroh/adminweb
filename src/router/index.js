import Vue from 'vue'
// import firebase from 'firebase';
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logbook from '../views/Logbook.vue'
import Login from '../views/Login.vue'
import Summary from '../views/Summary.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
  {
    path: "*",
    redirect: "/login"
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/logbook',
    name: 'Logbook',
    component: Logbook
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
});
// router.beforeEach((to,from,next)=>{
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record=>record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next ('login');
//   else if (!requiresAuth && currentUser) ('home');
//   else next();
// });

// const router = new VueRouter({
//   routes
// })

export default router