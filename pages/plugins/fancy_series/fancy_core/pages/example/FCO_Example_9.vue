<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">在生物頭上顯示血量等資訊。</p>
  <p class="text-2xl dark:text-white">Display blood volume and other information on the head of the creature.</p>

  <p class="text-2xl dark:text-white">Action:</p>
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
  - FloatMessage[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_monster_health_proportion&] @LocTarget{LA=0|&hd_target_height&|0}

EntityTopDisplayMonster-Time:
  Action:
  - FloatMessage[teleport=true] @LocTarget{LA=0|&hd_target_height&|0}
  - FloatMessage[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_monster_health_proportion&]
  - Break[ConditionType=Compare;cp=&hd_target_nowhealth&~0]
  - FloatMessage[delete=true]
  - Action[mark=&hd_target_uuid& EntityTopDisplayMonster;stop=true]

EntityTopDisplayMonster-End:
  Action:
  - FloatMessage[delete=true]</code>
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
  - FloatMessage[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_animal_health_proportion&] @LocTarget{LA=0|&hd_target_height&|0}

EntityTopDisplayAnimal-Time:
  Action:
  - FloatMessage[teleport=true] @LocTarget{LA=0|&hd_target_height&|0}
  - FloatMessage[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_animal_health_proportion&]
  - Break[ConditionType=Compare;cp=&hd_target_nowhealth&~0]
  - FloatMessage[delete=true]
  - Action[mark=&hd_target_uuid& EntityTopDisplayAnimal;stop=true]

EntityTopDisplayAnimal-End:
  Action:
  - FloatMessage[delete=true]</code>
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
  - FloatMessage[m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_player_health_proportion&] @LocTarget{LA=0|&hd_target_height&|0}
  - FloatMessage[m=&hd_target_player_newmana&/&hd_target_player_maxmana&&hd_target_player_mmocore_mana_proportion&]

EntityTopDisplayPlayer-Time:
  Action:
  - FloatMessage[teleport=true;LocAdd=0|&hd_target_height&|0] @LocTarget{LA=0|&hd_target_height&|0}
  - FloatMessage[cm=1;m=&hd_target_nowhealth&/&hd_target_maxhealth&&hd_target_player_health_proportion&]
  - FloatMessage[cm=2;m=&hd_target_player_newmana&/&hd_target_player_maxmana&&hd_target_player_mmocore_mana_proportion&]
  - Break[ConditionType=Compare;cp=&hd_target_nowhealth&~0]
  - FloatMessage[delete=true]
  - Action[mark=&hd_target_uuid& EntityTopDisplayPlayer;stop=true]

EntityTopDisplayPlayer-End:
  Action:
  - FloatMessage[delete=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#目標的UUID
#UUID of the target
hd_target_uuid:
  message:
  - content[&lt;fc_target_base_uuid>]

#目前目標血量
#Current target blood volume.
hd_target_nowhealth:
  message:
  - content[&lt;fc_target_base_nowhealth>]
  - math [fc=Dec;m=#.0]

#目前目標最高血量
#The highest HP currently targeted.
hd_target_maxhealth:
  message:
  - content[&lt;fc_target_base_maxhealth>]

#頭上顯示全息圖的高度
#The height of the hologram is displayed on the head.
hd_target_height:
  message:
  - content[&lt;fc_target_base_height>+1.2]
  - math[fc=Arith]

#把血量10分比轉成特定字
#Convert the blood volume 10 points ratio into a specific word.
hd_target_monster_health_proportion:
  message:
  - content[&lt;fc_target_base_nowhealth>/&lt;fc_target_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁏,9>䁎,8>䁍,7>䁌,6>䁋,5>䁊,4>䁉,3>䁈,2>䁇,1>䁆,0>䁆]
hd_target_animal_health_proportion:
  message:
  - content[&lt;fc_target_base_nowhealth>/&lt;fc_target_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䀱,9>䀰,8>䀯,7>䀮,6>䀭,5>䀬,4>䀫,3>䀪,2>䀩,1>䀨,0>䀨]
hd_target_player_health_proportion:
  message:
  - content[&lt;fc_target_base_nowhealth>/&lt;fc_target_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁣,9>䁢,8>䁡,7>䁠,6>䁟,5>䁞,4>䁝,3>䁜,2>䁛,1>䁚,0>䁚]

#目標玩家的MMOCore目前魔量。
#The MMOCore of the target player is currently magical.
hd_target_player_newmana:
  message:
  - content[%mmocore_mana%] @target

#目標玩家的MMOCore最高魔量。
#The target player's MMOCore maximum magic power.
hd_target_player_maxmana:
  message:
  - content[%mmocore_stat_max_mana%] @target

#把MMOCore魔量10分比轉成特定字。
#Convert MMOCore magic quantity 10 points ratio into specific words.
hd_target_player_mmocore_mana_proportion:
  message:
  - content[%mmocore_mana%/%mmocore_stat_max_mana%*10] @target
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䀝,9>䀜,8>䀛,7>䀚,6>䀙,5>䀘,4>䀗,3>䀖,2>䀕,1>䀔,0>䀔]</code>
  </pre>
</template>

<style scoped>

</style>