<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import {useUnrealCorePluginPages} from "~/stores/plugins/unreal_core/useUnrealCorePluginPages";
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";


const unrealCorePluginPages = useUnrealCorePluginPages();
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();

onMounted(() => {
  initFlowbite();
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
        <li class="flex justify-center">
          <p class="text-2xl dark:text-white">{{unrealCorePluginLanguage.data.sidebar.title}}</p>
        </li>
        <li>
          <a href="#" @click="unrealCorePluginPages.setPage('UnrealCoreIntroduce')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">{{unrealCorePluginLanguage.data.sidebar.introduce}}</span>
          </a>
        </li>
<!--        <li>-->
<!--          <a href="#" @click="unrealCorePluginPages.setPage('UnrealCoreCommand')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->
<!--            <span class="ml-3">{{unrealCorePluginLanguage.data.sidebar.commands}}</span>-->
<!--          </a>-->
<!--        </li>-->

        <li>
          <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_Tooltip')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">{{unrealCorePluginLanguage.data.sidebar.tooltip_config}}</span>
          </a>
        </li>

        <li>
          <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">{{unrealCorePluginLanguage.data.sidebar.gui_config}}</span>

          </a>
        </li>

        <li>
          <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_HUD')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">{{unrealCorePluginLanguage.data.sidebar.hud_config}}</span>

          </a>
        </li>

        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="gui-config" data-collapse-toggle="gui-config">
            <span class="flex-1 ml-3 text-left whitespace-nowrap">{{unrealCorePluginLanguage.data.sidebar.module_config}}</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="gui-config" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_AreaInput')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.area_input}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Button')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.button}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Check')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.check}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Container')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.container}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Entity')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.entity}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Image')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.image}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Input')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.input}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Item')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.item}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Range')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.range}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Select')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.select}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Slot')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.slot}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Config_GUI_Text')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.module_config_list.text}}</a>
            </li>
          </ul>
        </li>


        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="placeholder" data-collapse-toggle="placeholder">
            <span class="flex-1 ml-3 text-left whitespace-nowrap">{{unrealCorePluginLanguage.data.sidebar.placeholder}}</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="placeholder" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Placeholder_Display')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.placeholder_list.display}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Placeholder_Entity')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.placeholder_list.entity}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Placeholder_System')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.placeholder_list.system}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Placeholder_Player')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.placeholder_list.player}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Placeholder_Resource')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.placeholder_list.resource}}</a>
            </li>
            <li>
              <a href="#" @click="unrealCorePluginPages.setPage('UCP_Placeholder_Sound')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {{unrealCorePluginLanguage.data.sidebar.placeholder_list.sound}}</a>
            </li>
          </ul>
        </li>

<!--        <li>-->
<!--          <a href="#" @click="unrealCorePluginPages.setPage('UnrealCoreDownLoad')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->

<!--            <span class="flex-1 ml-3 whitespace-nowrap">{{unrealCorePluginLanguage.data.sidebar.download}}</span>-->

<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" @click="unrealCorePluginPages.setPage('UnrealCoreAPI')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->

<!--            <span class="flex-1 ml-3 whitespace-nowrap">{{unrealCorePluginLanguage.data.sidebar.api}}</span>-->
<!--          </a>-->
<!--        </li>-->

      </ul>
    </div>
  </aside>




</template>

<style scoped>

</style>