<script setup lang="ts">
import {useFancyItemPages} from "~/stores/plugins/fancy_series/fancy_item/useFancyItemPages";
const fancyItemPages = useFancyItemPages();
import FancyItemsSidebar from "~/pages/plugins/fancy_series/fancy_item/FancyItemsSidebar.vue";
import FIT_Commands from "~/pages/plugins/fancy_series/fancy_item/pages/FIT_Commands.vue";
import FIT_Config from "~/pages/plugins/fancy_series/fancy_item/pages/FIT_Config.vue";
import FIT_Enchantments from "~/pages/plugins/fancy_series/fancy_item/pages/FIT_Enchantments.vue";

const currentView = computed(() => {
  switch (fancyItemPages.pageName){
    case "FIT_Commands":
      return FIT_Commands;
    case "FIT_Config":
      return FIT_Config;
    case "FIT_Enchantments":
      return FIT_Enchantments;
    default:
      return FIT_Commands;
  }
})
</script>

<template>
  <FancyItemsSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>