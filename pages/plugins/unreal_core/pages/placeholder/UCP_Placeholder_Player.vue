<script setup lang="js">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    title: 'Player Placeholder',
    attribute:{
      self_uuid: {
        attribute: '{player_self_uuid}',
        description: ['own UUID.'],
      },
      self_skin_url: {
        attribute: '{player_self_skin_url}',
        description: ['own skin texture.'],
      },
      self_name: {
        attribute: '{player_self_name}',
        description: ['own game name.'],
      },
      self_health_now: {
        attribute: '{player_self_health_now}',
        description: ['Your current blood volume.'],
      },
      self_health_max: {
        attribute: '{player_self_health_max}',
        description: ['His own blood volume is full.'],
      },
      player_uuid: {
        attribute: '{player_NAME_uuid}',
        description: ['The player\'s UUID.'],
      },
      player_skin_url: {
        attribute: '{player_NAME_skin_url}',
        description: ['Player\'s skin link.'],
      },
      player_name: {
        attribute: '{player_UUID_name}',
        description: ['The player\'s game name.'],
      },
      player_health_now: {
        attribute: '{player_NAME_health_now}',
        description: ['The player\'s current health volume.'],
      },
      player_health_max: {
        attribute: '{player_NAME_health_max}',
        description: ['The player\'s full health.'],
      },
      player_health_now_uuid: {
        attribute: '{player_UUID_health_now}',
        description: ['The player\'s current health volume.'],
      },
      player_health_max_uuid: {
        attribute: '{player_UUID_health_max}',
        description: ['The player\'s full health.'],
      },
    }

  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      title: '玩家 佔位符',
      attribute:{
        self_uuid: {
          attribute: '{player_self_uuid}',
          description: ['自己的UUID。'],
        },
        self_skin_url: {
          attribute: '{player_self_skin_url}',
          description: ['自己的皮膚材質。'],
        },
        self_name: {
          attribute: '{player_self_name}',
          description: ['自己的遊戲名稱。'],
        },
        self_health_now: {
          attribute: '{player_self_health_now}',
          description: ['自己目前的血量。'],
        },
        self_health_max: {
          attribute: '{player_self_health_max}',
          description: ['自己滿血的血量。'],
        },
        player_uuid: {
          attribute: '{player_遊戲名稱_uuid}',
          description: ['玩家的UUID。'],
        },
        player_skin_url: {
          attribute: '{player_遊戲名稱_skin_url}',
          description: ['玩家的皮膚連結。'],
        },
        player_name: {
          attribute: '{player_UUID_name}',
          description: ['玩家的遊戲名稱。'],
        },
        player_health_now: {
          attribute: '{player_遊戲名稱_health_now}',
          description: ['玩家目前的血量。'],
        },
        player_health_max: {
          attribute: '{player_遊戲名稱_health_max}',
          description: ['玩家滿血的血量。'],
        },
        player_health_now_uuid: {
          attribute: '{player_UUID_health_now}',
          description: ['玩家目前的血量。'],
        },
        player_health_max_uuid: {
          attribute: '{player_UUID_health_max}',
          description: ['玩家滿血的血量。'],
        },
      }
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      title: '玩家 占位符',
      attribute:{
        self_uuid: {
          attribute: '{player_self_uuid}',
          description: ['自己的UUID。'],
        },
        self_skin_url: {
          attribute: '{player_self_skin_url}',
          description: ['自己的皮肤材质。'],
        },
        self_name: {
          attribute: '{player_self_name}',
          description: ['自己的游戏名称。'],
        },
        self_health_now: {
          attribute: '{player_self_health_now}',
          description: ['自己目前的血量。'],
        },
        self_health_max: {
          attribute: '{player_self_health_max}',
          description: ['自己满血的血量。'],
        },
        player_uuid: {
          attribute: '{player_游戏名称_uuid}',
          description: ['玩家的UUID。'],
        },
        player_skin_url: {
          attribute: '{player_游戏名称_skin_url}',
          description: ['玩家的皮肤连结。'],
        },
        player_name: {
          attribute: '{player_UUID_name}',
          description: ['玩家的游戏名称。'],
        },
        player_health_now: {
          attribute: '{player_遊戲名稱_health_now}',
          description: ['玩家目前的血量。'],
        },
        player_health_max: {
          attribute: '{player_遊戲名稱_health_max}',
          description: ['玩家满血的血量。'],
        },
        player_health_now_uuid: {
          attribute: '{player_UUID_health_now}',
          description: ['玩家目前的血量。'],
        },
        player_health_max_uuid: {
          attribute: '{player_UUID_health_max}',
          description: ['玩家满血的血量。'],
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
Image2:
  Type: Image
  Position: 1
  X: 15
  Y: 16
  Width: 20
  Height: 20
  Image: https://minotar.net/avatar/{player_self_uuid}
Image3:
  Type: Image
  Position: 1
  X: 15
  Y: 16
  Width: 20
  Height: 20
  Image: https://minotar.net/avatar/{player_s99889989_uuid}
Image6:
  Type: Image
  Position: 1
  X: 50
  Y: 10
  Width: '{player_self_health_now}/{player_self_health_max}*200'
  Height: 5
  Image: hud/bar_green.png
Image7:
  Type: Image
  Position: 1
  X: 50
  Y: 10
  Width: '{player_s99889989_health_now}/{player_s99889989_health_max}*200'
  Height: 5
  Image: hud/bar_green.png
   </code>
  </pre>

</template>

<style scoped>

</style>