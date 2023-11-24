<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const data = reactive({
  language:{
    hoverMargin: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    hoverColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    hoverTransparent: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    slot: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    itemSize: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
  }
})
const language_computed = computed(()=>{

  if(languageControl.data.language === 'chinese_traditional'){
    data.language = {
      hoverMargin: {
        attribute: 'HoverMargin',
        description: ['滑鼠滑過，顯示顏色的內縮距離。'],
        example: '3',
        default: '1',
      },
      hoverColor: {
        attribute: 'HoverColor',
        description: ['滑鼠滑過背景顏色。'],
        example: '000000',
        default: '006800',
      },
      hoverTransparent: {
        attribute: 'HoverTransparent',
        description: ['滑鼠滑過背景透明度。'],
        example: '60',
        default: '255',
      },
      slot: {
        attribute: 'Slot',
        description: ['物品格ID。'],
        example: '12',
        default: '1',
      },
      itemSize: {
        attribute: 'ItemSize',
        description: ['物品縮放大小。'],
        example: '1.5',
        default: '1',
      },
    }
  }else {
    data.language =  {
      hoverMargin: {
        attribute: 'HoverMargin',
        description: ['Move the mouse over to display the indentation distance of the color.'],
        example: '3',
        default: '1',
      },
      hoverColor: {
        attribute: 'HoverColor',
        description: ['Mouse over background color.'],
        example: '000000',
        default: '006800',
      },
      hoverTransparent: {
        attribute: 'HoverTransparent',
        description: ['Mouse over background transparency.'],
        example: '60',
        default: '255',
      },
      slot: {
        attribute: 'Slot',
        description: ['Slot ID.'],
        example: '12',
        default: '1',
      },
      itemSize: {
        attribute: 'ItemSize',
        description: ['Item scaling size.'],
        example: '1.5',
        default: '1',
      },
    }
  }
  return data.language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI Slot Config</p>

  <p class="text-3xl text-red-500 mt-5">{{ unrealCorePluginLanguage.data.gui_config.attributes.head}}</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ unrealCorePluginLanguage.data.gui_config.attributes.attribute}}</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ unrealCorePluginLanguage.data.gui_config.attributes.description}}</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ unrealCorePluginLanguage.data.gui_config.attributes.example}}</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ unrealCorePluginLanguage.data.gui_config.attributes.default}}</p>
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

      <tr v-for="(module) in language_computed" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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

  <p class="text-3xl text-red-500 mt-5">範例Examples</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
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
    Y: -10</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>