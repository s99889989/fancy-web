<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Teleport</p>
  <p class="text-2xl text-red-500">動作: 瞬間移動</p>
  <p class="text-2xl text-red-500">Action: Teleport</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">瞬間移動到指定的位置。</p>
  <p class="text-2xl dark:text-white">Move to the specified location instantaneously.</p>

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
          <p class="text-base dark:text-white">LocAdd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">la</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">對目標增加座標量。</p>
          <p class="text-base dark:text-white">Increase the amount of coordinates to the target.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">VectorAdd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">va</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">偏移設定，分別是向量以目標還是自身(Self,Target)、是否加上基準目標仰角、是否加上基準目標面相角、仰角、面相角。</p>
          <p class="text-base dark:text-white">Offset setting, respectively is the vector to the target or itself (Self, Target), whether to add the reference target elevation angle, whether to add the reference target face angle, elevation angle, face phase angle.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">self|true|true|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OnBlock</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ob</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">是否要在方塊上。</p>
          <p class="text-base dark:text-white">Whether to be on the square.</p>
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
TeleportEXP:
  Action:
  - teleport[LocTarget=target;LocAdd=0|2|0;Angle=0;Distance=5]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>