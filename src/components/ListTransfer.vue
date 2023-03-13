<template>
  <n-transfer
      ref="transfer"
      v-model:value="selectedValues"
      virtual-scroll
      :options="optionList"
      source-filterable
      target-filterable
    />
</template>

<script setup lang="ts">
  import { ref, defineProps, toRefs, onMounted } from 'vue';
  import {NTransfer} from "naive-ui";
  import type { IListTransfer } from './interface/IListTransfer';

  const props = defineProps({
    optionList: Array<IListTransfer>,
  });


  // function createValues () {
  //   return Array.from({ length: 50 }).map((v, i) => i)
  // }

  const selectedValues = ref([]);

  function getSelectedValues() {
    return selectedValues;
  }

  const { optionList } = toRefs(props);

</script>
