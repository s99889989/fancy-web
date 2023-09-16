<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">目標為玩家</p>
  <p class="text-2xl dark:text-white">The goal is the player</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >動作 Actions</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">ActionBar</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">下方欄位顯示。</p>
          <p class="text-base">The lower field is displayed.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">BossBar</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">上方欄位顯示。</p>
          <p class="text-base">The upper field is displayed.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Command</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">執行指令。</p>
          <p class="text-base">Execute instructions.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Exp</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">給予經驗。</p>
          <p class="text-base">Give experience.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Item</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">對物品的相關操作。</p>
          <p class="text-base">Related operations on items.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Inventory</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">對背包的相關操作。</p>
          <p class="text-base">Related operations on the backpack.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Level</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">修改等級。</p>
          <p class="text-base">Modify the level.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Mana</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">修改魔量。</p>
          <p class="text-base">Modify the mana.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Money</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">錢相關的功能。</p>
          <p class="text-base">Money related functions.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Title</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">畫面中間顯示。</p>
          <p class="text-base">Displayed in the middle of the screen.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>