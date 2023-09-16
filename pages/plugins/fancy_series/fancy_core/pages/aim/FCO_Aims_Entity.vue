<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">實體 Entity Targeters</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">單目標 Single-Entity Targeters</p>
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
          <p class="text-base">@Self</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">自身。</p>
          <p class="text-base">itself.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@Target{D=5;F=Monster}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">目標。(攻擊的目標，如果沒有攻擊目標就以D距離的目視目標為目標)</p>
          <p class="text-base">the goal. (The target of the attack, if there is no target of the attack, the visual target of D distance is the target)</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white">多目標 Multi-Entity Targeters</p>
  <p class="text-2xl dark:text-white">以下目標都不包括自己。</p>
  <p class="text-2xl dark:text-white">None of the following goals include myself.</p>
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
          <p class="text-base">@SelfRadius{R=2;F=Monster}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">自身圓半徑。</p>
          <p class="text-base">The radius of its own circle.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@TargetRadius{R=2;F=Monster}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">目標圓半徑。</p>
          <p class="text-base">The radius of the target circle.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@SelfLine{R=2;F=Monster}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">自身面向直線上的目標。</p>
          <p class="text-base">Face the goal in a straight line.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@SelfInWorld{F=Monster}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">針對自己所在世界中的所有生命實體。</p>
          <p class="text-base">For all living entities in the world in which you live.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">@Server{F=Monster}</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">伺服器上的所有生命實體。</p>
          <p class="text-base">All living entities on the server.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white">實體副屬性 Entity-Secondary attributes</p>

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
          <p class="text-base">Distance</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">d</p>
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
          <p class="text-base">Filters</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">f</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">用於篩選目標。</p>
          <p class="text-base">Used to filter targets.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">None 無</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Radius</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">r</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">用於多目標時的選擇距離。</p>
          <p class="text-base">It is used to select the distance for multiple targets.</p>
        </td>

        <td class="px-6 py-4">
          <p class="text-base">2</p>
        </td>

      </tr>

      </tbody>
    </table>
  </div>

  <br/>

</template>

<style scoped>

</style>