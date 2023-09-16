<script setup lang="ts">
import {useFancyChatPages} from "~/stores/plugins/fancy_series/fancy_chat/useFancyChatPages";
const fancyChatPages = useFancyChatPages();

import FancyChatSidebar from "~/pages/plugins/fancy_series/fancy_chat/FancyChatSidebar.vue";

import FCH_Commands from "~/pages/plugins/fancy_series/fancy_chat/pages/FCH_Commands.vue";

const currentView = computed(() => {
  switch (fancyChatPages.pageName){
    case 'FCH_Commands':
      return FCH_Commands;
    default:
      return FCH_Commands;
  }
})

</script>

<template>
  <FancyChatSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>