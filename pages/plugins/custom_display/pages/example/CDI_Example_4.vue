<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">血量低於設定值就顯示紅色閃爍。</p>
  <p class="text-2xl dark:text-white">When the blood volume is lower than the set value, it will flash red.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <p class="text-2xl dark:text-white">因為使用無限時間任務，必須在離開時關閉。</p>
  <p class="text-2xl dark:text-white">Because it uses an infinite time mission, it must be closed when leaving.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=TitleHealthDisplay;mark=&title_self_name&TitleHealthDisplay] ~onJoin
- Action[mark=&title_self_name&amp;TitleHealthDisplay;stop=true] ~onQuit</code>
  </pre>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
TitleHealthDisplay:
  Action:
  - Loop[onTime=TitleHealthDisplay-Time;period=30;duration=0]

TitleHealthDisplay-Time:
  Action:
  - Break[ConditionType=Compare;ConditionContent=&title_self_health_10&&lt;3]
  - Title[title=§0;subtitle=§0䁾XXX;fadeIn=1;duration=5;fadeOut=1]
  - Sound[sound=heartbeatin;pitch=1;volume=1;category=PLAYERS] @LocSelf{LA=0|1|0}
  - Delay[Ticks=5]
  - Title[title=§4;subtitle=§4䁾XXX;fadeIn=1;duration=5;fadeOut=1]
  - Sound[sound=heartbeatout;pitch=1;volume=1;category=PLAYERS] @LocSelf{LA=0|1|0}</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#用自己的名子作為任務標記。
#Use your name as the task tag.
title_self_name:
  message:
  - content[&lt;cd_self_base_name>]


#自己血量的10分比。
#10 points ratio of own blood volume.
title_self_health_10:
  message:
  - content[&lt;cd_self_base_nowhealth>/&lt;cd_self_base_maxhealth>*10]
  - math[fc=Arith]
  - math[fc=Dec;m=#]</code>
  </pre>

</template>

<style scoped>

</style>