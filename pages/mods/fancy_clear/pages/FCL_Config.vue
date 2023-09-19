<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Config</p>

  <p class="text-2xl dark:text-white">auto_clear - Whether to enable automatic cleaning.</p>
  <p class="text-2xl dark:text-white">auto_clear_delay - How often to perform automatic cleanup (in seconds)</p>
  <p class="text-2xl dark:text-white">player_show_message - Whether to send a cleanup reminder to the player, the reminder will start 30 seconds before cleanup.</p>
  <p class="text-2xl dark:text-white">log_show_message - Whether to send cleanup messages on the console.</p>
  <p class="text-2xl dark:text-white">clear_pet - Whether to clean up the player's pets.</p>
  <p class="text-2xl dark:text-white">clear_mob - Whether to clean up the creatures.</p>
  <p class="text-2xl dark:text-white">greater_mob_amount - The cleaning creature must be greater than this value before it can be cleaned.</p>
  <p class="text-2xl dark:text-white">clear_item - Whether to clean up items.</p>
  <p class="text-2xl dark:text-white">greater_item_amount - The number of items must be greater than this value before the items will be cleaned.</p>
  <div class="flex justify-center">
    <img class="w-100" src="/mods/fancy_clear/fancyclear_config.png" alt="">
  </div>
</template>

<style scoped>

</style>