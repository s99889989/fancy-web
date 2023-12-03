<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language =  {
    width: {
      attribute: 'Width',
      description: ['The width of the module.'],
      example: '20',
      default: '0',
    },
    height: {
      attribute: 'Height',
      description: ['The height of the module.'],
      example: '86',
      default: '0',
    },
    radius: {
      attribute: 'Radius',
      description: ['Background rounded corners.'],
      example: '5',
      default: '0',
    },
    image: {
      attribute: 'Image',
      description: ['The image to use for the background.', 'If not set, the set color will be displayed.'],
      example: 'gui/background/background_2.png',
      default: '',
    },
    color: {
      attribute: 'Color',
      description: ['The background color will affect the color of the Image after setting.'],
      example: '',
      default: '',
    },
    targetWidth: {
      attribute: 'TargetWidth',
      description: ['Drag the block width.'],
      example: '',
      default: '10',
    },
    targetHeight: {
      attribute: 'TargetHeight',
      description: ['Drag the block high.'],
      example: '',
      default: '10',
    },
    targetImage: {
      attribute: 'TargetImage',
      description: ['Drag blocks to use the map.'],
      example: 'gui/button/button2_on.png',
      default: '',
    },
    targetColor: {
      attribute: 'TargetColor',
      description: ['Drag the block color.'],
      example: '0xFFFFFF',
      default: '0x000000',
    },
    defaultOption: {
      attribute: 'DefaultOption',
      description: ['Preset selected options.'],
      example: '',
      default: '',
    },
    showOptionName: {
      attribute: 'ShowOptionName',
      description: ['Whether to display option names.'],
      example: 'true',
      default: 'false',
    },
    optionList: {
      attribute: 'OptionList',
      description: ['List of options.'],
      example: '',
      default: '',
    },
  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      width: {
        attribute: 'Width',
        description: ['模塊的寬度。'],
        example: '75',
        default: '0',
      },
      height: {
        attribute: 'Height',
        description: ['模塊的高度。'],
        example: '60',
        default: '0',
      },
      radius: {
        attribute: 'Radius',
        description: ['背景圓角。'],
        example: '5',
        default: '0',
      },
      image: {
        attribute: 'Image',
        description: ['背景要使用的圖。', '如果沒有設置，就會顯示設置的顏色。'],
        example: 'gui/background/background_2.png',
        default: '',
      },
      color: {
        attribute: 'Color',
        description: ['背景顏色，設定後會影響Image的顏色。'],
        example: 'C6AE98',
        default: '0xFFFFFF',
      },
      targetWidth: {
        attribute: 'TargetWidth',
        description: ['拖動區塊寬。'],
        example: '',
        default: '10',
      },
      targetHeight: {
        attribute: 'TargetHeight',
        description: ['拖動區塊高。'],
        example: '',
        default: '10',
      },
      targetImage: {
        attribute: 'TargetImage',
        description: ['拖動區塊使用圖。'],
        example: 'gui/button/button2_on.png',
        default: '',
      },
      targetColor: {
        attribute: 'TargetColor',
        description: ['拖動區塊顏色。'],
        example: '0xFFFFFF',
        default: '0x000000',
      },
      defaultOption: {
        attribute: 'DefaultOption',
        description: ['預設選擇的選項。'],
        example: '',
        default: '',
      },
      showOptionName: {
        attribute: 'ShowOptionName',
        description: ['是否顯示選項名稱。'],
        example: 'true',
        default: 'false',
      },
      optionList: {
        attribute: 'OptionList',
        description: ['選項列表。'],
        example: '',
        default: '',
      },
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      width: {
        attribute: 'Width',
        description: ['模块的宽度。'],
        example: '75',
        default: '0',
      },
      height: {
        attribute: 'Height',
        description: ['模块的高度。'],
        example: '60',
        default: '0',
      },
      radius: {
        attribute: 'Radius',
        description: ['背景圆角。'],
        example: '5',
        default: '0',
      },
      image: {
        attribute: 'Image',
        description: ['背景要使用的图。', '如果没有设置，就会显示设置的颜色。'],
        example: 'gui/background/background_2.png',
        default: '',
      },
      color: {
        attribute: 'Color',
        description: ['背景颜色，设定后会影响Image的颜色。'],
        example: 'C6AE98',
        default: '0xFFFFFF',
      },
      targetWidth: {
        attribute: 'TargetWidth',
        description: ['拖动区块宽。'],
        example: '',
        default: '10',
      },
      targetHeight: {
        attribute: 'TargetHeight',
        description: ['拖动区块高。'],
        example: '',
        default: '10',
      },
      targetImage: {
        attribute: 'TargetImage',
        description: ['拖动区块使用图。'],
        example: 'gui/button/button2_on.png',
        default: '',
      },
      targetColor: {
        attribute: 'TargetColor',
        description: ['拖动区块颜色。'],
        example: '0xFFFFFF',
        default: '0x000000',
      },
      defaultOption: {
        attribute: 'DefaultOption',
        description: ['预设选择的选项。'],
        example: '',
        default: '',
      },
      showOptionName: {
        attribute: 'ShowOptionName',
        description: ['是否显示选项名称。'],
        example: 'true',
        default: 'false',
      },
      optionList: {
        attribute: 'OptionList',
        description: ['选项列表。'],
        example: '',
        default: '',
      },
    }
  }
  return language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI Range Config</p>

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

  <p class="text-3xl text-red-500 mt-5">{{languageControl.data.attributes.example}}</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
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
      Choose: 'Sunrise'
      List:
      - Sunrise
      - Morning
      - Noon
      - Sunset
      - Night
      - Midnight</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>