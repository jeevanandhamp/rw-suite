import { defineStore } from 'pinia';

import { fetchWrapper } from '../helpers/fetch-wrapper';
import router from '../router';
import { googleSdkLoaded } from 'vue3-google-login';
import { AUTH_TYPE } from '../helpers/constants';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    returnUrl: <string | null>null
  }),
  actions: {
    async ssoLogin(username: string, token: string, type: string) {
      //TODO
      const user = { username, token, type };

      // update pinia state
      this.user = user;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      // redirect to previous url or default to home page
      router.push(this.returnUrl || '/');
    },
    async login(username: string, password: string) {
      const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });

      // update pinia state
      this.user = user;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      // redirect to previous url or default to home page
      router.push(this.returnUrl || '/');
    },
    logout() {
      if (AUTH_TYPE.isGoogleSSO(this.user.type)) {
        googleSdkLoaded((google) => {
          console.log('Logout');
          google.accounts.id.disableAutoSelect();
        });
      }
      this.user = null;
      localStorage.removeItem('user');
      return '/login';
    },
    isAuthenticated() {
      console.log('isAuthenticated', this.user);
      if (this.user?.token) return true;
      return false;
    }
  }
});
