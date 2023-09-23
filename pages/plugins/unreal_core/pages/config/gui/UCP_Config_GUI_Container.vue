<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">GUI Container Config</p>

  <p class="text-3xl text-red-500 mt-5">屬性Attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱</p>
          <p class="text-base dark:text-white">Attribute</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">範例</p>
          <p class="text-base dark:text-white">Example</p>
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
          <p class="text-base dark:text-white">X</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">畫面上的X位置。</p>
          <p class="text-base dark:text-white">X position on the screen.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">30</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Y</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">畫面上的Y位置。</p>
          <p class="text-base dark:text-white">Y position on the screen.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">40</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Width</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">該物件的寬度。</p>
          <p class="text-base dark:text-white">The width of the object.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">20</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Height</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">該物件的高度。</p>
          <p class="text-base dark:text-white">The height of the object.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">30</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">BackgroundColor</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">BackgroundTransparent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">BackgroundImage</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OverflowX</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ScrollX</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">OverflowY</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ScrollY</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ContentList.&lt;name>.</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物件，支持Button、Check、Image、Input和Text。</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 mt-5">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
  Container11:
    Type: Container
    BackgroundImage: 'gui/container/background6.png'
    Width: 100
    Height: 60
    BackgroundColor: 'ffbf59'
    X: 25
    Y: 125
    ContentList:
      Name:
        Type: 'Text'
        Text:
        - 's99889989~~1'
        - 's99889989~~2'
        - 's99889989~~3'
        - '10'
        TextSize: '1'
        Space: 12
        TextColor: '000000'
        X: '{Container11_xs}'
        Y: '{Container11_ys}+15'
      Button9:
        Type: Button
        Image: 'gui/button/button2_off.png'
        HoverImage: 'gui/button/button2_on.png'
        ClickImage: 'gui/button/button2_on.png'
        Width: 20
        Height: 12
        Text: '設定'
        TextColor: '00CACA'
        TextSize: 1
        ToMenu: 'rpg9'
        Close: false
        X: '{Container11_xs}'
        Y: '{Container11_ys}'</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>