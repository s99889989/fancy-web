<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">使用指令觸發，在頭上顯示表情符號。</p>
  <p class="text-2xl dark:text-white">Use command trigger to display emoticons on the head.</p>

  <p class="text-2xl dark:text-white">Action:</p>
  <p class="text-2xl dark:text-white">cast 指令等於!help才執行。</p>
  <p class="text-2xl dark:text-white">The cast instruction is equal to !help before it is executed.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
EmojiHelpHD:
  Action:
  - Break[ct=Equals;cp=&hd_emoji_command&~!help]
  - FloatMessage[m=䁨] @LocSelf{LA=0|&hd_emoji_height&|0}
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁩]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁪]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁫]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁬]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁭]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁮]
  - FloatMessage[teleport=true]  @LocSelf{LA=0|&hd_emoji_height&|0}
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁯]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁰]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁱]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁲]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁳]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁴]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁵]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁨]
  - FloatMessage[teleport=true]  @LocSelf{LA=0|&hd_emoji_height&|0}
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁩]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁪]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁫]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁬]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁭]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁮]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁯]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁰]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁱]
  - FloatMessage[teleport=true]  @LocSelf{LA=0|&hd_emoji_height&|0}
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁲]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁳]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁴]
  - Delay[t=1]
  - FloatMessage[RM=1;m=䁵]
  - FloatMessage[delete=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#表情符號的顯示高度(以自身身高+0.5)
#The display height of the emoji (with your own height +0.5)
hd_emoji_height:
  message:
  - content[&lt;fc_self_base_height>+0.5]
  - math[fc=Arith]

#最後使用的/cd cast ??指令內容
#The last used /cd cast ?? command content
hd_emoji_command:
  message:
  - content[&lt;fc_self_player_command>]</code>
  </pre>
</template>

<style scoped>

</style>