<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">BossBar</p>
  <p class="text-2xl text-red-500">動作: Boss欄</p>
  <p class="text-2xl text-red-500">Action: BossBar</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">Boss欄顯示</p>
  <p class="text-2xl dark:text-white">BossBar display</p>
  <p class="text-2xl dark:text-white">創BossBar的初始，必須包含Message、Style、Color這三項設置。</p>
  <p class="text-2xl dark:text-white">The initial creation of BossBar must include the three settings of Message, Style, and Color.</p>
  <img class="w-100" src="/plugins/custom_display/action/player/BossBar.png" alt="">

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
          <p class="text-base dark:text-white">Message</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">m</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">設置當前boss欄的標題。</p>
          <p class="text-base dark:text-white">Set the title of the current BossBar.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Style</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">設置這個boss欄的樣式。</p>
          <p class="text-base dark:text-white">Set the style of this BossBar.</p>
          <p class="text-base dark:text-white">1個部分、分為6個部分、分為10個部分、分為12個部分、分為20個部分</p>
          <p class="text-base dark:text-white">SOLID、SEGMENTED_6、SEGMENTED_10、SEGMENTED_12、SEGMENTED_20</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Color</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">設置這個boss欄的顏色。</p>
          <p class="text-base dark:text-white">Set the color of this BossBar.</p>
          <p class="text-base dark:text-white">藍色、綠色、粉紅色、紫色、紅色、白色、黃色</p>
          <p class="text-base dark:text-white">BLUE 、GREEN、PINK、PURPLE、RED、WHITE、YELLOW</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Progress</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">設置該boss欄的進度。這個參數必須是1.0（滿）到0.0（空）這兩個數字之間。</p>
          <p class="text-base dark:text-white">Set the progress of the BossBar. This parameter must be between 1.0 (full) and 0.0 (empty).</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Flag</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-orange-300">CREATE_FOG</p>
          <p class="text-base dark:text-white">在血條所在的世界產生迷霧</p>
          <p class="text-base dark:text-white">A fog is created in the world where the health bar is.</p>
          <p class="text-base dark:text-orange-300">DARKEN_SKY</p>
          <p class="text-base dark:text-white">凋零血條的屬性（戰鬥時天空會變暗）</p>
          <p class="text-base dark:text-white">The attribute of the withered blood bar (the sky will darken during battle).</p>
          <p class="text-base dark:text-orange-300">PLAY_BOSS_MUSIC</p>
          <p class="text-base dark:text-white">末影龍的血條屬性，告訴客戶端該播放打末影龍時候的BGM</p>
          <p class="text-base dark:text-white">The health bar attribute of the ender dragon tells the client to play the BGM of the ender dragon.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Delete</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">刪除Boss欄。</p>
          <p class="text-base dark:text-white">Delete the BossBar.</p>
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
BoosBarDisplayShow:
  Action:
  - Loop[onStart=BoosBarDisplayShow-Start;onTime=BoosBarDisplayShow-Time;period=20;duration=0]
BoosBarDisplayShow-Start:
  Action:
  - BossBar[message=&self_name_bossbar&-&self_nowhealth_bossbar&/&self_maxhealth_bossbar&;Color=RED;Style=SOLID]
BoosBarDisplayShow-Time:
  Action:
  - BossBar[message=&self_name_bossbar&-&self_nowhealth_bossbar&/&self_maxhealth_bossbar&;Progress=&self_health_proportion_bossbar&]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>