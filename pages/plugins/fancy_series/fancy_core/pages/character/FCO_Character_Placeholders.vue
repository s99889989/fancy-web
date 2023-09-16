<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">自訂字符</p>
  <p class="text-2xl dark:text-white">Placeholders</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-lg dark:text-white">這裡為CustomDisplay插件專用的佔位符。</p>
  <p class="text-lg dark:text-white">Here is a placeholder dedicated to the CustomDisplay plugin.</p>

  <p class="text-2xl dark:text-white pt-10">目標</p>
  <p class="text-2xl dark:text-white">Aims</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <p class="text-lg dark:text-white">目標選擇 Target selection</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >佔位符名稱 Placeholder name</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>


      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">&lt;fc_target</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">針對目標。</p>
          <p class="text-base">Targeted.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">&lt;fc_self</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">針對自己。</p>
          <p class="text-base">Against yourself.</p>
        </td>

      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-lg dark:text-white pt-10">目標選擇 Target selection</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >佔位符名稱 Placeholder name</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>


      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base"></p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base"></p>
          <p class="text-base"></p>
        </td>

      </tr>

      </tbody>
    </table>
  </div>


</template>

<style scoped>

</style>