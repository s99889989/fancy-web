<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Placeholders</p>

  <p class="text-3xl text-red-500 mt-5">自訂字符 Placeholders</p>
  <p class="text-2xl dark:text-white">這裡為CustomDisplay插件專用的佔位符.</p>
  <p class="text-2xl dark:text-white">Here is a placeholder dedicated to the CustomDisplay plugin.</p>

  <p class="text-3xl text-red-500 mt-10">目標 Aims</p>
  <p class="text-2xl text-red-500 mt-5">目標選擇 Target selection</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">&lt;cd_target</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">針對目標。</p>
          <p class="text-base dark:text-white">Targeted.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">&lt;cd_self</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">針對自己。</p>
          <p class="text-base dark:text-white">Against yourself.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-2xl text-red-500 mt-5">基礎屬性 Basic attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">_base_name></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">名稱。</p>
          <p class="text-base dark:text-white">Name.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_uuid></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">UUID。</p>
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_height></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">身高。</p>
          <p class="text-base dark:text-white">height.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_nowhealth></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">目前的血量。</p>
          <p class="text-base dark:text-white">Current blood volume.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_maxhealth></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最高血量。</p>
          <p class="text-base dark:text-white">The highest blood volume.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_type></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">生物類型。</p>
          <p class="text-base dark:text-white">Type of creature.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_biome></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">所在的生態域。</p>
          <p class="text-base dark:text-white">The ecological domain in which it is located.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_world></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">所在的世界。</p>
          <p class="text-base dark:text-white">In the world.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_loc_x></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">所在世界的x座標。</p>
          <p class="text-base dark:text-white">The x coordinate of the world.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_loc_y></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">所在世界的y座標。</p>
          <p class="text-base dark:text-white">The y coordinate of the world.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_loc_z></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">所在世界的z座標。</p>
          <p class="text-base dark:text-white">The z coordinate of the world.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_vec_x></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">向量x座標。</p>
          <p class="text-base dark:text-white">Vector x coordinate. </p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_vec_y></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">向量y座標。</p>
          <p class="text-base dark:text-white">The vector y coordinate. </p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_vec_z></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">的向量z座標。</p>
          <p class="text-base dark:text-white">The z coordinate of the vector.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_attack_number></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">攻擊的數字。(如果失敗會顯示miss)</p>
          <p class="text-base dark:text-white">Number of attacks. (If it fails, it will show miss)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_base_damaged_number></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">被攻擊的數字。</p>
          <p class="text-base dark:text-white">The number of attacks.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl text-red-500 mt-5">生物屬性 Biological attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">_attribute_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">實體的屬性。(範例 _attribute_max_health>)</p>
          <p class="text-base dark:text-white">The attributes of the entity.(Example _attribute_max_health>)</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl text-red-500 mt-5">玩家Player</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">_player_enchants_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">附魔等級。(會以裝備和正副手的加總來算)(範例 _enchants_arrow_damage>)</p>
          <p class="text-base dark:text-white">Enchanting level.(It will be calculated based on the sum of equipment and deputies)(Example _enchants_arrow_damage>)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_equipment_type_mainhand></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">主手裝備類型。</p>
          <p class="text-base dark:text-white">Main hand equipment type.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_last_chat></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後一句說的話。</p>
          <p class="text-base dark:text-white">The last sentence.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_cast_command></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後輸入的cast指令關鍵字。(/cd cast 關鍵字)</p>
          <p class="text-base dark:text-white">The last input keyword of the cast command. (/cd cast keyword)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_kill_mob_type></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後殺死的怪物類型。</p>
          <p class="text-base dark:text-white">The type of monster killed last.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_kill_mythic_mob_id></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後殺死的MythicMobs怪物ID。</p>
          <p class="text-base dark:text-white">The ID of the last MythicMobs monster killed.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_kill_mythic_mob_money></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後殺死的MythicMobs怪物獲得的錢。</p>
          <p class="text-base dark:text-white">Money obtained by the last killed MythicMobs monster.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_kill_mythic_mob_exp></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後殺死的MythicMobs怪物獲得的經驗。</p>
          <p class="text-base dark:text-white">The experience gained by the last MythicMobs monster killed.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_kill_mythic_mob_item></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後殺死的MythicMobs怪物獲得的物品。</p>
          <p class="text-base dark:text-white">The item obtained by the last MythicMobs monster killed.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_up_exp_type></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後增加經驗的經驗類型。</p>
          <p class="text-base dark:text-white">Finally, increase the experience type of experience.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_down_exp_type></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後減少經驗的經驗類型。</p>
          <p class="text-base dark:text-white">Finally reduce the experience type of experience.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_change_exp_amount></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後改變的經驗值量。</p>
          <p class="text-base dark:text-white">The amount of experience points last changed.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_up_level_type></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後升等的類型。</p>
          <p class="text-base dark:text-white">The type of last upgrade.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_down_level_type></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最後降等的類型。</p>
          <p class="text-base dark:text-white">The type of last drop.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_player_item_amount_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品在身上的數量。(限定CustomDisplay製作的物品)</p>
          <p class="text-base dark:text-white">The number of items on the body. (Limited items made by CustomDisplay)</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl text-red-500 mt-5">職業屬性Class attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">_class_name></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">職業名稱。</p>
          <p class="text-base dark:text-white">Class name.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_nowmana></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">目前魔量。</p>
          <p class="text-base dark:text-white">The current now mana.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_maxmana></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">最高魔量。</p>
          <p class="text-base dark:text-white">The current max mana.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_level_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">等級和經驗值。</p>
          <p class="text-base dark:text-white">Level and experience value.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_point_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點數。</p>
          <p class="text-base dark:text-white">Points.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_attr_point_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">屬性點數。</p>
          <p class="text-base dark:text-white">Attribute points.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_attr_stats_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">狀態屬性。</p>
          <p class="text-base dark:text-white">State attributes.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_eqm_stats_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">裝備屬性。</p>
          <p class="text-base dark:text-white">Equipment attributes.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_skill_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">技能等級。</p>
          <p class="text-base dark:text-white">skill level.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_bind_name_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">綁定的技能名稱。(1~8)</p>
          <p class="text-base dark:text-white">The name of the bound skill. (1~8)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_bind_use_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">綁定的使用等級。(1~8)</p>
          <p class="text-base dark:text-white">The usage level of the binding. (1~8)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_class_core_attr_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">核心屬性。</p>
          <p class="text-base dark:text-white">core attributes.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl text-red-500 mt-5">MythicMobs</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">_mythic_id></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">MythicMob的ID。</p>
          <p class="text-base dark:text-white">The ID of MythicMob.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_mythic_level></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">MythicMobs等級。</p>
          <p class="text-base dark:text-white">MythicMobs level.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_mythic_faction></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">MythicMobs派系。</p>
          <p class="text-base dark:text-white">MythicMobs faction.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_mythic_class_stats_*></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">怪物的自訂屬性。</p>
          <p class="text-base dark:text-white">Custom attributes of monsters.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl text-red-500 mt-5">ModelEngine</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">_modelengine_id></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">使用的ModelEngine模型ID。</p>
          <p class="text-base dark:text-white">The ModelEngine model ID used.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_modelengine_eye_hight></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">眼睛高度。(如果不是ModelEngine生物會回傳生物身高)</p>
          <p class="text-base dark:text-white">Eye height.(If it is not a ModelEngine creature, it will return the height of the creature)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_modelengine_hit_hight></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">HitBox高度。(如果不是ModelEngine生物會回傳生物身高)</p>
          <p class="text-base dark:text-white">HitBox height.(If it is not a ModelEngine creature, it will return the height of the creature)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">_modelengine_hit_width></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">HitBox寬度。</p>
          <p class="text-base dark:text-white">HitBox width.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl text-red-500 mt-5">其它Other</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">佔位符名稱</p>
          <p class="text-base dark:text-white">Placeholder name</p>
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
          <p class="text-base dark:text-white">&lt;cd_other_math_random_#></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">亂數。</p>
          <p class="text-base dark:text-white">Random numbers.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">&lt;cd_other_damaged_number></p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無攻擊者的被攻擊傷害.</p>
          <p class="text-base dark:text-white">No damage from the attacker was attacked.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <br/><br/><br/>

</template>

<style scoped>

</style>