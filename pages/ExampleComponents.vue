<script setup lang="ts">

</script>

<template>

  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="aspect-w-16 aspect-h-9">
      <iframe src="https://www.youtube.com/embed/c_j6Nt-iwcQ?si=Ek15M3ZJOUuNOsgR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <div class="flex justify-center">
    <video width="1280" height="720" controls>
      <source src="/plugins/fancy_series/fancy_gui/PlayerRenderAPI.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="flex justify-center">
    <img class="w-100" src="/plugins/fancy_series/fancy_gui/menu.png" alt="">
  </div>

  <div class="flex justify-center">
    <div class="inline-flex rounded-md shadow-sm bg-gray-800">
      <a href="#" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        A
      </a>
      <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        B
      </a>
      <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
        C
      </a>
    </div>
  </div>

  <p class="text-2xl dark:text-white"></p>
  <p class="text-2xl text-red-500"></p>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
</code>
  </pre>

  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
<!-- py-5-->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white"></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>