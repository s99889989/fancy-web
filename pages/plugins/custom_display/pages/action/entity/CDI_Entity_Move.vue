<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Move</p>
  <p class="text-2xl text-red-500">動作: 移動</p>
  <p class="text-2xl text-red-500">Action: Move</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">使目標移動指定的距離。</p>
  <p class="text-2xl dark:text-white">Move the target the specified distance.</p>

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
          <p class="text-base dark:text-white">DirectionAdd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">da</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">向量增加座標，分別是基準目標(Self、Target、Selfaway、Targetaway)、是否加上基準目標仰角、是否加上基準目標面相角、仰角、面相角、距離、高度。</p>
          <p class="text-base dark:text-white">The vector increase coordinates are the reference target (Self, Target、Selfaway、Targetaway), whether to add the reference target elevation angle, whether to add the reference target face angle, elevation angle, face angle, and distance.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">Self|true|true|0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">awayHight</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ah</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">反向高度。</p>
          <p class="text-base dark:text-white">Reverse height.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>


      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <p class="text-2xl dark:text-white">把目標以面對自己的反方向拋出去。</p>
  <p class="text-2xl dark:text-white">Throw the target in the opposite direction of facing yourself.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Move1:
  Action:
  - Move[da=SelfAway|false|false|0|0|1;ah=1] @Target{D=5}</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>