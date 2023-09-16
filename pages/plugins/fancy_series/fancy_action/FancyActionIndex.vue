<script setup lang="ts">

import FancyActionSidebar from "~/pages/plugins/fancy_series/fancy_action/FancyActionSidebar.vue";
import FAC_Action from "~/pages/plugins/fancy_series/fancy_action/pages/FAC_Action.vue";
import FAC_Trigger from "~/pages/plugins/fancy_series/fancy_action/pages/FAC_Trigger.vue";
import FAC_Examples from "~/pages/plugins/fancy_series/fancy_action/pages/FAC_Examples.vue";
import FAC_Example_1 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_1.vue";
import FAC_Example_2 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_2.vue";
import FAC_Example_3 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_3.vue";
import FAC_Example_4 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_4.vue";
import FAC_Example_5 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_5.vue";
import FAC_Example_6 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_6.vue";
import FAC_Example_7 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_7.vue";
import FAC_Example_8 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_8.vue";
import FAC_Example_9 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_9.vue";
import FAC_Example_10 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_10.vue";
import FAC_Example_11 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_11.vue";
import FAC_Example_12 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_12.vue";
import FAC_Example_13 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_13.vue";
import FAC_Example_14 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_14.vue";
import FAC_Example_15 from "~/pages/plugins/fancy_series/fancy_action/pages/example/FAC_Example_15.vue";

import {useFancyActionPages} from "~/stores/plugins/fancy_series/fancy_action/useFancyActionPages";
const fancyActionSidebar = useFancyActionPages();


const currentView = computed(() => {
  switch (fancyActionSidebar.pageName){
    case "FAC_Action":
      return FAC_Action
    case "FAC_Trigger":
      return FAC_Trigger
    case "FAC_Examples":
      return FAC_Examples
    case "FAC_Example_1":
      return FAC_Example_1
    case "FAC_Example_2":
      return FAC_Example_2
    case "FAC_Example_3":
      return FAC_Example_3
    case "FAC_Example_4":
      return FAC_Example_4
    case "FAC_Example_5":
      return FAC_Example_5
    case "FAC_Example_6":
      return FAC_Example_6
    case "FAC_Example_7":
      return FAC_Example_7
    case "FAC_Example_8":
      return FAC_Example_8
    case "FAC_Example_9":
      return FAC_Example_9
    case "FAC_Example_10":
      return FAC_Example_10
    case "FAC_Example_11":
      return FAC_Example_11
    case "FAC_Example_12":
      return FAC_Example_12
    case "FAC_Example_13":
      return FAC_Example_13
    case "FAC_Example_14":
      return FAC_Example_14
    case "FAC_Example_15":
      return FAC_Example_15
    default:
      return FAC_Action;
  }
})

</script>

<template>
  <FancyActionSidebar />
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView"/>
  </div>
</template>

<style scoped>

</style>