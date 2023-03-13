<script setup lang="ts">
import DropDown from '@/components/DropDown.vue';
import type { IListTransfer } from '@/components/interface/IListTransfer';
import ListTransfer from '@/components/ListTransfer.vue';

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
  console.log("selectd Value");
}
</script>


<template>
  <div>
    
    ghkjhiu
    <DropDown
    ></DropDown>
    <ListTransfer
    :option-list="createOptions()"></ListTransfer>
    <button :click="getSelectedValues()">Click</button>
  </div>
</template>

