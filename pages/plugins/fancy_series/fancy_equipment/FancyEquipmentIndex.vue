<script setup lang="ts">
import {useFancyEquipmentPages} from "~/stores/plugins/fancy_series/fancy_equipment/useFancyEquipmentPages";
const fancyEquipmentPages = useFancyEquipmentPages();

import FancyEquipmentSidebar from "~/pages/plugins/fancy_series/fancy_equipment/FancyEquipmentSidebar.vue";

import FEQ_Commands from "~/pages/plugins/fancy_series/fancy_equipment/pages/FEQ_Commands.vue";

const currentView = computed(() => {
  switch (fancyEquipmentPages.pageName){
    case 'FEQ_Commands':
      return FEQ_Commands;
    default:
      return FEQ_Commands;
  }
})
</script>

<template>
  <FancyEquipmentSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>