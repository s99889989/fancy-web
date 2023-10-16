<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">MythicSkill</p>
  <p class="text-2xl text-red-500">動作: 神話技能</p>
  <p class="text-2xl text-red-500">Action: MythicSkill</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">觸發神話怪物技能.</p>
  <p class="text-2xl dark:text-white">Trigger MythicMobs skills.</p>

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
          <p class="text-base dark:text-white">Skill</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">s</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要觸發的神話怪物技能名稱。</p>
          <p class="text-base dark:text-white">The name of the MythicMobs skill to be triggered.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">無</p>
          <p class="text-base dark:text-white">None</p>
        </td>
      </tr>


      </tbody>
    </table>
  </div>


  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
MythicSkillHomer:
  Action:
  - MythicSkill[s=Homer] @Target{D=5}</code>
  </pre>

  <p class="text-2xl dark:text-white pt-5">這邊是MythicMobs的技能。</p>
  <p class="text-2xl dark:text-white">Here are the skills of MythicMobs.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Homer:
  Skills:
  - missile{hnp=true;ot=Homer_TICK;oh=Homer_HIT;v=4;i=1;hR=1;vR=1;in=0.75}
Homer_TICK:
  Skills:
  - effect:particles{p=flame;a=1} @origin

Homer_HIT:
  Skills:
  - effect:particles{p=lava;a=50;hS=1;vS=1}
  - effect:sound{s=entity.generic.explode;v=1;p=0}
  - damage{a=1337;i=false}</code>
  </pre>


  <br/><br/><br/>
</template>

<style scoped>

</style>