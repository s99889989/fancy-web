<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">說話訊息在Discord顯示。</p>
  <p class="text-2xl dark:text-white">Talking messages are displayed on Discord.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=ChatDiscord] ~onChat</code>
  </pre>
  <pre class="mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ChatDiscord:
  Action:
  - 'DCMessage[m=:speech_balloon: &dc_self_name&: &dc_chat_message&;c=123456789123456]'</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
dc_self_name:
  message:
  - content[&lt;cd_self_base_name>]

dc_chat_message:
  message:
  - content[&lt;cd_self_player_last_chat>]</code>
  </pre>

</template>

<style scoped>

</style>