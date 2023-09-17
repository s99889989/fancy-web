<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Placeholders</p>

  <p class="text-2xl text-red-500">Class</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱 Placeholder name</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述 Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">範例 Example</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">gui_text_field_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">TextField獲取到的值。</p>
          <p class="text-base dark:text-white">The value obtained by the TextField.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">&lt;fc_self_text_field_2.ExampleObject.TextFieldExample></p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>