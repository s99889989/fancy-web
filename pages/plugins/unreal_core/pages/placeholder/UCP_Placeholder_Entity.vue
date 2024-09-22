<script setup lang="js">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    title: 'Entity Placeholder',
    attribute:{
      location_x: {
        attribute: '{entity_x_UUID}',
        description: ['實體在世界的X座標。'],
      },
      location_y: {
        attribute: '{entity_y_UUID}',
        description: ['實體在世界的Y座標。'],
      },
      location_z: {
        attribute: '{entity_z_UUID}',
        description: ['實體在世界的Z座標。'],
      },
      name: {
        attribute: '{entity_name_UUID}',
        description: ['實體的名稱。'],
      },
      health_now: {
        attribute: '{entity_health_now_UUID}',
        description: ['實體目前的血量。'],
      },
      health_max: {
        attribute: '{entity_health_max_UUID}',
        description: ['實體總血量。'],
      },
      body_yaw: {
        attribute: '{entity_body_yaw_UUID}',
        description: ['實體身體的轉向。'],
      }
    }

  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      title: '實體 佔位符',
      attribute:{
        location_x: {
          attribute: '{entity_x_UUID}',
          description: ['實體在世界的X座標。'],
        },
        location_y: {
          attribute: '{entity_y_UUID}',
          description: ['實體在世界的Y座標。'],
        },
        location_z: {
          attribute: '{entity_z_UUID}',
          description: ['實體在世界的Z座標。'],
        },
        name: {
          attribute: '{entity_name_UUID}',
          description: ['實體的名稱。'],
        },
        health_now: {
          attribute: '{entity_health_now_UUID}',
          description: ['實體目前的血量。'],
        },
        health_max: {
          attribute: '{entity_health_max_UUID}',
          description: ['實體總血量。'],
        },
        body_yaw: {
          attribute: '{entity_body_yaw_UUID}',
          description: ['實體身體的轉向。'],
        }
      }
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      title: '实体 占位符',
      attribute:{
        location_x: {
          attribute: '{entity_x_UUID}',
          description: ['實體在世界的X座標。'],
        },
        location_y: {
          attribute: '{entity_y_UUID}',
          description: ['實體在世界的Y座標。'],
        },
        location_z: {
          attribute: '{entity_z_UUID}',
          description: ['實體在世界的Z座標。'],
        },
        name: {
          attribute: '{entity_name_UUID}',
          description: ['實體的名稱。'],
        },
        health_now: {
          attribute: '{entity_health_now_UUID}',
          description: ['實體目前的血量。'],
        },
        health_max: {
          attribute: '{entity_health_max_UUID}',
          description: ['實體總血量。'],
        },
        body_yaw: {
          attribute: '{entity_body_yaw_UUID}',
          description: ['實體身體的轉向。'],
        }
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
    {entity_x_01986ee6-ca3c-3b64-bdcd-02039da5963f}
    {entity_name_01986ee6-ca3c-3b64-bdcd-02039da5963f}
</code>
  </pre>

</template>

<style scoped>

</style>