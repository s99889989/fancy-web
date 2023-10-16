<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Damage</p>
  <p class="text-2xl text-red-500">動作: 傷害</p>
  <p class="text-2xl text-red-500">Action: Damage</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">對目標造成傷害。</p>
  <p class="text-2xl dark:text-white">Damage the target.</p>

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
          <p class="text-base dark:text-white">Amount</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">a</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">量.</p>
          <p class="text-base dark:text-white">the amount.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Type</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">t</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">攻擊類型.</p>
          <p class="text-base dark:text-white">傷害判斷的核心，使用FancyCore，才需要用到這設定。</p>
          <p class="text-base dark:text-white">Attack type.</p>
          <p class="text-base dark:text-white">The core of damage judgment, using FancyCore, only needs to use this setting.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">default</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white">傷害類型</p>
  <p class="text-2xl dark:text-white">Attack type.</p>
  <p class="text-2xl dark:text-white">傷害判斷核心需使用FancyCore，才會有作用。</p>
  <p class="text-2xl dark:text-white">會以Other/CustomCore.yml裡面的設定為基礎。</p>
  <p class="text-2xl dark:text-white">The damage judgment core needs to use FancyCore to be effective.</p>
  <p class="text-2xl dark:text-white">It will be based on the settings in Other/CustomCore.yml.</p>

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
          <p class="text-base dark:text-white">melee</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">直接造成Amount值的傷害，但會觸發物理攻擊的判斷。</p>
          <p class="text-base dark:text-white">Directly causes Amount value of damage, but will trigger the judgment of physical attack.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">melee_add</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">會讓Amount值+上Melee_Physics的值造成傷害。</p>
          <p class="text-base dark:text-white">It will cause damage to the Amount value + the value of Melee_Physics.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">melee_multipl</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">會以Melee_Physics的值*Amount/100造成傷害。</p>
          <p class="text-base dark:text-white">Will deal damage with the value of Melee_Physics *Amount/100.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">magic</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">直接造成Amount值的傷害，但會觸發魔法攻擊的判斷。</p>
          <p class="text-base dark:text-white">Directly causes Amount value of damage, but will trigger the judgment of magic attack.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">magic_add</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">會讓Amount值+上Magic_Attack的值造成傷害。</p>
          <p class="text-base dark:text-white">It will cause damage to the Amount value + the value of Magic_Attack.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">magic_multiply</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">會以Magic_Attack的值*Amount/100造成傷害。</p>
          <p class="text-base dark:text-white">It will cause damage based on the value of Magic_Attack*Amount/100.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">range</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">直接造成Amount值的傷害，但會觸發物理攻擊的判斷。</p>
          <p class="text-base dark:text-white">Directly causes Amount value of damage, but will trigger the judgment of physical attack.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">range_add</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">會讓Amount值+上Range_Physics的值造成傷害。</p>
          <p class="text-base dark:text-white">It will cause damage to the Amount value + the value of Range_Physics.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">range_multiply</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">會以Range_Physics的值*Amount/100造成傷害。</p>
          <p class="text-base dark:text-white">Will cause damage based on the value of Range_Physics*Amount/100.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
FlashAttack:
  Action:
  - Damage[Amount=&self_class_skill_Slam_amount&]</code>
  </pre>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
RangeAttack:
  Action:
  - Damage[Type=range_add]</code>
  </pre>

  <br/><br/><br/>
</template>

<style scoped>

</style>