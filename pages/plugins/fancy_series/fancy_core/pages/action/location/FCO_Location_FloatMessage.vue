<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">FloatMessage</p>
  <p class="text-2xl text-red-500">動作: 全息顯示</p>
  <p class="text-2xl text-red-500">Action: FloatMessage</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">全息顯示的操控.</p>
  <p class="text-2xl dark:text-white">The manipulation of holographic display.</p>
  <img class="w-100" src="/plugins/custom_display/action/location/hologram.png" alt="">

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
          <p class="text-base dark:text-white">Mark</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">mk</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">全息圖標記。(在同個動作下使用多個全息圖時使用)</p>
          <p class="text-base dark:text-white">Hologram mark. (Used when using multiple holograms in the same action)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
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
          <p class="text-base dark:text-white">全息圖增加內容。</p>
          <p class="text-base dark:text-white">content.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">RemoveMessage</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">rm</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">刪除指定行數內容。(從上往下數1到...)</p>
          <p class="text-base dark:text-white">Delete the specified number of lines. (Counting 1 from the top to the bottom...)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ChangeMessage</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">cm</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">改變指定行數內容，如果內容相同就不修改。</p>
          <p class="text-base dark:text-white">(從上往下數1到...)</p>
          <p class="text-base dark:text-white">Change the content of the specified number of lines, if the content is the same, do not modify it.</p>
          <p class="text-base dark:text-white">(Counting 1 from the top to the bottom...)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Teleport</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">tp</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">是否移動全息圖。</p>
          <p class="text-base dark:text-white">Whether to move the hologram.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ItemID</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">IID</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">全息圖增加懸浮物品顯示。</p>
          <p class="text-base dark:text-white">The hologram increases the display of suspended objects.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Delete</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">d</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">刪除全息圖。</p>
          <p class="text-base dark:text-white">Delete the hologram.</p>
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
AttackDisplayUp:
  Action:
  - Loop[onStart=AttackDisplayUp-Start;onTime=AttackDisplayUp-Time;onEnd=AttackDisplayUp-End;period=3;duration=20]
AttackDisplayUp-Start:
  Action:
  - FloatMessage[m=&attack_number&] @LocTarget{LA=0|&attack_number_height&|0}
AttackDisplayUp-Time:
  Action:
  - FloatMessage[teleport=true] @LocAdd{LA=0|0.1|0}
AttackDisplayUp-End:
  Action:
  - FloatMessage[delete=true]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>