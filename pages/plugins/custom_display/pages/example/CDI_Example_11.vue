<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">攻擊顯示粒子特效。</p>
  <p class="text-2xl dark:text-white">Attack display particle special effects.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=Particle-REDSTONE] ~onAttack</code>
  </pre>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Particle-REDSTONE:
  Action:
  - Particle[particle=REDSTONE;color=62DACA;extra=1;count=100;LocOff=5|5|1] @LocTarget{LA=0|1|0}</code>
  </pre>


</template>

<style scoped>

</style>