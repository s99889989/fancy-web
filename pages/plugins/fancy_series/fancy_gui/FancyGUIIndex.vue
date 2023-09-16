<script setup lang="ts">
import {useFancyGUIPages} from "~/stores/plugins/fancy_series/fancy_gui/useFancyGUIPages";
const fancyGUIPages = useFancyGUIPages();

import FancyGUISidebar from "~/pages/plugins/fancy_series/fancy_gui/FancyGUISidebar.vue";

import FGU_Commands from "~/pages/plugins/fancy_series/fancy_gui/pages/FGU_Commands.vue";
import FGU_Config from "~/pages/plugins/fancy_series/fancy_gui/pages/FGU_Config.vue";
import FGU_MConfig_Button from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_Button.vue";
import FGU_MConfig_MenuButton from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_MenuButton.vue";
import FGU_MConfig_CheckBox from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_CheckBox.vue";
import FGU_MConfig_ChoiceBox from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_ChoiceBox.vue";
import FGU_MConfig_Entity from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_Entity.vue";
import FGU_MConfig_Item from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_Item.vue";
import FGU_MConfig_OptionSlider from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_OptionSlider.vue";
import FGU_MConfig_PullPanel from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_PullPanel.vue";
import FGU_MConfig_SlotItem from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_SlotItem.vue";
import FGU_MConfig_TextField from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_TextField.vue";
import FGU_MConfig_Image from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_Image.vue";
import FGU_MConfig_Text from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_Text.vue";
import FGU_MConfig_GUI from "~/pages/plugins/fancy_series/fancy_gui/pages/mconfig/FGU_MConfig_GUI.vue";
import FGU_Placeholders from "~/pages/plugins/fancy_series/fancy_gui/pages/FGU_Placeholders.vue";
import FGU_API from "~/pages/plugins/fancy_series/fancy_gui/pages/FGU_API.vue";

const currentView = computed(() => {
  switch (fancyGUIPages.pageName){
    case "FGU_Commands":
      return FGU_Commands;
    case "FGU_Config":
      return FGU_Config;
    case "FGU_MConfig_Button":
      return FGU_MConfig_Button;
    case "FGU_MConfig_MenuButton":
      return FGU_MConfig_MenuButton;
    case "FGU_MConfig_CheckBox":
      return FGU_MConfig_CheckBox;
    case "FGU_MConfig_ChoiceBox":
      return FGU_MConfig_ChoiceBox;
    case "FGU_MConfig_Entity":
      return FGU_MConfig_Entity;
    case "FGU_MConfig_Item":
      return FGU_MConfig_Item;
    case "FGU_MConfig_OptionSlider":
      return FGU_MConfig_OptionSlider;
    case "FGU_MConfig_PullPanel":
      return FGU_MConfig_PullPanel;
    case "FGU_MConfig_SlotItem":
      return FGU_MConfig_SlotItem;
    case "FGU_MConfig_TextField":
      return FGU_MConfig_TextField;
    case "FGU_MConfig_Image":
      return FGU_MConfig_Image;
    case "FGU_MConfig_Text":
      return FGU_MConfig_Text;
    case "FGU_MConfig_GUI":
      return FGU_MConfig_GUI;
    case "FGU_Placeholders":
      return FGU_Placeholders;
    case "FGU_API":
      return FGU_API;
    default:
      return FGU_Commands;
  }
})

</script>

<template>
  <FancyGUISidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>