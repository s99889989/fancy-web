<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">ActionBar</p>
  <p class="text-2xl text-red-500">動作: 動作欄</p>
  <p class="text-2xl text-red-500">Action: Action Bar</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">在物品欄上方顯示內容.</p>
  <p class="text-2xl dark:text-white">Display content above the inventory.</p>
  <img class="w-100" src="/plugins/custom_display/action/player/actionBar.png" alt="">

  <p class="text-3xl text-red-500 pt-10">屬性Attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱</p>
          <p class="text-base dark:text-white">Attribute</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">縮寫</p>
          <p class="text-base dark:text-white">Aliases</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">預設值</p>
          <p class="text-base dark:text-white">Default</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Remove</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">r</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">是否移除其他的ActionBar。</p>
          <p class="text-base dark:text-white">Whether to remove other ActionBar.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Message</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">m</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">內容</p>
          <p class="text-base dark:text-white">content</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ActionBarDisplay:
  Action:
  - Loop[onTime=ActionBarDisplay-Time;period=40;duration=0]
ActionBarDisplay-Time:
  Action:
  - ActionBar[remove=true;m=&acb_self_nowhealth&/&acb_self_maxhealth&&acb_self_health_proportion_10&&acb_self_nowmana&/&acb_self_maxmana&&acb_self_mmocore_mana_proportion_10&]

ActionBarDisplayFalse:
  Action:
  - ActionBar[remove=false]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>