<script setup lang="ts">

</script>

<template>
  <p class="text-2xl text-red-500">觸發 Trigger</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">The case must be the same.</p>
  <p class="text-2xl text-orange-300">大小寫必須相同.</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p>觸發 Trigger</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p>描述 Description</p>
        </th>

      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onAttack</p>

        </th>
        <td class="px-6 py-4">
          <p>當攻擊時.</p>
          <p>When attacking.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onCrit</p>

        </th>
        <td class="px-6 py-4">
          <p>當爆擊時.(AttributePlus 插件)</p>
          <p>When critical strike.(AttributePlus plugin)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onMagic</p>

        </th>
        <td class="px-6 py-4">
          <p>當魔法攻擊時。(MMOLib)</p>
          <p>When magic attacks. (MMOLib)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onMCrit</p>

        </th>
        <td class="px-6 py-4">
          <p>當魔法攻擊爆擊時。(MMOLib)</p>
          <p>When the magic attack critically strikes.(MMOLib)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onAtkMiss</p>

        </th>
        <td class="px-6 py-4">
          <p>當攻擊失敗時.</p>
          <p>When the attack fails.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onDamaged</p>

        </th>
        <td class="px-6 py-4">
          <p>被攻擊時.</p>
          <p>When damaged.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onDamagedMiss</p>

        </th>
        <td class="px-6 py-4">
          <p>被攻擊失敗時.</p>
          <p>When the damaged fails.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onRegainHealth</p>

        </th>
        <td class="px-6 py-4">
          <p>當回血時.</p>
          <p>When the blood returns.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onJoin</p>

        </th>
        <td class="px-6 py-4">
          <p>當登入時.</p>
          <p>When logging in.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onQuit</p>

        </th>
        <td class="px-6 py-4">
          <p>當登出時.</p>
          <p>When logging out.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onMove</p>

        </th>
        <td class="px-6 py-4">
          <p>移動時.</p>
          <p>When moving.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onSneak</p>

        </th>
        <td class="px-6 py-4">
          <p>蹲下時.</p>
          <p>When squatting.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onStandup</p>

        </th>
        <td class="px-6 py-4">
          <p>站起來時.</p>
          <p>When standing up.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onDeath</p>

        </th>
        <td class="px-6 py-4">
          <p>當死亡時.</p>
          <p>When dead.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onKeyFON</p>

        </th>
        <td class="px-6 py-4">
          <p>當按下案件F時，一開始會觸發為ON，登出重新計算。</p>
          <p>When the case F is pressed, the trigger will be ON at the beginning, and log out and recalculate.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onKeyFOFF</p>

        </th>
        <td class="px-6 py-4">
          <p>再按下案件F時，觸發為OFF，登出重新計算。</p>
          <p>When item F is pressed again, the trigger will be OFF, and logout will recalculate.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onKey1... ~onKey9</p>
        </th>
        <td class="px-6 py-4">
          <p>當切換到該物品欄時，從左至右為1~9。</p>
          <p>When switching to this inventory, it is 1-9 from left to right.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onChat</p>
        </th>
        <td class="px-6 py-4">
          <p>當說話時.</p>
          <p>When talking.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onCommand</p>
        </th>
        <td class="px-6 py-4">
          <p>當輸入指定指令時.</p>
          <p>When entering a specified command.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onLevelUp</p>
        </th>
        <td class="px-6 py-4">
          <p>當等級提升時.</p>
          <p>When the level increases.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onLevelDown</p>
        </th>
        <td class="px-6 py-4">
          <p>當等級降低時.</p>
          <p>When the level decreases.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onExpUp</p>
        </th>
        <td class="px-6 py-4">
          <p>當獲得經驗值時.</p>
          <p>When gaining experience points.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onExpDown</p>
        </th>
        <td class="px-6 py-4">
          <p>當失去經驗值時.</p>
          <p>When losing experience points.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onMobDeath</p>
        </th>
        <td class="px-6 py-4">
          <p>當怪物死亡時.(死亡原因必須是該玩家)</p>
          <p>When the monster dies. (The cause of death must be the player)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~LeftClickAir</p>
        </th>
        <td class="px-6 py-4">
          <p>左鍵點擊空氣時。</p>
          <p>When left-clicking on air.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~LeftClickBlock</p>
        </th>
        <td class="px-6 py-4">
          <p>左鍵點擊方塊時。</p>
          <p>When left-clicking on the square.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~RightClickAir</p>
        </th>
        <td class="px-6 py-4">
          <p>右鍵點擊空氣時。</p>
          <p>When right-clicking on air.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~RightClickBlock</p>
        </th>
        <td class="px-6 py-4">
          <p>右鍵點擊方塊時。</p>
          <p>When right-clicking on the square.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~PressurePlate</p>
        </th>
        <td class="px-6 py-4">
          <p>踩到壓力板時。(必須加上世界和座標XYZ)(例如：~PressurePlateworld_nether42371-167)</p>
          <p>When stepping on the pressure plate.(Must add the world and coordinates XYZ) (for example: ~PressurePlateworld_nether42371-167)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~EqmChange</p>
        </th>
        <td class="px-6 py-4">
          <p>裝備有變動時。</p>
          <p>When the equipment is changed.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onLeverOn</p>
        </th>
        <td class="px-6 py-4">
          <p>當控制桿開啟時。(必須加上世界和座標XYZ)(例如：~onLeverOnWorld-1071-167)</p>
          <p>When the lever is turned on. (Must add the world and coordinates XYZ) (for example: ~onLeverOnWorld-1071-167)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onLeverOff</p>
        </th>
        <td class="px-6 py-4">
          <p>當控制桿關閉時。(必須加上世界和座標XYZ)(例如：~onLeverOff302-71-167)</p>
          <p>When the lever is closed. (Must add the world and coordinates XYZ) (for example: ~onLeverOff302-71-167)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onButton</p>
        </th>
        <td class="px-6 py-4">
          <p>當按下按鈕時。(必須加上世界和座標XYZ)(例如：~onButton-10-71167)</p>
          <p>When the button is pressed. (Must add the world and coordinates XYZ) (for example: ~onButton-10-71167)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>以下功能尚未完成。</p>
        </th>
        <td class="px-6 py-4">
          <p>The following functions have not yet been completed.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onChangeWorld</p>
        </th>
        <td class="px-6 py-4">
          <p>換到別的世界時.</p>
          <p>When changing to another world.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onDropItem</p>
        </th>
        <td class="px-6 py-4">
          <p>丟出物品時.</p>
          <p>When throwing out items.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onFish</p>
        </th>
        <td class="px-6 py-4">
          <p>釣魚時.</p>
          <p>When fishing.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onHarvestBlock</p>
        </th>
        <td class="px-6 py-4">
          <p>收穫方塊時.</p>
          <p>When harvesting blocks.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onInteractEntity</p>
        </th>
        <td class="px-6 py-4">
          <p>點擊實體時.</p>
          <p>When clicking on an entity.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onInteract</p>
        </th>
        <td class="px-6 py-4">
          <p>點擊時.</p>
          <p>When clicked.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onRespawn</p>
        </th>
        <td class="px-6 py-4">
          <p>當重生時.</p>
          <p>When reborn.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onShearEntity</p>
        </th>
        <td class="px-6 py-4">
          <p>對實體採集時.</p>
          <p>When collecting entities.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onPotionEffect</p>
        </th>
        <td class="px-6 py-4">
          <p>獲得藥水效果時.</p>
          <p>When the potion effect is obtained.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onShootBow</p>
        </th>
        <td class="px-6 py-4">
          <p>當射出箭時.</p>
          <p>When shooting arrows.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onTarget</p>
        </th>
        <td class="px-6 py-4">
          <p>瞄準或取消瞄準時.</p>
          <p>When aiming or canceling aiming.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onProjectileHit</p>
        </th>
        <td class="px-6 py-4">
          <p>當彈丸擊中物體時.</p>
          <p>when a projectile hits</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white">MythicMobs</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p>觸發 Trigger</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p>描述 Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onMMobDeath</p>
        </th>
        <td class="px-6 py-4">
          <p>當MythicMobs的怪物死亡.(死亡原因必須是該玩家)</p>
          <p>When the monster of MythicMobs dies. (The cause of death must be the player)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onMMobDropExp</p>
        </th>
        <td class="px-6 py-4">
          <p>當MythicMobs的怪物掉落經驗.</p>
          <p>When the monsters of MythicMobs drop experience.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onMMobDropMoney</p>
        </th>
        <td class="px-6 py-4">
          <p>當MythicMobs的怪物掉落金錢.</p>
          <p>When the monsters of MythicMobs drop money.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p>~onMMobDropItem</p>
        </th>
        <td class="px-6 py-4">
          <p>當MythicMobs的怪物掉落物品.</p>
          <p>When monsters in MythicMobs drop items.</p>
        </td>
      </tr>


      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>