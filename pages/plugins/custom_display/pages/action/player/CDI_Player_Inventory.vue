<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Inventory</p>
  <p class="text-2xl text-red-500">動作: 臨時背包</p>
  <p class="text-2xl text-red-500">Action: Temporary Inventory</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">打開暫時用的自訂背包.</p>
  <p class="text-2xl dark:text-white">Open the custom inventory for temporary use.</p>

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
          <p class="text-base dark:text-white">Function</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">fc</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">分為背包和介面.</p>
          <p class="text-base dark:text-white">Divided into inventory and Gui.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">INV</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">GuiID</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要使用的介面ID.</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">Default</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Message</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">m</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">標題.</p>
          <p class="text-base dark:text-white">Title.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
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
          <p class="text-base dark:text-white">量.(必須是9的倍數，不超過54)</p>
          <p class="text-base dark:text-white">the amount.(Must be a multiple of 9, not more than 54)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">27</p>
        </td>
      </tr>


      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
OpenExpGui:
  Action:
  - Break[ConditionType=Equals;ConditionContent=&self_class_command&~expgui]
  - Inventory[fc=close]
  - Inventory[fc=gui;GuiID=Example]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>