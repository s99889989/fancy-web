<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">用BossBar顯示自身訊息。</p>
  <p class="text-2xl dark:text-white">Use BossBar to display your own information.</p>

  <p class="text-2xl dark:text-white">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
BoosBarDisplayShow:
  Action:
  - Loop[onStart=BoosBarDisplayShow-Start;onTime=BoosBarDisplayShow-Time;period=20;duration=0]
BoosBarDisplayShow-Start:
  Action:
  - BossBar[message=&self_name_bossbar&-&self_nowhealth_bossbar&/&self_maxhealth_bossbar&;Color=RED;Style=SOLID] @Self
BoosBarDisplayShow-Time:
  Action:
  - BossBar[message=&self_name_bossbar&-&self_nowhealth_bossbar&/&self_maxhealth_bossbar&;Progress=&self_health_proportion_bossbar&] @Self</code>
  </pre>

  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_name_bossbar:
  message:
  - content[&lt;fc_self_base_name>]

self_nowhealth_bossbar:
  message:
  - content[&lt;fc_self_base_nowhealth>]
  - math [fc=Dec;m=#.0]

self_maxhealth_bossbar:
  message:
  - content[&lt;fc_self_base_maxhealth>]

self_health_proportion_bossbar:
  message:
  - content[&lt;fc_self_base_nowhealth>/&lt;fc_self_base_maxhealth>]
  - math[fc=Arith]</code>
  </pre>
</template>

<style scoped>

</style>