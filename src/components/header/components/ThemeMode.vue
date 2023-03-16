<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'
import { NSwitch } from 'naive-ui'
const appStore = useAppStore()
const isDark =  ref(useDark())
const toggleDark = () => {
  appStore.toggleDark()
  useToggle(isDark)()
}
</script>

<template>
  {{isDark? "Dark" : "Light"}} <n-switch v-model:value="isDark" @update:value="toggleDark" />
</template>
