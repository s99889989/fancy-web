<script setup lang="ts">
import {useFancyGUIPages} from "~/stores/plugins/fancy_series/fancy_gui/useFancyGUIPages";
const fancyGUIPages = useFancyGUIPages();
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
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
        <li>
          <a @click="fancyGUIPages.setPage('FGU_Commands')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Commands</span>
          </a>
        </li>
        <li>
          <a @click="fancyGUIPages.setPage('FGU_Config')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">GuiConfig</span>
          </a>
        </li>

        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-action" data-collapse-toggle="dropdown-action">
            <span class="flex-1 ml-3 text-left whitespace-nowrap">ModGuiConfig</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-action" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_Button')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Button</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_MenuButton')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                MenuButton</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_CheckBox')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                CheckBox</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_ChoiceBox')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                ChoiceBox</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_Entity')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Entity</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_Item')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Item</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_OptionSlider')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                OptionSlider</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_PullPanel')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                PullPanel</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_SlotItem')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                SlotItem</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_TextField')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                TextField</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_Image')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Image</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_Text')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Text</a>
            </li>
            <li>
              <a href="#" @click="fancyGUIPages.setPage('FGU_MConfig_GUI')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                GUI</a>
            </li>
          </ul>
        </li>
        <li>
          <a @click="fancyGUIPages.setPage('FGU_Placeholders')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Placeholders</span>
          </a>
        </li>
<!--        <li>-->
<!--          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->

<!--            <span class="flex-1 ml-3 whitespace-nowrap">Permissions</span>-->

<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->

<!--            <span class="flex-1 ml-3 whitespace-nowrap">DownLoad</span>-->

<!--          </a>-->
<!--        </li>-->
        <li>
          <a @click="fancyGUIPages.setPage('FGU_API')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">API</span>
          </a>
        </li>
        <li>
          <a href="https://www.spigotmc.org/resources/fancygui.96026/" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="flex-1 ml-3 whitespace-nowrap">Spigot</span>
          </a>
        </li>

      </ul>
    </div>
  </aside>




</template>

<style scoped>

</style>