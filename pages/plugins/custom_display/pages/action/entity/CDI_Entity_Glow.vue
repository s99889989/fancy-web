<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Glow</p>
  <p class="text-2xl text-red-500">動作: 發光</p>
  <p class="text-2xl text-red-500">Action: Glow</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">使目標實體發光。</p>
  <p class="text-2xl dark:text-white">Makes the target entity glow.</p>

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
          <p class="text-base dark:text-white">Color</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">c</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">實體將發光的顏色。 <a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html" target="_blank">(顏色表)</a></p>
          <p class="text-base dark:text-white">The color the entity will glow.<a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html" target="_blank">(Color table)</a></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">WHITE</p>
        </td>
      </tr>


      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
SendGlow:
  Action:
  - Glow[Color=BOLD] @=Target</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>