<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const data = reactive({
  language:{
    hoverImage: {
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
    clickImage: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    clickColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    clickTransparent: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    text: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    textColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    textSize: {
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
      hoverImage: {
        attribute: 'HoverImage',
        description: ['滑鼠滑過背景圖片位址。'],
        example: 'gui/button/button_hover.png',
        default: '',
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
      clickImage: {
        attribute: 'ClickImage',
        description: ['滑鼠點擊背景圖片位址。'],
        example: 'gui/button/button_hover.png',
        default: '',
      },
      clickColor: {
        attribute: 'ClickColor',
        description: ['滑鼠點擊背景顏色。'],
        example: '000000',
        default: '000068',
      },
      clickTransparent: {
        attribute: 'ClickTransparent',
        description: ['滑鼠點擊背景透明度。'],
        example: '120',
        default: '255',
      },
      text: {
        attribute: 'Text',
        description: ['顯示文字內容。'],
        example: '',
        default: '',
      },
      textColor: {
        attribute: 'TextColor',
        description: ['顯示文字顏色。'],
        example: '0xFFFFFF',
        default: '000000',
      },
      textSize: {
        attribute: 'TextSize',
        description: ['顯示文字大小。'],
        example: '0.8',
        default: '1',
      },
    }
  }else {
    data.language =  {
      hoverImage: {
        attribute: 'HoverImage',
        description: ['Mouse over the background image address.'],
        example: 'gui/button/button_hover.png',
        default: '',
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
      clickImage: {
        attribute: 'ClickImage',
        description: ['Click the background image address with the mouse.'],
        example: 'gui/button/button_hover.png',
        default: '',
      },
      clickColor: {
        attribute: 'ClickColor',
        description: ['Mouse click background color.'],
        example: '000000',
        default: '000068',
      },
      clickTransparent: {
        attribute: 'ClickTransparent',
        description: ['Mouse click background transparency.'],
        example: '120',
        default: '255',
      },
      text: {
        attribute: 'Text',
        description: ['Display text content.'],
        example: '',
        default: '',
      },
      textColor: {
        attribute: 'TextColor',
        description: ['Show text color.'],
        example: '0xFFFFFF',
        default: '000000',
      },
      textSize: {
        attribute: 'TextSize',
        description: ['Display text size.'],
        example: '0.8',
        default: '1',
      },
    }
  }
  return data.language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI Button Config</p>

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

  <p class="text-3xl text-red-500 mt-5">{{ languageControl.data.attributes.example}}</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
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
    TextSize: 1</code>
  </pre>

  <br/>
  <br/>
  <br/>

</template>

<style scoped>

</style>