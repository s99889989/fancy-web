<script setup lang="ts">

</script>

<template>

  <p class="text-4xl dark:text-white">Image</p>
  <p class="text-2xl dark:text-white">功能：圖片</p>
  <p class="text-2xl dark:text-white">Function:Image</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">顯示圖片。</p>
  <p class="text-2xl dark:text-white">Display image.</p>

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
          <p class="text-base dark:text-white">Image</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要使用的圖片位置。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Width</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">圖片寬度，0為依據圖片本身寬度。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Height</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">圖片高度，0為依據圖片本身高度。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-4xl text-red-500">範例Examples</p>

  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ImageExample:
  Type: Image
  Image: 'https://i.imgur.com/5B9nsam.png'
  Width: 20
  Height: 20</code>
  </pre>
</template>

<style scoped>

</style>