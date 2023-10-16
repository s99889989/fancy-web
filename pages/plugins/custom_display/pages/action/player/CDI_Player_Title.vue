<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Title</p>
  <p class="text-2xl text-red-500">動作: 標題</p>
  <p class="text-2xl text-red-500">Action: Title</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">標題顯示</p>
  <p class="text-2xl dark:text-white">Title display</p>
  <img class="w-100" src="/plugins/custom_display/action/player/Title.png" alt="">

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
          <p class="text-base dark:text-white">title</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">t</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">標題內容</p>
          <p class="text-base dark:text-white">title content</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">subtitle</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">s</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">副標題內容</p>
          <p class="text-base dark:text-white">Subtitle content</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">fadeIn</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">fi</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">標題淡入時間,以tick為單位.</p>
          <p class="text-base dark:text-white">Title fade-in time, in ticks.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">10</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">duration</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">d</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">標題停留/展示時長,以tick為單位.</p>
          <p class="text-base dark:text-white">Title stay/display duration, in ticks.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">70</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">fadeOut</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">fo</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">標題淡出時間,以tick為單位.</p>
          <p class="text-base dark:text-white">Title fade-out time, in ticks.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">20</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Title1:
  Action:
  - Title[title=§0䂁,subtitle=§0䂁,fadeIn=1,duration=5,fadeOut=1]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>