<script setup lang="ts">
import {useFancyClassesPages} from "~/stores/plugins/fancy_series/fancy_classes/useFancyClassesPages";
const fancyClassesPages = useFancyClassesPages();
import FancyClassesSidebar from "~/pages/plugins/fancy_series/fancy_classes/FancyClassesSidebar.vue";

import FCL_Commands from "~/pages/plugins/fancy_series/fancy_classes/pages/FCL_Commands.vue";
import FCL_Placeholders from "~/pages/plugins/fancy_series/fancy_classes/pages/FCL_Placeholders.vue";

const currentView = computed(() => {
  switch (fancyClassesPages.pageName){
    case 'FCL_Placeholders':
      return FCL_Placeholders;
    case 'FCL_Commands':
        return FCL_Commands;
    default:
      return FCL_Commands;
  }
})

</script>

<template>
  <FancyClassesSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>