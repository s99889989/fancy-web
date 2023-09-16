<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();
</script>

<template>
  <p class="text-2xl dark:text-white">被攻擊時在畫面上顯示紅色血效果。</p>
  <p class="text-2xl dark:text-white">A red blood effect is displayed on the screen when being attacked.</p>
  <p class="text-2xl dark:text-white">Action:</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=TitleDisplayAttacked] ~onDamaged</code>
  </pre>
  <a @click="fancyCoreSidebar.setPage('FC_Example_5')" href="/plugins/fancy_series/fancy_core/FancyCoreIndex" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <span class="ml-3">CoreAction5</span>
  </a>
</template>

<style scoped>

</style>