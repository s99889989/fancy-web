<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">EntityStats</p>

  <p class="text-3xl text-red-500 mt-5">實體狀態EntityStats</p>
  <img class="w-100" src="/plugins/custom_display/class/custom_display_class_4.png" alt="">


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
          <p class="text-base dark:text-white">增加的屬性名稱。</p>
          <p class="text-base dark:text-white">The name of the added attribute.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">formula</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">屬性的公式。</p>
          <p class="text-base dark:text-white">The formula of the attribute.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/Attribute.html" target="_blank" class="text-base dark:text-white">inherit</a>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">原版的屬性名稱.</p>
          <p class="text-base dark:text-white">The original attribute name.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/attribute/AttributeModifier.Operation.html" target="_blank" class="text-base dark:text-white">operation</a>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要對原版屬性進行的操作。</p>
          <p class="text-base dark:text-white">The operation to be performed on the original properties.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 mt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#必須跟文件名稱相同。
#Must be the same as the file name.
Stats_Default:
#此設定為增加原版的血量。
  #This setting is to increase the blood volume of the original version.
  #Name
  Hp:
    formula: '((100+5 * &self_level_now_base&) * (1+(&self_attr_point_vit&+&self_Eq_Vit&)/100)) + (&self_Eq_HP&)'
    inherit: 'GENERIC_MAX_HEALTH'
    operation: 'ADD_NUMBER'
#此設定只作為統計使用沒實際功能。
  #This setting is only used for statistics and has no actual function.
  Melee_Physical_Attack:
    formula: '2*(&self_attr_point_str&+&self_Eq_Str&)'</code>
  </pre>
</template>

<style scoped>

</style>