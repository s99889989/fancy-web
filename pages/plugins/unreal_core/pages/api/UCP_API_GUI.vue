<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">GUI</p>

  <p class="text-2xl dark:text-white">檔案範例</p>

  <img class="w-100" src="/plugins/unreal_core/api/gui/gui-1.png" alt="">

  <p class="text-2xl dark:text-white">讓指定玩家打開GUI。</p>

  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
package com.daxton.testplugin;

import com.daxton.unrealcore.gui.MainGUIData;
import com.daxton.unrealcore.io.GUIUtil;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;

import java.io.File;

public class GUIExample {
    public static void openGUI(Player player){
        //讀取檔案並轉成Map。
        //Read the file and convert it to Map.
        File file = new File(TestPlugin.testPlugin.getDataFolder()+"/", "guiConfig.yml");
        FileConfiguration fileConfiguration = YamlConfiguration.loadConfiguration(file);

        //把設定檔轉成GUI檔案。
        //Convert the configuration file into a GUI file.
        MainGUIData mainGUIData = GUIUtil.getMainGUIData(player, "testGUI", fileConfiguration);

        //讓指定玩家打開這個GUI。
        //Let the specified player open this GUI.
        GUIUtil.openGUI(player, mainGUIData);
    }
}</code>
  </pre>

  <br/>
  <br/>
  <br/>

</template>

<style scoped>

</style>