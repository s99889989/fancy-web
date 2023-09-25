<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">在生物頭上顯示血量等資訊。</p>
  <p class="text-2xl dark:text-white">Display blood volume and other information on the head of the creature.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <p class="text-2xl dark:text-white">因為只需要顯示一個，所以必須用mark標記，不然會出現好幾個。</p>
  <p class="text-2xl dark:text-white">Because only one needs to be displayed, it must be marked with a mark, otherwise several will appear.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:

- Action[a=EntityTopDisplayMonster;mark=&hd_target_uuid&amp;EntityTopDisplayMonster;nt=true] ~onAttack @Target{Filters=Monster}

- Action[a=EntityTopDisplayAnimal;mark=&hd_target_uuid&amp;EntityTopDisplayAnimal;nt=true] ~onAttack @Target{Filters=Animal}

- Action[a=EntityTopDisplayPlayer;mark=&hd_target_uuid&amp;EntityTopDisplayPlayer;nt=true] ~onAttack @Target{Filters=Player}</code>
  </pre>

  <p class="text-2xl dark:text-white">在目標頭上顯示資訊。</p>
  <p class="text-2xl dark:text-white">Display information on the target head.</p>
  <p class="text-2xl dark:text-white">目標為怪物列表內的生物。</p>
  <p class="text-2xl dark:text-white">The target is the creature in the monster list.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
EntityTopDisplayMonster:
  Action:
  - Loop[onStart=EntityTopDisplayMonster-Start;onTime=EntityTopDisplayMonster-Time;onEnd=EntityTopDisplayMonster-End;period=10;duration=200]

EntityTopDisplayMonster-Start:
  Action:
  - Hologram[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_monster_health_proportion&] @LocTarget{LA=0|&hd_target_height&|0}

EntityTopDisplayMonster-Time:
  Action:
  - Hologram[teleport=true] @LocTarget{LA=0|&hd_target_height&|0}
  - Hologram[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_monster_health_proportion&]
  - Break[ConditionType=Compare;cp=&hd_target_nowhealth&~0]
  - Hologram[delete=true]
  - Action[mark=&hd_target_uuid&amp;EntityTopDisplayMonster;stop=true]

EntityTopDisplayMonster-End:
  Action:
  - Hologram[delete=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">目標為動物列表內的生物。</p>
  <p class="text-2xl dark:text-white">The target is the creature in the animal list.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
EntityTopDisplayAnimal:
  Action:
  - Loop[onStart=EntityTopDisplayAnimal-Start;onTime=EntityTopDisplayAnimal-Time;onEnd=EntityTopDisplayAnimal-End;period=10;duration=200]

EntityTopDisplayAnimal-Start:
  Action:
  - Hologram[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_animal_health_proportion&] @LocTarget{LA=0|&hd_target_height&|0}

EntityTopDisplayAnimal-Time:
  Action:
  - Hologram[teleport=true] @LocTarget{LA=0|&hd_target_height&|0}
  - Hologram[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_animal_health_proportion&]
  - Break[ConditionType=Compare;cp=&hd_target_nowhealth&~0]
  - Hologram[delete=true]
  - Action[mark=&hd_target_uuid&amp;EntityTopDisplayAnimal;stop=true]

EntityTopDisplayAnimal-End:
  Action:
  - Hologram[delete=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">目標為為玩家列表內的生物。</p>
  <p class="text-2xl dark:text-white">The target is the creature in the player list.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
EntityTopDisplayPlayer:
  Action:
  - Loop[onStart=EntityTopDisplayPlayer-Start;onTime=EntityTopDisplayPlayer-Time;onEnd=EntityTopDisplayPlayer-End;period=20;duration=200]

EntityTopDisplayPlayer-Start:
  Action:
  - Hologram[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_player_health_proportion&] @LocTarget{LA=0|&hd_target_height&|0}
  - Hologram[cm=2;m=&target_nowmana&/&target_maxmana&&hd_target_player_mmocore_mana_proportion&]

EntityTopDisplayPlayer-Time:
  Action:
  - Hologram[teleport=true;LocAdd=0|&hd_target_height&|0] @LocTarget{LA=0|&hd_target_height&|0}
  - Hologram[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_player_health_proportion&]
  - Hologram[cm=2;m=&target_nowmana&/&target_maxmana&&hd_target_player_mmocore_mana_proportion&]
  - Break[ConditionType=Compare;cp=&hd_target_nowhealth&~0]
  - Hologram[delete=true]
  - Action[mark=&hd_target_uuid&amp;EntityTopDisplayPlayer;stop=true]

EntityTopDisplayPlayer-End:
  Action:
  - Hologram[delete=true]</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#目標的UUID
#UUID of the target
hd_target_uuid:
  message:
  - content[&lt;cd_target_base_uuid>]

#目前目標血量
#Current target blood volume.
hd_target_nowhealth:
  message:
  - content[&lt;cd_target_base_nowhealth>]
  - math [fc=Dec;m=#.0]

#目前目標最高血量
#The highest HP currently targeted.
hd_target_maxhealth:
  message:
  - content[&lt;cd_target_base_maxhealth>]

#頭上顯示全息圖的高度
#The height of the hologram is displayed on the head.
hd_target_height:
  message:
  - content[&lt;cd_target_base_height>+1.2]
  - math[fc=Arith]

#把血量10分比轉成特定字
#Convert the blood volume 10 points ratio into a specific word.
hd_target_monster_health_proportion:
  message:
  - content[&lt;cd_target_base_nowhealth>/&lt;cd_target_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁩,9>䁨,8>䁧,7>䁦,6>䁥,5>䁤,4>䁣,3>䁢,2>䁡,1>䁠,0>䁠]hd_target_animal_health_proportion:
  message:
  - content[&lt;cd_target_base_nowhealth>/&lt;cd_target_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁽,9,䁼,8>䁻,7>䁺,6>䁹,5>䁸,4>䁷,3>䁶,2>䁵,1>䁴,0>䁴]hd_target_player_health_proportion:
  message:
  - content[&lt;cd_target_base_nowhealth>/&lt;cd_target_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁋,9>䁊,8>䁉,7>䁈,6>䁇,5>䁆,4>䁅,3>䁄,2>䁃,1>䁂,0>䁂]

#目標玩家的MMOCore目前魔量。
#The MMOCore of the target player is currently magical.
hd_target_player_newmana:
  message:
  - content[%mmocore_mana%]

#目標玩家的MMOCore最高魔量。
#The target player's MMOCore maximum magic power.
hd_target_player_maxmana:
  message:
  - content[%mmocore_stat_max_mana%]

#把MMOCore魔量10分比轉成特定字。
#Convert MMOCore magic quantity 10 points ratio into specific words.
hd_target_player_mmocore_mana_proportion:
  message:
  - content[%mmocore_mana%/%mmocore_stat_max_mana%*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁕,9>䁔,8>䁓,7>䁒,6>䁑,5>䁐,4>䁏,3>䁎,2>䁍,1>䁌,0>䁌]</code>
  </pre>

</template>

<style scoped>

</style>