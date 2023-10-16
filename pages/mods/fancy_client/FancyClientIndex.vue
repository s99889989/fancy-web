<script setup lang="ts">
import {useFancyClientPages} from "~/stores/mods/fancy_client/useFancyClientPages";
const fancyClientPages = useFancyClientPages();

import FancyClientSidebar from "~/pages/mods/fancy_client/FancyClientSidebar.vue";

import FCM_Introduce from "~/pages/mods/fancy_client/pages/FCM_Introduce.vue";
import FCM_Video from "~/pages/mods/fancy_client/pages/FCM_Video.vue";

const currentView = computed(() => {
  switch (fancyClientPages.pageName){
    case 'FCM_Introduce': return FCM_Introduce;
    case 'FCM_Video': return FCM_Video;
    default: return FCM_Introduce;
  }
})
</script>

<template>
  <FancyClientSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>