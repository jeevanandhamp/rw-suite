


<script setup lang="ts">
import MenuItem from "@/components/navigation/components/MenuItem.vue";
import { useAuthStore } from '@/stores/auth.store';

import { ref } from 'vue'
const authStore = useAuthStore();

const result = ref({
  menus: [
        {
          title: "Purchasing",
          image: "purchasing.svg",
        },
        {
          title: "Warehouse",
          image: "warehouse.svg",
        },
        {
          title: "Accounting",
          image: "accounting.svg",
        },
        {
          title: "Orders",
          image: "orders.svg",
        },
        {
          title: "Returns",
          image: "returns.svg",
        },
        {
          title: "Dashboards",
          image: "dashboard.svg",
        },
        {
          title: "Products",
          image: "product.svg",
        },
        {
          title: "Sales channel",
          image: "salesChannel.svg",
        },
        {
          title: "Settings",
          image: "settings.svg",
        },
        {
          title: "Others",
          image: "others.svg",
        },
      ]
}
    );

</script>

<template>
  
  <div class="aside-bar-container" :menu="result">
    <div class="erp-logo erp"></div>
    <!-- <menu-item
      v-for="menu in result.menus"
      :key="menu.title"
      :menu="menu"
    ></menu-item> -->
    <nav>
      <router-link to="/products/spec-table">Products Spec table</router-link>
      <router-link to="/">home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/hikeathon">Hikeathon</router-link>
      <router-link v-if="authStore.isAuthenticated()" to="/logout">Logout</router-link>
    </nav>
  </div>
   <!-- <Sub-Menubar-View v-show="result"></Sub-Menubar-View>  -->
</template>


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
  display: block;
  padding: 1rem 1rem;
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

