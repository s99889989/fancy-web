<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Exp</p>
  <p class="text-2xl text-red-500">動作: 經驗值</p>
  <p class="text-2xl text-red-500">Action: Experience</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">經驗值的修改.</p>
  <p class="text-2xl dark:text-white">Modification of experience points.</p>

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
          <p class="text-base dark:text-white">Type</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">經驗的類型.</p>
          <p class="text-base dark:text-white">Type of experience.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">minecraft</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Amount</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">a</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">量.(如果要減少就加上-)</p>
          <p class="text-base dark:text-white">the amount.(If you want to reduce, add -)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">10</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <p class="text-2xl dark:text-white">增加原生經驗值。</p>
  <p class="text-2xl dark:text-white">Increase the original experience value.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Exp1:
  Action:
  - Exp[a=100]</code>
  </pre>

  <p class="text-2xl dark:text-white pt-5">增加名為base的等級經驗值。</p>
  <p class="text-2xl dark:text-white">Increase the level of experience value named base.</p>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Exp2:
  Action:
  - Exp[type=base;a=100]</code>
  </pre>

  <br/><br/><br/>
</template>

<style scoped>

</style>