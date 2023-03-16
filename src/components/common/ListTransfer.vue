<template>
  <n-transfer
      ref="transfer"
      v-model:value="selectedValues"
      virtual-scroll
      :options="optionList"
      source-filterable
      target-filterable
      size="large"
    />
</template>

<script setup lang="ts">
  import { ref, defineProps, toRefs, defineExpose } from 'vue';
  import {NTransfer} from "naive-ui";
  import type { IListTransfer } from '@/types/IListTransfer';

  const props = defineProps({
    optionList: Array<IListTransfer>,
  });

  const selectedValues = ref([]);

  function getSelectedValues() {
    return selectedValues;
  }

  const { optionList } = toRefs(props);
  defineExpose({ getSelectedValues });
</script>
