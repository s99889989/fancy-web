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
    actualWidth: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    actualHeight: {
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
    transparent: {attribute: '',
      description: [''],
      example: '', default: '',
    },
    scrollBackgroundColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollBackgroundTransparent: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollTransparent: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollSidebarColor: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollSidebarTransparent: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollX: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollY: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    overflowX: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    overflowY: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollXDisplay: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    scrollYDisplay: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    moduleData: {
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
        description: ['顯示的寬。'],
        example: '75',
        default: '0',
      },
      height: {
        attribute: 'Height',
        description: ['顯示的高。'],
        example: '60',
        default: '0',
      },
      actualWidth: {
        attribute: 'ActualWidth',
        description: ['完整寬度。'],
        example: '180',
        default: '200',
      },
      actualHeight: {
        attribute: 'ActualHeight',
        description: ['完整高度。'],
        example: '100',
        default: '150',
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
      transparent: {
        attribute: 'Transparent',
        description: ['背景透明度。(0~255)'],
        example: '100',
        default: '255',
      },

      scrollBackgroundColor: {
        attribute: 'ScrollBackgroundColor',
        description: ['滾動條的背景顏色。'],
        example: '0F0F0A',
        default: '000000',
      },
      scrollBackgroundTransparent: {
        attribute: 'ScrollBackgroundTransparent',
        description: ['滾動條的背景透明度。'],
        example: '155',
        default: '255',
      },
      scrollColor: {
        attribute: 'ScrollColor',
        description: ['滾動條顏色。'],
        example: '000000',
        default: '0xc0c0c0',
      },
      scrollTransparent: {
        attribute: 'ScrollTransparent',
        description: ['滾動條透明度。'],
        example: '100',
        default: '255',
      },
      scrollSidebarColor: {
        attribute: 'ScrollSidebarColor',
        description: ['滾動條邊框顏色。'],
        example: '000000',
        default: '0xc0c0c0',
      },
      scrollSidebarTransparent: {
        attribute: 'ScrollSidebarTransparent',
        description: ['滾動條邊框透明度。'],
        example: '95',
        default: '255',
      },
      scrollX: {
        attribute: 'ScrollX',
        description: ['滾動條左右百分比位置。(0~100)'],
        example: '50',
        default: '0',
      },
      scrollY: {
        attribute: 'ScrollY',
        description: ['滾動條上百分比下位置。(0~100)'],
        example: '60',
        default: '0',
      },
      overflowX: {
        attribute: 'OverflowX',
        description: ['子模塊超出上下範圍是否顯示。'],
        example: 'true',
        default: 'false',
      },
      overflowY: {
        attribute: 'OverflowY',
        description: ['子模塊超出左右範圍是否顯示。'],
        example: 'true',
        default: 'false',
      },
      scrollXDisplay: {
        attribute: 'ScrollXDisplay',
        description: ['是否顯示底部滾動條。', '(1 = 超出才顯示, 2 = 不顯示, 3 = 總是顯示)'],
        example: '2',
        default: '1',
      },
      scrollYDisplay: {
        attribute: 'ScrollYDisplay',
        description: ['是否顯示右邊滾動條。', '(1 = 超出才顯示, 2 = 不顯示, 3 = 總是顯示)'],
        example: '3',
        default: '1',
      },
      moduleData: {
        attribute: "ContentList.&lt;name>.",
        description: ['子模塊列表。'],
        example: '',
        default: '',
      },
    }
  }else {
    data.language =  {
      width: {
        attribute: 'Width',
        description: ['Display width.'],
        example: '20',
        default: '0',
      },
      height: {
        attribute: 'Height',
        description: ['Displayed high.'],
        example: '86',
        default: '0',
      },
      actualWidth: {
        attribute: 'ActualWidth',
        description: ['full width.'],
        example: '180',
        default: '200',
      },
      actualHeight: {
        attribute: 'ActualHeight',
        description: ['full height.'],
        example: '100',
        default: '150',
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
      transparent: {
        attribute: 'Transparent',
        description: ['Background transparency. (0~255)'],
        example: 'C6AE98',
        default: '0xFFFFFF',
      },

      scrollBackgroundColor: {
        attribute: 'ScrollBackgroundColor',
        description: ['The background color of the scroll bar.'],
        example: '0F0F0A',
        default: '000000',
      },
      scrollBackgroundTransparent: {
        attribute: 'ScrollBackgroundTransparent',
        description: ['The background transparency of the scroll bar.'],
        example: '155',
        default: '255',
      },
      scrollColor: {
        attribute: 'ScrollColor',
        description: ['Scroll bar color.'],
        example: '000000',
        default: '0xc0c0c0',
      },
      scrollTransparent: {
        attribute: 'ScrollTransparent',
        description: ['Scroll bar transparency.'],
        example: '100',
        default: '255',
      },
      scrollSidebarColor: {
        attribute: 'ScrollSidebarColor',
        description: ['Scroll bar border color.'],
        example: '000000',
        default: '0xc0c0c0',
      },
      scrollSidebarTransparent: {
        attribute: 'ScrollSidebarTransparent',
        description: ['Scroll bar border transparency.'],
        example: '95',
        default: '255',
      },
      scrollX: {
        attribute: 'ScrollX',
        description: ['The left and right percentage positions of the scroll bar.(0~100)'],
        example: '50',
        default: '0',
      },
      scrollY: {
        attribute: 'ScrollY',
        description: ['The upper and lower percentage positions of the scroll bar.(0~100)'],
        example: '60',
        default: '0',
      },
      overflowX: {
        attribute: 'OverflowX',
        description: ['Whether to display submodules outside the upper and lower ranges.'],
        example: 'true',
        default: 'false',
      },
      overflowY: {
        attribute: 'OverflowY',
        description: ['Whether to display submodules beyond the left and right range.'],
        example: 'true',
        default: 'false',
      },
      scrollXDisplay: {
        attribute: 'ScrollXDisplay',
        description: ['Whether to display the bottom scroll bar.', '(1 = Show only when exceeded, 2 = Don’t show, 3 = Always show)'],
        example: '2',
        default: '1',
      },
      scrollYDisplay: {
        attribute: 'ScrollYDisplay',
        description: ['Whether to display the right scroll bar.', '(1 = Show only when exceeded, 2 = Don’t show, 3 = Always show)'],
        example: '3',
        default: '1',
      },
      moduleData: {
        attribute: 'ContentList.&lt;name>.',
        description: ['List of submodules.'],
        example: '',
        default: '',
      },
    }
  }
  return data.language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI Container Config</p>

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
        TextSize: 1</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>