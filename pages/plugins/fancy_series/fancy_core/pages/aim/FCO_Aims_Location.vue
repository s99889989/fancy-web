<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">定位目標 Location Targeters</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">單位置 Single-Location Targeters</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >目標 Aims</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>


      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@LocSelf{VA=Self|true|true|0|0|0;LA=0|0|0;OB=true}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">自身位置。</p>
          <p class="text-base">Own position.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@LocTarget{D=5;VA=Self|true|true|0|0|0;LA=0|0|0;OB=true}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">目標位置。</p>
          <p class="text-base">target location.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@LocWorld{WorldName=world;LA=0|0|0}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">世界位置。</p>
          <p class="text-base">World location.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-2xl dark:text-white">單位置增加 Single-Location Add</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >目標 Aims</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>


      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@LocAdd{VA=Self|true|true|0|0|0;LA=0|0|0;OB=true}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">在原有的位置增加座標量。(必須先有初始座標才有用)</p>
          <p class="text-base">Increase the amount of coordinates in the original position.(You must have the initial coordinates to be useful)</p>
        </td>
      </tr>



      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white">定位副屬性 Location-Secondary attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >屬性名稱 Attribute</p>
        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">縮寫 Aliases</p>
        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">預設值 Default</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">VectorAdd</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">VA</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">增加向量座標。</p>
          <p class="text-base">Increase the vector coordinates.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">Self|true|true|0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">LocationAdd</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">LA</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">增加座標。</p>
          <p class="text-base">Increase the coordinates.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Distance</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">D</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">用於無攻擊目標時，轉為觀看目標的距離。</p>
          <p class="text-base">When there is no target, it is converted to the distance of the viewing target.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">10</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">OnBlock</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">OB</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">定點是否要在方塊上。</p>
          <p class="text-base">Whether the fixed point should be on the square.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">WorldName</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">WN</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">世界名稱。(Self自身所在世界)</p>
          <p class="text-base">World name. (Self's own world)</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">Self</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>