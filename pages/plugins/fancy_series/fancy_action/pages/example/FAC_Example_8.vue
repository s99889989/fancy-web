<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();
</script>

<template>
  <p class="text-2xl dark:text-white">使用指令觸發，在頭上顯示表情符號。</p>
  <p class="text-2xl dark:text-white">Use command trigger to display emoticons on the head.</p>
  <p class="text-2xl dark:text-white">Action:</p>
  <p class="text-2xl dark:text-white">當輸入指令時執行該動作</p>
  <p class="text-2xl dark:text-white">The action is executed when the command is entere</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=EmojiHelpHD] ~onCommand</code>
  </pre>
  <a @click="fancyCoreSidebar.setPage('FC_Example_8')" href="/plugins/fancy_series/fancy_core/FancyCoreIndex" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <span class="ml-3">CoreAction8</span>
  </a>
</template>

<style scoped>

</style>