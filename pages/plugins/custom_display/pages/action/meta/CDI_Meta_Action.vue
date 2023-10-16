<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Action</p>
  <p class="text-2xl text-red-500">動作: 動作</p>
  <p class="text-2xl text-red-500">Action: Action</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">觸發其他動作列表</p>
  <p class="text-2xl dark:text-white">Trigger other action lists</p>

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
          <p class="text-base dark:text-white">Action</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">a</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要觸發的列表名稱。</p>
          <p class="text-base dark:text-white">The name of the list to be triggered.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">NeedTarget</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">nt</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">是否需要目標才執行。</p>
          <p class="text-base dark:text-white">Whether the target is required to execute.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Count</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">c</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">執行次數。</p>
          <p class="text-base dark:text-white">Number of executions.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CountPeriod</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">cp</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">執行間隔。</p>
          <p class="text-base dark:text-white">Execution interval.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">10</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Mark</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">m</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">動作標記.(如果要讓該動作，為唯一動作就必須啟用)</p>
          <p class="text-base dark:text-white">Action mark.(If you want this action, it must be enabled as the only action)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">亂數</p>
          <p class="text-base dark:text-white">Random number</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">stop</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">s</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">是否為清除動作.(必須啟用動作標記才有作用)</p>
          <p class="text-base dark:text-white">Whether it is a clearing action. (The action flag must be enabled to be effective)</p>
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
Action:
- Action[a=Class_ActionBarDisplay;mark=&self_name&Class_ActionBarDisplay] ~onJoin
- Action[mark=&amp;self_name&amp;Class_ActionBarDisplay;stop=true] ~onQuit</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>