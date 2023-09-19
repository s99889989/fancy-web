<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Command</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">指令</p>
          <p class="text-base dark:text-white">Commands</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclear reload</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">重新讀取設置。</p>
          <p class="text-base dark:text-white">Re-read the settings.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclear kill</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">根據設置，刪除實體。</p>
          <p class="text-base dark:text-white">According to the setting, delete the entity.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclear look mob</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">查看當前存在的生物，並將信息保存在mob-list.json中。</p>
          <p class="text-base dark:text-white">View the currently existing creatures and save the information in mob-list.json.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclear look item</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">檢查當前存在的項目並將消息保存在 item-list.json 中。</p>
          <p class="text-base dark:text-white">Check the currently existing items and save the message in item-list.json.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclear look pet</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">檢查現有寵物並將消息保存在 pet-list.json 中。</p>
          <p class="text-base dark:text-white">Check the existing pets and save the message in pet-list.json.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>