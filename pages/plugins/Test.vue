<script setup lang="js">
const move_div = (event) => {

}
</script>

<template>
  <div id="show" style="position: absolute; inset: 0 auto auto 0; margin: 0; transform: translate(10px, 20px);">

  </div>
  <nav>
    <ul>
      <li><a @click="move_div" href="#">電子商務</a></li>
      <li><a @click="move_div" href="#">市場行銷</a></li>
      <li><a @click="move_div" href="#">辦公室生產力</a></li>
      <li><a @click="move_div" href="#">個人成長</a></li>
      <li><a @click="move_div" href="#">設計</a></li>
      <li><a @click="move_div" href="#">通訊工程與軟體</a></li>
    </ul>
  </nav>
</template>

<style scoped>

</style>