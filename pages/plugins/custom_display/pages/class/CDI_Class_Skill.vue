<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Skill</p>

  <p class="text-3xl text-red-500 mt-5">技能Skill</p>
  <p class="text-2xl dark:text-white">每個類別專屬的能力。</p>
  <p class="text-2xl dark:text-white">Each category has exclusive capabilities.</p>

  <p class="text-3xl text-red-500 mt-10">設定Config</p>
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
          <p class="text-base dark:text-white">預設值</p>
          <p class="text-base dark:text-white">Default</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Name</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">技能名稱。</p>
          <p class="text-base dark:text-white">Skill name.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">NeedTarget</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">是否看到目標才能使用技能。</p>
          <p class="text-base dark:text-white">You can use the skill if you see the target.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">TargetDistance</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">看到目標的最遠距離。</p>
          <p class="text-base dark:text-white">The farthest distance to see the target.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Mana</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">技能消耗魔量。</p>
          <p class="text-base dark:text-white">Skills consume mana.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Cooldown</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">使用技能後要等多久才能再次使用。</p>
          <p class="text-base dark:text-white">How long do you have to wait after using the skill before you can use it again.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CastDelay</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">使用此技能消耗的時間。</p>
          <p class="text-base dark:text-white">The time spent using this skill.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CastTime</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">技能施法時間。</p>
          <p class="text-base dark:text-white">Skill casting time.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 mt-10">範例Examples</p>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Skills:
  Archer_DoubleStrafing:
    Base: 0
    Material: 'COAL'
    CustomModelData: 17
    Name: '§e二連矢(&self_class_skill_Archer_DoubleStrafing_now&/&self_class_skill_Archer_DoubleStrafing_max&)'
    Lore:
    - ''
    - '§6同時射出2箭，對敵方單體造成雙倍（物'
    - '§6理攻擊&self_class_skill_Archer_DoubleStrafing_gui&%）物理傷害。施放技能時必'
    - '§6須裝備弓類武器'
    - ''
    - '§6施法距離 : 5.0m'
    - '§6技能延遲: 1.0秒'
    - '§6消耗SP: 15'
    BarName: '䂿'
    NeedTarget: false
    TargetDistance: 10
    CoolDown: 2
    CastTime: 0
    CastDelay: 0
    Mana: 1
    Action:
    - Action[a=Archer_DoubleStrafing]</code>
  </pre>

</template>

<style scoped>

</style>