import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/default.vue'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/',
    component: Layout,
    meta: { 
      requiresAuth: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'Dashboard'
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard.vue')
      },
      {
        path: '/users',
        name: 'users',
        meta: {
          title: 'Users'
        },
        component: () => import(/* webpackChunkName: "users" */ '@/views/Users.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: {
          title: 'About'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // get page title and from router meta and set
  document.title = to.meta.title || 'Vuan Admin';
  // check user auth and redirect
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/IS_AUTHENTICATED']) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router
