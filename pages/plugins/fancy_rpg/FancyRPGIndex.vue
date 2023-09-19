<script setup lang="ts">
import {useFancyRPGPages} from "~/stores/plugins/fancy_rpg/useFancyRPGPages";
const fancyRPGPages = useFancyRPGPages();


import FancyRPGSidebar from "~/pages/plugins/fancy_rpg/FancyRPGSidebar.vue";



const currentView = computed(() => {
  switch (fancyRPGPages.pageName){
    default:

  }
})

</script>

<template>
  <FancyRPGSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <p class="dark:text-white">FancyRPG</p>
  </div>
</template>

<style scoped>

</style>