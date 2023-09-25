<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">攻擊顯示傷害。</p>
  <p class="text-2xl dark:text-white">Attack shows damage.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=AttackDisplayUp] ~onAttack</code>
  </pre>

  <p class="text-2xl dark:text-white">數字往上移動。</p>
  <p class="text-2xl dark:text-white">The numbers move up.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
AttackDisplayUp:
  Action:
  - Loop[onStart=AttackDisplayUp-Start;onTime=AttackDisplayUp-Time;onEnd=AttackDisplayUp-End;period=3;duration=20]
AttackDisplayUp-Start:
  Action:
  - Hologram[m=&attack_number&] @LocTarget{LA=0|&attack_number_height&|0}
AttackDisplayUp-Time:
  Action:
  - Hologram[teleport=true] @LocAdd{LA=0|0.1|0}
AttackDisplayUp-End:
  Action:
  - Hologram[deleteAll=true]</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#自己攻擊的傷害數字
#Self-attack damage number
attack_number:
  message:
  - content[&lt;cd_self_base_attack_number>]
  - math [fc=Dec;m=#]
  - Conver[function=ConverHead;m=9>䀉,8>䀈,7>䀇,6>䀆,5>䀅,4>䀄,3>䀃,2>䀂,1>䀁,0>䀀]
  - Conver[function=ConverUnits;m=9>䀝,8>䀜,7>䀛,6>䀚,5>䀙,4>䀘,3>䀗,2>䀖,1>䀕,0>䀔]
  - Conver[function=Contain;m=9>䀓,8>䀒,7>䀑,6>䀐,5>䀏,4>䀎,3>䀍,2>䀌,1>䀋,0>䀊]

#攻擊數字起始高度(以對方身高+0.5)
#Attack number starting height (based on opponent's height +0.5)
attack_number_height:
  message:
  - content[&lt;cd_target_base_height>+0.5]
  - math[fc=Arith]</code>
  </pre>

</template>

<style scoped>

</style>