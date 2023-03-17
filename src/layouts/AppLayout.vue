<template>
  <n-config-provider
    :theme="appStore.isDark ? darkTheme : lightTheme"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <n-space>
              <n-layout>
                <n-layout has-sider>
                  <n-layout-sider
                    bordered
                    show-trigger
                    collapse-mode="width"
                    :collapsed-width="100"
                    :width="240"
                    :native-scrollbar="false"
                    :position="'static'"
                    :collapsed="collapsed"
                    @collapse="collapsed = true"
                    @expand="collapsed = false"
                  >
                  <aside-menu-view @collapse-open="openSubMenu"></aside-menu-view>
                  </n-layout-sider>
                  <n-layout :native-scrollbar="false">
                    <n-layout-header>
                      <header-view></header-view>
                    </n-layout-header>
                    <router-view />
                  </n-layout>
                </n-layout>
              </n-layout>
            </n-space>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from '@/components/header/HeaderIndex.vue';
import AsideMenuView from '@/components/navigation/AsideMenu.vue';
import { ref } from 'vue';
import { 
  darkTheme, 
  lightTheme, 
  NSpace, 
  NLayout, 
  NSwitch,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NScrollbar,
  NConfigProvider, 
  NLoadingBarProvider, 
  NDialogProvider, 
  NNotificationProvider, 
  NMessageProvider
} from 'naive-ui'
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()
const collapsed = ref(true);
let menuVal;
function openSubMenu() {
  collapsed.value = false;
  console.log(collapsed.value);
}

</script>
