<script setup lang="js">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    title: 'Display Placeholder',
    attribute:{
      window: {
        attribute: 'Window',
        description: [''],
        example: '',
        default: '',
      },
      mouse: {
        attribute: 'Mouse',
        description: [''],
        example: '',
        default: '',
      },
      xs: {
        attribute: '',
        description: [''],
        example: '',
        default: '',
      },
      xe: {
        attribute: '',
        description: [''],
        example: '',
        default: '',
      },
      ys: {
        attribute: '',
        description: [''],
        example: '',
        default: '',
      },
      ye: {
        attribute: '',
        description: [''],
        example: '',
        default: '',
      },
      width: {
        attribute: '',
        description: [''],
        example: '',
        default: '',
      },
      height: {
        attribute: '',
        description: [''],
        example: '',
        default: '',
      },
      value: {
        attribute: '',
        description: [''],
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