<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">PotionEffect</p>
  <p class="text-2xl text-red-500">動作: 藥水效果</p>
  <p class="text-2xl text-red-500">Action: PotionEffect</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">向目標添加藥水效果。</p>
  <p class="text-2xl dark:text-white">Add potion effect to the target.</p>

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
          <p class="text-base dark:text-white">Potion</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">藥水效果名稱。</p>
          <p class="text-base dark:text-white">The name of the potion effect.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">INCREASE_DAMAGE</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">duration</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">dt</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">藥水持續的時間。</p>
          <p class="text-base dark:text-white">The duration of the potion.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">200</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">amplifir</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ap</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">藥水的等級。</p>
          <p class="text-base dark:text-white">The level of the potion.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ambient</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ab</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">particles</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">p</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Potion1:
  Action:
  - PotionEffect[Potion=SLOW;dt=100;ap=5]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>