<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Delay</p>
  <p class="text-2xl text-red-500">動作：延遲</p>
  <p class="text-2xl text-red-500">Action：Action</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">讓動作延遲。</p>
  <p class="text-2xl dark:text-white">Delay the action.</p>

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
          <p class="text-base dark:text-white">Ticks</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">t</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">延遲時間。(單位為ticks) (20ticks=1秒)</p>
          <p class="text-base dark:text-white">delay. (Unit is ticks) (20ticks=1 second)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">20</p>
        </td>
      </tr>


      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
EmojiHelpHD:
  Action:
  - Condition[Contains=&self_cast_command_help&=!help]
  - Hologram[Function=create;m=䂞;x=0;y=&hd_emoji_height&;z=0] @=self
  - Delay[Ticks=1]
  - Hologram[Function=removeTextLine;m=0]
  - Hologram[Function=addTextLine;m=䂟]
  - Delay[Ticks=1]
  - Hologram[Function=removeTextLine;m=0]
  - Hologram[Function=addTextLine;m=䂠]
  - Delay[Ticks=1]
  - Hologram[Function=removeTextLine;m=0]
  - Hologram[Function=addTextLine;m=䂡]</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>