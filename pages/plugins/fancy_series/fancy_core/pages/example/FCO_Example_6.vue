<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">攻擊怪物讓怪物名稱顯示血量。</p>
  <p class="text-2xl dark:text-white">Attack the monster to make the monster's name show its health.</p>

  <p class="text-2xl dark:text-white">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
NameDisplayMonster:
  Action:
  - Loop[onStart=NameDisplayMonster-Start;onTime=NameDisplayMonster-Time;onEnd=NameDisplayMonster-End;period=20;duration=300]
NameDisplayMonster-Start:
  Action:
  - Name[m=&nd_target_monster_health_proportion_10&&nd_target_name&&nd_target_nowhealth&/&nd_target_maxhealth&;Always=true]
NameDisplayMonster-Time:
  Action:
  - Name[m=&nd_target_monster_health_proportion_10&&nd_target_name&&nd_target_nowhealth&/&nd_target_maxhealth&;Always=true]
NameDisplayMonster-End:
  Action:
  - Name[m=;Always=true]
#------------------------#
NameDisplayAnimal:
  Action:
  - Loop[onStart=NameDisplayAnimal-Start;onTime=NameDisplayAnimal-Time;onEnd=NameDisplayAnimal-End;period=20;duration=300]
NameDisplayAnimal-Start:
  Action:
  - Name[m=&nd_target_animal_health_proportion_10&&nd_target_name&&nd_target_nowhealth&/&nd_target_maxhealth&;Always=true]
NameDisplayAnimal-Time:
  Action:
  - Name[m=&nd_target_animal_health_proportion_10&&nd_target_name&&nd_target_nowhealth&/&nd_target_maxhealth&;Always=true]
NameDisplayAnimal-End:
  Action:
  - Name[m=;Always=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#用自己的名子作為任務標記。
#Use your name as the task tag.
nd_self_name:
  message:
  - content[&lt;fc_self_base_name>]

#目標的UUID，也是用來做任務標記。
#The UUID of the target is also used to mark the task.
nd_target_uuid:
  message:
  - content[&lt;fc_target_base_uuid>]

#目標的名子。
#The name of the target.
nd_target_name:
  message:
  - content[&lt;fc_target_base_name>]

#目前目標血量
#Current target blood volume.
nd_target_nowhealth:
  message:
  - content[&lt;fc_target_base_nowhealth>]
  - math [fc=Dec;m=#.#]

#目前目標最高血量
#The highest HP currently targeted.
nd_target_maxhealth:
  message:
  - content[&lt;fc_target_base_maxhealth>]

#把血量10分比轉成特定字
#Convert the blood volume 10 points ratio into a specific word.
nd_target_monster_health_proportion_10:
  message:
  - content[&lt;fc_target_base_nowhealth>/&lt;fc_target_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䁅,9>䁄,8>䁃,7>䁂,6>䁁,5>䁀,4>䀿,3>䀾,2>䀽,1>䀼,0>䀼]

nd_target_animal_health_proportion_10:
  message:
  - content[&lt;fc_target_base_nowhealth>/&lt;fc_target_base_maxhealth>*10]
  - math[fc=Arith]
  - math [fc=Dec;m=#]
  - Conver[function=ExSame;m=10>䀧,9>䀦,8>䀥,7>䀤,6>䀣,5>䀢,4>䀡,3>䀠,2>䀟,1>䀞,0>䀞]</code>
  </pre>
</template>

<style scoped>

</style>