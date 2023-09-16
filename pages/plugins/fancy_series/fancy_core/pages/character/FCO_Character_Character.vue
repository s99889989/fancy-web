<script setup lang="ts">

import FC_Character_Character_Content from "~/pages/plugins/fancy_series/fancy_core/pages/character/character/FCO_Character_Character_Content.vue";
import FC_Character_Character_Convert from "~/pages/plugins/fancy_series/fancy_core/pages/character/character/FCO_Character_Character_Convert.vue";
import FC_Character_Character_Math from "~/pages/plugins/fancy_series/fancy_core/pages/character/character/FCO_Character_Character_Math.vue";
import {integer} from "vscode-languageserver-types";


const currentPath = ref(0)

const setView = (data: integer) => {
  currentPath.value = data;
}

const currentView = computed(() => {
  const aaa = [FC_Character_Character_Content,  FC_Character_Character_Convert, FC_Character_Character_Math ]

  return aaa[currentPath.value] || FC_Character_Character_Content
})

</script>

<template>


  <div class="flex justify-center">
    <div class="inline-flex rounded-md shadow-sm bg-gray-800">
      <a href="#" @click="setView(0)" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Content
      </a>
      <a href="#" @click="setView(1)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Convert
      </a>
      <a href="#" @click="setView(2)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Math
      </a>
    </div>
  </div>

  <component :is="currentView" />

</template>

<style scoped>

</style>