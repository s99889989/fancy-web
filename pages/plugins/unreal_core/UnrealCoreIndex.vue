<script setup lang="ts">
import {useUnrealCoreModPages} from "~/stores/mods/unreal_core/useUnrealCoreModPages";
const unrealCoreModPages = useUnrealCoreModPages();


import UnrealCoreSidebar from "~/pages/plugins/unreal_core/UnrealCoreSidebar.vue";

import UnrealCoreIntroduce from "~/pages/plugins/unreal_core/pages/UnrealCoreIntroduce.vue";
import UnrealCoreAPI from "~/pages/plugins/unreal_core/pages/UnrealCoreAPI.vue";
import UnrealCoreCommand from "~/pages/plugins/unreal_core/pages/UnrealCoreCommand.vue";
import UnrealCoreDownLoad from "~/pages/plugins/unreal_core/pages/UnrealCoreDownLoad.vue";

import {integer} from "vscode-languageserver-types";

const currentPath = ref(0)

const setView = (data: integer) => {
  currentPath.value = data;
}

const currentView = computed(() => {
  switch (unrealCoreModPages.pageName) {
    case 'UnrealCoreIntroduce':
      return UnrealCoreIntroduce;
    case 'UnrealCoreCommand':
      return UnrealCoreCommand;
    case 'UnrealCoreDownLoad':
      return UnrealCoreDownLoad;
    case 'UnrealCoreAPI':
      return UnrealCoreAPI;
    default:
      return UnrealCoreIntroduce;
  }
})

</script>

<template>
  <UnrealCoreSidebar @update="setView" />
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">



    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>