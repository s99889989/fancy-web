<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">EquipmentStats</p>

  <p class="text-3xl text-red-500 mt-5">裝備統計EquipmentStats</p>
  <p class="text-2xl dark:text-white">依照裝備上的Lore來讀取要得值。</p>
  <p class="text-2xl dark:text-white">According to the Lore on the equipment to read the required value.</p>


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
          <p class="text-base dark:text-white">改屬性的名稱</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">base</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">該屬性的預設值</p>
          <p class="text-base dark:text-white"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">lore</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要讀取的Lore名稱，顏色代碼也必須相同。</p>
          <p class="text-base dark:text-white"></p>
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
#Must be the same as the file name.
Stats_Equipment:
#If equipped with'§7 Attack attribute : Fire%'.
  #Value is read: The value on the right is preset to blank and %, so the value becomes'fire'.
  Eq_Attribute_Attack:
#If the Lore preset value of the item is not read, if the item is not set, the preset value is 0.
    base: 'none'
#This will judge: the value on the left, because there is a space, so add a space, the color code must also be the same.
    lore: '§7 Attack attribute '
  Eq_Luk:
    lore: §7Luk</code>
  </pre>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#必須跟文件名稱相同。
Stats_Equipment:
  #如果裝備有 '§7攻擊屬性 : 火%'。
  #值為讀取 : 右邊的值，預設去空白和%，所以值就變成'火'。
  Eq_Attribute_Attack:
    #如果沒讀取到該項Lore的預設值，如果沒設定該項，預設就為0。
    base: '無'
    #此會判斷 : 左邊的值，因為有空格，所以加空格，顏色代碼也必須相同。
    lore: '§7攻擊屬性 '
  Eq_Luk:
    lore: §7幸運</code>
  </pre>

  <p class="text-2xl dark:text-white">獲取值的範例。</p>
  <p class="text-2xl dark:text-white">Example of getting the value.</p>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#名稱看個人，但不要重複(比對是整個Character資料夾內的文件)
#重複就會以最後讀取到的為主。
#The name depends on the individual, but don’t repeat it (the comparison is the file in the entire Character folder)
#Repeat will be based on the last read.
self_Eq_Attribute_Attack:
  message:
  #&lt;cd_eqm_stats_為獲取個人的裝備屬性
        #Eq_Attribute_Attack就是該項屬性的名稱
        - CCharacter[&lt;cd_eqm_stats_Eq_Attribute_Attack>]

self_LLLLUUUUUKKKKK:
  message:
  - CCharacter[&lt;cd_eqm_stats_Eq_Luk>]</code>
  </pre>

  <img class="w-100" src="/plugins/custom_display/class/custom_display_class_5.png" alt="">
</template>

<style scoped>

</style>