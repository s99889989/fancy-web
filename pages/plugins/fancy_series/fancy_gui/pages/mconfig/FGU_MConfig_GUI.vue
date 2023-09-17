<script setup lang="ts">

</script>

<template>

  <p class="text-4xl dark:text-white">GUI</p>
  <p class="text-2xl dark:text-white">功能：介面</p>
  <p class="text-2xl dark:text-white">Function:GUI</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">主要介面設定，把設定好的按鈕或文字等組件放至GUI顯示出來。</p>
  <p class="text-2xl dark:text-white">Main GUI settings, put the set buttons or text and other components on the GUI for display.</p>

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
          <p class="text-base dark:text-white">Command</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要打開的指令名稱。</p>
          <p class="text-base dark:text-white">如果設為exp，就必須使用/fgui modgui exp來打開此GUI。</p>
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Permission</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">需要的權限。</p>
          <p class="text-base dark:text-white">如果設為exp，就必須要有fancygui.exp權限才能打開此GUI。</p>
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Image</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI要使用的圖片。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Width</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI的寬度，設0為根據圖片寬度。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Height</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI的高度，設0為根據圖片高度。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Position</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">對齊螢幕位置。</p>
          <p class="text-base dark:text-white">1為靠左上、2為靠中上、3為靠右上、4為靠左、5為至中、6為靠右、7為靠左下、8為靠中下、9為靠右下。</p>
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">X</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI的X偏移</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Y</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI的Y偏移</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Object</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要放入的組件，名稱為物件的文件名稱加上.再加上命名。</p>
          <p class="text-base dark:text-white">例如ExampleObject.ButtonExample</p>
          <p class="text-base dark:text-white"></p>
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
Command: 'exp'

Permission: 'exp'

Gui:
  Image: 'https://i.imgur.com/Rf9Tizv.png'
  Width: 0
  Height: 0
  Position: 5
  X: 0
  Y: 0

ObjectList:
  Close:
    Object: 'ExampleObject.ButtonExample'
    Position: 3
    X: 0
    Y: 0
  2:
    Object: 'ExampleObject.TextFieldExample'
    Position: 4
    X: 0
    Y: 0
  3:
    Object: 'ExampleObject.TextFieldExample'
    Position: 4
    X: 0
    Y: 20
  10:
    Object: 'ExampleObject.TextFieldExample'
    Position: 4
    X: 0
    Y: 40
  He:
    Object: 'Hub.GreanBar'
    Position: 7
    X: 0
    Y: 0
  Im:
    Object: 'ExampleObject.ImageExample'
    Position: 6
    X: 0
    Y: 0
  Ip:
    Object: 'ExampleObject.TextExample'
    Position: 6
    X: 0
    Y: 0</code>
  </pre>
</template>

<style scoped>

</style>