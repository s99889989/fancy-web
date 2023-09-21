<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Util</p>

  <p class="text-2xl dark:text-white mt-5">讓指定玩家打開Google網站。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
package com.daxton.testplugin;

import com.daxton.unrealcore.io.GeneralUtil;
import org.bukkit.Bukkit;
import org.bukkit.entity.Player;

public class GeneralExample {
    public static void openURL(){
        Player player = Bukkit.getPlayer("s99889989");
        if(player == null)return;
        GeneralUtil.openUrl(player, "https://www.google.com.tw/");
    }
}</code>
  </pre>
</template>

<style scoped>

</style>