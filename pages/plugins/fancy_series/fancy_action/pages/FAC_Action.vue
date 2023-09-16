<script setup lang="ts">

</script>

<template>
  <p class="text-2xl text-red-500">動作: 動作</p>
  <p class="text-2xl text-red-500">Action: Action</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">觸發其他動作列表</p>
  <p class="text-2xl dark:text-white">Trigger other action lists</p>
  <p class="text-2xl text-red-500">屬性Attributes</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p>屬性名稱 Attribute</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p>縮寫 Aliases</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p>描述 Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p>預設值 Default</p>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>Action</p>
        </th>
        <td class="px-6 py-4">
          <p>a</p>
        </td>
        <td class="px-6 py-4">
          <p>要觸發的列表名稱。</p>
          <p>The name of the list to be triggered.</p>
        </td>
        <td class="px-6 py-4">
          <p>無 None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>NeedTarget</p>
        </th>
        <td class="px-6 py-4">
          <p>nt</p>
        </td>
        <td class="px-6 py-4">
          <p>是否需要目標才執行。</p>
          <p>Whether the target is required to execute.</p>
        </td>
        <td class="px-6 py-4">
          <p>false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>Count</p>
        </th>
        <td class="px-6 py-4">
          <p>c</p>
        </td>
        <td class="px-6 py-4">
          <p>執行次數。</p>
          <p>Number of executions.</p>
        </td>
        <td class="px-6 py-4">
          <p>1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>CountPeriod</p>
        </th>
        <td class="px-6 py-4">
          <p>cp</p>
        </td>
        <td class="px-6 py-4">
          <p>執行間隔。</p>
          <p>Execution interval.</p>
        </td>
        <td class="px-6 py-4">
          <p>10</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>Mark</p>
        </th>
        <td class="px-6 py-4">
          <p>m</p>
        </td>
        <td class="px-6 py-4">
          <p>動作標記.(如果要讓該動作，為唯一動作就必須啟用)</p>
          <p>Action mark.(If you want this action, it must be enabled as the only action)</p>
        </td>
        <td class="px-6 py-4">
          <p>亂數 Random number</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>stop</p>
        </th>
        <td class="px-6 py-4">
          <p>s</p>
        </td>
        <td class="px-6 py-4">
          <p>是否為清除動作.(必須啟用動作標記才有作用)</p>
          <p>Whether it is a clearing action. (The action flag must be enabled to be effective)</p>
        </td>
        <td class="px-6 py-4">
          <p>false</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl text-red-500">範例Examples</p>

  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=Class_ActionBarDisplay;mark=&self_name&Class_ActionBarDisplay] ~onJoin
- Action[mark=&self_name&amp;Class_ActionBarDisplay;stop=true] ~onQuit</code>
  </pre>
<br/>
</template>

<style scoped>

</style>