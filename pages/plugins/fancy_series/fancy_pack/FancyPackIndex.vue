<script setup lang="ts">
import {useFancyPackPages} from "~/stores/plugins/fancy_series/fancy_pack/useFancyPackPages";
const fancyPackPages = useFancyPackPages();

import FancyPackSidebar from "~/pages/plugins/fancy_series/fancy_pack/FancyPackSidebar.vue";

import FPA_Commands from "~/pages/plugins/fancy_series/fancy_pack/pages/FPA_Commands.vue";

const currentView = computed(() => {
  switch (fancyPackPages.pageName){
    case 'FPA_Commands':
      return FPA_Commands;
    default:
      return FPA_Commands;
  }
})

</script>

<template>
  <FancyPackSidebar />
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>