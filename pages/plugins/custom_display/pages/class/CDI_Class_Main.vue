<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Main</p>

  <p class="text-3xl text-red-500 mt-10">主設定.Main settings.</p>
  <p class="text-2xl dark:text-white">此設定為一開始會對每個玩家做的初始設定.</p>
  <p class="text-2xl dark:text-white">也可以轉換成其他設定.</p>
  <p class="text-2xl dark:text-white">This setting is the initial setting for each player at the beginning.</p>
  <p class="text-2xl dark:text-white">It can also be converted to other settings.</p>


  <p class="text-3xl text-red-500 mt-10">屬性Attributes</p>
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
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Class_Name</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">顯示名稱。</p>
          <p class="text-base dark:text-white">show name.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Action</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要讀取的動作文件，可讀取多個。</p>
          <p class="text-base dark:text-white">More than one action file to be read can be read.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Level</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要讀取的等級設定，可讀取多個。</p>
          <p class="text-base dark:text-white">You can read more than one level setting to be read.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Point</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要讀取的點數設定，可讀取多個。</p>
          <p class="text-base dark:text-white">Setting of the number of points to be read, multiple can be read.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Attributes_Point</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要讀取的屬性點設定，可讀取多個。</p>
          <p class="text-base dark:text-white">Multiple attribute point settings to be read can be read.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Attributes_Stats</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要讀取的屬性狀態設定，可讀取多個。</p>
          <p class="text-base dark:text-white">You can read more than one attribute status setting to be read.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Equipment_Stats</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要讀取的裝備狀態設定，可讀取多個。</p>
          <p class="text-base dark:text-white">Multiple equipment status settings can be read.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Melee_physics_formula</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">近距離普通攻擊傷害公式。(徒手或拿武器直接攻擊)</p>
          <p class="text-base dark:text-white">Normal attack damage formula at close range.(Attack directly with bare hands or with a weapon)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Range_physics_formula</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">遠距離普通攻擊傷害公式。(箭矢傷害)</p>
          <p class="text-base dark:text-white">Long-range normal attack damage formula.(Arrow damage)</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 mt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Default_Player:
  Class_Name: '初心者'
  Action:
  - 'Default'
  - 'Novice'
  Level:
  - 'base'
  - 'job'
  Point:
  - 'base'
  - 'job'
  Attributes_Point:
  - 'Point_Novice'
  Attributes_Stats:
  - 'Stats_Ro_Novice'
  Equipment_Stats:
  - 'Stats_Equipment'
  Melee_physics_formula: '&self_Melee_Physical_Attack& * (1+(&self_Eq_Fire_Attack&*&mob_attr_Attributes_Earth&))'
  Range_physics_formula: '&self_Ranage_Physical_Attack& * (1+(&self_Eq_Fire_Attack&*&mob_attr_Attributes_Earth&))'</code>
  </pre>

</template>

<style scoped>

</style>