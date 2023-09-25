<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Item</p>

  <p class="text-2xl dark:text-white">物品 Item</p>

  <p class="text-2xl dark:text-white">物品相關的操作.</p>
  <p class="text-2xl dark:text-white">Item-related operations.</p>

  <p class="text-3xl dark:text-white mt-10">設定 Config</p>
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
          <p class="text-base dark:text-white">Material</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品使用的材質。</p>
          <p class="text-base dark:text-white">The material used for the item.</p>
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
          <p class="text-base dark:text-white">Enchantments</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">附魔。</p>
          <p class="text-base dark:text-white">Enchant.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Attributes</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">增加屬性。 ( 屬性名稱連結 ) ( 屬性部位 )</p>
          <p class="text-base dark:text-white">Increase attributes. ( Attribute name link ) ( Attribute slot )</p>
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
          <p class="text-base dark:text-white">ItemFlags</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">隱藏物品的Flags。</p>
          <p class="text-base dark:text-white">Flags of hidden items.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">HeadValue</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">頭的值(分為玩家名稱和value) ( 值連結 )</p>
          <p class="text-base dark:text-white">值只能用在paper伺服器。</p>
          <p class="text-base dark:text-white">The value of the header(Divided into player name and value) ( value link )</p>
          <p class="text-base dark:text-white">The value can only be used in the paper server.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Action</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品要使用的動作。</p>
          <p class="text-base dark:text-white">The action to be used by the item.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CoolDown</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">物品左右鍵CoolDown。</p>
          <p class="text-base dark:text-white">Item left and right keys CoolDown.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">CustomAttrs</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">自訂屬性。</p>
          <p class="text-base dark:text-white">Custom attributes.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">DisableAttack</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">禁止點擊攻擊。</p>
          <p class="text-base dark:text-white">Click attacks are prohibited.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">false</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl dark:text-white mt-10">範例 Examples</p>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Test_item:
  Material: 'PLAYER_HEAD' #Wooden_Sword
  Data: 0
  CustomModelData: 0
  HideItemFlags: false
  Unbreakable: true
  DisplayName: '{#f8dd5c}s{#a7882c}w{#420303}o{#f77fbe}rd' #
  HeadValue: 'zAnnalein_'
  Lore:
  - ''
  - '{#a8af8e}T{#ba0101}e{#b06608}s{#b3c110}t'
  CustomAttrs:
  - '§7武器類型 : 武器-弓'
  - '§7物理攻擊 : 10'
  - '§7暴擊率% : 30'
  Enchantments:
  - DAMAGE_ALL:5
  - KNOCKBACK:2
  - FIRE_ASPECT:2
  Attributes:
  - HAND:GENERIC_ATTACK_DAMAGE:ADD_NUMBER:10
  DisableAttack: true
  CoolDown:
    LeftClick: '&self_attr_Attack_Speed_Core&'
  Action:
  - null:Action[Action=Archer_Shooting] ~LeftClickAir
  - null:Action[Action=Archer_Shooting] ~LeftClickBlock</code>
  </pre>

  <br/>
  <br/>
  <br/>

</template>

<style scoped>

</style>