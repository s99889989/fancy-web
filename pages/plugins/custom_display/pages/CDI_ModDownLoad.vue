<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">ModDownLoad</p>

  <p class="text-2xl dark:text-white">客戶端模組下載。</p>
  <p class="text-2xl dark:text-white">此模組只能安裝在客戶端，並搭配CustomDisplay插件做運用。</p>
  <p class="text-2xl dark:text-white">Client module download.</p>
  <p class="text-2xl dark:text-white">This module can only be installed on the client and used with the CustomDisplay plugin.</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">版本</p>
          <p class="text-base dark:text-white">Version</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">CustomDisplay版本</p>
          <p class="text-base dark:text-white">CustomDisplay Version</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">Minecraft版本</p>
          <p class="text-base dark:text-white">Minecraft Version</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">模組類型</p>
          <p class="text-base dark:text-white">Mod Type</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">下載</p>
          <p class="text-base dark:text-white">DownLoad</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">1.0</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1.14.5</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1.16.5</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">Forge</p>
        </td>
        <td class="px-6 py-4">
          <a class="text-base dark:text-white" href="https://www.dropbox.com/s/1xyv18s5gkc9ge4/customdisplayforge-1.16.5-1.0.jar?dl=1" target="_blank">DownLoad</a>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>