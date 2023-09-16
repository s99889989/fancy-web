<script setup lang="ts">

import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();


</script>

<template>
  <p class="text-2xl dark:text-white">一些使用上的範例。</p>
  <p class="text-2xl dark:text-white">Some examples of usage.</p>
  <p class="text-2xl text-red-500">這邊的範例可能是過時有錯誤的，設定說明才是比較準確的。</p>
  <p class="text-2xl text-red-500">The example here may be outdated and wrong, and the setting instructions are more accurate.</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >範例編號 Example number</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>


      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_1')">1</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Attack shows damage.</p>
          <p class="text-base">攻擊顯示傷害。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_2')">2</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Show personal health and magic power in ActionBar.</p>
          <p class="text-base">在ActionBar顯示個人血量和魔量。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_3')">3</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Use BossBar to display the opponent's blood volume or information.</p>
          <p class="text-base">用BossBar顯示對方血量或資訊。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_4')">4</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">When the blood volume is lower than the set value, it will flash red.</p>
          <p class="text-base">血量低於設定值就顯示紅色閃爍。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_5')">5</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">A red blood effect is displayed on the screen when being attacked.</p>
          <p class="text-base">被攻擊時在畫面上顯示紅色血效果。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_6')">6</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Attack the monster to make the monster's name show its health.</p>
          <p class="text-base">攻擊怪物讓怪物名稱顯示血量。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_7')">7</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Show chat messages on the head.</p>
          <p class="text-base">在頭上顯示聊天訊息。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_8')">8</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Use command trigger to display emoticons on the head.</p>
          <p class="text-base">使用指令觸發，在頭上顯示表情符號。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_9')">9</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Display blood volume and other information on the head of the creature.</p>
          <p class="text-base">在生物頭上顯示血量等資訊。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_10')">10</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Remove the love effect displayed by the attack.</p>
          <p class="text-base">去除攻擊會顯示的愛心效果。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_11')">11</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Attack display particle special effects.</p>
          <p class="text-base">攻擊顯示粒子特效。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_12')">12</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Open the GUI and do some operations.</p>
          <p class="text-base">打開GUI並做一些操作。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_13')">13</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Use BossBar to display your own information.</p>
          <p class="text-base">用BossBar顯示自身訊息。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_14')">14</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Damaged shows damage.</p>
          <p class="text-base">被攻擊顯示傷害。</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base" @click="fancyCoreSidebar.setPage('FC_Example_15')">15</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base">Speaking is displayed on Discord.</p>
          <p class="text-base">說話顯示在Discord上面。</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>