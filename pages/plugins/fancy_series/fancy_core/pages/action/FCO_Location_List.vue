<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();
</script>

<template>
  <p class="text-4xl dark:text-white">目標為座標</p>
  <p class="text-2xl dark:text-white">Target as coordinates</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >動作</p>
          <p class="text-base" >Actions</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述</p>
          <p class="text-base">Description</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Location_Block')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Block</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">放置方塊。</p>
          <p class="text-base">Place the block.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Location_FloatMessage')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">FloatMessage</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">全息顯示。</p>
          <p class="text-base">HolographicDisplays.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Location_Guise')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Guise</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">偽裝物品。</p>
          <p class="text-base">The effect of placing items on the head of the armor stand.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Location_Light')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Light</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">發出類似火把的亮光。</p>
          <p class="text-base">Glows like a torch.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Location_Model')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Model</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">ModelEngine實體。</p>
          <p class="text-base">ModelEngine entity.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Location_Particle')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Particle</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">粒子。</p>
          <p class="text-base">Particle</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Location_Sound')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Sound</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">聲音。</p>
          <p class="text-base">Sound</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>