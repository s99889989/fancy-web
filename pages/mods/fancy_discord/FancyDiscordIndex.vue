<script setup lang="ts">
import {useFancyDiscordPages} from "~/stores/mods/fancy_discord/useFancyDiscordPages";
const fancyDiscordPages = useFancyDiscordPages();


import FancyDiscordSidebar from "~/pages/mods/fancy_discord/FancyDiscordSidebar.vue";



const currentView = computed(() => {
  switch (fancyDiscordPages.pageName){
    default:

  }
})

</script>

<template>
  <FancyDiscordSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <p class="dark:text-white">FancyDiscord</p>
  </div>
</template>

<style scoped>

</style>