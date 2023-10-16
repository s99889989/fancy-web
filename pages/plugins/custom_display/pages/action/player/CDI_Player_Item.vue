<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Item</p>
  <p class="text-2xl text-red-500">動作: 物品</p>
  <p class="text-2xl text-red-500">Action: Item</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">物品相關的操作.</p>
  <p class="text-2xl dark:text-white">Item-related operations.</p>

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
          <p class="text-base dark:text-white">ItemID</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">iid</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品的ID。(類別.物品名稱)</p>
          <p class="text-base dark:text-white">The ID of the item. (Category. Item name)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">Default</p>
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
          <p class="text-base dark:text-white">物品的數量。</p>
          <p class="text-base dark:text-white">The number of items.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Remove</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">r</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">是否為移除物品。</p>
          <p class="text-base dark:text-white">Whether it is a removal item.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <p class="text-2xl dark:text-white">給予指定玩家兩個指定物品。</p>
  <p class="text-2xl dark:text-white">Give the designated player two designated items.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Item1:
  Action:
  - Item[ItemID=SkillEffect.Arrow1;a=2]</code>
  </pre>

  <p class="text-2xl dark:text-white pt-5">移除指定玩家身上的指定兩個物品。</p>
  <p class="text-2xl dark:text-white">Remove the specified two items from the specified player.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Item2:
  Action:
  - Item[ItemID=SkillEffect.Arrow1;a=2;remove=true]</code>
  </pre>

  <br/><br/><br/>
</template>

<style scoped>

</style>