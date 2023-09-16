<script setup lang="ts">
import {useFancyMobsPages} from "~/stores/plugins/fancy_series/fancy_mobs/useFancyMobsPages";
const fancyMobsPages = useFancyMobsPages();
import FancyMobsSidebar from "~/pages/plugins/fancy_series/fancy_mobs/FancyMobsSidebar.vue";

import FMO_Commands from "~/pages/plugins/fancy_series/fancy_mobs/pages/FMO_Commands.vue";

const currentView = computed(() => {
  switch (fancyMobsPages.pageName){
    case 'FMO_Commands':
      return FMO_Commands;
    default:
      return FMO_Commands;
  }
})

</script>

<template>
  <FancyMobsSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>