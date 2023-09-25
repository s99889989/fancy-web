<script setup lang="ts">
import {useCustomDisplayPages} from "~/stores/plugins/custom_display/useCustomDisplayPages";
const customDisplayPages = useCustomDisplayPages();
</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>

  <p class="text-2xl dark:text-white">一些使用上的範例。</p>
  <p class="text-2xl dark:text-white">Some examples of usage.</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">範例編號</p>
          <p class="text-base dark:text-white">Example number</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_1')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">1</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">攻擊顯示傷害。</p>
          <p class="text-base dark:text-white">Attack shows damage.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_2')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">2</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">在ActionBar顯示個人血量和魔量。</p>
          <p class="text-base dark:text-white">Show personal health and magic power in ActionBar.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_3')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">3</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">用BossBar顯示對方血量或資訊。</p>
          <p class="text-base dark:text-white">Use BossBar to display the opponent's blood volume or information.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_4')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">4</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">血量低於設定值就顯示紅色閃爍。</p>
          <p class="text-base dark:text-white">When the blood volume is lower than the set value, it will flash red.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_5')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">5</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">被攻擊時在畫面上顯示紅色血效果。</p>
          <p class="text-base dark:text-white">A red blood effect is displayed on the screen when being attacked.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_6')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">6</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">攻擊怪物讓怪物名稱顯示血量。</p>
          <p class="text-base dark:text-white">Attack the monster to make the monster's name show its health.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_7')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">7</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">在頭上顯示聊天訊息。</p>
          <p class="text-base dark:text-white">Show chat messages on the head.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_8')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">8</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">使用指令觸發，在頭上顯示表情符號。</p>
          <p class="text-base dark:text-white">Use command trigger to display emoticons on the head.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_9')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">9</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">在生物頭上顯示血量等資訊。</p>
          <p class="text-base dark:text-white">Display blood volume and other information on the head of the creature.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_10')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">10</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">去除攻擊會顯示的愛心效果。</p>
          <p class="text-base dark:text-white">Remove the love effect displayed by the attack.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_11')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">11</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">攻擊顯示粒子特效。</p>
          <p class="text-base dark:text-white">Attack display particle special effects.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_12')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">12</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">打開GUI並做一些操作。</p>
          <p class="text-base dark:text-white">Open the GUI and do some operations.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_13')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">13</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">用BossBar顯示自身訊息。</p>
          <p class="text-base dark:text-white">Use BossBar to display your own information.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_14')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">14</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">被攻擊顯示傷害。</p>
          <p class="text-base dark:text-white">Damaged shows damage.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Example_15')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">15</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base text-orange-300">說話顯示在Discord上面。</p>
          <p class="text-base dark:text-white">Speaking is displayed on Discord.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <br/>
  <br/>
  <br/>

</template>

<style scoped>

</style>