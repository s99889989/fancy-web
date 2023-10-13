<script setup lang="ts">
import {useFancyRPGPages} from "~/stores/plugins/fancy_rpg/useFancyRPGPages";
const fancyRPGPages = useFancyRPGPages();


import FancyRPGSidebar from "~/pages/plugins/fancy_rpg/FancyRPGSidebar.vue";


import FRP_Introduce from "~/pages/plugins/fancy_rpg/pages/FRP_Introduce.vue";
import FRP_Commands from "~/pages/plugins/fancy_rpg/pages/FRP_Commands.vue";
import FRP_DownLoad from "~/pages/plugins/fancy_rpg/pages/FRP_DownLoad.vue";
import FRP_API from "~/pages/plugins/fancy_rpg/pages/FRP_API.vue";


const currentView = computed(() => {
  switch (fancyRPGPages.pageName){
    case 'FRP_Introduce':
      return FRP_Introduce;
    case 'FRP_Commands':
      return FRP_Commands;
    case 'FRP_DownLoad':
      return FRP_DownLoad;
    case 'FRP_API':
      return FRP_API;
    default:
      return FRP_Introduce;
  }
})

</script>

<template>
  <FancyRPGSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>