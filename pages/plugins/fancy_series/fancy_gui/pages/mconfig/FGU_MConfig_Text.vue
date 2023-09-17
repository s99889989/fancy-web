<script setup lang="ts">

</script>

<template>

  <p class="text-4xl dark:text-white">Text</p>
  <p class="text-2xl dark:text-white">功能：文字</p>
  <p class="text-2xl dark:text-white">Function:Word</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">顯示文字列。</p>
  <p class="text-2xl dark:text-white"></p>

  <p class="text-4xl text-red-500">屬性Attributes</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱 Attribute</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述 Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">預設值 Default</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Scale</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">文字大小</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">RowHeight</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">每行的距離。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">7</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Align</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">文字對齊位置，1為靠左、2為置中、3為靠右。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Text</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要顯示的文字。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-4xl text-red-500">範例Examples</p>

  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
TextExample:
  Scale: 1
  Type: Text
  RowHeight: 7
  Align: 2
  Text:
  - 'Example'
  - '§e範例: &text_field_1&'
  - '雷達火'</code>
  </pre>
</template>

<style scoped>

</style>