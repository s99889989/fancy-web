<script setup lang="ts">

</script>

<template>

  <p class="text-4xl dark:text-white">ModGUI</p>

  <p class="text-2xl dark:text-white">建立一個介面，並顯示在畫面中間。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModGUI modGUI = ModGUI.ModGUIBuilder.getInstance()
			.setGui_id("Test")
			.setPosition(5)
			.setImage("https://i.imgur.com/Rf9Tizv.png")
			.build();</code>
  </pre>

  <p class="text-2xl dark:text-white">建立按鈕並執行按下動作</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModButton modButton = ModButton.ModButtonBuilder.getInstance()
			.setImage_on("https://i.imgur.com/9q8FpAt.png")
			.setImage_off("https://i.imgur.com/VmfhCq2.png")
			.setDisplay_name("Click on")
			.setPosition(1)
			.setY(25)
			.build();
		modButton.onButtonClick(clickButton -> {
			modText.setText(1, "Button: "+modTextField.getText());
			modGUI.updata(player);
		});</code>
  </pre>

  <p class="text-2xl dark:text-white">建立圖片</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModImage modImage = ModImage.ModImageBuilder.getInstance()
			.setImage("https://i.imgur.com/5B9nsam.png")
			.setPosition(5)
			.setWidth(40)
			.setHeight(40)
			.build();</code>
  </pre>

  <p class="text-2xl dark:text-white">建立文字列表</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModText modText = ModText.ModTextBuilder.getInstance()
			.addTextList("§3Add content:")
			.setScale(2F)
			.setAlign(1)
			.setRow_height(8)
			.setPosition(1)
			.setX(85)
			.build();</code>
  </pre>

  <p class="text-2xl dark:text-white">建立輸入框並查看輸入</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ModTextField modTextField = ModTextField.ModTextFieldBuilder.getInstance()
			.setObject_name("text1")
			.setImage("https://i.imgur.com/wh32c81.png")
			.setPosition(1)
			.setHeight(20)
			.setWidth(80)
			.build();
		modTextField.onEndInput(modTextField1 -> {
			modText.setText(1, "Input box: "+modTextField1.getText());
			modGUI.updata(player);
		});</code>
  </pre>

  <p class="text-2xl dark:text-white">建立1個物品並把顯示位置放在靠右上、左、右、左下、下、右下。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ItemStack itemStack = new ItemStack(Material.COAL_ORE);
		List&lt;String> arrayList = new ArrayList&lt;>();
		arrayList.add("1");
		arrayList.add("2");
		arrayList.add("3");
		itemStack.setLore(arrayList);
		float sc = 2F;
		ModItem modItem3 = ModItem.ModItemBuilder.getInstance().setPlayer(player).setItemStack(itemStack).setPosition(3).setScale(sc).build();
		ModItem modItem4 = ModItem.ModItemBuilder.getInstance().setPlayer(player).setItemStack(itemStack).setPosition(4).setScale(sc).build();
		ModItem modItem6 = ModItem.ModItemBuilder.getInstance().setPlayer(player).setItemStack(itemStack).setPosition(6).setScale(sc).build();
		ModItem modItem7 = ModItem.ModItemBuilder.getInstance().setPlayer(player).setItemStack(itemStack).setPosition(7).setScale(sc).build();
		ModItem modItem8 = ModItem.ModItemBuilder.getInstance().setPlayer(player).setItemStack(itemStack).setPosition(8).setScale(sc).build();
		ModItem modItem9 = ModItem.ModItemBuilder.getInstance().setPlayer(player).setItemStack(itemStack).setPosition(9).setScale(sc).build();</code>
  </pre>

  <p class="text-2xl dark:text-white">把組件加入介面並顯示在指定玩家的畫面上</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
modGUI
			.addComponent(modButton)
			.addComponent(modImage)
			.addComponent(modText)
			.addComponent(modTextField)
			.addComponent(modItem3)
			.addComponent(modItem4).addComponent(modItem6)
			.addComponent(modItem7).addComponent(modItem8).addComponent(modItem9)
			.open(player);</code>
  </pre>

  <p class="text-2xl dark:text-white">如果要更新打開的GUI。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
modGUI
			.addComponent(modButton)
			.addComponent(modImage)
			.addComponent(modText)
			.addComponent(modTextField)
			.addComponent(modItem3)
			.addComponent(modItem4).addComponent(modItem6)
			.addComponent(modItem7).addComponent(modItem8).addComponent(modItem9)
			.updata(player);</code>
  </pre>

  <p class="text-2xl dark:text-white">關閉GUI。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
modGUI.close(player);</code>
  </pre>

  <div class="flex justify-center">
    <img class="w-100" src="/plugins/fancy_series/fancy_gui/menu.png" alt="">
  </div>


</template>

<style scoped>

</style>