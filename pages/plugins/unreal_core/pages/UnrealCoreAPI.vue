<script setup lang="ts">

import UCP_API_Install from "~/pages/plugins/unreal_core/pages/api/UCP_API_Install.vue";
import UCP_API_GUI from "~/pages/plugins/unreal_core/pages/api/UCP_API_GUI.vue";
import UCP_API_HUD from "~/pages/plugins/unreal_core/pages/api/UCP_API_HUD.vue";
import UCP_API_Audio from "~/pages/plugins/unreal_core/pages/api/UCP_API_Audio.vue";
import UCP_API_Util from "~/pages/plugins/unreal_core/pages/api/UCP_API_Util.vue";
import UCP_API_Event from "~/pages/plugins/unreal_core/pages/api/UCP_API_Event.vue";
import {integer} from "vscode-languageserver-types";

const currentPath = ref(0)
const setView = (data: integer) => {
  currentPath.value = data;
}

const currentView = computed(() => {
  const aaa = [UCP_API_Install, UCP_API_GUI, UCP_API_HUD, UCP_API_Audio, UCP_API_Util, UCP_API_Event ]

  return aaa[currentPath.value] || UCP_API_Install
})
</script>

<template>
  <div class="flex justify-center">
    <div class="inline-flex rounded-md shadow-sm bg-gray-800">
      <a href="#" @click="setView(0)" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Install
      </a>
      <a href="#" @click="setView(1)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-r border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        GUI
      </a>
      <a href="#" @click="setView(2)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-r border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        HUD
      </a>
      <a href="#" @click="setView(3)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-r border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Audio
      </a>
      <a href="#" @click="setView(4)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Util
      </a>
      <a href="#" @click="setView(5)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Event
      </a>
    </div>
  </div>

  <component :is="currentView" />
</template>

<style scoped>

</style>