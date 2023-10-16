<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">CustomValue</p>
  <p class="text-2xl text-red-500">動作: 自訂值</p>
  <p class="text-2xl text-red-500">Action: CustomValue</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">對目標增加自訂值。</p>
  <p class="text-2xl dark:text-white">Add custom values to the target.</p>

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
          <p class="text-base dark:text-white">Key</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">k</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">關鍵字。</p>
          <p class="text-base dark:text-white">Keywords.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Label</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">l</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">標籤。</p>
          <p class="text-base dark:text-white">Label.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">core</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Value</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">v</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">增加的值。</p>
          <p class="text-base dark:text-white">Increased value.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>


      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
CustomValueTest:
  Action:
  - CustomValue[Key=attack;label=test;v=100]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>