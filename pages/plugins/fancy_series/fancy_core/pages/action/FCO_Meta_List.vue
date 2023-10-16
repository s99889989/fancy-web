<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();
</script>

<template>
  <p class="text-4xl dark:text-white">元動作</p>
  <p class="text-2xl dark:text-white">Meta Action</p>

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
        <th @click="fancyCoreSidebar.setPage('FCO_Meta_Action')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Action</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">可以觸發其他動作列表.</p>
          <p class="text-base">Can trigger other action lists.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Meta_Break')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Break</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">依照條件判斷是否中斷動作。</p>
          <p class="text-base">Determine whether to interrupt the action according to the conditions.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Meta_Delay')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Delay</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">延遲。</p>
          <p class="text-base">Delay.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Meta_FixedPoint')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">FixedPoint</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">定點持續動作。</p>
          <p class="text-base">Fixed-point continuous action.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Meta_Loop')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Loop</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">可以在時間內持續觸發動作列表.</p>
          <p class="text-base">The action list can be triggered continuously within the time.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Meta_LocPng')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">LocPng</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">依照PNG圖片給座標動作。</p>
          <p class="text-base">Follow the PNG image to give the coordinate action.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Meta_Orbital')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Orbital</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">軌道式持續動作。</p>
          <p class="text-base">Orbital continuous action.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="fancyCoreSidebar.setPage('FCO_Meta_SwitchAction')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">SwitchAction</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">條件選擇動作。</p>
          <p class="text-base">Conditional selection action.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>