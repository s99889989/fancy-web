<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const data = reactive({
  language:{
    item: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    itemAmount: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    itemSize: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    angleX: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    angleY: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    angleZ: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    angleXAdd: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    angleYAdd: {
      attribute: '',
      description: [''],
      example: '',
      default: '',
    },
    angleZAdd: {
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
      item: {
        attribute: 'Item',
        description: ['物品NBT字串。'],
        example: '',
        default: `{Count:1b,id:\"minecraft:stone\"}`,
      },
      itemAmount: {
        attribute: 'ItemAmount',
        description: ['物品數量。'],
        example: '10',
        default: '1',
      },
      itemSize: {
        attribute: 'ItemSize',
        description: ['物品縮放大小。'],
        example: '1.5',
        default: '1',
      },
      angleX: {
        attribute: 'AngleX',
        description: ['物品的X旋轉角度。'],
        example: '30',
        default: '0',
      },
      angleY: {
        attribute: 'AngleY',
        description: ['物品的Y旋轉角度。'],
        example: '45',
        default: '0',
      },
      angleZ: {
        attribute: 'AngleZ',
        description: ['物品的Z旋轉角度。'],
        example: '180',
        default: '0',
      },
      angleXAdd: {
        attribute: 'AngleXAdd',
        description: ['物品每tick要增加的X旋轉角度。'],
        example: '10',
        default: '0',
      },
      angleYAdd: {
        attribute: 'AngleYAdd',
        description: ['物品每tick要增加的Y旋轉角度。'],
        example: '5',
        default: '0',
      },
      angleZAdd: {
        attribute: 'AngleZAdd',
        description: ['物品每tick要增加的Z旋轉角度。'],
        example: '1',
        default: '0',
      },
    }
  }else {
    data.language =  {
      item: {
        attribute: 'Item',
        description: ['Item NBT string.'],
        example: '',
        default: `{Count:1b,id:\"minecraft:stone\"}`,
      },
      itemAmount: {
        attribute: 'ItemAmount',
        description: ['number of the stuffs.'],
        example: '10',
        default: '1',
      },
      itemSize: {
        attribute: 'ItemSize',
        description: ['Item scaling size.'],
        example: '1.5',
        default: '1',
      },
      angleX: {
        attribute: 'AngleX',
        description: ['The X rotation angle of the item.'],
        example: '30',
        default: '0',
      },
      angleY: {
        attribute: 'AngleY',
        description: ['The Y rotation angle of the item.'],
        example: '45',
        default: '0',
      },
      angleZ: {
        attribute: 'AngleZ',
        description: ['The Z rotation angle of the item.'],
        example: '180',
        default: '0',
      },
      angleXAdd: {
        attribute: 'AngleXAdd',
        description: ['The X rotation angle to increase for each tick of the item.'],
        example: '10',
        default: '0',
      },
      angleYAdd: {
        attribute: 'AngleYAdd',
        description: ['The Y rotation angle to increase for each tick of the item.'],
        example: '5',
        default: '0',
      },
      angleZAdd: {
        attribute: 'AngleZAdd',
        description: ['The Z rotation angle to increase for each tick of the item.'],
        example: '1',
        default: '0',
      },
    }
  }
  return data.language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI Item Config</p>

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
  ItemExample:
    Type: 'Item'
    Position: 2
    X: -40
    Y: 18
    Item: '{Count:1b,id:"minecraft:stone"}'
    AngleY: 10
    ItemSize: 2
    ItemAmount: 10</code>
  </pre>

  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>