<script setup lang="js">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    title: 'Display Placeholder',
    attribute:{
      window_width: {
        attribute: '{display_window_w}',
        description: ['Window width.'],
        example: '',
        default: '',
      },
      window_height: {
        attribute: '{display_window_h}',
        description: ['Window height.'],
        example: '',
        default: '',
      },
      mouse_x: {
        attribute: '{display_mouse_x}',
        description: ['Mouse X position.'],
        example: '',
        default: '',
      },
      mouse_y: {
        attribute: '{display_mouse_y}',
        description: ['Mouse Y position.'],
        example: '',
        default: '',
      },
      module_x: {
        attribute: '{display_模塊名稱_x}',
        description: ['The starting X position of the module.'],
        example: '',
        default: '',
      },
      module_xs: {
        attribute: '{display_模塊名稱_xs}',
        description: ['The starting X position of the module.'],
        example: '',
        default: '',
      },
      module_xe: {
        attribute: '{display_模塊名稱_xe}',
        description: ['The end X position of the module.'],
        example: '',
        default: '',
      },
      module_y: {
        attribute: '{display_模塊名稱_y}',
        description: ['The starting Y position of the module.'],
        example: '',
        default: '',
      },
      module_ys: {
        attribute: '{display_模塊名稱_ys}',
        description: ['The starting Y position of the module.'],
        example: '',
        default: '',
      },
      module_ye: {
        attribute: '{display_模塊名稱_ye}',
        description: ['The end Y position of the module.'],
        example: '',
        default: '',
      },
      module_width: {
        attribute: '{display_模塊名稱_width}',
        description: ['The width of the module.', 'The entity module is not accurate because the', 'calculation method has not been thought of at present.'],
        example: '',
        default: '',
      },
      module_height: {
        attribute: '{display_模塊名稱_height}',
        description: ['The height of the module.', 'The entity module is not accurate because the', 'calculation method has not been thought of at present.'],
        example: '',
        default: '',
      },
      module_value: {
        attribute: '{display_模塊名稱_value}',
        description: [
          'The value of the module.',
          'Like the value entered by the input module.',
          'Multi-line values ​​will be followed by the number of rows they represent.',
          'For example {display_InputExample_value_1} represents the first row.',
          'For example {display_InputExample_value_2} represents the second row.',
        ],
        example: '',
        default: '',
      },
      hover_item_name: {
        attribute: '{display_hover_item_name}',
        description: ['The name of the item currently selected to view.'],
        example: '',
        default: '',
      },
      hover_item_name_width: {
        attribute: '{display_hover_item_name_width}',
        description: ['The name width of the item currently selected to be viewed.'],
        example: '',
        default: '',
      },
      hover_item_lore: {
        attribute: '{display_hover_item_lore}',
        description: [
          'The Lore currently selected to view the item.',
          '{display_hover_item_lore_1}Represents the first line of Lore.',
          '{display_hover_item_lore_2}Represents the second line of Lore.',
          'And so on.',
        ],
        example: '',
        default: '',
      },
      hover_item_lore_size: {
        attribute: '{display_hover_item_lore_size}',
        description: ['The number of Lore lines currently selected to view the item.'],
        example: '',
        default: '',
      },
      hover_item_lore_width: {
        attribute: '{display_hover_item_lore_width}',
        description: ['Currently selected to view the Lore width of the item.'],
        example: '',
        default: '',
      },
      hover_item_nbt: {
        attribute: '{display_hover_item_nbt}',
        description: ['Currently selected to view the NBT of the item.'],
        example: '',
        default: '',
      },
    }

  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      title: '顯示 佔位符',
      attribute:{
        window_width: {
          attribute: '{display_window_w}',
          description: ['視窗寬度。'],
          example: '',
          default: '',
        },
        window_height: {
          attribute: '{display_window_h}',
          description: ['視窗高度。'],
          example: '',
          default: '',
        },
        mouse_x: {
          attribute: '{display_mouse_x}',
          description: ['滑鼠X位置。'],
          example: '',
          default: '',
        },
        mouse_y: {
          attribute: '{display_mouse_y}',
          description: ['滑鼠Y位置。'],
          example: '',
          default: '',
        },
        module_x: {
          attribute: '{display_模塊名稱_x}',
          description: ['模塊的起始X位置。'],
          example: '',
          default: '',
        },
        module_xs: {
          attribute: '{display_模塊名稱_xs}',
          description: ['模塊的起始X位置。'],
          example: '',
          default: '',
        },
        module_xe: {
          attribute: '{display_模塊名稱_xe}',
          description: ['模塊的結束X位置。'],
          example: '',
          default: '',
        },
        module_y: {
          attribute: '{display_模塊名稱_y}',
          description: ['模塊的起始Y位置。'],
          example: '',
          default: '',
        },
        module_ys: {
          attribute: '{display_模塊名稱_ys}',
          description: ['模塊的起始Y位置。'],
          example: '',
          default: '',
        },
        module_ye: {
          attribute: '{display_模塊名稱_ye}',
          description: ['模塊的結束Y位置。'],
          example: '',
          default: '',
        },
        module_width: {
          attribute: '{display_模塊名稱_width}',
          description: ['模塊的寬度。', '實體模塊因為目前沒想到', '計算方法，所以不準確。'],
          example: '',
          default: '',
        },
        module_height: {
          attribute: '{display_模塊名稱_height}',
          description: ['模塊的高度。', '實體模塊因為目前沒想到', '計算方法，所以不準確。'],
          example: '',
          default: '',
        },
        module_value: {
          attribute: '{display_模塊名稱_value}',
          description: [
            '模塊的值。',
            '像是輸入模塊輸入的值。',
            '多行值會在後面加上代表的行數數字。',
            '例如{display_InputExample_value_1}代表第一行。',
            '例如{display_InputExample_value_2}代表第二行。',
          ],
          example: '',
          default: '',
        },
        hover_item_name: {
          attribute: '{display_hover_item_name}',
          description: ['目前選擇查看物品的名稱。'],
          example: '',
          default: '',
        },
        hover_item_name_width: {
          attribute: '{display_hover_item_name_width}',
          description: ['目前選擇查看物品的名稱寬度。'],
          example: '',
          default: '',
        },
        hover_item_lore: {
          attribute: '{display_hover_item_lore}',
          description: [
            '目前選擇查看物品的Lore。',
            '{display_hover_item_lore_1}代表第一行Lore。',
            '{display_hover_item_lore_2}代表第二行Lore。',
            '以此類推。',
          ],
          example: '',
          default: '',
        },
        hover_item_lore_size: {
          attribute: '{display_hover_item_lore_size}',
          description: ['目前選擇查看物品的Lore行數。'],
          example: '',
          default: '',
        },
        hover_item_lore_width: {
          attribute: '{display_hover_item_lore_width}',
          description: ['目前選擇查看物品的Lore寬度。'],
          example: '',
          default: '',
        },
        hover_item_nbt: {
          attribute: '{display_hover_item_nbt}',
          description: ['目前選擇查看物品的NBT。'],
          example: '',
          default: '',
        },
      }
    }
  }
  return language;
})

</script>

<template>
  <p class="text-4xl dark:text-white">{{language_computed.title}}</p>

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
      </tr>

      </thead>

      <tbody>

      <tr v-for="(module) in language_computed.attribute" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">{{module.attribute}}</p>
        </th>
        <td class="px-6 py-4">
          <p v-for="(descr) in module.description" class="text-base dark:text-white">{{descr}}</p>
        </td>
      </tr>

      </tbody>

    </table>
  </div>

  <p class="text-3xl text-red-500 mt-5">{{ languageControl.data.attributes.example}}</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <code class="dark:text-white">
Gui:
  Type: 'Inventory'
  Position: 5
  X: 0
  Y: 0
  Width: 320
  Height: 200
  Tooltip: ''
  Transparent: 255
  Color: 'ffffff'
  Image: 'gui/background/background_2.png'

ContentList:

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

  TextExample:
    Type: 'Text'
    Position: 1
    X: 5
    Y: 40
    Text:
    -  '輸入內容: {display_InputExample_value}'
    -  'Enter content: {display_InputExample_value}'
    TextSize: '1.5'
    Space: 18
    TextColor: '6821a9'</code>
  </pre>

</template>

<style scoped>

</style>