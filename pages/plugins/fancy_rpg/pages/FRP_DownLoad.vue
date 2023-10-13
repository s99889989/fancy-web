<script setup lang="ts">
import {useFancyRPGDownLoad} from "~/stores/plugins/fancy_rpg/useFancyRPGDownLoad";
const fancyRPGDownLoad = useFancyRPGDownLoad();

</script>

<template>
  <p class="text-4xl dark:text-white">DownLoad</p>



  <p class="text-2xl dark:text-white mt-5">Plugin</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">名稱</p>
          <p class="text-base dark:text-white">Name</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">版本</p>
          <p class="text-base dark:text-white">Version</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">發布時間</p>
          <p class="text-base dark:text-white">Uploaded</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">下載連結</p>
          <p class="text-base dark:text-white">Download link</p>
        </th>

      </tr>

      </thead>
      <tbody>

      <tr v-for="(item, index) in fancyRPGDownLoad.data.downloadList" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">{{item.name}}</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{item.plugin_version}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{item.uploaded}}</p>
        </td>
        <td class="px-6 py-4">
          <a :href="item.download_link"><i class="text-xl dark:text-white fa-regular fa-circle-down"></i></a>
        </td>
      </tr>



      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>