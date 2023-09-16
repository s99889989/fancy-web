<script setup lang="ts">
import {useFancyDropPages} from "~/stores/plugins/fancy_series/fancy_drop/useFancyDropPages";
const fancyDropPages = useFancyDropPages();
import FancyDropSidebar from "~/pages/plugins/fancy_series/fancy_drop/FancyDropSidebar.vue";

import FDR_Commands from "~/pages/plugins/fancy_series/fancy_drop/pages/FDR_Commands.vue";

const currentView = computed(() => {
  switch (fancyDropPages.pageName){
    case 'FDR_Commands':
      return FDR_Commands;
    default:
      return FDR_Commands;
  }
})
</script>

<template>
  <FancyDropSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>