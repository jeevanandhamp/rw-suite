import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

import { isProxy, toRaw } from 'vue';

import { useAuthStore } from '@/stores/auth.store';
import HomeView from '@/pages/app/HomeView.vue';

import AppLayout from '@/layouts/AppLayout.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { path: '/coming-soon' },
  },
  {
    path: '/logout',
    component: AppLayout,
  },
  { 
    path: '/', 
    component: AppLayout,
    children:[
      {component: HomeView, path: ''}
    ],
  },
  { path: '/login', component: () => import('@/pages/login/LoginView.vue') },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: AppLayout,
    children: [{
      component: () => import('@/pages/app/ComingSoon.vue'), path: ''
    }]
  },
  { 
    path: '/hikeathon',
    component: AppLayout,
    children:[{
      component: () => import('@/pages/app/HikeathonView.vue'),
      path: ''
    }]
    },
  {
    name: 'products',
    path: '/products',
    component: AppLayout,
    children: [
      {
        name: 'spec-table',
        path: 'spec-table',
        component: () => import('@/pages/app/products/specs/ProductSpecTable.vue'),
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: routes
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const loginPath = '/login';
  const publicPages = [loginPath];
  const logoutRoute = '/logout';
  console.log(to.path);

  const auth = useAuthStore();
  //Route is for logout
  console.log(logoutRoute.includes(to.path));
  if (to.path != '/' && logoutRoute.includes(to.path)) {
    return auth.logout();
  }

  if(to.path == loginPath && auth.isAuthenticated()) {
    return '/';
  }
  const authRequired = !publicPages.includes(to.path);

  const userToken = isProxy(auth.user) ? toRaw(auth.user)?.token : null;
  
  console.log(to.path, authRequired, isProxy(auth.user), userToken);

  if (authRequired && !userToken) {
    console.log(auth.user);
    auth.returnUrl = to.fullPath;
    return '/login';
  }
});
export default router;

// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('@/views/AboutView.vue')
//     }
//   ]
// })

// export default router
