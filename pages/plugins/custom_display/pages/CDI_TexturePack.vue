<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Texture Pack</p>

  <p class="text-2xl dark:text-white">材質包Texture Pack</p>

  <p class="text-2xl dark:text-white">空白字符。</p>
  <p class="text-2xl dark:text-white">左邊的是把字往左推，右邊是往右推。</p>
  <p class="text-2xl dark:text-white">Blank character.</p>
  <p class="text-2xl dark:text-white">On the left is to push the word to the left, and on the right is to push to the right.</p>

  <img class="w-100" src="/plugins/custom_display/texture_pack/custom_display_texturepack_1.png" alt="">

  <p class="text-2xl dark:text-white mt-10">字體材質設定。</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">file</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要讀取的材質路徑。</p>
          <p class="text-base dark:text-white">The material path to be read.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ascent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">向下偏移，最大值不能超過height，值越低顯示位置越低。</p>
          <p class="text-base dark:text-white">Offset downward, the maximum value cannot exceed height, the lower the value, the lower the display position.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">height</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">材質大小。</p>
          <p class="text-base dark:text-white">Material size.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">chars</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要轉換的字元。</p>
          <p class="text-base dark:text-white">The character to be converted.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <img class="w-100" src="/plugins/custom_display/texture_pack/custom_display_texturepack_2.png" alt="">

  <p class="text-2xl dark:text-white mt-10">如果要把材質往上推，就必須在材質下方加上空白。</p>
  <p class="text-2xl dark:text-white">(要把顯示上下推必須是字體材質，沒有套材質的字無法上下推)</p>
  <p class="text-2xl dark:text-white">If you want to push up the material, you must add a blank below the material.</p>
  <p class="text-2xl dark:text-white">(To push the display up and down, the font material must be used, and the characters without a set of materials cannot be pushed up)</p>

  <img class="w-100 mt-10" src="/plugins/custom_display/texture_pack/custom_display_texturepack_3.png" alt="">

  <p class="text-2xl dark:text-white">一個圖片用多個字元。</p>
  <p class="text-2xl dark:text-white">以下範例是以上面圖片為範本。</p>
  <p class="text-2xl dark:text-white">每個區塊必須同樣大小。</p>
  <p class="text-2xl dark:text-white">Use multiple characters in a picture.</p>
  <p class="text-2xl dark:text-white">The following example is based on the above picture.</p>
  <p class="text-2xl dark:text-white">Each block must be the same size.</p>

  <img class="w-100" src="/plugins/custom_display/texture_pack/custom_display_texturepack_4.png" alt="">

  <p class="text-2xl dark:text-white mt-10">Unicode字元轉換工具</p>
  <p class="text-2xl dark:text-white">Unicode character conversion tool</p>

  <a class="text-3xl text-orange-300" href="https://www.ifreesite.com/unicode-ascii-ansi.htm" target="_blank">工具 Tool</a>

  <p class="text-2xl dark:text-white">上方為輸入時使用，下方為材質包內使用。</p>
  <p class="text-2xl dark:text-white">The upper part is used for input, and the lower part is used in the material pack.</p>

  <img class="w-100" src="/plugins/custom_display/texture_pack/custom_display_texturepack_5.png" alt="">

  <br/>
</template>

<style scoped>

</style>