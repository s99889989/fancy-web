<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const data = reactive({
  language:{
    width: {attribute: '',
      description: [''],
      example: '', default: '',
    },
    height: {attribute: '',
      description: [''],
      example: '', default: '',
    },
    onImage: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    offImage: {
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
    textPlace: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    textDistance: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    check: {
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
      onImage: {
        attribute: 'OnImage',
        description: ['選取時顯示的圖示。'],
        example: 'gui/check/check_on.png',
        default: '',
      },
      offImage: {
        attribute: 'OffImage',
        description: ['沒有選取時顯示的圖示。'],
        example: 'gui/check/check_off.png',
        default: '',
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
      textPlace: {
        attribute: 'TextPlace',
        description: ['文字顯示在圖示的哪個方位。', '( 1 = 右, 2 = 下, 3 = 左, 4 = 上 )'],
        example: '3',
        default: '1',
      },
      textDistance: {
        attribute: 'TextDistance',
        description: ['文字離圖示的距離。'],
        example: '25',
        default: '10',
      },
      check: {
        attribute: 'Check',
        description: ['有選取還是沒選取。'],
        example: 'true',
        default: 'false',
      },
    }
  }else {
    data.language =  {
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
      onImage: {
        attribute: 'OnImage',
        description: ['The icon displayed when selecting.'],
        example: 'gui/check/check_on.png',
        default: '',
      },
      offImage: {
        attribute: 'OffImage',
        description: ['The icon shown when no selection is made.'],
        example: 'gui/check/check_off.png',
        default: '',
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

      textPlace: {
        attribute: 'TextPlace',
        description: ['In which position of the diagram the text appears.', '(1 = right, 2 = bottom, 3 = left, 4 = top)'],
        example: '3',
        default: '1',
      },
      textDistance: {
        attribute: 'TextDistance',
        description: ['The distance between the text and the image.'],
        example: '25',
        default: '10',
      },
      check: {
        attribute: 'Check',
        description: ['Selected or not selected.'],
        example: 'true',
        default: 'false',
      },
    }
  }
return data.language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI Check Config</p>

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
    TextDistance: 0</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>