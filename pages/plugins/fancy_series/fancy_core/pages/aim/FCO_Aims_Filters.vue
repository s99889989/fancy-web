<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">過濾 Filters</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <p class="text-2xl dark:text-white">過濾選擇需要的目標。</p>
  <p class="text-2xl dark:text-white">Filter and select the desired target.</p>
  <p class="text-2xl dark:text-white">設定檔位置在CustomDisplay/Character/System/TargetFilters.yml。</p>

  <p class="text-2xl dark:text-white">過濾類型Filter type</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >類型 Types</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">檔案位置</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">EntityTypeList</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">生物類型。</p>
          <p class="text-base">Type of Entity.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">CustomDisplay/Character/System/EntityTypeList.yml</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">MythicTypeList</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">MythicMobs名稱。</p>
          <p class="text-base">MythicMobs ID.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">CustomDisplay/Character/System/MythicTypeList.yml</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">MythicFactions</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">MythicMobs派系。</p>
          <p class="text-base">MythicMobs faction.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>

      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white">功能Features</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >功能名稱 Function</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>


      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Add</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">只選擇該類型目標。</p>
          <p class="text-base">Only select targets of that type.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Remove</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">不選擇該類型目標。</p>
          <p class="text-base">Do not select this type of target.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white">範例Examples</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Filt1:
  TargetFilters:
  - Add=EntityTypeList=Monster
  - Remove=Factions=新生
  - Remove=Factions=Undead
  - Add=MythicTypeList=MMTest</code>
  </pre>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Test2:
  TargetFilters:
  - Add=EntityTypeList=Animal</code>
  </pre>

</template>

<style scoped>

</style>