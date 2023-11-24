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
    radius: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    image: {attribute: '',
      description: [''],
      example: '', default: '',
    },
    color: {attribute: '',
      description: [''],
      example: '', default: '',
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
    optionWidth: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionHeight: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionImage: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionHoverColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionTextColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionTextHoverColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionTextSize: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionDirection: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    defaultOption: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    optionList: {
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
        description: ['背景圓角。'],
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
      optionWidth: {
        attribute: 'OptionWidth',
        description: ['選項寬。'],
        example: '40',
        default: '30',
      },
      optionHeight: {
        attribute: 'OptionHeight',
        description: ['選項高。'],
        example: '20',
        default: '15',
      },
      optionImage: {
        attribute: 'OptionImage',
        description: ['選項背景圖。'],
        example: 'gui/button/button_default.png',
        default: '',
      },
      optionColor: {
        attribute: 'OptionColor',
        description: ['選項背景顏色。'],
        example: '0x123456',
        default: '0xffffff',
      },
      optionHoverColor: {
        attribute: 'OptionHoverColor',
        description: ['選項背景滑過顏色。'],
        example: '0x123456',
        default: '0xffffff',
      },
      optionTextColor: {
        attribute: 'OptionTextColor',
        description: ['選項文字顏色。'],
        example: '0x123456',
        default: '0x000000',
      },
      optionTextHoverColor: {
        attribute: 'OptionTextHoverColor',
        description: ['選項文字滑過顏色。'],
        example: '0x123456',
        default: '0xffffff',
      },
      optionTextSize: {
        attribute: 'OptionTextSize',
        description: ['選項文字大小。'],
        example: '1.5',
        default: '1',
      },
      optionDirection: {
        attribute: 'OptionDirection',
        description: ['選項彈出方向。', '(1 = 下, 2 = 左, 3 = 上, 4 = 右 )'],
        example: '20',
        default: '10',
      },
      defaultOption: {
        attribute: 'DefaultOption',
        description: ['選擇的選項。'],
        example: '',
        default: '',
      },
      optionList: {
        attribute: 'OptionList',
        description: ['選項列表。'],
        example: '',
        default: '',
      },
    }
  }else {
    data.language =  {
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
        description: ['Background rounded corners.'],
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
      optionWidth: {
        attribute: 'OptionWidth',
        description: ['Options are wide.'],
        example: '40',
        default: '30',
      },
      optionHeight: {
        attribute: 'OptionHeight',
        description: ['Options are high.'],
        example: '20',
        default: '15',
      },
      optionImage: {
        attribute: 'OptionImage',
        description: ['Option background image.'],
        example: 'gui/button/button_default.png',
        default: '',
      },
      optionColor: {
        attribute: 'OptionColor',
        description: ['Option background color.'],
        example: '0x123456',
        default: '0xffffff',
      },
      optionHoverColor: {
        attribute: 'OptionHoverColor',
        description: ['Option background slide color.'],
        example: '0x123456',
        default: '0xffffff',
      },
      optionTextColor: {
        attribute: 'OptionTextColor',
        description: ['Option text color.'],
        example: '0x123456',
        default: '0x000000',
      },
      optionTextHoverColor: {
        attribute: 'OptionTextHoverColor',
        description: ['Option text slides over color.'],
        example: '0x123456',
        default: '0xffffff',
      },
      optionTextSize: {
        attribute: 'OptionTextSize',
        description: ['Option text size.'],
        example: '1.5',
        default: '1',
      },
      optionDirection: {
        attribute: 'OptionDirection',
        description: ['Options popup direction.', '(1 = bottom, 2 = left, 3 = top, 4 = right)'],
        example: '20',
        default: '10',
      },
      defaultOption: {
        attribute: 'DefaultOption',
        description: ['Selected options.'],
        example: '',
        default: '',
      },
      optionList: {
        attribute: 'OptionList',
        description: ['List of options.'],
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
  <p class="text-4xl dark:text-white">GUI Select Config</p>

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
      Choose: '選擇想要的時段'
      List:
      - 日出
      - 早上
      - 中午
      - 日落
      - 晚上
      - 午夜</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>