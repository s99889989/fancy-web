<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Model</p>
  <p class="text-2xl text-red-500">動作: 模型生物</p>
  <p class="text-2xl text-red-500">Action: Model</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">召喚模型生物。</p>
  <p class="text-2xl dark:text-white">Summon model creatures.</p>
  <p class="text-2xl dark:text-white">需要Model-Engine插件。</p>
  <p class="text-2xl dark:text-white">Requires Model-Engine plugin.</p>

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
          <p class="text-base dark:text-white">modelid</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">m, mid, model</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">模型的ID。</p>
          <p class="text-base dark:text-white">The model id of the model.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">state</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">s</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">模型的姿勢。(state|lerpin|lerpout|speed)</p>
          <p class="text-base dark:text-white">The pose of the model.(state|lerpin|lerpout|speed)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">idle|0|1|1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">teleport</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">tp</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">是否移動模型。</p>
          <p class="text-base dark:text-white">Whether to move the model.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">delete</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">d</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">刪除模型。</p>
          <p class="text-base dark:text-white">Delete the model.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <p class="text-2xl dark:text-white">使用ModelEngine的範例模型作為範例。</p>
  <p class="text-2xl dark:text-white">Use ModelEngine's example model as an example.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModelDemo:
  Action:
  - Model[mid=kindletronjr] @LocTarget{LA=0|&attack_number_height&|0}
  - Delay[Ticks=20]
  - Model[tp=true] @LocAdd{LA=0|2|0}
  - Delay[Ticks=20]
  - Model[state=attack|3|2|1]
  - Delay[Ticks=100]
  - Model[d=true]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>