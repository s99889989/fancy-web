<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">用BossBar顯示對方血量或資訊。</p>
  <p class="text-2xl dark:text-white">Use BossBar to display the opponent's blood volume or information.</p>

  <p class="text-2xl dark:text-white">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
BoosBarDisplay:
  Action:
  - Loop[onStart=BoosBarDisplay-Start;onTime=BoosBarDisplay-Time;onEnd=BoosBarDisplay-End;period=10;duration=200]

BoosBarDisplay-Start:
  Action:
  - BossBar[message=&bsb_target_name&-&bsb_target_nowhealth&/&bsb_target_maxhealth&;Style=SEGMENTED_10;Color=RED;Progress=&bsb_target_health_proportion&] @Self

BoosBarDisplay-Time:
  Action:
  - BossBar[message=&bsb_target_name&-&bsb_target_nowhealth&/&bsb_target_maxhealth&;Progress=&bsb_target_health_proportion&]
  - Break[ConditionType=Compare;ConditionContent=&bsb_target_nowhealth&~0.0]
  - BossBar[Delete=true]
  - Action[mark=&bsb_self_name& BoosBarDisplay;stop=true]

BoosBarDisplay-End:
  Action:
  - BossBar[Delete=true]</code>
  </pre>
  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#用自己的名子作為任務標記。
#Use your name as the task tag.
bsb_self_name:
  message:
  - content[&lt;fc_self_base_name>]

#顯示在BossBar上的對方名子。
#The name of the opponent displayed on the BossBar.
bsb_target_name:
  message:
  - content[&lt;fc_target_base_name>]

#目前目標血量
#Current target blood volume.
bsb_target_nowhealth:
  message:
  - content[&lt;fc_target_base_nowhealth>]
  - math [fc=Dec;m=#.0]

#目前目標最高血量
#The highest HP currently targeted.
bsb_target_maxhealth:
  message:
  - content[&lt;fc_target_base_maxhealth>]

#把血量轉成0~1之間，做為BossBar的血條判斷用。
#Turn the blood volume between 0 and 1, as the health bar of BossBar.
bsb_target_health_proportion:
  message:
  - content[&lt;fc_target_base_nowhealth>/&lt;fc_target_base_maxhealth>]
  - math[fc=Arith]</code>
  </pre>
</template>

<style scoped>

</style>