<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language =  {
    title: {
      attribute: 'Title',
      description: ['The text displayed in front of the input box.'],
      example: '名稱: ',
      default: '',
    },
    titleColor: {
      attribute: 'TitleColor',
      description: ['The color of the text displayed in front of the input box.'],
      example: '0xFFFFFF',
      default: '0xCDAD00',
    },
    titleSize: {
      attribute: 'TitleSize',
      description: ['The size of the text displayed in front of the input box.'],
      example: '1.5',
      default: '1',
    },
    prompt: {
      attribute: 'Prompt',
      description: ['Text to be displayed when there is no input.'],
      example: '請輸入名稱',
      default: '',
    },
    promptColor: {
      attribute: 'PromptColor',
      description: ['The color of the text to be displayed when there is no input.'],
      example: '0xFFFFFF',
      default: '0x8B7355',
    },
    promptSize: {
      attribute: 'PromptSize',
      description: ['The text size to be displayed when no input is entered.'],
      example: '0.8',
      default: '1',
    },
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
      title: {
        attribute: 'Title',
        description: ['在輸入框前面顯示的文字。'],
        example: '名稱: ',
        default: '',
      },
      titleColor: {
        attribute: 'TitleColor',
        description: ['在輸入框前面顯示的文字顏色。'],
        example: '0xFFFFFF',
        default: '0xCDAD00',
      },
      titleSize: {
        attribute: 'TitleSize',
        description: ['在輸入框前面顯示的文字大小。'],
        example: '1.5',
        default: '1',
      },
      prompt: {
        attribute: 'Prompt',
        description: ['在沒有輸入內容時要顯示的文字。'],
        example: '請輸入名稱',
        default: '',
      },
      promptColor: {
        attribute: 'PromptColor',
        description: ['在沒有輸入內容時要顯示的文字顏色。'],
        example: '0xFFFFFF',
        default: '0x8B7355',
      },
      promptSize: {
        attribute: 'PromptSize',
        description: ['在沒有輸入內容時要顯示的文字大小。'],
        example: '0.8',
        default: '1',
      },
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
      title: {
        attribute: 'Title',
        description: ['在输入框前面显示的文字。'],
        example: '名称: ',
        default: '',
      },
      titleColor: {
        attribute: 'TitleColor',
        description: ['在输入框前面显示的文字颜色。'],
        example: '0xFFFFFF',
        default: '0xCDAD00',
      },
      titleSize: {
        attribute: 'TitleSize',
        description: ['在输入框前面显示的文字大小。'],
        example: '1.5',
        default: '1',
      },
      prompt: {
        attribute: 'Prompt',
        description: ['在没有输入内容时要显示的文字。'],
        example: '请输入名称',
        default: '',
      },
      promptColor: {
        attribute: 'PromptColor',
        description: ['在没有输入内容时要显示的文字颜色。'],
        example: '0xFFFFFF',
        default: '0x8B7355',
      },
      promptSize: {
        attribute: 'PromptSize',
        description: ['在没有输入内容时要显示的文字大小。'],
        example: '0.8',
        default: '1',
      },
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
  <p class="text-4xl dark:text-white">GUI Input Config</p>

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

  <p class="text-3xl text-red-500 mt-5">{{languageControl.data.attributes.example}}</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
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
    CanInput: true</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>