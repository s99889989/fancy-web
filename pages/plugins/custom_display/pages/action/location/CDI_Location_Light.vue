<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Light</p>
  <p class="text-2xl text-red-500">動作: 發光</p>
  <p class="text-2xl text-red-500">Action: Light</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">在指定座標發出類似火把的亮光。</p>
  <p class="text-2xl dark:text-white">It emits light like a torch at the designated coordinates.</p>
  <p class="text-2xl dark:text-white">需要<a href="https://www.spigotmc.org/resources/lightapi.4510/" target="_blank">LightAPI</a>。</p>
  <p class="text-2xl dark:text-white">Requires <a href="https://www.spigotmc.org/resources/lightapi.4510/" target="_blank">LightAPI</a>.</p>

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
          <p class="text-base dark:text-white">LightLevel</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">LL</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">光亮等級。(1~15)</p>
          <p class="text-base dark:text-white">Brightness level. (1~15)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">10</p>
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
          <p class="text-base dark:text-white">持續時間。</p>
          <p class="text-base dark:text-white">duration.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">20</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
LightDemo:
  Action:
  - Light[ll=10;dt=10] @LocTarget{LA=0|2|0}</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>