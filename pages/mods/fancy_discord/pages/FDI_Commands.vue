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



      </tbody>
    </table>
  </div>


  <p class="text-3xl dark:text-white">Discord Command</p>

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
          <p class="text-base dark:text-white">!tps</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">查看伺服器TPS。</p>
          <p class="text-base dark:text-white">Check the server TPS.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">!list</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">查看伺服器玩家人數。</p>
          <p class="text-base dark:text-white">Check the number of players on the server.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>