


<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import IconCommunity from '@/components/icons/IconCommunity.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import IconEcosystem from '@/components/icons/IconEcosystem.vue';
import IconSupport from '@/components/icons/IconSupport.vue';
import { ref, defineProps, defineEmits, toRefs } from 'vue'
import IconPurchasing from '@/components/icons/IconPurchasing.vue';
import IconWarehouse from '@/components/icons/IconWarehouse.vue';
import IconAccounting from '@/components/icons/IconAccounting.vue';
import IconOrders from '@/components/icons/IconOrders.vue';
import IconReturns from '@/components/icons/IconReturns.vue';
import IconDashboard from '@/components/icons/IconDashboard.vue';
import IconProducts from '@/components/icons/IconProducts.vue';
import IconSetting from '@/components/icons/IconSetting.vue';
import IconOther from '@/components/icons/IconOther.vue';
import { NScrollbar } from 'naive-ui';
const authStore = useAuthStore();
const emit = defineEmits(['collapse-open', 'collapse-close'])

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


interface SubMenu {
  icon: string, title: string, route: string
};

const menuVal = ref();

const menuItems = [
  {icon: "IconWarehouse", title: "Warehouse", 
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"},
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"},
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"},
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconAccounting", title: "Accounting",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconOrders", title: "Orders",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconReturns", title: "Returns",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconDashboard", title: "Dashboard",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconProducts", title: "Products",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]
  },
  {icon: "IconSetting", title: "Setting",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconOther", title: "Other",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconWarehouse", title: "Warehouse", 
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconAccounting", title: "Accounting",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconOrders", title: "Orders",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconReturns", title: "Returns",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconDashboard", title: "Dashboard",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconProducts", title: "Products",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]
  },
  {icon: "IconSetting", title: "Setting",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]},
  {icon: "IconOther", title: "Other",
  subMenu:[
    {icon: "IconAccounting", title: "Accounting"},
    {icon: "IconOrders", title: "Orders"},
    {icon: "IconReturns", title: "Returns"},
    {icon: "IconDashboard", title: "Dashboard"},
    {icon: "IconProducts", title: "Products"},
    {icon: "IconSetting", title: "Setting"}
  ]}
];

function getMenuIconComponent(iconComponent:string) {
    if('IconWarehouse' === iconComponent)
      return IconWarehouse;
    else if('IconAccounting' === iconComponent)
      return IconAccounting;
    else if('IconOrders' === iconComponent)
      return IconOrders;
    else if('IconReturns' === iconComponent)
      return IconReturns;
    else if('IconDashboard' === iconComponent)
      return IconDashboard;
    else if('IconProducts' === iconComponent)
      return IconProducts;
    else if('IconSetting' === iconComponent)
      return IconSetting;
    else
      return IconOther;
}

function updateSubmenu(menuItems:any) {
  menuVal.value = menuItems;
  emit('collapse-open');
}
</script>

<template>
  <div class="aside-bar">
    <div  style="height: 100vh">
    <div class="aside-bar-menu">
      <div class="erp-logo">
        <img src="/logo.svg" alt="'RW 3.0'"/>
      </div>
      <nav>
        <template v-for="(item, idx) in menuItems" :key="idx">
          <a @click="updateSubmenu(item?.subMenu)"  class="nv-itm">
            <div>
              <component :is="getMenuIconComponent(item.icon)"/>
              <div>{{ item.title }}</div>
            </div>
          </a>
        </template>
        <router-link v-if="authStore.isAuthenticated()" to="/logout">Logout</router-link>
      </nav>
    </div>
  </div>
    <NScrollbar class="sub-menu"  style="height: 100vh">
      <nav>
        <template v-for="(item, idx) in menuVal" :key="idx">
          <router-link to="item.route"  class="nv-sb-itm">
              <component :is="getMenuIconComponent(item.icon)"/>
              <div>{{ item.title }}</div>
          </router-link>
        </template>
        
      </nav>
    </NScrollbar>
  </div>
   <!-- <Sub-Menubar-View v-show="result"></Sub-Menubar-View>  -->
</template>


<style scoped lang="css">

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 1rem 1rem;
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

