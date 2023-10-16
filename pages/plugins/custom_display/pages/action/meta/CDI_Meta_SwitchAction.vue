<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">SwitchAction</p>
  <p class="text-2xl text-red-500">動作: 選擇動作</p>
  <p class="text-2xl text-red-500">Action: SwitchAction</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">依照條件判斷，觸發其他動作列表。</p>
  <p class="text-2xl dark:text-white">According to the conditional judgment, trigger other action lists.</p>

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
          <p class="text-base dark:text-white">ConditionContent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">cc</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">判斷的值。</p>
          <p class="text-base dark:text-white">Judged value.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ConditionType</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ct</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">條件類型。(compare、contains、equals)</p>
          <p class="text-base dark:text-white">Condition content.(compare、contains、equals)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">equals</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Case</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">c</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">條件選項。</p>
          <p class="text-base dark:text-white">Conditional options.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Action</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">a</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">動作項目。</p>
          <p class="text-base dark:text-white">Action items.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Open_Gui_Player_Total:
  Action:
  - SwitchAction[cc=&self_class_name&;ct=equals;c=初心者|弓箭手|劍士|魔法師;a=Open_Gui_Player_Total_0|Open_Gui_Player_Total_1|Open_Gui_Player_Total_1|Open_Gui_Player_Total_1]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>