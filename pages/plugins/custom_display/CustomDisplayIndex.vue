<script setup lang="ts">
import {useCustomDisplayPages} from "~/stores/plugins/custom_display/useCustomDisplayPages";
const customDisplayPages = useCustomDisplayPages();

import CustomDisplaySidebar from "~/pages/plugins/custom_display/CustomDisplaySidebar.vue";


const currentView = computed(() => {
  switch (customDisplayPages.pageName){
    default:

  }
})

</script>

<template>
  <CustomDisplaySidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <p class="dark:text-white">CustomDisplay</p>
  </div>
</template>

<style scoped>

</style>