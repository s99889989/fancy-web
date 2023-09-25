<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">在ActionBar顯示個人血量和魔量。</p>
  <p class="text-2xl dark:text-white">Show personal health and magic power in ActionBar.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <p class="text-2xl dark:text-white">在登入時開啟，在登出後關閉。</p>
  <p class="text-2xl dark:text-white">在按下F鍵時關閉，再按下F鍵時開啟。</p>
  <p class="text-2xl dark:text-white">Turn on when logging in, and turn off after logging out.</p>
  <p class="text-2xl dark:text-white">Turn off when the F key is pressed, and turn on when the F key is pressed again.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=ActionBarDisplay;mark=&acb_self_name&ActionBarDisplay] ~onJoin
- Action[a=ActionBarDisplay;mark=&acb_self_name&ActionBarDisplay] ~onKeyFOFF
- Action[mark=&acb_self_name&amp;ActionBarDisplay;stop=true] ~onKeyFON
- Action[mark=&acb_self_name&amp;ActionBarDisplay;stop=true] ~onQuit
- Action[a=ActionBarDisplayFalse] ~onKeyFON</code>
  </pre>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ActionBarDisplay:
  Action:
  - Loop[onTime=ActionBarDisplay-Time;period=40;duration=0]
ActionBarDisplay-Time:
  Action:
  - ActionBar[remove=true;m=&acb_self_nowhealth&/&acb_self_maxhealth&&acb_self_health_proportion_10&&acb_self_nowmana&/&acb_self_maxmana&&acb_self_mmocore_mana_proportion_10&]

ActionBarDisplayFalse:
  Action:
  - ActionBar[remove=false]</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#用自己的名子作為任務標記。
#Use your name as the task tag.
acb_self_name:
  message:
  - content[&lt;cd_self_base_name>]

#自己目前血量
#Your current blood volume.
acb_self_nowhealth:
  message:
  - content[&lt;cd_self_base_nowhealth>]
  - math [fc=Dec;m=#.0]

#自己最高血量
#Your highest blood volume.
acb_self_maxhealth:
  message:
  - content[&lt;cd_self_base_maxhealth>]


#把自己血量10分比轉成特定字
#Convert 10 points of your own HP into a specific word.
acb_self_health_proportion_10:
  message:
  - content[&lt;cd_self_base_nowhealth>/&lt;cd_self_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁩,9>䁨,8>䁧,7>䁦,6>䁥,5>䁤,4>䁣,3>䁢,2>䁡,1>䁠,0>䁠]


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
  - Conver[function=ExSame;m=10>䁳,9>䁲,8>䁱,7>䁰,6>䁯,5>䁮,4>䁭,3>䁬,2>䁫,1>䁪,0>䁪]</code>
  </pre>

</template>

<style scoped>

</style>