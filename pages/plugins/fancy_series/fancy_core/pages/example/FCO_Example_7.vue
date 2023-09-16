<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">在頭上顯示聊天訊息。</p>
  <p class="text-2xl dark:text-white">Show chat messages on the head.</p>

  <p class="text-2xl dark:text-white">Action:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
ChatHD:
  Action:
  - Loop[onStart=ChatHD-Start;onTime=ChatHD-Time;onEnd=ChatHD-End;period=3;duration=30]
ChatHD-Start:
  Action:
  - FloatMessage[m=䁤&hd_chat_message&䁦] @LocSelf{LA=0|&hd_chat_height&|0} #
  - FloatMessage[m=䁧]
ChatHD-Time:
  Action:
  - Hologram[teleport=true] @LocAdd{LA=0|0.1|0}
ChatHD-End:
  Action:
  - Hologram[DeleteAll=true]</code>
  </pre>

  <p class="text-2xl dark:text-white">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#聊天訊息起始高度(以自身身高+0.5)
#The starting height of the chat message (with one's own height + 0.5)
hd_chat_height:
  message:
  - content[&lt;fc_self_base_height>+0.5]
  - math[fc=Arith]

#聊天訊息
#Chat messages.
hd_chat_message:
  message:
  - content[&lt;fc_self_player_chat>]
  #在每個字加上框框字再回推，因為排版再把字往回推一點。
  #Add a box word to each word and push it back, because the typesetting pushes the word back a bit.
  - Conver[function=ConverAddRL;m=>䁥,>䁥]</code>
  </pre>
</template>

<style scoped>

</style>