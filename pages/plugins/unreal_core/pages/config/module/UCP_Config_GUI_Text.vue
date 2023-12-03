<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language =  {
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
    space: {
      attribute: 'Space',
      description: ['The distance between each line of text.'],
      example: '15',
      default: '10',
    },
  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
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
      space: {
        attribute: 'Space',
        description: ['每行文字間的距離。'],
        example: '15',
        default: '10',
      },
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      text: {
        attribute: 'Text',
        description: ['显示文字内容。'],
        example: '',
        default: '',
      },
      textColor: {
        attribute: 'TextColor',
        description: ['显示文字颜色。'],
        example: '0xFFFFFF',
        default: '000000',
      },
      textSize: {
        attribute: 'TextSize',
        description: ['显示文字大小。'],
        example: '0.8',
        default: '1',
      },
      space: {
        attribute: 'Space',
        description: ['每行文字间的距离。'],
        example: '15',
        default: '10',
      },
    }
  }
  return language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI Text Config</p>

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
  TextExample:
    Type: 'Text'
    Position: 1
    X: 5
    Y: 40
    Text:
    -  '顯示內容'
    -  'Display content'
    TextSize: '1.5'
    Space: 18
    TextColor: '6821a9'</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>