<script setup lang="ts">

import {useFancyActionPages} from "~/stores/plugins/fancy_series/fancy_action/useFancyActionPages";
const fancyActionSidebar = useFancyActionPages();


const setPage = (data: string) => {
  fancyActionSidebar.pageName = data
}

</script>

<template>
  <p class="text-2xl text-red-500">一些使用上的範例。</p>
  <p class="text-2xl text-red-500"></p>
  <p class="text-2xl text-red-500"></p>
  <p class="text-2xl text-red-500"></p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">範例編號 Example number</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">Description  描述</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr @click="setPage('FAC_Example_1')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">1</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">攻擊顯示傷害。</p>
          <p class="text-base text-orange-400">Attack shows damage.</p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_2')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">2</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">在ActionBar顯示個人血量和魔量。</p>
          <p class="text-base text-orange-400">Show personal health and magic power in ActionBar. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_3')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">3</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">用BossBar顯示對方血量或資訊。</p>
          <p class="text-base text-orange-400">Use BossBar to display the opponent's blood volume or information. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_4')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">4</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">血量低於設定值就顯示紅色閃爍。</p>
          <p class="text-base text-orange-400">When the blood volume is lower than the set value, it will flash red. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_5')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">5</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">被攻擊時在畫面上顯示紅色血效果。</p>
          <p class="text-base text-orange-400">A red blood effect is displayed on the screen when being attacked. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_6')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">6</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">攻擊怪物讓怪物名稱顯示血量。</p>
          <p class="text-base text-orange-400">Attack the monster to make the monster's name show its health. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_7')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">7</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">在頭上顯示聊天訊息。</p>
          <p class="text-base text-orange-400">Show chat messages on the head.</p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_8')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">8</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">使用指令觸發，在頭上顯示表情符號。</p>
          <p class="text-base text-orange-400">Use command trigger to display emoticons on the head. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_9')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">9</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">在生物頭上顯示血量等資訊。</p>
          <p class="text-base text-orange-400">Display blood volume and other information on the head of the creature.</p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_10')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">10</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">去除攻擊會顯示的愛心效果。</p>
          <p class="text-base text-orange-400">Remove the love effect displayed by the attack.</p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_11')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">11</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">攻擊顯示粒子特效。</p>
          <p class="text-base text-orange-400">Attack display particle special effects. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_12')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">12</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">打開GUI並做一些操作。</p>
          <p class="text-base text-orange-400">Open the GUI and do some operations. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_13')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">13</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">用BossBar顯示自身訊息。</p>
          <p class="text-base text-orange-400">Use BossBar to display your own information. </p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_14')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">14</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">被攻擊顯示傷害。</p>
          <p class="text-base text-orange-400">Damaged shows damage.</p>
        </td>
      </tr>

      <tr @click="setPage('FAC_Example_15')" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">15</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">說話顯示在Discord上面。</p>
          <p class="text-base text-orange-400">Speaking is displayed on Discord.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>