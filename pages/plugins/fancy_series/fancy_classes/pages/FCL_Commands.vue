<script setup lang="ts">

</script>

<template>
  <h1 class="py-3 text-2xl dark:text-white">Command</h1>
  <p class="dark:text-white">OP或控制台用指令。</p>
  <p class="dark:text-white">開頭指令縮寫/fclassses。</p>
  <p class="dark:text-white">Command for OP or console.</p>
  <p class="dark:text-white">Start with the abbreviation /fclassses.</p>


  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">指令(管理員) Commands(OP)</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述 Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclasses help</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">顯示指令介紹</p>
          <p class="text-base dark:text-white">Display command introduction.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclasses reload</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">重新讀取設定</p>
          <p class="text-base dark:text-white">Reread settings</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclasses class change &lt;classname> &lt;player></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">轉換職業。(繼承前一個職業的一些屬性等..)</p>
          <p class="text-base dark:text-white">Change class. (Inherit some attributes of the previous profession, etc...)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclasses class rebirth &lt;classname> &lt;player></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">轉換職業。(完全不繼承轉換前的任何資料)</p>
          <p class="text-base dark:text-white">Change class. (Does not inherit any data before conversion at all)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">/fancyclasses exp give &lt;type> &lt;amount> &lt;player></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">給予經驗值。</p>
          <p class="text-base dark:text-white">Give experience points.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>