import { defineStore } from 'pinia';

import { fetchWrapper } from '../helpers/fetch-wrapper';
import  router from '../router';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user') || '{}'),
        returnUrl: <string|null> null
    }),
    actions: {
        async ssoLogin(username:string, token:string, type: string) {
            const user = { username, token, type };

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        async login(username:string, password:string) {
            const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            return '/login';
        },
        isAuthenticated() {
            console.log("isAuthenticated", this.user);
            if(this.user?.token)
                return true;
            return false;
        }
    }
});
