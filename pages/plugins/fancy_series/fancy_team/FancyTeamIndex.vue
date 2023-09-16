<script setup lang="ts">
import {useFancyTeamPages} from "~/stores/plugins/fancy_series/fancy_team/useFancyTeamPages";
const fancyTeamPages = useFancyTeamPages();
import FancyTeamSidebar from "~/pages/plugins/fancy_series/fancy_team/FancyTeamSidebar.vue";

import FTE_Commands from "~/pages/plugins/fancy_series/fancy_team/pages/FTE_Commands.vue";

const currentView = computed(() => {
  switch (fancyTeamPages.pageName){
    case 'FTE_Commands':
      return FTE_Commands;
    default:
      return FTE_Commands;
  }
})

</script>

<template>
  <FancyTeamSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>