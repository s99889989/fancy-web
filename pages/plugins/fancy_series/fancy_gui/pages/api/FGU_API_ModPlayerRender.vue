<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">ModPlayerRender</p>

  <p class="text-2xl dark:text-white">建立文字組件</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModTextRenderer modTextRenderer = ModTextRenderer.ModTextRendererBuilder.getInstance()
			.setTextList(new String[]{"123", "456"}).setObjectName("T1").setLocationHeight(100)
			.setLocationAngle(0).setLocationDistance(100).build();</code>
  </pre>

  <p class="text-2xl dark:text-white">建立圖片組件</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModImageRenderer modImageRenderer = ModImageRenderer.ModImageRendererBuilder.getInstance()
			.setImage("https://i.imgur.com/PHnFyNo.png").setObjectName("Im1").setWidth(2).setHeight(2)
			.setAutoRotationZ(1).setAutoRotationY(1).setLocationHeight(0.5).build();</code>
  </pre>

  <p class="text-2xl dark:text-white">建立物品組件</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModItemRenderer modItemRenderer = ModItemRenderer.ModItemRendererBuilder.getInstance()
			.setItemStack(new ItemStack(Material.STONE_SWORD)).setLocationHeight(1.3).setScale(3).setAutoRotationY(1)
			.setAutoRotationX(1).setObjectName("It1").build();</code>
  </pre>

  <p class="text-2xl dark:text-white">把組件加入玩家渲染物件並渲染指定玩家。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModPlayerRenderer modPlayerRenderer = ModPlayerRenderer.ModPlayerRendererBuilder.getInstance().build();
		modPlayerRenderer.addComponent(modItemRenderer)
			.addComponent(modImageRenderer)
			.addComponent(modTextRenderer)
			.render(player);</code>
  </pre>

  <p class="text-2xl dark:text-white">取消渲染指定玩家。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModPlayerRenderer modPlayerRenderer = ModPlayerRenderer.ModPlayerRendererBuilder.getInstance().build();
		modPlayerRenderer.addComponent(modItemRenderer)
			.addComponent(modImageRenderer)
			.addComponent(modTextRenderer)
			.unRender(player);</code>
  </pre>

  <div class="flex justify-center">
    <video width="1280" height="720" controls>
      <source src="/plugins/fancy_series/fancy_gui/PlayerRenderAPI.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

</template>

<style scoped>

</style>