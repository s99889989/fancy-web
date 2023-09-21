<script setup lang="ts">
import {useUnrealCoreModPages} from "~/stores/mods/unreal_core/useUnrealCoreModPages";
const unrealCoreModPages = useUnrealCoreModPages();


import {integer} from "vscode-languageserver-types";

const emit = defineEmits(['update'])

const currentPath = ref(0)
const setView = (data: integer) => {
  currentPath.value = data;
}

const pageName = computed(()=>{
  return currentPath.value;
})

watch(pageName, (newValue)=>{
  emit('update', newValue);
})

</script>

<template>

  <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="fixed inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>

  <aside id="default-sidebar" class="container-sidebar-top fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <div class="flex justify-center">
          <p class="text-3xl dark:text-white">UnrealCorePlugin</p>
        </div>
        <li>
          <a href="#" @click="unrealCoreModPages.setPage('UnrealCoreIntroduce')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Introduce</span>
          </a>
        </li>
        <li>
          <a href="#" @click="unrealCoreModPages.setPage('UnrealCoreCommand')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Commands</span>
          </a>
        </li>

        <li>
          <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_Tooltip')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">TooltipConfig</span>
          </a>
        </li>

        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="gui-config" data-collapse-toggle="gui-config">
            <span class="flex-1 ml-3 text-left whitespace-nowrap">GUIConfig</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="gui-config" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_AreaInput')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                AreaInput</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Button')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Button</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Check')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Check</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Container')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Container</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Entity')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Entity</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Image')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Image</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Input')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Input</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Item')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Item</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Range')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Range</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Select')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Select</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Slot')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Slot</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_GUI_Text')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Text</a>
            </li>
          </ul>
        </li>


        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="hud-config" data-collapse-toggle="hud-config">
            <span class="flex-1 ml-3 text-left whitespace-nowrap">HUDConfig</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="hud-config" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_HUD_Text')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Button</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_HUD_Image')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                MenuButton</a>
            </li>
            <li>
              <a href="#" @click="unrealCoreModPages.setPage('UCP_Config_HUD_Item')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                CheckBox</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" @click="unrealCoreModPages.setPage('UnrealCoreDownLoad')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">DownLoad</span>

          </a>
        </li>
        <li>
          <a href="#" @click="unrealCoreModPages.setPage('UnrealCoreAPI')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">API</span>
          </a>
        </li>
<!--        <li>-->
<!--          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--            <span class="flex-1 ml-3 whitespace-nowrap">Spigot</span>-->
<!--          </a>-->
<!--        </li>-->

      </ul>
    </div>
  </aside>




</template>

<style scoped>

</style>