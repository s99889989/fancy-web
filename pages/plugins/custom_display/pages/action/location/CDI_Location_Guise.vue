<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Guise</p>
  <p class="text-2xl text-red-500">動作: 偽裝</p>
  <p class="text-2xl text-red-500">Action: Guise</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">放置虛假實體，讓實體穿上裝備或隱形。</p>
  <p class="text-2xl dark:text-white">Place a false entity, let the entity wear equipment or become invisible.</p>

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
          <p class="text-base dark:text-white">EntityType</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ET</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">實體的類型。(只能創非生命的實體)</p>
          <p class="text-base dark:text-white">The type of entity.(Can only create non-living entities)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ARMOR_STAND</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">EntityName</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">en</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">實體的顯示名稱。(沒設置就不會顯示)</p>
          <p class="text-base dark:text-white">The display name of the entity. (If not set, it will not be displayed)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Visible</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">實體是否看的見。</p>
          <p class="text-base dark:text-white">Whether the entity can see it.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ItemID</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要裝備的物品名稱。</p>
          <p class="text-base dark:text-white">The name of the item to be equipped.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">EquipmentSlot</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ES</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要裝備的部位。</p>
          <p class="text-base dark:text-white">The parts to be equipped.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">HEAD</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">duration</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">dt</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">顯示的時間。(小於0會出現馬上消失，0會永久存在。)</p>
          <p class="text-base dark:text-white">The time displayed. (Less than 0 will appear and disappear immediately, 0 will exist forever.)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">DirectionAdd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">DA</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">向量增加座標，分別是基準目標(Self、Target)、是否加上基準目標仰角、是否加上基準目標面相角、仰角、面相角、距離。</p>
          <p class="text-base dark:text-white">The vector increase coordinates are the reference target (Self, Target), whether to add the reference target elevation angle, whether to add the reference target face angle, elevation angle, face angle, and distance.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">Self|true|true|0|0|0</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 pt-10">盔甲架相關屬性 Armor stand related attributes</p>
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
          <p class="text-base dark:text-white">HeadAddLoc</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">hal</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">頭是否加上座標仰角和偏行角。</p>
          <p class="text-base dark:text-white">Whether to add coordinate elevation angle and yaw angle to the head.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false|false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Head</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">H</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">頭的角度。</p>
          <p class="text-base dark:text-white">The angle of the head.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Body</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">B</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">身體的角度。</p>
          <p class="text-base dark:text-white">The angle of the body.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">LeftArm</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">LAR</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">左手的角度。</p>
          <p class="text-base dark:text-white">The angle of the left hand.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">10|0|-10</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">RightArm</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">RAR</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">右手的角度。</p>
          <p class="text-base dark:text-white">The angle of the right hand.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">15|0|10</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">LeftLeg</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">LLG</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">左腿的角度。</p>
          <p class="text-base dark:text-white">The angle of the left leg.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1|0|-1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">RightLeg</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">RLG</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">右腿的角度。</p>
          <p class="text-base dark:text-white">The angle of the right leg.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1|0|1</p>
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