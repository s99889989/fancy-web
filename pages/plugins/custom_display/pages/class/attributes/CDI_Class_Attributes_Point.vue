<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Point</p>

  <p class="text-3xl text-red-500 mt-5">點數屬性Points attribute</p>
  <p class="text-2xl dark:text-white">此屬性只用來統計使用，沒有實際功能。</p>
  <p class="text-2xl dark:text-white">This attribute is only used for statistics and has no actual function.</p>

  <img class="w-100" src="/plugins/custom_display/class/custom_display_class_3.png" alt="">

  <p class="text-3xl text-red-500 mt-10">設定Config</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱</p>
          <p class="text-base dark:text-white">Attribute</p>
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
          <p class="text-base dark:text-white">Name</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點數名稱。</p>
          <p class="text-base dark:text-white">Point name.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">base</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">基礎值。(內容只能放數字)</p>
          <p class="text-base dark:text-white">Base value. (The content can only put numbers)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 mt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#必須跟文件名稱相同。
#Must be the same as the file name.
Point_Novice:
#Name
  Str:
#base
    base: 1
  Agi:
    base: 1
  Vit:
    base: 1
  Int:
    base: 1
  Dex:
    base: 1
  Luk:
    base: 1</code>
  </pre>

</template>

<style scoped>

</style>