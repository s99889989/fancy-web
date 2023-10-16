<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Particle</p>
  <p class="text-2xl text-red-500">動作：粒子特效</p>
  <p class="text-2xl text-red-500">Action：Particle</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-2xl dark:text-white">在指定座標創造粒子特效.</p>
  <p class="text-2xl dark:text-white">Create particle special effects at specified coordinates.</p>

  <p class="text-3xl text-red-500 pt-10">屬性Attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱</p>
          <p class="text-base dark:text-white">Attribute</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">縮寫</p>
          <p class="text-base dark:text-white">Aliases</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">預設值</p>
          <p class="text-base dark:text-white">Default</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Function</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">fc</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">分為增加和移除，移除是完全看不到該粒子特效。</p>
          <p class="text-base dark:text-white">It is divided into add and remove. When removing, the special effect of the particle is completely invisible.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">One</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Particle</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">p</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">粒子<a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html" target="_blank">名稱</a>。</p>
          <p class="text-base dark:text-white">Particles <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html" target="_blank">name</a>.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">REDSTONE</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ParticleData</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">PData</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">粒子的副屬性。(用於REDSTONE的<a href="https://www.rapidtables.com/web/color/RGB_Color.html" target="_blank">顏色</a>、方塊、物品破壞的<a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html" target="_blank">材質</a>) </p>
          <p class="text-base dark:text-white">The secondary attribute of the particle. (Used for REDSTONE's <a href="https://www.rapidtables.com/web/color/RGB_Color.html" target="_blank">color</a>, block, and item destruction <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html" target="_blank">texture</a>)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Extra</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">e</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">粒子的速度.</p>
          <p class="text-base dark:text-white">The velocity of the particles.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Count</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">c</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">粒子的數量.</p>
          <p class="text-base dark:text-white">The number of particles.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">10</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">LocationOffset</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">LocOff</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">粒子擴散。(從中心點上下擴散)</p>
          <p class="text-base dark:text-white">Particle diffusion. (Spread up and down from the center point)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">0|0|0</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 pt-10">圖片屬性 Image Attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱</p>
          <p class="text-base dark:text-white">Attribute</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">預設值</p>
          <p class="text-base dark:text-white">Default</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">IMG</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要使用的圖片名稱。(限定PNG格式)</p>
          <p class="text-base dark:text-white">The name of the picture to use.(Limited to PNG format)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">none</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">IMGSize</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">圖片轉成粒子後的位置進行縮放。</p>
          <p class="text-base dark:text-white">The position of the picture after being converted into particles is scaled.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">1</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">IMGRotAngle</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">圖片要選轉的角度，基準目標(Self、Target)、是否加上基準目標仰角、是否加上基準目標面相角、X軸旋轉、Y軸旋轉、Z軸旋轉。(旋轉角為0~359)</p>
          <p class="text-base dark:text-white">The angle at which the picture needs to be rotated, the reference target (Self, Target), whether to add the reference target elevation angle, whether to add the reference target surface phase angle, X-axis rotation, Y-axis rotation, Z-axis rotation. (The rotation angle is 0~359)</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">Self|true|true|0|0|0</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 pt-10">Function</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱</p>
          <p class="text-base dark:text-white">Attribute</p>
        </th>

        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>

      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Remove</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base dark:text-white">移除粒子。</p>
          <p class="text-base dark:text-white">Remove particles.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">One</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base dark:text-white">一個點的粒子。</p>
          <p class="text-base dark:text-white">One point particle.</p>
        </td>

      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">IMG</p>
        </th>

        <td class="px-6 py-4">
          <p class="text-base dark:text-white">圖片粒子。</p>
          <p class="text-base dark:text-white">Picture particles.</p>
        </td>

      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 pt-10">範例Examples</p>
  <p class="text-2xl dark:text-white pt-5">對目標顯示顏色粒子效果。</p>
  <p class="text-2xl dark:text-white">Display color particle effects on the target.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Particle-RedStone:
  Action:
  - Particle[particle=REDSTONE;PData=FF00FF;extra=0.15;count=2000;LocAdd=0|1.8|0;LocOff=0|1|0] @=target</code>
  </pre>

  <p class="text-2xl dark:text-white pt-5">移除粒子效果。</p>
  <p class="text-2xl dark:text-white">Remove particle effects.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Particle-Remove:
  Action:
  - Particle[Function=remove;particle=DAMAGE_INDICATOR]</code>
  </pre>

  <p class="text-2xl dark:text-white pt-5">對目標顯示方塊破壞粒子效果。</p>
  <p class="text-2xl dark:text-white">Show block breaking particle effect on the target.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Particle-Block_Crack:
  Action:
  - Particle[particle=BLOCK_CRACK;PData=REDSTONE_BLOCK;extra=0;count=20;LocAdd=0|1.8|0;LocOff=0|1|0] @=target</code>
  </pre>

  <p class="text-2xl dark:text-white pt-5">對目標顯示物品破壞粒子效果。</p>
  <p class="text-2xl dark:text-white">Display the effect of destroying particles on the target.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Particle-Item_Crack:
  Action:
  - Particle[particle=ITEM_CRACK;PData=CHEST;extra=0;count=50;LocAdd=0|1.8|0;LocOff=0|1|0] @=target</code>
  </pre>

  <p class="text-2xl dark:text-white pt-5">對名為Hat的圖片轉成粒子顯示，並進行選轉。</p>
  <p class="text-2xl dark:text-white">Turn the picture named Hat into a particle display and select it. </p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Particle-Png:
  Action:
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=0|40|0;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=20|40|0;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=40|40|0;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=60|40|0;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=80|0|0;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=100|0|50;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=120|0|50;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=140|0|50;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=160|0|50;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target
  - Delay 5
  - Particle[fc=IMG;IMG=Hat;IMGSize=0.2;IMGRotAngle=180|0|50;IMGTargetAngel=false;count=1;LocAdd=0|2|0] @=target</code>
  </pre>

  <div class="grid grid-cols-1 lg:grid-cols-2 pt-5">
    <div class="aspect-w-16 aspect-h-9">
      <iframe src="https://www.youtube.com/embed/Yk9HZ3LOISY?si=jwsOO5XUdPeMoadb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <br/><br/><br/>
</template>

<style scoped>

</style>