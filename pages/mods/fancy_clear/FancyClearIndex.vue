<script setup lang="ts">
import {useFancyClearPages} from "~/stores/mods/fancy_clear/useFancyClearPages";
const fancyClearPages = useFancyClearPages();

import FancyClearSidebar from "~/pages/mods/fancy_clear/FancyClearSidebar.vue";

import FCL_Commands from "~/pages/mods/fancy_clear/pages/FCL_Commands.vue";
import FCL_Introduce from "~/pages/mods/fancy_clear/pages/FCL_Introduce.vue";
import FCL_Config from "~/pages/mods/fancy_clear/pages/FCL_Config.vue";
import FCL_Video from "~/pages/mods/fancy_clear/pages/FCL_Video.vue";

const currentView = computed(() => {
  switch (fancyClearPages.pageName){
    case 'FCL_Introduce':
      return FCL_Introduce;
    case 'FCL_Commands':
      return FCL_Commands;
    case 'FCL_Config':
      return FCL_Config;
    case 'FCL_Video':
      return FCL_Video;
    default:
      return FCL_Introduce;
  }
})

</script>

<template>
  <FancyClearSidebar/>


  <div class="dark:bg-dark p-4 sm:ml-64 container-top">

    <component :is="currentView" />

  </div>

</template>

<style scoped>



</style>