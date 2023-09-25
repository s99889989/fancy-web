<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Level</p>
  <p class="text-3xl text-red-500 mt-5">等級Level</p>
  <p class="text-2xl dark:text-white">等級和經驗的設定.</p>
  <p class="text-2xl dark:text-white">Setting of level and experience.</p>
  <img class="w-100" src="/plugins/custom_display/class/custom_display_class_6.png" alt="">

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
          <p class="text-base dark:text-white">level</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">範例的左邊，不能中斷，例如10下一個12。</p>
          <p class="text-base dark:text-white">The left side of the example cannot be interrupted, such as 10 next 12.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">exp</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">範例的右邊。</p>
          <p class="text-base dark:text-white">The right side of the example.</p>
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
Exp-Amount:
  1: 100
  2: 200
  3: 300
  4: 400
  5: 500
  6: 600
  7: 700
  8: 800
  9: 900
  10: 1000
  11: 1100
  12: 1200
  13: 1300
  14: 1400
  15: 1500
  16: 1600
  17: 1700
  18: 1800
  19: 1900
  20: 2000
  21: 2100
  22: 2200
  23: 2300
  24: 2400
  25: 2500
  26: 2600
  27: 2700
  28: 2800
  29: 2900
  30: 3000
  31: 3100
  32: 3200
  33: 3300
  34: 3400
  35: 3500
  36: 3600
  37: 3700
  38: 3800
  39: 3900
  40: 4000
  41: 4100
  42: 4200
  43: 4300
  44: 4400
  45: 4500
  46: 4600
  47: 4700
  48: 4800
  49: 4900
  50: 5000</code>
  </pre>

</template>

<style scoped>

</style>