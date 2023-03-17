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
  {{isDark? "Dark" : "Light"}} <n-switch v-model:value="isDark" @update:value="toggleDark" />
</template>
