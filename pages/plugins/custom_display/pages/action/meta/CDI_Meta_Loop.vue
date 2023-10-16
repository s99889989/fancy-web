<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Loop</p>
  <p class="text-2xl text-red-500">動作: 持續執行</p>
  <p class="text-2xl text-red-500">Action: Loop</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">持續執行動作</p>
  <p class="text-2xl dark:text-white">Continuous action</p>

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
          <p class="text-base dark:text-white">period</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">p</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">多久執行一次onTime動作。 </p>
          <p class="text-base dark:text-white">How often to execute the onTime action.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">5</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">duration</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">d</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">此動作要持續多久。如果設為0表示無限時間。</p>
          <p class="text-base dark:text-white">(建議在登出時移除，不然登出還是會繼續執行)</p>
          <p class="text-base dark:text-white">How long will this action last? If set to 0, it means unlimited time.</p>
          <p class="text-base dark:text-white">(It is recommended to remove it when logging out, otherwise it will continue to execute after logging out)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">20</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">onStart</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">os</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">開始執行的動作。</p>
          <p class="text-base dark:text-white">Start the action.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">onTime</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ot</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">持續時間內執行的動作。</p>
          <p class="text-base dark:text-white">Action performed within the duration.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">onEnd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">oe</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">結束後要執行的動作。</p>
          <p class="text-base dark:text-white">The action to be performed after the end.</p>
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
AttackDisplayUp:
  Action:
  - Loop[onStart=AttackDisplayUp-Start,onTime=AttackDisplayUp-Time,onEnd=AttackDisplayUp-End,period=3,duration=20]
AttackDisplayUp-Start:
  Action:
  - createHD[m={cd_damage},HDtype=loc,x=0,y=0.5,z=0] @=target
  - addLineHD[m=%player_name%]
AttackDisplayUp-Time:
  Action:
  - teleportHD[HDtype=loc,x=0,y=0.1,z=0] @=targetLocation
AttackDisplayUp-End:
  Action:
  - deleteHD</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>