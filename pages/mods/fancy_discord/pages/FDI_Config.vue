<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Config</p>

  <p class="text-2xl dark:text-white">language - language settings.</p>
  <p class="text-2xl dark:text-white">bot_token - The <a href="https://discord.com/developers/applications" target="_blank">token</a>  of the robot.</p>
  <p class="text-2xl dark:text-white">bot_channel - For the channel ID in Discord, right-click on channel selection is the bottom one.</p>
  <p class="text-2xl dark:text-white">status_check_time - The time when the channel theme is changed and the time when the TPS warning is judged. The channel theme is not changed every time because of Discord's own limitations.</p>
  <p class="text-2xl dark:text-white">advancement_message - Whether the player's achievements are displayed on the Discord channel.</p>
  <p class="text-2xl dark:text-white">death_message - Whether the death of the player is displayed on the Discord channel.</p>
  <p class="text-2xl dark:text-white">rebirth_message - Whether the resurrection of the player is displayed on the Discord channel.</p>
  <p class="text-2xl dark:text-white">tps_warning_message - Whether to send TPS alerts on the Discord channel.</p>
  <p class="text-2xl dark:text-white">tps_lower_than - If the value is lower than this value, an alert will be sent.</p>

  <div class="flex justify-center">
    <img class="w-100" src="/mods/fancy_discord/fancydiscord_config.png" alt="">
  </div>

</template>

<style scoped>

</style>