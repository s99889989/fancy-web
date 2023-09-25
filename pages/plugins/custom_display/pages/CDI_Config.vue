<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Config</p>

  <p class="text-3xl text-red-500 mt-5">設定config</p>

  <p class="text-2xl dark:text-white">主要的一些設定。</p>
  <p class="text-2xl dark:text-white">The main settings</p>


  <p class="text-3xl text-red-500 mt-10">攻擊判斷核心</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">名稱</p>
          <p class="text-base dark:text-white">Name</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Default</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最基礎的核心判斷方式。</p>
          <p class="text-base dark:text-white">The most basic core judgment method.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">MMOLib</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果使用MMOItems，沒有使用MMOCore的情況。(此方法不能準確判斷暴擊)</p>
          <p class="text-base dark:text-white">If MMOItems are used, MMOCore is not used. (This method cannot accurately determine the critical strike)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">MMOCore</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果有使用MMOCore的情況。(此方法不能準確判斷暴擊)</p>
          <p class="text-base dark:text-white">If you use MMOCore. (This method cannot accurately determine the critical strike)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">AttributePlus</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果有使用AttributePlus的情況。</p>
          <p class="text-base dark:text-white">If you use AttributePlus.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">SkillAPI</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果有使用SkillAPI的情況。</p>
          <p class="text-base dark:text-white">If you use SkillAPI.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">SkillAPI_MMOLib</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果有使用SkillAPI和MMOLib的情況。</p>
          <p class="text-base dark:text-white">If you use SkillAPI and MMOLib.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CrackShot</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果有使用CrackShot的情況。</p>
          <p class="text-base dark:text-white">If you use CrackShot.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CDMMOLib</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">因為MMOLib本身沒有暴擊判斷，所以出個MMOLib的修改版，可以準確地判定暴擊。</p>
          <p class="text-base dark:text-white">Because MMOLib itself has no critical strike judgment, a modified version of MMOLib can be used to accurately judge critical strikes.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">MythicLib</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果使用MMOItems，沒有使用MMOCore的情況。(此方法不能準確判斷暴擊)</p>
          <p class="text-base dark:text-white">If MMOItems are used, MMOCore is not used. (This method cannot accurately determine the critical strike)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">MythicLib_MMOCore</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果有使用MMOCore的情況。(此方法不能準確判斷暴擊)</p>
          <p class="text-base dark:text-white">If you use MMOCore. (This method cannot accurately determine the critical strike)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">MythicLib_SkillAPI</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果有使用SkillAPI和MMOLib的情況。(此方法不能準確判斷暴擊)</p>
          <p class="text-base dark:text-white">If you use SkillAPI and MMOLib. (This method cannot accurately determine the critical strike)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CDMythicLib</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">因為MythicLib本身沒有暴擊判斷，所以出個MythicLib的修改版，可以準確地判定暴擊。</p>
          <p class="text-base dark:text-white">Because MythicLib itself does not have a critical strike judgment, a modified version of MythicLib can be used to accurately judge critical strikes.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CustomCore</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>