<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()



const language_computed = computed(()=>{
  let language = {
    mask: {
      attribute: 'Mask',
      description: ['Whether to display dark black in unused areas.'],
      example: 'false',
      default: 'true',
    },
    tooltip: {
      attribute: 'Tooltip',
      description: ['The tooltip settings to use for the item.'],
      example: '100',
      default: '255',
    },
    moduleData: {
      attribute: 'ContentList.&lt;name>.',
      description: ['List of submodules.'],
      example: '',
      default: '',
    },
  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      mask: {
        attribute: 'mask',
        description: ['沒有用到的地方是否顯示暗黑色。'],
        example: 'false',
        default: 'true',
      },
      tooltip: {
        attribute: 'tooltip',
        description: ['物品要使用的工具提示設置。'],
        example: 'maple_story',
        default: '',
      },
      moduleData: {
        attribute: "ContentList.&lt;name>.",
        description: ['子模塊列表。'],
        example: '',
        default: '',
      },
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      mask: {
        attribute: 'mask',
        description: ['没有用到的地方是否显示暗黑色。'],
        example: 'false',
        default: 'true',
      },
      tooltip: {
        attribute: 'tooltip',
        description: ['物品要使用的工具提示设置。'],
        example: 'maple_story',
        default: '',
      },
      moduleData: {
        attribute: "ContentList.&lt;name>.",
        description: ['子模块列表。'],
        example: '',
        default: '',
      },
    }
  }
  return language;
})

</script>

<template>
  <p class="text-4xl dark:text-white">GUI Config</p>

  <p class="text-3xl text-red-500 mt-5">{{ languageControl.data.attributes.head}}</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ languageControl.data.attributes.attribute}}</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ languageControl.data.attributes.description}}</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ languageControl.data.attributes.example}}</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ languageControl.data.attributes.default}}</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr v-for="(module) in unrealCorePluginLanguage.data.gui_config.common" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">{{module.attribute}}</p>
        </th>
        <td class="px-6 py-4">
          <p v-for="(descr) in module.description" class="text-base dark:text-white">{{descr}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{module.example}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{module.default}}</p>
        </td>
      </tr>

      <tr v-for="(module) in unrealCorePluginLanguage.data.gui_config.common2" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">{{module.attribute}}</p>
        </th>
        <td class="px-6 py-4">
          <p v-for="(descr) in module.description" class="text-base dark:text-white">{{descr}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{module.example}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{module.default}}</p>
        </td>
      </tr>

      <tr v-for="(module) in  language_computed" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">{{module.attribute}}</p>
        </th>
        <td class="px-6 py-4">
          <p v-for="(descr) in module.description" class="text-base dark:text-white">{{descr}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{module.example}}</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">{{module.default}}</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 mt-5">{{languageControl.data.attributes.example}}</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <code class="dark:text-white">
Gui:
  Type: 'Inventory'
  Position: 5
  X: 0
  Y: 0
  Width: 320
  Height: 200
  Tooltip: example
  Transparent: 255
  Color: 'ffffff'
  Image: 'gui/background/background_2.png'

