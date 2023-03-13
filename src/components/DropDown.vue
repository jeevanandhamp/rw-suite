<template>
  <n-dropdown trigger="hover" :options="dropDownOptions" @select="handleSelect">
    <n-button>Go For a Trip</n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NDropdown} from 'naive-ui';

const dropDownOptions = ref([
        {
          label: 'Marina Bay Sands',
          key: 'marina bay sands',
          disabled: true
        },
        {
          label: "Brown's Hotel, London",
          key: "brown's hotel, london"
        },
        {
          label: 'Atlantis Bahamas, Nassau',
          key: 'atlantis nahamas, nassau'
        },
        {
          label: 'The Beverly Hills Hotel, Los Angeles',
          key: 'the beverly hills hotel, los angeles'
        }
      ]);

 const handleSelect = (key: string | number) => {
  console.log(key);
  }
</script>
