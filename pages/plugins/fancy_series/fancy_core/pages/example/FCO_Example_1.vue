<script setup lang="ts">

</script>

<template>
  <div class="dark:bg-dark">
    <p class="text-2xl dark:text-white">攻擊顯示傷害。</p>
    <p class="text-2xl dark:text-white">Attack shows damage.</p>

    <p class="text-2xl dark:text-white">Action:</p>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <p class="text-2xl dark:text-white">數字往上移動。</p>
    <p class="text-2xl dark:text-white">The numbers move up.</p>
    <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
AttackDisplayUp:
  Action:
  - Loop[onStart=AttackDisplayUp-Start;onTime=AttackDisplayUp-Time;onEnd=AttackDisplayUp-End;period=3;duration=20]
AttackDisplayUp-Start:
  Action:
  - FloatMessage[m=&attack_number&] @LocTarget{LA=0|&attack_number_height&|0}
AttackDisplayUp-Time:
  Action:
  - FloatMessage[teleport=true] @LocAdd{LA=0|0.1|0}
AttackDisplayUp-End:
  Action:
  - FloatMessage[deleteAll=true]</code>
  </pre>
    <p class="text-2xl dark:text-white">Character:</p>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#自己攻擊的傷害數字
#Self-attack damage number
attack_number:
  message:
  - content[&lt;fc_self_base_attack_number&gt;]
  - math [fc=Dec;m=#]
  - Conver[function=ConverHead;m=9>䂀,8>䁿,7>䁾,6>䁽,5>䁼,4>䁻,3>䁺,2>䁹,1>䁸,0>䁷]
  - Conver[function=ConverUnits;m=9>䂊,8>䂉,7>䂈,6>䂇,5>䂆,4>䂅,3>䂄,2>䂃,1>䂂,0>䂁]
  - Conver[function=Contain;m=9>䂔,8>䂓,7>䂒,6>䂑,5>䂐,4>䂏,3>䂎,2>䂍,1>䂌,0>䂋]

#攻擊數字起始高度(以對方身高+0.5)
#Attack number starting height (based on opponent's height +0.5)
attack_number_height:
  message:
  - content[&lt;fc_target_base_height&gt;+0.5]
  - math[fc=Arith]</code>
  </pre>
  </div>

</template>

<style scoped>

</style>