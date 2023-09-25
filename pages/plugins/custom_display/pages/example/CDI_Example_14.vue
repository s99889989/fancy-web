<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">被攻擊顯示傷害。</p>
  <p class="text-2xl dark:text-white">Damaged shows damage.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=DamagedDisplayUp] ~onDamaged
- Action[a=DamagedMissDisplayUp] ~onDamagedMiss</code>
  </pre>

  <p class="text-2xl dark:text-white">被攻擊時。</p>
  <p class="text-2xl dark:text-white">When being Damaged.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
DamagedDisplayUp:
  Action:
  - Loop[onStart=DamagedDisplayUp-Start;onTime=DamagedDisplayUp-Time;onEnd=DamagedDisplayUp-End;period=3;duration=20]
DamagedDisplayUp-Start:
  Action:
  - Hologram[m=&damaged_number&] @LocSelf{LA=0|&damaged_number_height&|0}
DamagedDisplayUp-Time:
  Action:
  - Hologram[teleport=true] @LocAdd{LA=0|0.1|0}
DamagedDisplayUp-End:
  Action:
  - Hologram[delete=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">被攻擊失敗時。</p>
  <p class="text-2xl dark:text-white">When the Damaged fails.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
DamagedMissDisplayUp:
  Action:
  - Loop[onStart=DamagedMissDisplayUp-Start;onTime=DamagedMissDisplayUp-Time;onEnd=DamagedMissDisplayUp-End;period=3;duration=20]
DamagedMissDisplayUp-Start:
  Action:
  - Hologram[m=&damaged_number_miss&] @LocSelf{LA=0|&damaged_number_height&|0}
DamagedMissDisplayUp-Time:
  Action:
  - Hologram[teleport=true] @LocAdd{LA=0|0.1|0}
DamagedMissDisplayUp-End:
  Action:
  - Hologram[delete=true]</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
damaged_number_height:
  message:
  - content[&lt;cd_self_base_height>+1]
  - math[function=arithmetic]

damaged_number:
  message:
  - content[&lt;cd_self_base_damaged_number>]
  - math [fc=Dec;m=#]
  - Conver[function=ConverHead;m=9>䀉,8>䀈,7>䀇,6>䀆,5>䀅,4>䀄,3>䀃,2>䀂,1>䀁,0>䀀]
  - Conver[function=ConverUnits;m=9>䀝,8>䀜,7>䀛,6>䀚,5>䀙,4>䀘,3>䀗,2>䀖,1>䀕,0>䀔]
  - Conver[function=Contain;m=9>䀓,8>䀒,7>䀑,6>䀐,5>䀏,4>䀎,3>䀍,2>䀌,1>䀋,0>䀊]

damaged_number_miss:
  message:
  - content[&lt;cd_self_base_damaged_number>]
  - Conver[function=Contain;m=Miss>䀿]</code>
  </pre>

</template>

<style scoped>

</style>