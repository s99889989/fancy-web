<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">FixedPoint</p>
  <p class="text-2xl text-red-500">動作: 定點式</p>
  <p class="text-2xl text-red-500">Action: FixedPoint</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">在定點持續動作。</p>
  <p class="text-2xl dark:text-white">Continue to move at a fixed point.</p>

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
          <p class="text-base dark:text-white"></p>
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
          <p class="text-base dark:text-white"></p>
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
          <p class="text-base dark:text-white"></p>
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
          <p class="text-base dark:text-white"></p>
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
          <p class="text-base dark:text-white">onHit</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果命中目標該做什麼動作。</p>
          <p class="text-base dark:text-white">(命中後也會執行onEnd動作)</p>
          <p class="text-base dark:text-white">What to do if you hit the target.</p>
          <p class="text-base dark:text-white">(The onEnd action will also be executed after the hit)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HitRange</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">命中判定範圍。</p>
          <p class="text-base dark:text-white">Hit the judgment range.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">3</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HitCount</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最多命中次數，設0為無限次。</p>
          <p class="text-base dark:text-white">The maximum number of hits, set 0 as unlimited times.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">onEnd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
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

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">LocAdd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">對起始目標增加座標量。</p>
          <p class="text-base dark:text-white">Increase the coordinate amount to the starting target.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">DirectionAdd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">da</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">向量增加座標，分別是是否加上基準目標仰角、是否加上基準目標面相角、仰角、面相角、距離。</p>
          <p class="text-base dark:text-white">The vector increase coordinates are the reference target (Self, Target), whether to add the reference target elevation angle, whether to add the reference target face angle, elevation angle, face angle, and distance.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true|true|0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">selfDead</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果自身死亡任務是否取消。</p>
          <p class="text-base dark:text-white">Whether the task is cancelled if oneself dies.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
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