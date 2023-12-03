<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

</script>

<template>
  <p class="text-4xl dark:text-white">HUD Config</p>

  <p class="text-3xl text-red-500 mt-5">{{languageControl.data.attributes.example}}</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <code class="dark:text-white">
Image0:
  Type: 'Image'
  Position: 1
  X: 5
  Y: 6
  Width: 40
  Height: 40
  Image: 'hud/avatar_frame.png'

Image2:
  Type: 'Image'
  Position: 1
  X: 15
  Y: 16
  Width: 20
  Height: 20
  Image: 'https://minotar.net/avatar/{player_self_uuid}'

Image3:
  Type: 'Image'
  Position: 1
  X: 50
  Y: 10
  Width: 200
  Height: 5
  Image: 'hud/bar_air.png'

Image4:
  Type: 'Image'
  Position: 1
  X: 50
  Y: 20
  Width: 200
  Height: 5
  Image: 'hud/bar_air.png'

Image5:
  Type: 'Image'
  Position: 1
  X: 50
  Y: 20
  Width: 200
  Height: 5
  Image: 'hud/bar_blue.png'

Image6:
  Type: 'Image'
  Position: 1
  X: 50
  Y: 10
  Width: '&health_width&'
  Height: 5
  Image: 'hud/bar_green.png'

Text7:
  Type: 'Text'
  Position: 1
  X: 14
  Y: 49
  Text: '&gui_self_name&'
  TextSize: 1
  TextColor: '2894FF'

Item8:
  Type: 'Item'
  Position: 1
  X: 50
  Y: 30
  Item: 'Default.Menu'
  ItemSize: 1
  ItemAmount: 10

</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>