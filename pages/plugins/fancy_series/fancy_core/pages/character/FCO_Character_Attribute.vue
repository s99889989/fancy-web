<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">Attribute</p>
  <p class="text-2xl dark:text-white">實體屬性</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >屬性名稱 Attribute name</p>

        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>


      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">max_health</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">生物的最大血量。</p>
          <p class="text-base">The maximum blood volume of a creature.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">follow_range</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">當一個生物正在跟隨其他生物/人的時候的跟隨範圍。</p>
          <p class="text-base">The following range when a creature is following other creatures/people.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">knockback_resistance</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">當生物被攻擊的時候的擊退抗性。</p>
          <p class="text-base">Knockback resistance when the creature is attacked.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">movement_speed</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">生物的移動速度。</p>
          <p class="text-base">The movement speed of the creature.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">flying_speed</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">實體的飛行速度。</p>
          <p class="text-base">The flight speed of the entity.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">attack_damage</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">當生物攻擊其他生物/實體時所造成的傷害。</p>
          <p class="text-base">The damage caused when a creature attacks other creatures/entities.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">attack_knockback</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">生物的攻擊擊退力度。</p>
          <p class="text-base">The attack of the creature repels the strength.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">attack_speed</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">生物的攻擊速率。</p>
          <p class="text-base">The attack rate of the creature.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">armor</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">護甲的防禦值。</p>
          <p class="text-base">The defense value of the armor.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">armor_toughness</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">護甲的韌性。</p>
          <p class="text-base">The toughness of the armor.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">luck</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">掉落物品的運氣。</p>
          <p class="text-base">Luck of dropped items.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">horse_jump_strength</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">馬跳起來的蓄力條。</p>
          <p class="text-base">The charge bar for the horse to jump up.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">zombie_spawn_reinforcements</p>

        </th>

        <td class="px-6 py-4">
          <p class="text-base">殭屍增援的機率。</p>
          <p class="text-base">The probability of zombie reinforcements.</p>
        </td>

      </tr>

      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>