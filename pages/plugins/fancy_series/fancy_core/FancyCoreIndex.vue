<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();


import FancyCoreSidebar from "~/pages/plugins/fancy_series/fancy_core/FancyCoreSidebar.vue";

import FCO_Commands from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_Commands.vue";
import FCO_Permissions from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_Permissions.vue";
import FCO_DownLoad from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_DownLoad.vue";
import FCO_API from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_API.vue";


import FCO_Entity_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Entity_List.vue";
import FCO_Player_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Player_List.vue";
import FCO_Location_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Location_List.vue";
import FCO_Meta_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Meta_List.vue";
import FCO_Classes_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Classes_List.vue";

import FCO_Character_Character from "~/pages/plugins/fancy_series/fancy_core/pages/character/FCO_Character_Character.vue";
import FCO_Character_Placeholders from "~/pages/plugins/fancy_series/fancy_core/pages/character/FCO_Character_Placeholders.vue";
import FCO_Character_Attribute from "~/pages/plugins/fancy_series/fancy_core/pages/character/FCO_Character_Attribute.vue";

import FCO_Examples from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_Examples.vue";
import FCO_Example_1 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_1.vue";
import FCO_Example_2 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_2.vue";
import FCO_Example_3 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_3.vue";
import FCO_Example_4 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_4.vue";
import FCO_Example_5 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_5.vue";
import FCO_Example_6 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_6.vue";
import FCO_Example_7 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_7.vue";
import FCO_Example_8 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_8.vue";
import FCO_Example_9 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_9.vue";
import FCO_Example_10 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_10.vue";
import FCO_Example_11 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_11.vue";
import FCO_Example_12 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_12.vue";
import FCO_Example_13 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_13.vue";
import FCO_Example_14 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_14.vue";
import FCO_Example_15 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_15.vue";

import FCO_Aims from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_Aims.vue";

const currentView = computed(() => {
  switch (fancyCoreSidebar.pageName){
    case "FCO_Commands":
      return FCO_Commands;
    case "FCO_Permissions":
      return FCO_Permissions;
    case "FCO_DownLoad":
      return FCO_DownLoad;
    case "FCO_API":
      return FCO_API;
    case "FCO_Entity_List":
      return FCO_Entity_List;
    case "FCO_Player_List":
      return FCO_Player_List;
    case "FCO_Location_List":
      return FCO_Location_List;
    case "FCO_Meta_List":
      return FCO_Meta_List;
    case "FCO_Classes_List":
      return FCO_Classes_List;
    case "FCO_Character_Character":
      return FCO_Character_Character;
    case "FCO_Character_Placeholders":
      return FCO_Character_Placeholders;
    case "FCO_Character_Attribute":
      return FCO_Character_Attribute;
    case "FCO_Examples":
      return FCO_Examples;
    case "FCO_Example_1":
      return FCO_Example_1;
    case "FCO_Example_2":
      return FCO_Example_2;
    case "FCO_Example_3":
      return FCO_Example_3;
    case "FCO_Example_4":
      return FCO_Example_4;
    case "FCO_Example_5":
      return FCO_Example_5;
    case "FCO_Example_6":
      return FCO_Example_6;
    case "FCO_Example_7":
      return FCO_Example_7;
    case "FCO_Example_8":
      return FCO_Example_8;
    case "FCO_Example_9":
      return FCO_Example_9;
    case "FCO_Example_10":
      return FCO_Example_10;
    case "FCO_Example_11":
      return FCO_Example_11;
    case "FCO_Example_12":
      return FCO_Example_12;
    case "FCO_Example_13":
      return FCO_Example_13;
    case "FCO_Example_14":
      return FCO_Example_14;
    case "FCO_Example_15":
      return FCO_Example_15;
    case "FCO_Aims":
      return FCO_Aims;
    default:
      return FCO_Commands;
  }
})

</script>

<template>
  <FancyCoreSidebar />
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>