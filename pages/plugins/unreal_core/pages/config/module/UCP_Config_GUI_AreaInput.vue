<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    text: {
      attribute: 'Text',
      description: ['Enter content.'],
      example: '',
      default: '',
    },
    textColor: {
      attribute: 'TextColor',
      description: ['Enter the content text color.'],
      example: '0xFFFFFF',
      default: '000000',
    },
    textSize: {
      attribute: 'TextSize',
      description: ['Enter the content text size.'],
      example: '0.8',
      default: '1',
    },
    textMaxLength: {
      attribute: 'TextMaxLength',
      description: ['Enter a few words at most.'],
      example: '100',
      default: '256',
    },
    inputStart: {
      attribute: 'InputStart',
      description: ['Adjust the input starting position.', 'Some basemap borders may be wider.'],
      example: '2',
      default: '1',
    },
    inputEnd: {
      attribute: 'InputEnd',
      description: ['Adjust the input end position.', 'Some basemap borders may be wider.'],
      example: '-3',
      default: '-1',
    },
    canInput: {
      attribute: 'CanInput',
      description: ['Whether it is possible to enter.', 'If set to false, it can be used for display.'],
      example: 'false',
      default: 'true',
    },
  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      text: {
        attribute: 'Text',
        description: ['輸入內容。'],
        example: '',
        default: '',
      },
      textColor: {
        attribute: 'TextColor',
        description: ['輸入內容文字顏色。'],
        example: '0xFFFFFF',
        default: '000000',
      },
      textSize: {
        attribute: 'TextSize',
        description: ['輸入內容文字大小。'],
        example: '0.8',
        default: '1',
      },
      textMaxLength: {
        attribute: 'TextMaxLength',
        description: ['最多輸入幾個字。'],
        example: '100',
        default: '256',
      },
      inputStart: {
        attribute: 'InputStart',
        description: ['調整輸入起始位置。', '有些底圖邊框可能比較寬。'],
        example: '2',
        default: '1',
      },
      inputEnd: {
        attribute: 'InputEnd',
        description: ['調整輸入結束位置。', '有些底圖邊框可能比較寬。'],
        example: '-3',
        default: '-1',
      },
      canInput: {
        attribute: 'CanInput',
        description: ['是否可以輸入。', '如果設為false可以當作顯示用。'],
        example: 'false',
        default: 'true',
      },
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      text: {
        attribute: 'Text',
        description: ['输入内容。'],
        example: '',
        default: '',
      },
      textColor: {
        attribute: 'TextColor',
        description: ['输入内容文字颜色。'],
        example: '0xFFFFFF',
        default: '000000',
      },
      textSize: {
        attribute: 'TextSize',
        description: ['输入内容文字大小。'],
        example: '0.8',
        default: '1',
      },
      textMaxLength: {
        attribute: 'TextMaxLength',
        description: ['最多输入几个字。'],
        example: '100',
        default: '256',
      },
      inputStart: {
        attribute: 'InputStart',
        description: ['调整输入起始位置。', '有些底图边框可能比较宽。'],
        example: '2',
        default: '1',
      },
      inputEnd: {
        attribute: 'InputEnd',
        description: ['调整输入结束位置。', '有些底图边框可能比较宽。'],
        example: '-3',
        default: '-1',
      },
      canInput: {
        attribute: 'CanInput',
        description: ['是否可以输入。', '如果设为false可以当作显示用。'],
        example: 'false',
        default: 'true',
      },
    }
  }
  return language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI AreaInput Config</p>

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
    CanInput: true</code>
  </pre>

  <br/>
  <br/>
  <br/>


</template>

<style scoped>

</style>