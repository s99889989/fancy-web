<script setup lang="ts">
import {useFancyHUDPages} from "~/stores/plugins/fancy_series/fancy_hud/useFancyHUDPages";
const fancyHUDPages = useFancyHUDPages();
import FancyHUDSidebar from "~/pages/plugins/fancy_series/fancy_hud/FancyHUDSidebar.vue";

</script>

<template>
  <FancyHUDSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <p class="dark:text-white">HUD</p>
  </div>
</template>

<style scoped>

</style>