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
  BackgroundColor: '3C3C3C'
  BackgroundTransparent: 255
  BackgroundImage: 'tooltip/background.png'
  Width: 100
  Height: '{tooltip_h}'
  MinHeight: '80'
  X: '{mouse_x}+10'
  Y: '{mouse_y}-{tooltip_h}-40'
  ItemModel:
    Enable: true
    X: '{background_xs}+7'
    Y: '{background_ys}+7'
    Size: 1
  ItemName:
    X: '{background_xs}+{background_w}/2-{item_name_w}/2'
    Y: '{background_ys}+5'
    Size: 1
    Text: '{item_name}'
  Lore:
    1:
      X: '{background_xs}+27'
      Y: '{background_ys}+20'
      Size: 0.7
      Text: '{lore}'
    2:
      X: '{background_xs}+63'
      Y: '{background_ys}+20'
      Size: 0.7
      Text: '{lore}'

ContentList:
  I1:
    Type: Image
    Image: 'tooltip/top_1.png'
    Width: 100
    Height: 28
    X: '{background_xs}'
    Y: '{background_ys}'
  T1:
    Type: Text
    Text:
    - 'Name:'
    - '&gui_self_name&'
    TextSize: '2'
    Space: 18
    TextColor: '#6821a9'
    X: '{background_xs}+20'
    Y: '{background_ys}+50'</code>
  </pre>
</template>

<style scoped>

</style>