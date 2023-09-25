<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">使用指令觸發，在頭上顯示表情符號。</p>
  <p class="text-2xl dark:text-white">Use command trigger to display emoticons on the head.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=EmojiHelpHD] ~onCommand</code>
  </pre>
  <p class="text-2xl dark:text-white">如果輸入/cd cast !help就在頭上顯示想要顯示的字</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
EmojiHelpHD:
  Action:
  - Break[ct=Equals;cp=&hd_emoji_command&~!help]
  - Hologram[m=䂞] @LocSelf{LA=0|&hd_emoji_height&|0}
  - Delay[t=1]
  - Hologram[RM=1;m=䂟]
  - Delay[t=1]
  - Hologram[RM=1;m=䂠]
  - Delay[t=1]
  - Hologram[RM=1;m=䂡]
  - Delay[t=1]
  - Hologram[RM=1;m=䂢]
  - Delay[t=1]
  - Hologram[RM=1;m=䂣]
  - Delay[t=1]
  - Hologram[RM=1;m=䂤]
  - Hologram[teleport=true]  @LocSelf{LA=0|&hd_emoji_height&|0}
  - Delay[t=1]
  - Hologram[RM=1;m=䂥]
  - Delay[t=1]
  - Hologram[RM=1;m=䂦]
  - Delay[t=1]
  - Hologram[RM=1;m=䂧]
  - Delay[t=1]
  - Hologram[RM=1;m=䂨]
  - Delay[t=1]
  - Hologram[RM=1;m=䂩]
  - Delay[t=1]
  - Hologram[RM=1;m=䂪]
  - Delay[t=1]
  - Hologram[RM=1;m=䂫]
  - Delay[t=1]
  - Hologram[RM=1;m=䂞]
  - Hologram[teleport=true]  @LocSelf{LA=0|&hd_emoji_height&|0}
  - Delay[t=1]
  - Hologram[RM=1;m=䂟]
  - Delay[t=1]
  - Hologram[RM=1;m=䂠]
  - Delay[t=1]
  - Hologram[RM=1;m=䂡]
  - Delay[t=1]
  - Hologram[RM=1;m=䂢]
  - Delay[t=1]
  - Hologram[RM=1;m=䂣]
  - Delay[t=1]
  - Hologram[RM=1;m=䂤]
  - Delay[t=1]
  - Hologram[RM=1;m=䂥]
  - Delay[t=1]
  - Hologram[RM=1;m=䂦]
  - Delay[t=1]
  - Hologram[RM=1;m=䂧]
  - Hologram[teleport=true]  @LocSelf{LA=0|&hd_emoji_height&|0}
  - Delay[t=1]
  - Hologram[RM=1;m=䂨]
  - Delay[t=1]
  - Hologram[RM=1;m=䂩]
  - Delay[t=1]
  - Hologram[RM=1;m=䂪]
  - Delay[t=1]
  - Hologram[RM=1;m=䂫]
  - Hologram[delete=true]</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#表情符號的顯示高度(以自身身高+0.5)
#The display height of the emoji (with your own height +0.5)
hd_emoji_height:
  message:
  - content[&lt;cd_self_base_height>+0.5]
  - math[fc=Arith]

#最後使用的/cd cast ??指令內容
#The last used /cd cast ?? command content
hd_emoji_command:
  message:
  - content[&lt;cd_self_player_cast_command>]</code>
  </pre>

</template>

<style scoped>

</style>