<script setup lang="ts">
import {useCustomDisplayPages} from "~/stores/plugins/custom_display/useCustomDisplayPages";
const customDisplayPages = useCustomDisplayPages();
</script>

<template>
  <p class="text-4xl dark:text-white">Some teaching</p>

  <p @click="customDisplayPages.setPage('CDI_Teach_Class')" class="text-2xl dark:text-white mt-5">How to make a class?如何製作一個職業?</p>
  <p @click="customDisplayPages.setPage('CDI_Teach_Skill')" class="text-2xl dark:text-white">How to make skills?如何製作技能?</p>
</template>

<style scoped>

</style>