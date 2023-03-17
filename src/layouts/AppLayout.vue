<template>
  <n-config-provider
    :theme="appStore.isDark ? darkTheme : lightTheme"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <n-layout>
            <div class="app-layout">
              <aside-menu-view></aside-menu-view>
              <header-view></header-view>
              <div>
                
              </div>
              <div class="app-layout__content">
                <div class="app-layout__page">
                  <div class="layout fluid">
                    <router-view />
                  </div>
                </div>
              </div>
            </div>
          </n-layout>
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

import { darkTheme, lightTheme, NLayout, NConfigProvider, NLoadingBarProvider, NDialogProvider, NNotificationProvider, NMessageProvider} from 'naive-ui'
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()

</script>
