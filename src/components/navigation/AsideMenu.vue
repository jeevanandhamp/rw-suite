


<script setup lang="ts">
import MenuItem from "@/components/navigation/components/MenuItem.vue";
import { useAuthStore } from '@/stores/auth.store';
import IconCommunity from '@/components/icons/IconCommunity.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import IconEcosystem from '@/components/icons/IconEcosystem.vue';
import IconSupport from '@/components/icons/IconSupport.vue';
import IconTooling from '@/components/icons/IconTooling.vue';
import AsideMenu from '@/components/navigation/AsideMenu.vue';
import { ref, defineProps, defineEmits, toRefs } from 'vue'
const authStore = useAuthStore();
const emit = defineEmits(['collapse-open'])

const props = defineProps( {
  collapsed:{
    type: Boolean,
    default: false
  }
});

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

let menuVal = ref('');

function updateSubmenu(actionName:string) {
  menuVal.value = actionName;
  emit('collapse-open');
}
</script>

<template>
  <div class="aside-bar">
    <div class="aside-bar-container" :menu="result">
      <div class="erp-logo erp"></div>
      <!-- <menu-item
        v-for="menu in result.menus"
        :key="menu.title"
        :menu="menu"
      ></menu-item> -->
      <nav>
        <a @mouseover="updateSubmenu('Product Spec 1')"><IconCommunity/></a>
        <a @mouseover="updateSubmenu('Product Spec 2')"><IconDocumentation/></a>
        <a @mouseover="updateSubmenu('Product Spec 3')"><IconEcosystem/></a>
        <a @mouseover="updateSubmenu('Product Spec 4')"><IconSupport/></a>
        <router-link v-if="authStore.isAuthenticated()" to="/logout">Logout</router-link>
      </nav>
    </div>
    <div class="sub-menu">
      <nav>
        <router-link to="/products/spec-table"><IconCommunity/>{{ menuVal }}</router-link>
        <router-link to="/"><IconDocumentation/>{{ menuVal }}</router-link>
        <router-link to="/about"><IconEcosystem/>{{ menuVal }}</router-link>
        <router-link to="/hikeathon"><IconSupport/>{{ menuVal }}</router-link>
      </nav>
    </div>
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
    text-align: center;
    font-size: 1rem;
    
    padding: 1rem 0;
  }
}
</style>

