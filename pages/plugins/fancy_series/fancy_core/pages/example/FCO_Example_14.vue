<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">被攻擊顯示傷害。</p>
  <p class="text-2xl dark:text-white">Damaged shows damage.</p>

  <p class="text-2xl dark:text-white">Action:</p>
  <p class="text-2xl dark:text-white">被攻擊時。</p>
  <p class="text-2xl dark:text-white">When being Damaged.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
DamagedDisplayUp:
  Action:
  - Loop[onStart=DamagedDisplayUp-Start;onTime=DamagedDisplayUp-Time;onEnd=DamagedDisplayUp-End;period=3;duration=20]
DamagedDisplayUp-Start:
  Action:
  - FloatMessage[m=&damaged_number&] @LocSelf{LA=0|&damaged_number_height&|0}
DamagedDisplayUp-Time:
  Action:
  - FloatMessage[teleport=true] @LocAdd{LA=0|0.1|0}
DamagedDisplayUp-End:
  Action:
  - FloatMessage[delete=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">被攻擊失敗時。</p>
  <p class="text-2xl dark:text-white">When the Damaged fails.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
DamagedMissDisplayUp:
  Action:
  - Loop[onStart=DamagedMissDisplayUp-Start;onTime=DamagedMissDisplayUp-Time;onEnd=DamagedMissDisplayUp-End;period=3;duration=20]
DamagedMissDisplayUp-Start:
  Action:
  - FloatMessage[m=&damaged_number_miss&] @LocSelf{LA=0|&damaged_number_height&|0}
DamagedMissDisplayUp-Time:
  Action:
  - FloatMessage[teleport=true] @LocAdd{LA=0|0.1|0}
DamagedMissDisplayUp-End:
  Action:
  - FloatMessage[delete=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
damaged_number_height:
  message:
  - content[&lt;fc_self_base_height>+1]
  - math[function=arithmetic]

damaged_number:
  message:
  - content[&lt;fc_self_base_damaged_number>]
  - math [fc=Dec;m=#]
  - Conver[function=ConverHead;m=9>䂀,8>䁿,7>䁾,6>䁽,5>䁼,4>䁻,3>䁺,2>䁹,1>䁸,0>䁷]
  - Conver[function=ConverUnits;m=9>䂊,8>䂉,7>䂈,6>䂇,5>䂆,4>䂅,3>䂄,2>䂃,1>䂂,0>䂁]
  - Conver[function=Contain;m=9>䂔,8>䂓,7>䂒,6>䂑,5>䂐,4>䂏,3>䂎,2>䂍,1>䂌,0>䂋]

damaged_number_miss:
  message:
  - content[&lt;fc_self_base_damaged_number>]
  - Conver[function=Contain;m=Miss>䂴]</code>
  </pre>
</template>

<style scoped>

</style>