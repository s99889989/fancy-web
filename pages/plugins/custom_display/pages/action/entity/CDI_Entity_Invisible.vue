<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Invisible</p>
  <p class="text-2xl text-red-500">動作: 隱形</p>
  <p class="text-2xl text-red-500">Action: Invisible</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">使目標和裝備不可見。</p>
  <p class="text-2xl dark:text-white">Make targets and equipment invisible.</p>
  <p class="text-2xl dark:text-white">只對自己以外的其他玩家有效，自己還是看的到自己。</p>
  <p class="text-2xl dark:text-white">Only effective for other players other than yourself, you can still see yourself.</p>

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
          <p class="text-base dark:text-white">Entity</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">e</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">實體是否消失。</p>
          <p class="text-base dark:text-white">Whether the entity disappears.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">MainHand</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">mh</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">主手是否消失。</p>
          <p class="text-base dark:text-white">Whether the main hand disappears.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OffHand</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">oh</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">副手是否消失。</p>
          <p class="text-base dark:text-white">Whether the deputy disappears.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Head</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">h</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">頭盔是否消失。</p>
          <p class="text-base dark:text-white">Does the helmet disappear.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Chest</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">c</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">胸甲是否消失。</p>
          <p class="text-base dark:text-white">Whether the breastplate disappears.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Legs</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">l</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">護腿是否消失。</p>
          <p class="text-base dark:text-white">Does the leggings disappear.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Feet</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">f</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">靴子是否消失。</p>
          <p class="text-base dark:text-white">Does the boots disappear.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">duration</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">dt</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">持續時間。</p>
          <p class="text-base dark:text-white">duration.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">40</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <p class="text-2xl dark:text-white">讓自己在其他人面前消失。</p>
  <p class="text-2xl dark:text-white">Let yourself disappear in front of others.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
SneakInvisible:
  Action:
  - Invisible[dt=200] @Self</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>