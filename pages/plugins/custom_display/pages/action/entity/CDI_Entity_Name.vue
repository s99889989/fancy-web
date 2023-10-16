<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Name</p>
  <p class="text-2xl text-red-500">動作: 名稱</p>
  <p class="text-2xl text-red-500">Action: Name</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">更改顯示在頭上的名稱，不影響伺服器名稱設定，只在客戶端顯示。</p>
  <p class="text-2xl dark:text-white">Changing the name displayed on the head does not affect the server name setting, it is only displayed on the client.</p>
  <p class="text-2xl dark:text-white">更改無法用在玩家上。</p>
  <p class="text-2xl dark:text-white">Changes cannot be applied to players.</p>

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
          <p class="text-base dark:text-white">Message</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">m</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">顯示內容.</p>
          <p class="text-base dark:text-white">Display content.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Always</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">一直顯示，還是指向那怪物時顯示.</p>
          <p class="text-base dark:text-white">Always show, or show when pointing at the monster.</p>
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
NameDisplayAttackMonster:
  Action:
  - Condition[entityTypeList=Monster]
  - Loop[onTime=NameDisplayAttackMonster-Time;period=40;duration=unlimited]
NameDisplayAttackMonster-Time:
  Action:
   - Name[m={cd_health_conversion}{target_name}{cd_target_health};Always=true;healthConver=health-monster-name]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>