<script setup lang="js">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    title: 'System Placeholder',
    attribute:{
      memory_use: {
        attribute: '{system_memory_use}',
        description: [''],
      },
      memory_max: {
        attribute: '{system_memory_max}',
        description: [''],
      },
      memory_use_percentage: {
        attribute: '{system_memory_use%}',
        description: [''],
      },
      memory_off_use: {
        attribute: '{system_memory_off_use}',
        description: [''],
      },
      memory_off_max: {
        attribute: '{system_memory_off_max}',
        description: [''],
      },
      memory_off_percentage: {
        attribute: '{system_memory_off_use%}',
        description: [''],
      },
    }

  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      title: '系統 佔位符',
      attribute:{
        memory_use: {
          attribute: '{system_memory_use}',
          description: [''],
        },
        memory_max: {
          attribute: '{system_memory_max}',
          description: [''],
        },
        memory_use_percentage: {
          attribute: '{system_memory_use%}',
          description: [''],
        },
        memory_off_use: {
          attribute: '{system_memory_off_use}',
          description: [''],
        },
        memory_off_max: {
          attribute: '{system_memory_off_max}',
          description: [''],
        },
        memory_off_percentage: {
          attribute: '{system_memory_off_use%}',
          description: [''],
        },
      }
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      title: '系统 占位符',
      attribute:{
        memory_use: {
          attribute: '{system_memory_use}',
          description: [''],
        },
        memory_max: {
          attribute: '{system_memory_max}',
          description: [''],
        },
        memory_use_percentage: {
          attribute: '{system_memory_use%}',
          description: [''],
        },
        memory_off_use: {
          attribute: '{system_memory_off_use}',
          description: [''],
        },
        memory_off_max: {
          attribute: '{system_memory_off_max}',
          description: [''],
        },
        memory_off_percentage: {
          attribute: '{system_memory_off_use%}',
          description: [''],
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
</code>
  </pre>

</template>

<style scoped>

</style>