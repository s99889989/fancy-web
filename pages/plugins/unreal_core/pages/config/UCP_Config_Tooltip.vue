<script setup lang="ts">
import {useLanguageControl} from "~/stores/useLanguageControl";
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()


const language_computed = computed(()=>{
  let language = {
    title: 'Display Placeholder',
    attribute:{
      min_height: {
        attribute: 'MinHeight',
        description: ['Minimum height.'],
        example: '',
        default: '',
      },
      moduleData: {
        attribute: 'ContentList.&lt;name>.',
        description: ['List of submodules.'],
        example: '',
        default: '',
      },
    }

  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      title: '顯示 佔位符',
      attribute:{
        min_height: {
          attribute: 'MinHeight',
          description: ['最低高度。'],
          example: '',
          default: '',
        },
        moduleData: {
          attribute: "ContentList.&lt;name>.",
          description: ['子模塊列表。'],
          example: '',
          default: '',
        },
      }
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      title: '顯示 佔位符',
      attribute:{
        min_height: {
          attribute: 'MinHeight',
          description: ['最低高度。'],
          example: '',
          default: '',
        },
        moduleData: {
          attribute: "ContentList.&lt;name>.",
          description: ['子模块列表。'],
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
  <p class="text-4xl dark:text-white">Tooltip Config</p>


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

      <tr v-for="(module) in language_computed.attribute" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
Tooltip:
  Color: '000000'
  Transparent: 200
  Image: ''
  Width: 130
  Height: '{display_hover_item_lore_size}*20+10'
  MinHeight: '85'
  X: '{display_mouse_xe}+10'
  Y: '{display_mouse_y}-({display_tooltip_text_h}+40)/2'

ContentList:

  item_background:
    Type: Image
    Color: 'c0c0c0'
    Transparent: 120
    Width: 34
    Height: 34
    X: '{display_tooltip_xs}+7'
    Y: '{display_tooltip_ys}+15'

  line:
    Type: Image
    Color: 'ffffff'
    Transparent: 255
    Width: 125
    Height: 1
    X: '{display_tooltip_xs}+2'
    Y: '{display_tooltip_ys}+81'

  ItemModel:
    Type: Item
    Item: '{display_hover_item_nbt}'
    X: '{display_tooltip_xs}+15'
    Y: '{display_tooltip_ys}+25'
    ItemSize: 1.5
    AngleYAdd: 0.01

  ItemName:
    Type: 'Text'
    Position: 1
    X: '{display_tooltip_xs}+{display_tooltip_w}/2-{display_item_name_w}/2'
    Y: '{display_tooltip_ys}+3'
    Text:
    -  '{display_hover_item_name}'
    TextSize: '1.5'
    Space: 18
    TextColor: '6821a9'

  ItemLore:
    Type: 'Text'
    Position: 1
    X: '{display_tooltip_xs}+50'
    Y: '{display_tooltip_ys}+15'
    Text:
    -  '{display_hover_item_lore_1}'
    -  '{display_hover_item_lore_2}'
    -  '{display_hover_item_lore_3}'
    -  '{display_hover_item_lore_4}'
    -  '{display_hover_item_lore_5}'
    -  '{display_hover_item_lore_6}'
    -  '{display_hover_item_lore_7}'
    -  '{display_hover_item_lore_8}'
    -  '{display_hover_item_lore_9}'
    -  '{display_hover_item_lore_10}'
    TextSize: 1
    Space: 10
    TextColor: '6821a9'
</code>
  </pre>
</template>

<style scoped>

</style>