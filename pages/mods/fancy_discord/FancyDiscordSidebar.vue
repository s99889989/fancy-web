<script setup lang="ts">
import {useFancyDiscordPages} from "~/stores/mods/fancy_discord/useFancyDiscordPages";
const fancyDiscordPages = useFancyDiscordPages();
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
        <div class="flex justify-center">
          <p class="text-3xl dark:text-white">FancyDiscord</p>
        </div>
        <li>
          <a @click="fancyDiscordPages.setPage('FDI_Introduce')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Introduce</span>
          </a>
        </li>
        <li>
          <a @click="fancyDiscordPages.setPage('FDI_Commands')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Commands</span>
          </a>
        </li>
        <li>
          <a @click="fancyDiscordPages.setPage('FDI_Config')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Config</span>
          </a>
        </li>
        <li>
          <a @click="fancyDiscordPages.setPage('FDI_Video')" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="ml-3">Video</span>
          </a>
        </li>
        <li>
          <a href="https://legacy.curseforge.com/minecraft/mc-mods/fancydiscord" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="flex-1 ml-3 whitespace-nowrap">CurseForge</span>
          </a>
        </li>

      </ul>
    </div>
  </aside>




</template>

<style scoped>

</style>