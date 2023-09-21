<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Audio</p>

  <p class="text-3xl dark:text-white mt-5">音樂設定檔</p>
  <p class="text-2xl dark:text-white">路徑 UnrealCore/audio_config.yml</p>
  <p class="text-2xl dark:text-white">名稱:檔案在UnrealCore資源包內的路徑</p>
  <p class="text-2xl dark:text-white">音樂目前只支援.mp3</p>
  <p class="text-3xl dark:text-white">music profile</p>
  <p class="text-2xl dark:text-white">Path UnrealCore/audio_config.yml</p>
  <p class="text-2xl dark:text-white">Name: The path of the file in the UnrealCore resource package</p>
  <p class="text-2xl dark:text-white">Music currently only supports .mp3</p>
  <img class="w-100" src="/plugins/unreal_core/api/audio/audio-1.PNG" alt="">

  <p class="text-3xl dark:text-white mt-5">播放聲音。</p>
  <p class="text-3xl dark:text-white">Play sound.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
package com.daxton.testplugin;

import com.daxton.unrealcore.io.AudioUtil;
import org.bukkit.Bukkit;
import org.bukkit.entity.Player;

public class AudioExample {
    public static void play(){
        //讓所有玩家播放Duke Dumont這音樂。
        //Have all players play the music Duke Dumont.
        AudioUtil.play("Duke Dumont", 0, 0);

        //讓名稱為s99889989的玩家，播放Duke Dumont這音樂。
        //Let the player named s99889989 play the music of Duke Dumont.
        Player player = Bukkit.getPlayer("s99889989");
        if(player == null)return;
        AudioUtil.play(player, "Duke Dumont", 0, 0);
    }
}</code>
  </pre>

  <br/>
  <br/>
  <br/>

</template>

<style scoped>

</style>