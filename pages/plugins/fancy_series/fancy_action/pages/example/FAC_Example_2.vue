<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();
</script>

<template>
  <p class="text-2xl dark:text-white">在ActionBar顯示個人血量和魔量。</p>
  <p class="text-2xl dark:text-white">Show personal health and magic power in ActionBar.</p>
  <p class="text-2xl dark:text-white">Action:</p>
  <p class="text-2xl dark:text-white">在登入時開啟，在登出後關閉。</p>
  <p class="text-2xl dark:text-white">在按下F鍵時關閉，再按下F鍵時開啟。</p>
  <p class="text-2xl dark:text-white">Turn on when logging in, and turn off after logging out.</p>
  <p class="text-2xl dark:text-white">Turn off when the F key is pressed, and turn on when the F key is pressed again.</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=ActionBarDisplay;mark=&acb_self_name&ActionBarDisplay] ~onJoin
- Action[a=ActionBarDisplay;mark=&acb_self_name&ActionBarDisplay] ~onKeyFOFF
- Action[mark=&acb_self_name&amp;ActionBarDisplay;stop=true] ~onKeyFON
- Action[mark=&acb_self_name&amp;ActionBarDisplay;stop=true] ~onQuit
- Action[a=ActionBarDisplayFalse] ~onKeyFON</code>
  </pre>
  <a @click="fancyCoreSidebar.setPage('FC_Example_2')" href="/plugins/fancy_series/fancy_core/FancyCoreIndex" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <span class="ml-3">CoreAction2</span>
  </a>
</template>

<style scoped>

</style>