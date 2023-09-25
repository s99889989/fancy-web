<script setup lang="ts">
import {useCustomDisplayPages} from "~/stores/plugins/custom_display/useCustomDisplayPages";
const customDisplayPages = useCustomDisplayPages();

import CustomDisplaySidebar from "~/pages/plugins/custom_display/CustomDisplaySidebar.vue";

import CDI_Introduce from "~/pages/plugins/custom_display/pages/CDI_Introduce.vue";
import CDI_Commands from "~/pages/plugins/custom_display/pages/CDI_Commands.vue";
import CDI_TexturePack from "~/pages/plugins/custom_display/pages/CDI_TexturePack.vue";
import CDI_Example_List from "~/pages/plugins/custom_display/pages/CDI_Example_List.vue";
import CDI_Example_1 from "~/pages/plugins/custom_display/pages/example/CDI_Example_1.vue";
import CDI_Example_2 from "~/pages/plugins/custom_display/pages/example/CDI_Example_2.vue";
import CDI_Example_3 from "~/pages/plugins/custom_display/pages/example/CDI_Example_3.vue";
import CDI_Example_4 from "~/pages/plugins/custom_display/pages/example/CDI_Example_4.vue";
import CDI_Example_5 from "~/pages/plugins/custom_display/pages/example/CDI_Example_5.vue";
import CDI_Example_6 from "~/pages/plugins/custom_display/pages/example/CDI_Example_6.vue";
import CDI_Example_7 from "~/pages/plugins/custom_display/pages/example/CDI_Example_7.vue";
import CDI_Example_8 from "~/pages/plugins/custom_display/pages/example/CDI_Example_8.vue";
import CDI_Example_9 from "~/pages/plugins/custom_display/pages/example/CDI_Example_9.vue";
import CDI_Example_10 from "~/pages/plugins/custom_display/pages/example/CDI_Example_10.vue";
import CDI_Example_11 from "~/pages/plugins/custom_display/pages/example/CDI_Example_11.vue";
import CDI_Example_12 from "~/pages/plugins/custom_display/pages/example/CDI_Example_12.vue";
import CDI_Example_13 from "~/pages/plugins/custom_display/pages/example/CDI_Example_13.vue";
import CDI_Example_14 from "~/pages/plugins/custom_display/pages/example/CDI_Example_14.vue";
import CDI_Example_15 from "~/pages/plugins/custom_display/pages/example/CDI_Example_15.vue";
import CDI_Item from "~/pages/plugins/custom_display/pages/CDI_Item.vue";
import CDI_ModDownLoad from "~/pages/plugins/custom_display/pages/CDI_ModDownLoad.vue";
import CDI_Video from "~/pages/plugins/custom_display/pages/CDI_Video.vue";
import CDI_Class_Main from "~/pages/plugins/custom_display/pages/class/CDI_Class_Main.vue";
import CDI_Class_Action from "~/pages/plugins/custom_display/pages/class/CDI_Class_Action.vue";
import CDI_Class_Attributes from "~/pages/plugins/custom_display/pages/class/CDI_Class_Attributes.vue";
import CDI_Class_Level from "~/pages/plugins/custom_display/pages/class/CDI_Class_Level.vue";
import CDI_Class_Skill from "~/pages/plugins/custom_display/pages/class/CDI_Class_Skill.vue";
import CDI_GUI from "~/pages/plugins/custom_display/pages/CDI_GUI.vue";
import CDI_Character_Character from "~/pages/plugins/custom_display/pages/character/CDI_Character_Character.vue";
import CDI_Character_Placeholders from "~/pages/plugins/custom_display/pages/character/CDI_Character_Placeholders.vue";
import CDI_Character_Attribute from "~/pages/plugins/custom_display/pages/character/CDI_Character_Attribute.vue";
import CDI_Config from "~/pages/plugins/custom_display/pages/CDI_Config.vue";

const currentView = computed(() => {
  switch (customDisplayPages.pageName){
    case 'CDI_Introduce':
      return CDI_Introduce;
    case 'CDI_Commands':
      return CDI_Commands;
    case 'CDI_Item':
      return CDI_Item;
    case 'CDI_Config':
      return CDI_Config;
    case 'CDI_GUI':
      return CDI_GUI;
    case 'CDI_Character_Character':
      return CDI_Character_Character;
    case 'CDI_Character_Placeholders':
      return CDI_Character_Placeholders;
    case 'CDI_Character_Attribute':
      return CDI_Character_Attribute;
    case 'CDI_Class_Action':
      return CDI_Class_Action;
    case 'CDI_Class_Attributes':
      return CDI_Class_Attributes;
    case 'CDI_Class_Level':
      return CDI_Class_Level;
    case 'CDI_Class_Main':
      return CDI_Class_Main;
    case 'CDI_Class_Skill':
      return CDI_Class_Skill;
    case 'CDI_TexturePack':
      return CDI_TexturePack;
    case 'CDI_ModDownLoad':
      return CDI_ModDownLoad;
    case 'CDI_Video':
      return CDI_Video;
    case 'CDI_Example_List':
      return CDI_Example_List;
    case 'CDI_Example_1':
      return CDI_Example_1;
    case 'CDI_Example_2':
      return CDI_Example_2;
    case 'CDI_Example_3':
      return CDI_Example_3;
    case 'CDI_Example_4':
      return CDI_Example_4;
    case 'CDI_Example_5':
      return CDI_Example_5;
    case 'CDI_Example_6':
      return CDI_Example_6;
    case 'CDI_Example_7':
      return CDI_Example_7;
    case 'CDI_Example_8':
      return CDI_Example_8;
    case 'CDI_Example_9':
      return CDI_Example_9;
    case 'CDI_Example_10':
      return CDI_Example_10;
    case 'CDI_Example_11':
      return CDI_Example_11;
    case 'CDI_Example_12':
      return CDI_Example_12;
    case 'CDI_Example_13':
      return CDI_Example_13;
    case 'CDI_Example_14':
      return CDI_Example_14;
    case 'CDI_Example_15':
      return CDI_Example_15;
    default:
      return CDI_Introduce;
  }
})

</script>

<template>
  <CustomDisplaySidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>