<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">HUD</p>

  <p class="text-2xl dark:text-white">檔案範例</p>

  <img class="w-100" src="/plugins/unreal_core/api/hud/hud-1.png" alt="">

  <p class="text-2xl dark:text-white">新增HUD至給全部在線玩家。</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
package com.daxton.testplugin;

import com.daxton.unrealcore.hud.hud_interface.HUDData;
import com.daxton.unrealcore.io.HUDUtil;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import java.io.File;
import java.util.Map;

public class HUDExample {
    public static void addHUD(){
        //讀取檔案並轉成Map。
        //Read the file and convert it to Map.
        File file = new File(TestPlugin.testPlugin.getDataFolder()+"/", "hudConfig.yml");
        FileConfiguration fileConfiguration = YamlConfiguration.loadConfiguration(file);
        Map&lt;String, HUDData> hudDataMap = HUDUtil.getHUD(fileConfiguration);

        //發送HUD設定給全部在線玩家。
        //Send HUD settings to all online players.
        HUDUtil.sendHUD(hudDataMap);
    }
}
</code>
  </pre>

</template>

<style scoped>

</style>