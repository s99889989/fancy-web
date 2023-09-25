<script setup lang="ts">
import {useCustomDisplayPages} from "~/stores/plugins/custom_display/useCustomDisplayPages";
const customDisplayPages = useCustomDisplayPages();
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
          <p class="text-3xl dark:text-white">CustomDisplay</p>
        </div>
        <li>
          <a @click="customDisplayPages.setPage('CDI_Introduce')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Introduce</span>
          </a>
        </li>
        <li>
          <a @click="customDisplayPages.setPage('CDI_Commands')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Commands</span>
          </a>
        </li>
        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-character" data-collapse-toggle="dropdown-character">

            <span class="flex-1 ml-3 text-left whitespace-nowrap">Character</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-character" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="customDisplayPages.setPage('CDI_Character_Character')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Character</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('CDI_Character_Placeholders')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Placeholders</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('CDI_Character_Attribute')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Attribute</a>
            </li>

          </ul>
        </li>
        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-classes" data-collapse-toggle="dropdown-classes">

            <span class="flex-1 ml-3 text-left whitespace-nowrap">Classes</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-classes" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="customDisplayPages.setPage('CDI_Class_Main')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Main</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('CDI_Class_Action')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Action</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('CDI_Class_Attributes')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Attributes</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('CDI_Class_Level')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Level</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('CDI_Class_Skill')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Skill</a>
            </li>

          </ul>
        </li>
        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-action" data-collapse-toggle="dropdown-action">

            <span class="flex-1 ml-3 text-left whitespace-nowrap">Action</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-action" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="customDisplayPages.setPage('FCO_Entity_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Entity</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('FCO_Player_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Player</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('FCO_Location_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Location</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('FCO_Meta_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Meta</a>
            </li>

            <li>
              <a href="#" @click="customDisplayPages.setPage('FCO_Classes_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Classes</a>
            </li>

          </ul>
        </li>
        <li>
          <a @click="customDisplayPages.setPage('CDI_Item')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Item</span>
          </a>
        </li>
        <li>
          <a @click="customDisplayPages.setPage('CDI_GUI')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">GUI</span>
          </a>
        </li>
        <li>
          <a @click="customDisplayPages.setPage('CDI_TexturePack')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">TexturePack</span>
          </a>
        </li>
        <li>
          <a @click="customDisplayPages.setPage('CDI_ModDownLoad')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">ModDownLoad</span>
          </a>
        </li>
        <li>
          <a @click="customDisplayPages.setPage('CDI_Config')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Config</span>
          </a>
        </li>
        <li>
          <a @click="customDisplayPages.setPage('CDI_Video')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Video</span>
          </a>
        </li>
        <li>
          <a @click="customDisplayPages.setPage('CDI_Example_List')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Example</span>
          </a>
        </li>

        <li>
          <a href="https://www.spigotmc.org/resources/custom-display.85568/" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="flex-1 ml-3 whitespace-nowrap">Spigot</span>
          </a>
        </li>

      </ul>
    </div>
  </aside>




</template>

<style scoped>

</style>