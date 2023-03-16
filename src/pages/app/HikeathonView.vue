<script setup lang="ts">
import { ref } from 'vue';
import DropDown from '@/components/tobedeleted/DropDown.vue';
import type { IListTransfer } from '@/types/IListTransfer';
import ListTransfer from '@/components/common/ListTransfer.vue';
import CopyToClipboard from '@/components/common/CopyToClipboard.vue';

const presetColumns = ref();

const teamName = ref("");

function createOptions () {
  let optionList : Array<IListTransfer> = [];
    for (let i = 0; i < 10; i++) {
      optionList.push({
        label: 'Option ' + i,
        value: i,
        disabled: i % 5 === 0
      });
    }
    return optionList;
  }

function getSelectedValues() {
  console.log("selectd Value", presetColumns.value.getSelectedValues().value);
}

</script>


<template>
  <div>
    
    ghkjhiu
    <DropDown
    ></DropDown>
    <ListTransfer
    ref="presetColumns"
    :option-list="createOptions()"
    width = 100%
    ></ListTransfer>
    <input v-model="teamName" type="text"  placeholder="Please enter the text..."/>
    <copy-to-clipboard :success-text="'Copied'" :code="teamName"></copy-to-clipboard>
    
    <button @click="getSelectedValues">Click</button>
  </div>
</template>

