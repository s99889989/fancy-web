<script setup lang="ts">
import {useCustomDisplayPages} from "~/stores/plugins/custom_display/useCustomDisplayPages";
const customDisplayPages = useCustomDisplayPages();
</script>

<template>
  <p class="text-4xl dark:text-white">目標為實體</p>
  <p class="text-2xl dark:text-white">Target entity</p>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >動作</p>
          <p class="text-base" >Actions</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述</p>
          <p class="text-base">Description</p>
        </th>

      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Attribute')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Attribute</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base">設置臨時屬性。</p>
          <p class="text-base">Set temporary properties.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Damage')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Damage</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">造成指定傷害。</p>
          <p class="text-base">Inflict specified damage.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_DCMessage')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">DCMessage</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">向Discord發送訊息。</p>
          <p class="text-base">Send a message to Discord.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Glow')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Glow</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">使目標發光。</p>
          <p class="text-base">Makes the target glow.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Heal')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Heal</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">復目標血量。</p>
          <p class="text-base">Restore the target blood volume.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Invisible')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Invisible</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">使目標隱形包括裝備。</p>
          <p class="text-base">Make the target invisible including equipment.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_LoggerInfo')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">LoggerInfo</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">在後台顯示訊息。</p>
          <p class="text-base">Display a message on the terminal.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Message')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Message</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">發送聊天訊息。</p>
          <p class="text-base">Send chat messages.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Move')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Move</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">使目標移動一段距離。</p>
          <p class="text-base">Move the target a certain distance.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_MythicSkill')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">MythicSkill</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">使用MythicMobs的技能。</p>
          <p class="text-base">Use the skills of MythicMobs.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Name')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Name</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">自訂顯示名稱，只改變顯示，實際並不修改。</p>
          <p class="text-base">Customize the display name, only change the display, not actually.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_PotionEffect')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">PotionEffect</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">向目標添加藥水效果。</p>
          <p class="text-base">Add potion effect to the target.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th @click="customDisplayPages.setPage('CDI_Entity_Teleport')" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Teleport</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">瞬間到指定位置。</p>
          <p class="text-base">To the designated location instantly.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>