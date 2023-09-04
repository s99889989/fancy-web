<script setup lang="ts">

import FancyCoreSidebar from "~/pages/plugins/fancy_series/fancy_core/FancyCoreSidebar.vue";

import FC_Commands from "~/pages/plugins/fancy_series/fancy_core/pages/FC_Commands.vue";
import FC_Permissions from "~/pages/plugins/fancy_series/fancy_core/pages/FC_Permissions.vue";
import FC_DownLoad from "~/pages/plugins/fancy_series/fancy_core/pages/FC_DownLoad.vue";
import FC_API from "~/pages/plugins/fancy_series/fancy_core/pages/FC_API.vue";


import FC_Entity_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FC_Entity_List.vue";
import FC_Player_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FC_Player_List.vue";
import FC_Location_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FC_Location_List.vue";
import FC_Meta_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FC_Meta_List.vue";
import FC_Classes_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FC_Classes_List.vue";

import FC_Character_Character from "~/pages/plugins/fancy_series/fancy_core/pages/character/FC_Character_Character.vue";
import FC_Character_Placeholders from "~/pages/plugins/fancy_series/fancy_core/pages/character/FC_Character_Placeholders.vue";
import FC_Character_Attribute from "~/pages/plugins/fancy_series/fancy_core/pages/character/FC_Character_Attribute.vue";

import FC_Example_1 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_1.vue";
import FC_Example_2 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_2.vue";
import FC_Example_3 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_3.vue";
import FC_Example_4 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_4.vue";
import FC_Example_5 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_5.vue";
import FC_Example_6 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_6.vue";
import FC_Example_7 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_7.vue";
import FC_Example_8 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_8.vue";
import FC_Example_9 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_9.vue";
import FC_Example_10 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_10.vue";
import FC_Example_11 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_11.vue";
import FC_Example_12 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_12.vue";
import FC_Example_13 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_13.vue";
import FC_Example_14 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_14.vue";
import FC_Example_15 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FC_Example_15.vue";

import FC_Aims from "~/pages/plugins/fancy_series/fancy_core/pages/FC_Aims.vue";

const currentPath = ref('FC_Commands')

const setView = (data: string) => {
  currentPath.value = data;
}
const currentView = computed(() => {
  switch (currentPath.value){
    case "FC_Commands":
      return FC_Commands;
    case "FC_Permissions":
      return FC_Permissions;
    case "FC_DownLoad":
      return FC_DownLoad;
    case "FC_API":
      return FC_API;
    case "FC_Entity_List":
      return FC_Entity_List;
    case "FC_Player_List":
      return FC_Player_List;
    case "FC_Location_List":
      return FC_Location_List;
    case "FC_Meta_List":
      return FC_Meta_List;
    case "FC_Classes_List":
      return FC_Classes_List;
    case "FC_Character_Character":
      return FC_Character_Character;
    case "FC_Character_Placeholders":
      return FC_Character_Placeholders;
    case "FC_Character_Attribute":
      return FC_Character_Attribute;
    case "FC_Example_1":
      return FC_Example_1;
    case "FC_Example_2":
      return FC_Example_2;
    case "FC_Example_3":
      return FC_Example_3;
    case "FC_Example_4":
      return FC_Example_4;
    case "FC_Example_5":
      return FC_Example_5;
    case "FC_Example_6":
      return FC_Example_6;
    case "FC_Example_7":
      return FC_Example_7;
    case "FC_Example_8":
      return FC_Example_8;
    case "FC_Example_9":
      return FC_Example_9;
    case "FC_Example_10":
      return FC_Example_10;
    case "FC_Example_11":
      return FC_Example_11;
    case "FC_Example_12":
      return FC_Example_12;
    case "FC_Example_13":
      return FC_Example_13;
    case "FC_Example_14":
      return FC_Example_14;
    case "FC_Example_15":
      return FC_Example_15;
    case "FC_Aims":
      return FC_Aims;
    default:
      return FC_Commands;
  }
})

</script>

<template>
  <FancyCoreSidebar  @select_page="setView" />
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>