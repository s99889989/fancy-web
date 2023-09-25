<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">被攻擊時在畫面上顯示紅色血效果。</p>
  <p class="text-2xl dark:text-white">A red blood effect is displayed on the screen when being attacked.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=TitleDisplayAttacked] ~onDamaged</code>
  </pre>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
TitleDisplayAttacked:
  Action:
  - Title[title=§4;subtitle=§4䁿;fadeIn=1;duration=10;fadeOut=8]</code>
  </pre>



</template>

<style scoped>

</style>