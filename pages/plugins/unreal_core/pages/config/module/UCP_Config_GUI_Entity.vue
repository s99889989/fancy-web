<script setup lang="ts">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language =  {
    entityType: {
      attribute: 'EntityType',
      description: ['Creature type.'],
      example: 'Husk',
      default: 'Player',
    },
    entityName: {
      attribute: 'EntityName',
      description: ['The name of the creature.'],
      example: 'SourChaosCandy',
      default: 's99889989',
    },
    entitySize: {
      attribute: 'EntitySize',
      description: ['The size to display.'],
      example: '25',
      default: '10',
    },
  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      entityType: {
        attribute: 'EntityType',
        description: ['生物類型。'],
        example: 'Husk',
        default: 'Player',
      },
      entityName: {
        attribute: 'EntityName',
        description: ['生物的名稱。'],
        example: 'SourChaosCandy',
        default: 's99889989',
      },
      entitySize: {
        attribute: 'EntitySize',
        description: ['要顯示的大小。'],
        example: '25',
        default: '10',
      },
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      entityType: {
        attribute: 'EntityType',
        description: ['生物类型。'],
        example: 'Husk',
        default: 'Player',
      },
      entityName: {
        attribute: 'EntityName',
        description: ['生物的名称。'],
        example: 'SourChaosCandy',
        default: 's99889989',
      },
      entitySize: {
        attribute: 'EntitySize',
        description: ['要显示的大小。'],
        example: '25',
        default: '10',
      },
    }
  }
  return language;
})
</script>

<template>
  <p class="text-4xl dark:text-white">GUI Entity Config</p>

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
  EntityExample:
    Type: Entity
    Position: 2
    EntityType: 'Player'
    EntityName: ''
    EntitySize: 30
    X: 30
    Y: 65</code>
  </pre>


  <br/>
  <br/>
  <br/>
</template>

<style scoped>

</style>