<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">數學</p>
  <p class="text-2xl dark:text-white">Math</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-lg dark:text-white">對內容進行數學運算。</p>
  <p class="text-lg dark:text-white">Perform mathematical operations on the content.</p>
  <p class="text-lg dark:text-white">(如果內容不是數字，就會轉成0)</p>
  <p class="text-lg dark:text-white">(If the content is not a number, it will be converted to 0)</p>

  <p class="text-lg dark:text-white pt-10">屬性Attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >動作 Actions</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">縮寫 Aliases</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">預設值 Default</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Function</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">要進行的運算功能。</p>
          <p class="text-base">The calculation function to be performed.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Message</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">用來指定限制的位數。</p>
          <p class="text-base">Used to specify the number of digits for the limit.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-lg dark:text-white pt-10">功能Features</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >動作 Actions</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">縮寫 Aliases</p>
        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Arithmetic</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">Arith</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">對數字內容做四則運算。 </p>
          <p class="text-base">Do four operations on the content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Accumulate</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">Acc</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">對數字內容做位數限制。</p>
          <p class="text-base"> Limit the number of digits in digital content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Decimal</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">對數字內容做位數限制。</p>
          <p class="text-base"> Limit the number of digits in digital content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Greater</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">對數字大小做限制，大於多少就轉成指定數字。(只能處理純數字)</p>
          <p class="text-base">Limit the size of the number, and convert it to a specified number if it is larger than it. (Can only handle pure numbers)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Less</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">對數字大小做限制，小於多少就轉成指定數字。(只能處理純數字)</p>
          <p class="text-base">Limit the size of the number, and convert it to a specified number if it is less than. (Can only handle pure numbers)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Format</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">把數字轉成k、m、b、t單位。(只能處理純數字) 例如1000變成1k、7800000變成7.8m。</p>
          <p class="text-base">Convert the number to k, m, b, t units. (Can only handle pure numbers) For example, 1000 becomes 1k, and 7800000 becomes 7.8m.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-lg dark:text-white pt-16">範例</p>
  <p class="text-lg dark:text-white">Examples</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <p class="text-lg dark:text-white">算出目前血量的10分比，並去除小數點後面的數。</p>
  <p class="text-lg dark:text-white">Calculate the 10 points ratio of the current blood volume, and remove the number after the decimal point.</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_health_10:
  message:
  - content[%player_health%/%player_max_health%*10]
  - math[function=arithmetic]
  - math[function=decimal;message=#]</code>
  </pre>

  <p class="text-lg dark:text-white">算出1加到目前等級的值。</p>
  <p class="text-lg dark:text-white">Calculate the value of 1 added to the current level.</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_level_add:
  message:
  - content[1,%player_level%]
  - math[function=Acc]</code>
  </pre>

  <p class="text-lg dark:text-white">如果數字高於95就轉成94。</p>
  <p class="text-lg dark:text-white">If the number is higher than 95, it is converted to 94.</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
number_greater:
  message:
  - content[98]
  - math[fc=greater;m=95>94]</code>
  </pre>

  <p class="text-lg dark:text-white">如果數字小於10就轉成10。</p>
  <p class="text-lg dark:text-white">If the number is less than 10, convert it to 10.</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
number_less:
  message:
  - content[8]
  - math[fc=less;m=10>10]</code>
  </pre>

  <br/><br/><br/>
</template>

<style scoped>

</style>