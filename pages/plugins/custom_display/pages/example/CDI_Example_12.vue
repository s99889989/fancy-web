<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Example</p>
  <p class="text-2xl dark:text-white">打開GUI並做一些操作。</p>
  <p class="text-2xl dark:text-white">Open the GUI and do some operations.</p>

  <p class="text-3xl text-red-500 mt-10">Action:</p>

  <p class="text-2xl dark:text-white">用指令觸發，打開GUI。</p>
  <p class="text-2xl dark:text-white">Use the command to trigger and open the GUI.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Action:
- Action[a=OpenExpGui] ~onCommand</code>
  </pre>

  <p class="text-2xl dark:text-white">判斷指令為/cd cast expgui，並打開9格的介面。</p>
  <p class="text-2xl dark:text-white">Judge the command as /cd cast expgui, and open the 9-frame interface.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
OpenExpGui:
  Action:
  - Break[ConditionType=Equals;ConditionContent=&self_class_command&~expgui]
  - Inventory[fc=close]
  - Inventory[fc=gui;GuiID=Example]</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">Character:</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
#最後使用的/cd cast ??指令內容
#The last used /cd cast ?? command content
gui_command:
  message:
  - content[&lt;cd_self_player_cast_command>]</code>
  </pre>

  <p class="text-3xl text-red-500 mt-10">GUI:</p>
  <p class="text-2xl dark:text-white">顯示個人一些資訊，和左鍵點擊後頭上顯示表情符號(範例8)。</p>
  <p class="text-2xl dark:text-white">Show some personal information, and left-click to show emoticons on the head (Example 8).</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
Title: 'Basic character status'

Sort:
- 'Stats.ClassTable.DefaultClass.3.4.5.6.7.Class_Default|Close'
#- '9.10.11.12.13.14.15.16.17'
#- '18.19.20.21.22.23.24.25.26'
#- '27.28.29.30.31.32.33.34.35'
#- '36.37.38.39.40.41.42.43.44'
#- '45.46.47.48.49.50.51.52.53'
#
Buttons:

  Stats:
    Move: false
    Material: 'PLAYER_HEAD'
    HeadValue: '&gui_self_name&'
    CustomModelData: 0
    RemoveItemFlags: true
    Name: '{#f77703}&gui_self_name&'
    Lore:
    - ''
    - '{#f75703}Health: &gui_self_base_nowhealth&/&gui_self_base_maxhealth&'

  ClassTable:
    Move: false
    Material: 'COAL'
    CustomModelData: 300
    RemoveItemFlags: true
    Name: '§eClass list'
    Lore:
    - ''
    - '§e點擊打開職業列表'
    - '§eClick to open the class list'
    Left:
    - Action[a=Open_Gui_Class_Table_Example]

  DefaultClass:
    Move: false
    Material: 'COAL'
    CustomModelData: 0
    RemoveItemFlags: true
    Name: '§eDefault class'
    Lore:
    - ''
    - '§e轉為預設職業'
    - '§eSwitch to the default profession.'
    Left:
    - Action[a=rebirth_Class]</code>
  </pre>

</template>

<style scoped>

</style>