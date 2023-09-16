<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">血量低於設定值就顯示紅色閃爍。</p>
  <p class="text-2xl dark:text-white">When the blood volume is lower than the set value, it will flash red.</p>

  <p class="text-2xl dark:text-white">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
TitleHealthDisplay:
  Action:
  - Loop[onTime=TitleHealthDisplay-Time;period=30;duration=0]

TitleHealthDisplay-Time:
  Action:
  - Break[ConditionType=Compare;ConditionContent=&title_self_health_10&&lt;3]
  - Title[title=§0;subtitle=§0䂶;fadeIn=1;duration=5;fadeOut=1] @Self
  - Sound[sound=fancyaction_heartbeatin;pitch=1;volume=1;category=PLAYERS] @LocSelf{LA=0|1|0}
  - Delay[Ticks=5]
  - Title[title=§4;subtitle=§4䂶;fadeIn=1;duration=5;fadeOut=1] @Self
  - Sound[sound=fancyaction_heartbeatout;pitch=1;volume=1;category=PLAYERS] @LocSelf{LA=0|1|0}</code>
  </pre>

  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#用自己的名子作為任務標記。
#Use your name as the task tag.
title_self_name:
  message:
  - content[&lt;fc_self_base_name>]


#自己血量的10分比。
#10 points ratio of own blood volume.
title_self_health_10:
  message:
  - content[&lt;fc_self_base_nowhealth>/&lt;fc_self_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]</code>
  </pre>


</template>

<style scoped>

</style>