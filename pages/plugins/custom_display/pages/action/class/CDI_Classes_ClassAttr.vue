<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">ClassAttr</p>
  <p class="text-2xl text-red-500">動作: 職業屬性</p>
  <p class="text-2xl text-red-500">Action: ClassAttr</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">設置臨時職業屬性。</p>
  <p class="text-2xl dark:text-white">暫時增加某個職業屬性量。</p>
  <p class="text-2xl dark:text-white">Set temporary occupation attributes.</p>
  <p class="text-2xl dark:text-white">Temporarily increase the amount of a certain professional attribute.</p>

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
          <p class="text-base dark:text-white">t</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要設置的屬性類型。(status、equipment、point)</p>
          <p class="text-base dark:text-white">The type of attribute to be set. (status, equipment, point)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">status</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Attributes</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">attr</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要設置的屬性。</p>
          <p class="text-base dark:text-white">The attribute to be set.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Label</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">l</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果要使用同種屬性，不造成效果覆蓋，就必須使用不同名稱的標籤。</p>
          <p class="text-base dark:text-white">If you want to use the same kind of attributes without overwriting the effect, you must use tags with different names.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
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
          <p class="text-base dark:text-white">增加的量。</p>
          <p class="text-base dark:text-white">The amount of increase.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Duration</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">dt</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">持續時間。(0為無限時間，直到重啟或重新讀取插件)</p>
          <p class="text-base dark:text-white">duration. (0 is unlimited time, until restart or re-read the plugin)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">200</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Swordman_Endure:
  Action:
  - ClassAttr[Attr=GENERIC_KNOCKBACK_RESISTANCE;a=1;dt=100]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>