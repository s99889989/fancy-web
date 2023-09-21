<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Install</p>

  <p class="text-2xl dark:text-white mt-5">下載檔案。</p>
  <p class="text-2xl dark:text-white">Download the file.</p>
  <div class="flex justify-center">
    <img class="w-100" src="/plugins/unreal_core/api/install/Install-1.PNG" alt="">
  </div>

  <p class="text-2xl dark:text-white mt-5">在插件專案中選擇建立資料夾。</p>
  <p class="text-2xl dark:text-white">Select Create Folder in the plugin project.</p>
  <div class="flex justify-center">
    <img class="w-100" src="/plugins/unreal_core/api/install/Install-2.PNG" alt="">
  </div>

  <p class="text-2xl dark:text-white mt-5">資料夾名稱為lib。</p>
  <p class="text-2xl dark:text-white">The folder name is lib.</p>
  <div class="flex justify-center">
    <img class="w-100" src="/plugins/unreal_core/api/install/Install-3.PNG" alt="">
  </div>

  <p class="text-2xl dark:text-white mt-5">把下載的插件放進lib資料夾。</p>
  <p class="text-2xl dark:text-white">Put the downloaded plugin into the lib folder.</p>
  <div class="flex justify-center">
    <img class="w-100" src="/plugins/unreal_core/api/install/Install-4.PNG" alt="">
  </div>

  <p class="text-2xl dark:text-white mt-5">在dependencies加入依賴。</p>
  <p class="text-2xl dark:text-white">Add dependencies in dependencies.</p>
  <p class="text-2xl dark:text-white">compileOnly fileTree(dir: 'lib', include: ['UnrealCore-Plugin-1.0.7.1.jar'])</p>
  <div class="flex justify-center">
    <img class="w-100" src="/plugins/unreal_core/api/install/Install-5.PNG" alt="">
  </div>


</template>

<style scoped>

</style>