<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();
</script>

<template>
  <p class="text-2xl dark:text-white">血量低於設定值就顯示紅色閃爍。</p>
  <p class="text-2xl dark:text-white">When the blood volume is lower than the set value, it will flash red.</p>
  <p class="text-2xl dark:text-white">Action:</p>
  <p class="text-2xl dark:text-white">因為使用無限時間任務，必須在離開時關閉。</p>
  <p class="text-2xl dark:text-white">Because it uses an infinite time mission, it must be closed when leaving.</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=TitleHealthDisplay;mark=&title_self_name&TitleHealthDisplay] ~onJoin
- Action[mark=&title_self_name&amp;TitleHealthDisplay;stop=true] ~onQuit</code>
  </pre>
  <a @click="fancyCoreSidebar.setPage('FC_Example_4')" href="/plugins/fancy_series/fancy_core/FancyCoreIndex" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <span class="ml-3">CoreAction4</span>
  </a>
</template>

<style scoped>

</style>