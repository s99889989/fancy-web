<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">Class專用</p>
  <p class="text-2xl dark:text-white">Class dedicated</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >動作 Actions</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">CustomPoint</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">點數。(升級時所獲得的點數，可用來升級屬性點)</p>
          <p class="text-base">Points. (The points obtained during the upgrade can be used to upgrade the attribute points)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">AttributePoint</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">屬性點。(人物的一項統計屬性，可以把此屬性的佔位符放到Damage動作，來增加技能攻擊)</p>
          <p class="text-base">Attribute points. (A statistical attribute of the character, you can put the placeholder of this attribute in the Damage action to increase the skill attack)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">SetSkillLevel</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">技能相關的操作。</p>
          <p class="text-base">Skill-related operations.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>