<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Break</p>
  <p class="text-2xl text-red-500">動作: 中斷</p>
  <p class="text-2xl text-red-500">Action: Break</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">在執行多個動作時判斷條件來中斷動作。</p>
  <p class="text-2xl dark:text-white">(通常用在Action或Loop執行的動作)</p>
  <p class="text-2xl dark:text-white">When multiple actions are executed, the condition is judged to interrupt the action.</p>
  <p class="text-2xl dark:text-white">(Usually used in actions executed by Action or Loop)</p>

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
          <p class="text-base dark:text-white">Mode</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">m</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">在條件失敗時中斷，還是在成功時中斷。</p>
          <p class="text-base dark:text-white">(false為結果不為true就中斷)</p>
          <p class="text-base dark:text-white">Interrupt when the condition fails, or when it succeeds.</p>
          <p class="text-base dark:text-white">(false means interrupt if the result is not true)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
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
          <p class="text-base dark:text-white">條件類型。</p>
          <p class="text-base dark:text-white">Condition type.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">Compare</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ConditionContent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">cp</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">條件內容。</p>
          <p class="text-base dark:text-white">Condition content.</p>
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

BoosBarDisplay:
  Action:
  - Loop[onStart=BoosBarDisplay-Start;onTime=BoosBarDisplay-Time;onEnd=BoosBarDisplay-End;period=10;duration=200]

BoosBarDisplay-Start:
  Action:
  - BossBar[message=&bsb_target_name&-&bsb_target_nowhealth&/&bsb_target_maxhealth&;Style=SEGMENTED_10;Color=RED;Progress=&bsb_target_health_proportion&]

BoosBarDisplay-Time:
  Action:
  - BossBar[message=&bsb_target_name&-&bsb_target_nowhealth&/&bsb_target_maxhealth&;Progress=&bsb_target_health_proportion&]
  - Break[ConditionType=Compare;ConditionContent=&bsb_target_nowhealth&~0.0]
  - BossBar[Delete=true]

BoosBarDisplay-End:
  Action:
  - BossBar[Delete=true]
</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>