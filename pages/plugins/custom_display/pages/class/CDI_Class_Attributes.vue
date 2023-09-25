<script setup lang="ts">
import {integer} from "vscode-languageserver-types";
import CDI_Class_Attributes_Point from "~/pages/plugins/custom_display/pages/class/attributes/CDI_Class_Attributes_Point.vue";
import CDI_Class_Attributes_EntityStats from "~/pages/plugins/custom_display/pages/class/attributes/CDI_Class_Attributes_EntityStats.vue";
import CDI_Class_Attributes_EquipmentStats from "~/pages/plugins/custom_display/pages/class/attributes/CDI_Class_Attributes_EquipmentStats.vue";

const currentPath = ref(0)

const setView = (data: integer) => {
  currentPath.value = data;
}

const currentView = computed(() => {
  const aaa = [CDI_Class_Attributes_Point, CDI_Class_Attributes_EntityStats, CDI_Class_Attributes_EquipmentStats]

  return aaa[currentPath.value] || CDI_Class_Attributes_Point
})
</script>

<template>
  <div class="flex justify-center">
    <div class="inline-flex rounded-md shadow-sm bg-gray-800">
      <a href="#" @click="setView(0)" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        Point
      </a>
      <a href="#" @click="setView(1)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        EntityStats
      </a>
      <a href="#" @click="setView(2)" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        EquipmentStats
      </a>
    </div>
  </div>

  <component :is="currentView" />
</template>

<style scoped>

</style>