<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'
import { ref } from 'vue'
import { NSwitch } from 'naive-ui'
const appStore = useAppStore()
const isDark =  ref(appStore.isDark)
const toggleDark = () => {
  appStore.toggleDark()
}
</script>

<template>
  <n-switch v-model:value="isDark" @update:value="toggleDark">
    <template #checked>
        Dark
      </template>
      <template #unchecked>
        Light
      </template>
  </n-switch>
</template>
