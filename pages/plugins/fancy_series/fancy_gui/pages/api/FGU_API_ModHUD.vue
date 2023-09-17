<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">ModHub</p>

  <p class="text-2xl dark:text-white">建立文字組件</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModText modText1 = ModText.ModTextBuilder.getInstance()
			.addTextList("§31Content 1").addTextList("§41Content 2").setObjectName("t1")
			.setScale(3F).setAlign(1).setRow_height(8).setPosition(2).build();</code>
  </pre>

  <p class="text-2xl dark:text-white">建立物品組件</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ItemStack itemStack = new ItemStack(Material.COAL_ORE);
		ModItem modItem1 = ModItem.ModItemBuilder.getInstance()
			.setObjectName("1").setPlayer(player).setItemStack(itemStack)
			.setPosition(5).setScale(2).build();</code>
  </pre>

  <p class="text-2xl dark:text-white">建立圖片組件</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModImage modImage1 = ModImage.ModImageBuilder.getInstance().setImage("https://i.imgur.com/5B9nsam.png").setObject_name("i1")
			.setPosition(1).setWidth(60).setHeight(60).build();
		ModImage modImage2 = ModImage.ModImageBuilder.getInstance().setImage("https://i.imgur.com/5B9nsam.png").setObject_name("i2")
			.setPosition(3).setWidth(60).setHeight(60).build();
		ModImage modImage3 = ModImage.ModImageBuilder.getInstance().setImage("https://i.imgur.com/5B9nsam.png").setObject_name("i3")
			.setPosition(4).setWidth(60).setHeight(60).build();
		ModImage modImage4 = ModImage.ModImageBuilder.getInstance().setImage("https://i.imgur.com/5B9nsam.png").setObject_name("i4")
			.setPosition(6).setWidth(60).setHeight(60).build();
		ModImage modImage5 = ModImage.ModImageBuilder.getInstance().setImage("https://i.imgur.com/5B9nsam.png").setObject_name("i5")
			.setPosition(7).setWidth(60).setHeight(60).build();
		ModImage modImage6 = ModImage.ModImageBuilder.getInstance().setImage("https://i.imgur.com/5B9nsam.png").setObject_name("i6")
			.setPosition(8).setWidth(60).setHeight(60).build();
		ModImage modImage7 = ModImage.ModImageBuilder.getInstance().setImage("https://i.imgur.com/5B9nsam.png").setObject_name("i7")
			.setPosition(9).setWidth(60).setHeight(60).build();</code>
  </pre>

  <p class="text-2xl dark:text-white">把建立好的組件加入Hub，再向指定玩家顯示，要更新內容就再發送就可以。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModHub modHub = ModHub.ModHubBuilder.getInstance()
			.addComponent(modImage1).addComponent(modImage2).addComponent(modImage3)
			.addComponent(modImage4).addComponent(modImage5).addComponent(modImage6)
			.addComponent(modImage7)
			.addComponent(modText1)
			.addComponent(modItem1).build();
		modHub.show(player);</code>
  </pre>

  <p class="text-2xl dark:text-white">關閉顯示</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModHub modHub = ModHub.ModHubBuilder.getInstance()
			.addComponent(modImage1).addComponent(modImage2).addComponent(modImage3)
			.addComponent(modImage4).addComponent(modImage5).addComponent(modImage6)
			.addComponent(modImage7)
			.addComponent(modText1)
			.addComponent(modItem1).build();
		modHub.hide(player);</code>
  </pre>

  <div class="flex justify-center">
    <img class="w-100" src="/plugins/fancy_series/fancy_gui/hub.png" alt="">
  </div>


</template>

<style scoped>

</style>