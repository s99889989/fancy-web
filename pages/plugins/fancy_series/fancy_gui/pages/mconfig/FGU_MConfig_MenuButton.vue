<script setup lang="ts">

</script>

<template>

  <p class="text-4xl dark:text-white">MenuButton</p>
  <p class="text-2xl dark:text-white">功能：選單按鈕</p>
  <p class="text-2xl dark:text-white">Function: MenuButton</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">點擊可展開多個顯示選項</p>
  <p class="text-2xl dark:text-white">Click to expand multiple display options.</p>

  <p class="text-4xl text-red-500">屬性Attributes</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱 Attribute</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述 Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">預設值 Default</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">DisplayFont</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">按鈕顯示的文字。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">FontSize</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">顯示的文字大小。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OnImage</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點擊下去顯示的材質。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OnWidth</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點擊下去材質的寬。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OnHeight</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點及下去材質的高。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OffImage</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">尚未點擊時的材質。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OffWidth</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">尚未點擊材質的寬。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OffHeight</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">尚未點擊材質的高。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ObjectList</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點擊下去要顯示的物件。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-4xl text-red-500">範例Examples</p>

  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
MenuButtonExample:
  Type: MenuButton
  DisplayFont: '按鈕!!'
  FontSize: 1
  OnImage: 'fancyclient/textures/gui/button/button_on.png'
  OnWidth: -1
  OnHeight: -1
  OffImage: 'fancyclient/textures/gui/button/button_off.png'
  OffWidth: -1
  OffHeight: -1
  ObjectList:
    Close:
      Object: 'ExampleObject.ButtonExample'
      Position: 1
      X: 320
      Y: 30
    Image:
      Object: 'ExampleObject.ImageExample'
      Position: 1
      X: 320
      Y: 50
    Close2:
      Object: 'ExampleObject.ButtonExample'
      Position: 1
      X: 320
      Y: 70
    Text:
      Object: 'ExampleObject.TextExample'
      Position: 1
      X: 320
      Y: 90</code>
  </pre>

</template>

<style scoped>

</style>