<script setup lang="ts">

</script>

<template>
  <h1 class="py-3 text-2xl dark:text-white">Command</h1>
  <p class="dark:text-white">OP或控制台用指令。</p>
  <p class="dark:text-white">開頭指令縮寫/fpack。</p>
  <p class="dark:text-white">Command for OP or console.</p>
  <p class="dark:text-white">Start with the abbreviation /fpack.</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p>指令(管理員) Commands(OP)</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p>描述 Description</p>
        </th>

      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>/fancypack reload</p>

        </th>
        <td class="px-6 py-4">
          <p>重新讀取設定</p>
          <p>Reread settings</p>
        </td>
      </tr>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>/fancycore download &lt;player></p>

        </th>
        <td class="px-6 py-4">
          <p>讓指定玩家下載資源包。</p>
          <p>Specify the player to download the resource pack.</p>
        </td>

      </tr>

      </tbody>
    </table>
  </div>

  <p class="dark:text-white">玩家用指令。</p>
  <p class="dark:text-white">The player uses instructions.</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p>指令 Commands</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p>描述 Description</p>

        </th>

      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

          <p>/fancycore download</p>
        </th>
        <td class="px-6 py-4">
          <p>下載材質包。</p>
          <p>Download the resource pack.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>