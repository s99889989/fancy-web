<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">在ActionBar顯示個人血量和魔量。</p>
  <p class="text-2xl dark:text-white">Show personal health and magic power in ActionBar.</p>

  <p class="text-2xl dark:text-white">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ActionBarDisplay:
  Action:
  - Loop[onTime=ActionBarDisplay-Time;period=40;duration=0]
ActionBarDisplay-Time:
  Action:
  - ActionBar[remove=true;m=&acb_self_nowhealth&/&acb_self_maxhealth&&acb_self_health_proportion_10&&acb_self_nowmana&/&acb_self_maxmana&&acb_self_mmocore_mana_proportion_10&] @Self

ActionBarDisplayFalse:
  Action:
  - ActionBar[remove=false] @Self</code>
  </pre>

  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#用自己的名子作為任務標記。
#Use your name as the task tag.
acb_self_name:
  message:
  - content[&lt;fc_self_base_name>]

#自己目前血量
#Your current blood volume.
acb_self_nowhealth:
  message:
  - content[&lt;fc_self_base_nowhealth>]
  - math [fc=Dec;m=#.0]

#自己最高血量
#Your highest blood volume.
acb_self_maxhealth:
  message:
  - content[&lt;fc_self_base_maxhealth>]


#把自己血量10分比轉成特定字
#Convert 10 points of your own HP into a specific word.
acb_self_health_proportion_10:
  message:
  - content[&lt;fc_self_base_nowhealth>/&lt;fc_self_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁏,9>䁎,8>䁍,7>䁌,6>䁋,5>䁊,4>䁉,3>䁈,2>䁇,1>䁆,0>䁆]


#自己的MMOCore目前魔量。
#My own MMOCore is currently magical.
acb_self_nowmana:
  message:
  - content[%mmocore_mana%]

#自己的MMOCore最高魔量。
#The highest magic power of own MMOCore.
acb_self_maxmana:
  message:
  - content[%mmocore_stat_max_mana%]

#把自己的MMOCore魔量10分比轉成特定字。
#Turn your MMOCore magic power 10 points ratio into a specific word.
acb_self_mmocore_mana_proportion_10:
  message:
  - content[%mmocore_mana%/%mmocore_stat_max_mana%*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䀓,9>䀒,8>䀑,7>䀐,6>䀏,5>䀎,4>䀍,3>䀌,2>䀋,1>䀊,0>䀊]</code>
  </pre>
</template>

<style scoped>

</style>