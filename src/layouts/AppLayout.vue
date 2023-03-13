<template>
  <div class="app-layout">
    Nav Layout
    <div class="app-layout__content">
      <div class="app-layout__page">
        <nav>
          <RouterLink to="/products/spec-table">Products Spec table</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/hikeathon">Hikeathon</RouterLink>
          <RouterLink v-if="authStore.isAuthenticated()" to="/logout">Logout</RouterLink>
        </nav>
        <div class="layout fluid va-gutter-5">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';
import { computed } from 'vue'
import { useOsTheme, darkTheme, lightTheme } from 'naive-ui'

const authStore = useAuthStore();
const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? lightTheme : darkTheme));
const osTheme = osThemeRef;

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
