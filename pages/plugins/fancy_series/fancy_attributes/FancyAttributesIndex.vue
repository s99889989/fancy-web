<script setup lang="ts">

import {useFancyAttributesPages} from "~/stores/plugins/fancy_series/fancy_attributes/useFancyAttributesPages";
const fancyAttributesPages = useFancyAttributesPages();

import FancyAttributesSidebar from "~/pages/plugins/fancy_series/fancy_attributes/FancyAttributesSidebar.vue";

import FAT_Commands from "~/pages/plugins/fancy_series/fancy_attributes/pages/FAT_Commands.vue";

const currentView = computed(() => {
  switch (fancyAttributesPages.pageName){
    case 'FAT_Commands':
      return FAT_Commands;
    default:
      return FAT_Commands;
  }
})
</script>

<template>
  <FancyAttributesSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>