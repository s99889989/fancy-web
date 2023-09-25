<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Action</p>

  <p class="text-3xl text-red-500 mt-5">動作Action</p>
  <p class="text-2xl dark:text-white">主要設定會讀取的動作文件.</p>
  <p class="text-2xl dark:text-white">Mainly set the action file that will be read.</p>
  <img class="w-100" src="/plugins/custom_display/class/custom_display_class_1.PNG" alt="">

  <p class="text-3xl text-red-500 mt-10">內容範例Examples</p>
  <p class="text-2xl dark:text-white">通常只會使用Action動作，來觸發Action那邊的設定。</p>
  <p class="text-2xl dark:text-white">不建議直接使用其他動作，例如Sound...</p>
  <p class="text-2xl dark:text-white">Usually only Action actions are used to trigger the settings on the Action side.</p>
  <p class="text-2xl dark:text-white">It is not recommended to use other actions directly, such as Sound...</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=AttackDisplayUp] ~onAttack</code>
  </pre>
  <img class="w-100" src="/plugins/custom_display/class/custom_display_class_2.PNG" alt="">
  <br/><br/><br/>
</template>

<style scoped>

</style>