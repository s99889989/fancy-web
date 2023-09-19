<script setup lang="ts">
import {useUnrealCoreModPages} from "~/stores/mods/unreal_core/useUnrealCoreModPages";
const unrealCoreModPages = useUnrealCoreModPages();



import UnrealCoreSidebar from "~/pages/mods/unreal_core/UnrealCoreSidebar.vue";


const currentView = computed(() => {
  switch (unrealCoreModPages.pageName){
    default:

  }
})

</script>

<template>
  <UnrealCoreSidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">


  </div>
</template>

<style scoped>

</style>