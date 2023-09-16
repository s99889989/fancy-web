<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">介面</p>
  <p class="text-2xl dark:text-white">Gui</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">介面相關的操作.</p>
  <p class="text-2xl dark:text-white">Interface-related operations.</p>
  <p class="text-2xl dark:text-white">設定</p>
  <p class="text-2xl dark:text-white">Config</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱 Attribute</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述 Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">預設值 Default</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ID</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品的ID。</p>
          <p class="text-base dark:text-white">The ID of the item.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">RawSlot</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品放置的位置。</p>
          <p class="text-base dark:text-white">The location where the item is placed.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">DisplayName</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品顯示名稱。</p>
          <p class="text-base dark:text-white">Item display name.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Lore</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品的Lore。</p>
          <p class="text-base dark:text-white">Lore of the item.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Unbreakable</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">不會損壞。</p>
          <p class="text-base dark:text-white">Will not be damaged.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Data</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品的損壞值。</p>
          <p class="text-base dark:text-white">The damage value of the item.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CustomModelData</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品的CustomModelDataID。</p>
          <p class="text-base dark:text-white">The CustomModelDataID of the item.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HideItemFlags</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">隱藏物品的Flags。</p>
          <p class="text-base dark:text-white">Flags of hidden items.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">true</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HeadValue</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">頭的值(分為玩家名稱和value) <a target="_blank" href="https://minecraft-heads.com/custom-heads">(值連結)</a> 值只能用在paper伺服器。</p>
          <p class="text-base dark:text-white">The value of the header(Divided into player name and value) <a target="_blank" href="https://minecraft-heads.com/custom-heads">(value link)</a> The value can only be used in the paper server.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Move</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品是否可以移動。</p>
          <p class="text-base dark:text-white">Whether the item can be moved.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Left</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">左鍵點擊會觸發的動作，可以多個。</p>
          <p class="text-base dark:text-white">There can be multiple actions triggered by left-clicking.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Right</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">右鍵點擊會觸發的動作，可以多個。</p>
          <p class="text-base dark:text-white">There can be multiple actions triggered by right-clicking.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Left_Shift</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">左鍵+Shift鍵。(也會觸發到左鍵動作)</p>
          <p class="text-base dark:text-white">Left key + Shift key. (It will also trigger the left button action)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Right_Shift</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">右鍵+Shift鍵。(也會觸發到右鍵動作)</p>
          <p class="text-base dark:text-white">Right key + Shift key. (It will also trigger the right-click action)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white">範例</p>
  <p class="text-2xl dark:text-white">Examples</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Buttons:
  Novice_FirstAid:
    RawSlot: 20
    Move: false
    Material: 'COAL'
    CustomModelData: 1
    RemoveItemFlags: true
    Name: '§eEmergency treatment(&self_class_skill_FirstAid_max&/5)'
    Lore:
    - '§eUse level : &self_class_skill_FirstAid_now&/&self_class_skill_FirstAid_max&'
    - ''
    - 'Active skills'
    - ''
    - 'Recover itself quickly&self_class_skill_FirstAid_amount&Point health'
    - ''
    - 'Casting distance : 1.0m'
    - 'Skill cooldown : 10.0秒'
    Left:
    - Action[a=up_use_Novice_FirstAid]
    Right:
    - Action[a=down_use_Novice_FirstAid]
    Left_Shift:
    - Action[a=up_level_Novice_FirstAid]
    Right_Shift:
    - Action[a=down_level_Novice_FirstAid]</code>
  </pre>

</template>

<style scoped>

</style>