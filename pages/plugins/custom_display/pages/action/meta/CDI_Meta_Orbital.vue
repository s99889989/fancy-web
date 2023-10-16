<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Orbital</p>
  <p class="text-2xl text-red-500">動作: 軌道式</p>
  <p class="text-2xl text-red-500">Action: Orbital</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">此動作必須要有兩個座標點，不然不會運作。</p>
  <p class="text-2xl dark:text-white">如果使用的動作有座標需求，該動作就會使用此動作給的座標。</p>
  <p class="text-2xl dark:text-white">This action must have two coordinate points, otherwise it will not work.</p>
  <p class="text-2xl dark:text-white">If the used action has coordinate requirements, the action will use the coordinates given by this action.</p>

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
          <p class="text-base dark:text-white">onTimeHit</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">oth</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">持續時間內命中執行的動作。</p>
          <p class="text-base dark:text-white">The action executed by the hit within the duration.</p>
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

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">onEndHit</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">oeh</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果命中目標該做什麼動作。(命中後也會執行onEnd動作)</p>
          <p class="text-base dark:text-white">What to do if you hit the target.(The onEnd action will also be executed after the hit)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>

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
          <p class="text-base dark:text-white">1</p>
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
          <p class="text-base dark:text-white">OrbitalDeviation</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">od</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">偏移設定，分別是是否加上基準目標仰角、是否加上基準目標面相角、面相角是否隨機正負、仰角、面相角。</p>
          <p class="text-base dark:text-white">The offset settings are whether to add the reference target elevation angle, whether to add the reference target surface phase angle, whether the surface phase angle is randomly positive or negative, the elevation angle, and the surface phase angle.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true|true|false|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">speed</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">s</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">技能運行速度。(越小越快)</p>
          <p class="text-base dark:text-white">Skill operation speed. (The smaller the faster)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">20</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HitRange</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">hr</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">命中判定範圍。</p>
          <p class="text-base dark:text-white">Hit the judgment range.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0.8</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HitCount</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">hc</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">限制命中次數。設0為不限命中次數。</p>
          <p class="text-base dark:text-white">Limit the number of hits. Let 0 be an unlimited number of hits.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HitStop</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">hs</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">命中次數過後，是否停止動作。</p>
          <p class="text-base dark:text-white">Whether to stop the action after the number of hits.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">StartLocAdd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">SLA</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">起點增加座標。</p>
          <p class="text-base dark:text-white">分別是，是否加上自身仰角、是否加上自身面相角、仰角、面相角、距離、高度。</p>
          <p class="text-base dark:text-white">Increase the coordinates of the starting point.</p>
          <p class="text-base dark:text-white">They are whether to add the own elevation angle, whether to add the own face angle, elevation angle, face angle, distance, and height.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true|true|0|0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">EndLocAdd</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">ELA</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">終點增加座標。</p>
          <p class="text-base dark:text-white">分別是，是否加上目標仰角、是否加上目標面相角、仰角、面相角、距離、高度。</p>
          <p class="text-base dark:text-white">Add coordinates to the end point.</p>
          <p class="text-base dark:text-white">They are whether to add the target elevation angle, whether to add the target face angle, elevation angle, face angle, distance, and height.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true|true|0|0|0|0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">selfDead</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">sd</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果自身死亡任務是否取消。</p>
          <p class="text-base dark:text-white">Whether the task is cancelled if oneself dies.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">targetDead</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">td</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">如果目標死亡任務是否取消。</p>
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
Magician_SoulStrike:
  Action:
  - Orbital[onStart=Magician_SoulStrike-Start;onTime=Magician_SoulStrike-Time;onEndHit=Magician_SoulStrike-EndHit;onEnd=Magician_SoulStrike-End;Angle=80;Hight=1;AngleSign=true;period=1;duration=60;speed=20;StartLocAdd=0|3|0;EndLocAdd=0|2|0;hitRange=3]
Magician_SoulStrike-Start:
  Action:
  - Hologram[Function=create;m=䂱]
  - Sound[sound=lf2_skillstart12;pitch=1;volume=1;category=PLAYERS]
Magician_SoulStrike-Time:
  Action:
  - Hologram[Function=teleport]
Magician_SoulStrike-EndHit:
  Action:
  - Damage[Type=SKILL_MAGIC_ATTACK;amount=5]
  - Sound[sound=lf2_damge2;pitch=1;volume=1;category=PLAYERS]
  - Hologram[Function=delete]
Magician_SoulStrike-End:
  Action:
  - Damage[Type=SKILL_MAGIC_ATTACK;amount=5]
  - Sound[sound=lf2_damge2;pitch=1;volume=1;category=PLAYERS]
  - Hologram[Function=delete]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>