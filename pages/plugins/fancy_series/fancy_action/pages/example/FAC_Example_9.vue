<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();
</script>

<template>
  <p class="text-2xl dark:text-white">在生物頭上顯示血量等資訊。</p>
  <p class="text-2xl dark:text-white">Display blood volume and other information on the head of the creature.</p>
  <p class="text-2xl dark:text-white">Action:</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">因為只需要顯示一個，所以必須用mark標記，不然會出現好幾個。</p>
  <p class="text-2xl dark:text-white">Because only one needs to be displayed, it must be marked with a mark, otherwise several will appear.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
</code>
  </pre>
  <a @click="fancyCoreSidebar.setPage('FC_Example_9')" href="/plugins/fancy_series/fancy_core/FancyCoreIndex" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <span class="ml-3">CoreAction9</span>
  </a>
</template>

<style scoped>

</style>