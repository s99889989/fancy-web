<script setup lang="ts">

import {useUnrealCoreModDownLoad} from "~/stores/mods/unreal_core/useUnrealCoreModDownLoad";

const unrealCoreModDownLoad = useUnrealCoreModDownLoad();
const items = ref([{ name: 'Foo' }, { name: 'Bar' }])

</script>

<template>
  <p class="text-4xl dark:text-white">DownLoad</p>


  <div class="grid grid-cols-1 lg:grid-cols-4">
    <label for="countries" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Filter by</label>
    <select v-model="unrealCoreModDownLoad.data.filter_minecraft_version" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option value="All">All Game Versions</option>
      <option value="1.20.2">1.20.2</option>
      <option value="1.19.4">1.19.4</option>
      <option value="1.18.2">1.18.2</option>
      <option value="1.17.1">1.17.1</option>
      <option value="1.16.5">1.16.5</option>
    </select>
    <select v-model="unrealCoreModDownLoad.data.filter_mod_loaders" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option value="All">All Mod Loaders</option>
      <option value="Forge">Forge</option>
      <option value="Fabric">Fabric</option>
    </select>
  </div>





  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

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
          <p class="text-base dark:text-white">Minecraft版本</p>
          <p class="text-base dark:text-white">Minecraft Version</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">模組類型</p>
          <p class="text-base dark:text-white">ModLoader</p>
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

      <tr v-for="(item, index) in unrealCoreModDownLoad.selectResults" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">{{item.name}}</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{item.mod_version}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{item.minecraft_version}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{item.mod_loaders}}</p>
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

  <br/> <br/> <br/>

</template>

<style scoped>

</style>