<script setup lang="js">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    title: 'Resource Placeholder',
    attribute:{
      download_progress: {
        attribute: '{resource_download_progress}',
        description: ['The percentage of resources downloaded.', '0~100'],
      },
      load_progress: {
        attribute: '{resource_load_progress}',
        description: ['The percentage of resources read.', '0~100'],
      },
      load_name_1: {
        attribute: '{resource_load_name_1}',
        description: ['Read the first line of resource content.'],
      },
      load_name_2: {
        attribute: '{resource_load_name_2}',
        description: ['Read the second line of resource content.'],
      },
      load_name_3: {
        attribute: '{resource_load_name_3}',
        description: ['Read the third line of resource content.'],
      },
      load_name_4: {
        attribute: '{resource_load_name_4}',
        description: ['Read the fourth line of resource content.'],
      },
      load_name_5: {
        attribute: '{resource_load_name_5}',
        description: ['Read the fifth line of the resource content.'],
      },
    }

  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      title: '資源 佔位符',
      attribute:{
        download_progress: {
          attribute: '{resource_download_progress}',
          description: ['下載資源的百分比。', '0~100'],
        },
        load_progress: {
          attribute: '{resource_load_progress}',
          description: ['讀取資源的百分比。', '0~100'],
        },
        load_name_1: {
          attribute: '{resource_load_name_1}',
          description: ['讀取資源內容的第一行。'],
        },
        load_name_2: {
          attribute: '{resource_load_name_2}',
          description: ['讀取資源內容的第二行。'],
        },
        load_name_3: {
          attribute: '{resource_load_name_3}',
          description: ['讀取資源內容的第三行。'],
        },
        load_name_4: {
          attribute: '{resource_load_name_4}',
          description: ['讀取資源內容的第四行。'],
        },
        load_name_5: {
          attribute: '{resource_load_name_5}',
          description: ['讀取資源內容的第五行。'],
        },
      }
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      title: '资源 占位符',
      attribute:{
        download_progress: {
          attribute: '{resource_download_progress}',
          description: ['下载资源的百分比。', '0~100'],
        },
        load_progress: {
          attribute: '{resource_load_progress}',
          description: ['读取资源的百分比。', '0~100'],
        },
        load_name_1: {
          attribute: '{resource_load_name_1}',
          description: ['读取资源内容的第一行。'],
        },
        load_name_2: {
          attribute: '{resource_load_name_2}',
          description: ['读取资源内容的第二行。'],
        },
        load_name_3: {
          attribute: '{resource_load_name_3}',
          description: ['读取资源内容的第三行。'],
        },
        load_name_4: {
          attribute: '{resource_load_name_4}',
          description: ['读取资源内容的第四行。'],
        },
        load_name_5: {
          attribute: '{resource_load_name_5}',
          description: ['读取资源内容的第五行。'],
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