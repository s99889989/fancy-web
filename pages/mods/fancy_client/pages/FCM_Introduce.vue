<script setup lang="ts">
const photos = reactive({
  data: [
    {
      image: ''
    }
  ],
})
onMounted(()=>{
  const pathList = ['image', "2023", "第3回", "第1天"];
  // const url2 = 'http://localhost:9100/image/'+pathList.join(',');
  const url2 = 'https://madustrialtd.asuscomm.com:9100/image/'+pathList.join(',');

  fetch(url2)
      .then(res=>res.json())
      .then(data=>{
        photos.data = data;
      })


})
</script>

<template>
  <p class="text-3xl dark:text-white">The function of this mod.</p>
  <p class="text-2xl dark:text-white">Add some features to make the plugin server more possibilities.</p>
  <p class="text-2xl dark:text-white">This mod is an auxiliary module of the FancyCore plug-in.</p>

  <p class="text-3xl dark:text-white mt-10">Precautions.</p>
  <p class="text-2xl dark:text-white">This mod is only applicable when the server can use plugins.</p>
  <p class="text-2xl dark:text-white">There is no function for single player use.</p>
  <p class="text-2xl dark:text-white">There may still be many problems.</p>

</template>

<style scoped>

</style>