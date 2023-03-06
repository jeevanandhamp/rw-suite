import { createRouter, createWebHistory } from 'vue-router';
import { isProxy, toRaw } from 'vue';

import { useAuthStore } from '../stores/auth.store';
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: HomeView },
        { path: '/login', component: LoginView },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
    ]
});

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const logoutRoute = "/logout";
    console.log(to.path);

    const auth = useAuthStore();
    //Route is for logout
    console.log(logoutRoute.includes(to.path));
    if(to.path != "/" && logoutRoute.includes(to.path)) {
      return auth.logout();
    }
    const authRequired = !publicPages.includes(to.path);
   
    let user = auth.user;
    let userToken = isProxy(auth.user) ? toRaw(auth.user)?.token : null;

    console.log(to.path, authRequired , isProxy(auth.user), userToken);

    if (authRequired && !userToken) {
      console.log(auth.user);
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
export default router;

// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

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
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router
