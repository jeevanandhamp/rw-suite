import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'
import { useOsTheme } from 'naive-ui'

const osThemeRef = useOsTheme();

const isDark = osThemeRef.value === 'dark' ? useDark() : false
export const useAppStore = defineStore('app', {
  state() {
    return {
      reloadFlag: true,
      collapsed: false,
      aliveKeys: {},
      isDark,
    }
  },
  actions: {
    setDark(isDark:boolean) {
      this.isDark = isDark
    },
    toggleDark() {
      this.isDark = !this.isDark
    },
  },
})
