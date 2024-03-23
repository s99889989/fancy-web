<script setup lang="js">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    title: 'Model Molang',
    attribute:{
      head_yaw: {
        attribute: 'ysm.head_yaw',
        description: ['The deflection angle of the head.', 'Turn left and right.'],
      },
      head_pitch: {
        attribute: 'ysm.head_pitch',
        description: ['The elevation angle of the head.', 'Turn up and down.'],
      },
      has_helmet: {
        attribute: 'ysm.has_helmet',
        description: ['Whether equipped with a helmet.', 'If there is, it is equal to 1, and if there is no, it is 0.'],
      },
      has_chest_plate: {
        attribute: 'ysm.has_chest_plate',
        description: ['Is there a breastplate equipped?', 'If there is, it is equal to 1, and if there is no, it is 0.'],
      },
      has_leggings: {
        attribute: 'ysm.has_leggings',
        description: ['Whether there are leggings equipped.', 'If there is, it is equal to 1, and if there is no, it is 0.'],
      },
      has_boots: {
        attribute: 'ysm.has_boots',
        description: ['Whether equipped with boots.', 'If there is, it is equal to 1, and if there is no, it is 0.'],
      },
      has_mainhand: {
        attribute: 'ysm.has_mainhand',
        description: ['Whether there is an equipment main hand.', 'If there is, it is equal to 1, and if there is no, it is 0.'],
      },
      has_offhand: {
        attribute: 'ysm.has_offhand',
        description: ['Whether there is an equipment deputy.', 'If there is, it is equal to 1, and if there is no, it is 0.'],
      },
    }

  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      title: '模型 Molang',
      attribute:{
        head_yaw: {
          attribute: 'ysm.head_yaw',
          description: ['頭的偏行角。', '左右轉向。'],
        },
        head_pitch: {
          attribute: 'ysm.head_pitch',
          description: ['頭的仰角。', '上下轉向。'],
        },
        has_helmet: {
          attribute: 'ysm.has_helmet',
          description: ['是否有裝備頭盔。', '有等於1沒有則0。'],
        },
        has_chest_plate: {
          attribute: 'ysm.has_chest_plate',
          description: ['是否有裝備胸甲。', '有等於1沒有則0。'],
        },
        has_leggings: {
          attribute: 'ysm.has_leggings',
          description: ['是否有裝備護腿。', '有等於1沒有則0。'],
        },
        has_boots: {
          attribute: 'ysm.has_boots',
          description: ['是否有裝備靴子。', '有等於1沒有則0。'],
        },
        has_mainhand: {
          attribute: 'ysm.has_mainhand',
          description: ['是否有裝備主手。', '有等於1沒有則0。'],
        },
        has_offhand: {
          attribute: 'ysm.has_offhand',
          description: ['是否有裝備副手。', '有等於1沒有則0。'],
        },
      }
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      title: '模型 Molang',
      attribute:{
        head_yaw: {
          attribute: 'ysm.head_yaw',
          description: ['头的偏行角。', '左右转向。'],
        },
        head_pitch: {
          attribute: 'ysm.head_pitch',
          description: ['头的仰角。', '上下转向。'],
        },
        has_helmet: {
          attribute: 'ysm.has_helmet',
          description: ['是否有装备头盔。', '有等于1没有则0。'],
        },
        has_chest_plate: {
          attribute: 'ysm.has_chest_plate',
          description: ['是否有装备胸甲。', '有等于1没有则0。'],
        },
        has_leggings: {
          attribute: 'ysm.has_leggings',
          description: ['是否有装备护腿。', '有等于1没有则0。'],
        },
        has_boots: {
          attribute: 'ysm.has_boots',
          description: ['是否有装备靴子。', '有等于1没有则0。'],
        },
        has_mainhand: {
          attribute: 'ysm.has_mainhand',
          description: ['是否有装备主手。', '有等于1没有则0。'],
        },
        has_offhand: {
          attribute: 'ysm.has_offhand',
          description: ['是否有装备副手。', '有等于1没有则0。'],
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