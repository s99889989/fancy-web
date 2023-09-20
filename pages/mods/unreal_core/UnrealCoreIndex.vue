<script setup lang="ts">
import {useUnrealCoreModPages} from "~/stores/mods/unreal_core/useUnrealCoreModPages";
const unrealCoreModPages = useUnrealCoreModPages();



import UnrealCoreSidebar from "~/pages/mods/unreal_core/UnrealCoreSidebar.vue";

import UCM_Introduce from "~/pages/mods/unreal_core/pages/UCM_Introduce.vue";
import UCM_DownLoad from "~/pages/mods/unreal_core/pages/UCM_DownLoad.vue";

const currentView = computed(() => {
  switch (unrealCoreModPages.pageName){
    case 'UCM_Introduce':
      return UCM_Introduce;
    case 'UCM_DownLoad':
      return UCM_DownLoad;
    default:
      return UCM_Introduce;
  }
})

</script>

<template>
  <UnrealCoreSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>