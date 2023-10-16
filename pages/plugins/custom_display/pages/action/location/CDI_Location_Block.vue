<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Block</p>
  <p class="text-2xl text-red-500">動作: 方塊</p>
  <p class="text-2xl text-red-500">Action: Block</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">在指定位置放置方塊。</p>
  <p class="text-2xl dark:text-white">Place the square at the specified location.</p>

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
          <p class="text-base dark:text-white">blockdata</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">bdata</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">方塊的類型。</p>
          <p class="text-base dark:text-white">The type of block.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">img</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要使用的圖片類型，把圖片轉為方塊顯示。</p>
          <p class="text-base dark:text-white">會依照Other/BlockColor.yml內的設定檔轉換。</p>
          <p class="text-base dark:text-white">The type of picture you want to use, turn the picture into a square display.</p>
          <p class="text-base dark:text-white">It will be converted according to the configuration file in Other/BlockColor.yml.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">imgrotangle</p>
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
DoorOpen3:
  Action:
  - block[IMG=stone5;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|67|-167}
  - Delay[t=2]
  - block[IMG=stone4;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|68|-167}
  - Delay[t=2]
  - block[IMG=stone3;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|69|-167}
  - Delay[t=2]
  - block[IMG=stone2;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|70|-167}
  - Delay[t=2]
  - block[IMG=stone;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|71|-167}
  - Delay[t=2]
  - block[IMG=stone0;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|72|-167}
  - Delay[t=2]
  - block[IMG=stone;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|73|-167}
  - Delay[t=2]
  - block[IMG=stone0;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|74|-167}
  - Delay[t=2]
  - block[IMG=stone;IMGRotAngle=self|false|false|0|0|0] @LocWorld{WorldName=self;LA=-6|75|-167}</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>