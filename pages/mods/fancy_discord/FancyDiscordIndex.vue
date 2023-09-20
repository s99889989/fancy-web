<script setup lang="ts">
import {useFancyDiscordPages} from "~/stores/mods/fancy_discord/useFancyDiscordPages";
const fancyDiscordPages = useFancyDiscordPages();


import FancyDiscordSidebar from "~/pages/mods/fancy_discord/FancyDiscordSidebar.vue";

import FDI_Commands from "~/pages/mods/fancy_discord/pages/FDI_Commands.vue";
import FDI_Introduce from "~/pages/mods/fancy_discord/pages/FDI_Introduce.vue";
import FDI_Config from "~/pages/mods/fancy_discord/pages/FDI_Config.vue";
import FDI_Video from "~/pages/mods/fancy_discord/pages/FDI_Video.vue";


const currentView = computed(() => {
  switch (fancyDiscordPages.pageName){
    case 'FDI_Description':
      return FDI_Introduce;
    case 'FDI_Commands':
      return FDI_Commands;
    case 'FDI_Config':
      return FDI_Config;
    case 'FDI_Video':
      return FDI_Video;
    default:
      return FDI_Introduce;
  }
})

</script>

<template>
  <FancyDiscordSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>