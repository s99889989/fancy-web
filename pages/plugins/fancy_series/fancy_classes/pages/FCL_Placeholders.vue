<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Placeholders</p>
  <p class="text-2xl text-red-500">Class</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">_class_name></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">目前職業名稱。</p>
          <p class="text-base dark:text-white">Current occupation name.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_level_now_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">目前等級。</p>
          <p class="text-base dark:text-white">The current level.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_level_max_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">等級上限。</p>
          <p class="text-base dark:text-white">The upper limit of the level.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_exp_now_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">目前經驗。</p>
          <p class="text-base dark:text-white">Current experience.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_exp_max_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">經驗上限。</p>
          <p class="text-base dark:text-white">The upper limit of experience.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_point_now_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">剩餘點數。</p>
          <p class="text-base dark:text-white">Points remaining.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_point_max_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點數總量。</p>
          <p class="text-base dark:text-white">The total number of points.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_attr_now_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">目前屬性值。</p>
          <p class="text-base dark:text-white">The current attribute value.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_attr_max_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">屬性上限。</p>
          <p class="text-base dark:text-white">Property upper limit.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_skill_now_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">技能目前等級。</p>
          <p class="text-base dark:text-white">The current level of the skill.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_skill_max_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">技能最高等級。</p>
          <p class="text-base dark:text-white">The highest level of skill.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_skill_use_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">技能使用等級。</p>
          <p class="text-base dark:text-white">Skill usage level.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_skill_bind_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1~8綁定的技能名稱。</p>
          <p class="text-base dark:text-white">The name of the skill bound to 1~8.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white"></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_nowmana></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">目前魔量。</p>
          <p class="text-base dark:text-white">The current magic power.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_maxmana></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最高魔量。</p>
          <p class="text-base dark:text-white">The highest magic power.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <br/>

</template>

<style scoped>

</style>