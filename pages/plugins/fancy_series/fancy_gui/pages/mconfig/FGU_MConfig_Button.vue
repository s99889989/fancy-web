<script setup lang="ts">

</script>

<template>

  <p class="text-4xl dark:text-white">Button</p>
  <p class="text-2xl dark:text-white">功能：按鈕</p>
  <p class="text-2xl dark:text-white">Function: Button</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">點擊可以執行FancyCore的動作。</p>
  <p class="text-2xl dark:text-white">Click to execute FancyCore actions.</p>
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
          <p class="text-base dark:text-white">DisplayName</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">按鈕顯示的名稱。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ImageOn</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">滑鼠移到按鈕上顯示的材質。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ImageOff</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">平時按鈕的材質。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">WidthOn</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">滑鼠移到按鈕上顯示的材質寬度，0為依據圖片本身寬度。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HeightOn</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">滑鼠移到按鈕上顯示的材質高度，0為依據圖片本身高度。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">WidthOff</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">平時按鈕的材質的寬度，0為依據圖片本身寬度。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HeightOff</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">平時按鈕的材質高度，0為依據圖片本身高度。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Close</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點擊後是否關閉GUI。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ToMenu</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點擊後要開啟的GUI。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Action</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點擊後要型的動作。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-4xl text-red-500">範例Examples</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ButtonExample:
  Type: Button
  DisplayName: '§e關閉視窗'
  ImageOn: 'https://i.imgur.com/VmfhCq2.png'
  ImageOff: 'https://i.imgur.com/9q8FpAt.png'
  WidthOn: 0
  HeightOn: 0
  WidthOff: 0
  HeightOff: 0
  Close: false
  ToMenu: ''
  Action:
    Left:
    - 'Action[a=CloseGui]'</code>
  </pre>
</template>

<style scoped>

</style>