<script setup lang="ts">

import {useUnrealCorePluginPages} from "~/stores/plugins/unreal_core/useUnrealCorePluginPages";
const unrealCorePluginPages = useUnrealCorePluginPages();


import UnrealCoreSidebar from "~/pages/plugins/unreal_core/UnrealCoreSidebar.vue";

import UnrealCoreIntroduce from "~/pages/plugins/unreal_core/pages/UnrealCoreIntroduce.vue";
import UnrealCoreAPI from "~/pages/plugins/unreal_core/pages/UnrealCoreAPI.vue";
import UnrealCoreCommand from "~/pages/plugins/unreal_core/pages/UnrealCoreCommand.vue";
import UnrealCoreDownLoad from "~/pages/plugins/unreal_core/pages/UnrealCoreDownLoad.vue";

import {integer} from "vscode-languageserver-types";
import UCP_Config_Tooltip from "~/pages/plugins/unreal_core/pages/config/UCP_Config_Tooltip.vue";
import UCP_Config_GUI from "~/pages/plugins/unreal_core/pages/config/UCP_Config_GUI.vue";
import UCP_Config_HUD from "~/pages/plugins/unreal_core/pages/config/UCP_Config_HUD.vue";
import UCP_Config_GUI_AreaInput from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_AreaInput.vue";
import UCP_Config_GUI_Button from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Button.vue";
import UCP_Config_GUI_Check from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Check.vue";
import UCP_Config_GUI_Container from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Container.vue";
import UCP_Config_GUI_Entity from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Entity.vue";
import UCP_Config_GUI_Image from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Image.vue";
import UCP_Config_GUI_Input from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Input.vue";
import UCP_Config_GUI_Item from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Item.vue";
import UCP_Config_GUI_Range from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Range.vue";
import UCP_Config_GUI_Select from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Select.vue";
import UCP_Config_GUI_Slot from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Slot.vue";
import UCP_Config_GUI_Text from "~/pages/plugins/unreal_core/pages/config/module/UCP_Config_GUI_Text.vue";


import UCP_Placeholder_Display from "~/pages/plugins/unreal_core/pages/placeholder/UCP_Placeholder_Display.vue";
import UCP_Placeholder_Entity from "~/pages/plugins/unreal_core/pages/placeholder/UCP_Placeholder_Entity.vue";
import UCP_Placeholder_Player from "~/pages/plugins/unreal_core/pages/placeholder/UCP_Placeholder_Player.vue";
import UCP_Placeholder_Resource from "~/pages/plugins/unreal_core/pages/placeholder/UCP_Placeholder_Resource.vue";
import UCP_Placeholder_System from "~/pages/plugins/unreal_core/pages/placeholder/UCP_Placeholder_System.vue";
import UCP_Placeholder_Sound from "~/pages/plugins/unreal_core/pages/placeholder/UCP_Placeholder_Sound.vue";


const currentPath = ref(0)

const setView = (data: integer) => {
  currentPath.value = data;
}

const currentView = computed(() => {
  switch (unrealCorePluginPages.pageName) {
    case 'UnrealCoreIntroduce':
      return UnrealCoreIntroduce;
    case 'UnrealCoreCommand':
      return UnrealCoreCommand;
    case 'UCP_Placeholder_Display':
      return UCP_Placeholder_Display;
    case 'UCP_Placeholder_Entity':
      return UCP_Placeholder_Entity;
    case 'UCP_Placeholder_Player':
      return UCP_Placeholder_Player;
    case 'UCP_Placeholder_Resource':
      return UCP_Placeholder_Resource;
    case 'UCP_Placeholder_System':
      return UCP_Placeholder_System;
    case 'UCP_Placeholder_Sound':
      return UCP_Placeholder_Sound;
    case 'UCP_Config_Tooltip':
      return UCP_Config_Tooltip;
    case 'UCP_Config_GUI':
      return UCP_Config_GUI;
    case 'UCP_Config_HUD':
      return UCP_Config_HUD;
    case 'UCP_Config_GUI_AreaInput':
      return UCP_Config_GUI_AreaInput;
    case 'UCP_Config_GUI_Button':
      return UCP_Config_GUI_Button;
    case 'UCP_Config_GUI_Check':
      return UCP_Config_GUI_Check;
    case 'UCP_Config_GUI_Container':
      return UCP_Config_GUI_Container;
    case 'UCP_Config_GUI_Entity':
      return UCP_Config_GUI_Entity;
    case 'UCP_Config_GUI_Image':
      return UCP_Config_GUI_Image;
    case 'UCP_Config_GUI_Input':
      return UCP_Config_GUI_Input;
    case 'UCP_Config_GUI_Item':
      return UCP_Config_GUI_Item;
    case 'UCP_Config_GUI_Range':
      return UCP_Config_GUI_Range;
    case 'UCP_Config_GUI_Select':
      return UCP_Config_GUI_Select;
    case 'UCP_Config_GUI_Slot':
      return UCP_Config_GUI_Slot;
    case 'UCP_Config_GUI_Text':
      return UCP_Config_GUI_Text;
    case 'UnrealCoreDownLoad':
      return UnrealCoreDownLoad;
    case 'UnrealCoreAPI':
      return UnrealCoreAPI;
    default:
      return UnrealCoreIntroduce;
  }
})

</script>

<template>
  <UnrealCoreSidebar />
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">

    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>