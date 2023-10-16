<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">LocPng</p>
  <p class="text-2xl text-red-500">動作: 圖片座標</p>
  <p class="text-2xl text-red-500">Action: LocPng</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">把圖片轉成座標，並在該座標實現動作。</p>
  <p class="text-2xl dark:text-white">Convert the picture to coordinates, and implement actions at that coordinates.</p>

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
          <p class="text-base dark:text-white">period</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">p</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">多久執行一次onTime動作。</p>
          <p class="text-base dark:text-white">How often to execute the onTime action.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">20</p>
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
          <p class="text-base dark:text-white">此動作要持續多久。</p>
          <p class="text-base dark:text-white">How long will this action last.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">100</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">onStart</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">os</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">開始執行的動作。</p>
          <p class="text-base dark:text-white">Start the action.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">onTime</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ot</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">持續時間內執行的動作。</p>
          <p class="text-base dark:text-white">Action performed within the duration.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">onEnd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">oe</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">結束後要執行的動作。</p>
          <p class="text-base dark:text-white">The action to be performed after the end.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 pt-10">圖片屬性 Image Attributes</p>
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
          <p class="text-base dark:text-white">IMG</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要使用的圖片名稱。(限定PNG格式)</p>
          <p class="text-base dark:text-white">The name of the picture to use.(Limited to PNG format)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">IMGSize</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">is</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">圖片轉成粒子後的位置進行縮放。</p>
          <p class="text-base dark:text-white">The position of the picture after being converted into particles is scaled.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">IMGRotAngle</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ira</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">圖片要選轉的角度，基準目標(Self、Target)、是否加上基準目標仰角、是否加上基準目標面相角、X軸旋轉、Y軸旋轉、Z軸旋轉。(旋轉角為0~359)</p>
          <p class="text-base dark:text-white">The angle at which the picture needs to be rotated, the reference target (Self, Target), whether to add the reference target elevation angle, whether to add the reference target surface phase angle, X-axis rotation, Y-axis rotation, Z-axis rotation. (The rotation angle is 0~359)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">Self|true|true|0|0|0</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>