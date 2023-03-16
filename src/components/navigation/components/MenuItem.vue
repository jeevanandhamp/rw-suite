<template>
  <a href="#">
    <div class="menu-blk click">
      <img :src="imageUrl" class="icon" />
      <span class="title">{{ menu.title }}</span>
    </div>
  </a>
</template>
<script setup lang="ts">
import { defineProps , ref, watchEffect} from 'vue';
const prop = defineProps({
  menu: {
    //#warning Don't use Object type directly
    type: Object,
    required: true,
  },
});

const imageUrl = ref();
//#warning seems like it is not a efficient way
watchEffect(async () => {
  imageUrl.value = (await import(`../assets/${prop.menu.image}`)).default;
})

</script>
<style lang="scss">
// @import "@/styles/components/AsideBarBlock.scss";
</style>