ContentList:

  ImageExample:
    Type: Image
    Position: 1
    X: 10
    Y: 10
    Width: 20
    Height: 20
    Image: 'https://minotar.net/avatar/{player_self_uuid}'
    Color: 'e0ffff'
    Transparent: 200

  TextExample:
    Type: 'Text'
    Position: 1
    X: 5
    Y: 40
    Text:
    -  '自訂遊戲目錄1'
    -  '自訂遊戲目錄2'
    TextSize: '1.5'
    Space: 18
    TextColor: '6821a9'

  EntityExample:
    Type: Entity
    Position: 2
    EntityType: 'Player'
    EntityName: ''
    EntitySize: 30
    X: 30
    Y: 65

  CheckExample:
    Type: Check
    Position: 1
    X: 40
    Y: 10
    Check: true
    OffImage: 'gui/check/check_off.png'
    OnImage: 'gui/check/check_on.png'
    Width: 20
    Height: 20
    Text: '選項'
    TextColor: '00CACA'
    TextSize: 1
    TextPlace: 0
    TextDistance: 0

  ButtonExample:
    Type: Button
    Position: 3
    X: -10
    Y: 10
    Image: 'gui/button/button2_off.png'
    HoverImage: 'gui/button/button2_on.png'
    ClickImage: 'gui/button/button2_on.png'
    Color: '1e90ff'
    Transparent: 255
    Width: 25
    Height: 14
    Text: '個人'
    TextColor: '00CACA'
    TextSize: 1

  InputExample:
    Type: Input
    Position: 4
    X: 30
    Y: -10
    Width: 80
    Height: 18
    Image: 'gui/input/input_3.png'
    Color: 'FFFFFF'
    Transparent: 200
    Title: '名稱: '
    TitleColor: '577700'
    TitleSize: 1
    Prompt: '請輸入名稱'
    PromptColor: 'daa520'
    PromptSize: 1
    Text: ''
    TextColor: '00CACA'
    TextSize: 1
    TextMaxLength: 50
    InputStart: 3
    InputEnd: 0
    CanInput: true

  RangeExample:
    Type: Range
    Position: 2
    X: 30
    Y: 25
    Image: 'gui/input/input_1.png'
    Width: 100
    Height: 5
    Color: 'FFFFFF'
    Transparent: 255
    Straight: false
    Option:
      Width: 12
      Height: 12
      Image: 'gui/icon/i1.png'
      Color: 'FFFFFF'
      Transparent: 255
      ChooseShow: true
      ChooseColor: 'FFFFFF'
      Choose: '日出'
      List:
      - 日出
      - 早上
      - 中午
      - 日落
      - 晚上
      - 午夜

  RangeStraightExample:
    Type: Range
    Position: 3
    X: -20
    Y: 50
    Image: 'gui/input/input_1.png'
    Width: 5
    Height: 100
    Color: 'FFFFFF'
    Transparent: 255
    Straight: true
    Option:
      Width: 12
      Height: 12
      Image: 'gui/icon/i1.png'
      Color: 'FFFFFF'
      Transparent: 255
      ChooseShow: true
      ChooseColor: '7fffd4'
      Choose: '日出'
      List:
      - 日出
      - 早上
      - 中午
      - 日落
      - 晚上
      - 午夜

  SelectExample:
    Type: Select
    Position: 5
    X: -5
    Y: -40
    Width: 80
    Height: 20
    CornerRadius: 10
    Image: 'gui/button/button_default.png'
    Color: 'ffffff'
    Transparent: 255
    TextSize: 1
    TextColor: 'bdb76b'
    Option:
      Width: 60
      Height: 20
      Image: '' #
      Color: '808080'
      Transparent: 255
      HoverColor: 'b0e0e6'
      HoverTransparent: 255
      TextColor: '000000'
      TextHoverColor: '808000'
      TextSize: 1
      Direction: 1
      Choose: 'Select desired time period'
      List:
      - Sunrise
      - Morning
      - Noon
      - Sunset
      - Night
      - Midnight

  AreaInputExample:
    Type: AreaInput
    Position: 6
    X: -40
    Y: 0
    Image: ''
    Color: 'e6e6fa'
    Width: 80
    Height: 100
    Text:
    -  '第一行'
    -  '第二行'
    -  '第三行'
    TextColor: '00CACA'
    TextSize: 1
    TextMaxLength: 200
    InputStart: 1
    InputEnd: -1
    CanInput: true

  ItemExample:
    Type: 'Item'
    Position: 2
    X: -40
    Y: 18
    Item: '{Count:1b,id:"minecraft:stone"}'
    AngleY: 10
    ItemSize: 2
    ItemAmount: 10

  Slot36:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 36
    ItemSize: 1
    X: -30
    Y: -10

  Slot37:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 37
    ItemSize: 1
    X: -10
    Y: -10

  Slot38:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 38
    ItemSize: 1
    X: 10
    Y: -10

  Slot39:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 39
    ItemSize: 1
    X: 30
    Y: -10

  Slot40:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 40
    ItemSize: 1
    X: 50
    Y: -10

  Slot41:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 41
    ItemSize: 1
    X: 70
    Y: -10

  Slot42:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 42
    ItemSize: 1
    X: 90
    Y: -10

  Slot43:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 43
    ItemSize: 1
    X: 110
    Y: -10

  Slot44:
    Type: Slot
    Position: 8
    Image: 'gui/slot/slot.png'
    Width: 18
    Height: 18
    Color: 'FFFFFF'
    Transparent: 255
    HoverMargin: 1
    HoverColor: 006800
    HoverTransparent: 255
    Slot: 44
    ItemSize: 1
    X: 130
    Y: -10

  ContainerExample:
    Type: Container
    Position: 7
    X: 10
    Y: -10
    Width: 100
    Height: 80
    ActualWidth: 100
    ActualHeight: 200
    Image: 'gui/container/container_1.png'
    Color: 'FFFFFF'
    Transparent: 255
    ScrollBackgroundColor: '0F0F0A'
    ScrollBackgroundTransparent: 255
    ScrollColor: '1e90ff'
    ScrollTransparent: 255
    ScrollSidebarColor: '00bfff'
    ScrollSidebarTransparent: 255
    ScrollX: 0
    ScrollY: 0
    OverflowX: 1
    OverflowY: 1
    ScrollXDisplay: 1
    ScrollYDisplay: 1

    ContentList:
      TextExample:
        Type: 'Text'
        Position: 1
        X: 5
        Y: 6
        Text:
        - 's99889989~~1'
        - 's99889989~~2'
        - 's99889989~~3'
        - '10'
        TextSize: 1
        Space: 12
        TextColor: 'd2b48c'

      ButtonExample:
        Type: Button
        Position: 1
        X: 5
        Y: 40
        Width: 30
        Height: 15
        Image: 'gui/button/button_default.png'
        HoverImage: 'gui/button/button_hover.png'
        ClickImage: 'gui/button/button_hover.png'
        Color: 'FFFFFF'
        Transparent: 255
        Text: '設定'
        TextColor: '00CACA'
        TextSize: 1


</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>