<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Event</p>

  <p class="text-2xl dark:text-white mt-10">GUI</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">事件名稱</p>
          <p class="text-base dark:text-white">Event Name</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">說明</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUIOpenEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI打開事件。</p>
          <p class="text-base dark:text-white">GUI open event.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUICloseEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI關閉事件。</p>
          <p class="text-base dark:text-white">GUI close event.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUIUpDateEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI更新內容事件。</p>
          <p class="text-base dark:text-white">GUI update content event.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUIChangeEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">在原先有開啟GUI時，又打開另外一個GUI時的事件。</p>
          <p class="text-base dark:text-white">An event occurs when another GUI is opened when the GUI was originally opened.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUIWindowReSizeEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">視窗大小改變事件。(只在有打開GUI時發生)</p>
          <p class="text-base dark:text-white">Window size change event. (Only occurs when GUI is open)</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUIButtonEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點擊GUI的按鈕事件。</p>
          <p class="text-base dark:text-white">Click event of GUI button.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUICheckEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">點擊GUI的勾選選項事件。</p>
          <p class="text-base dark:text-white">Click on the GUI's check option event.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUIInputEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI的輸入框輸入事件。</p>
          <p class="text-base dark:text-white">GUI input box input event.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUIRangeEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI的範圍選項條改變事件。</p>
          <p class="text-base dark:text-white">GUI range option change event.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerGUISelectEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">GUI的選項改變事件。</p>
          <p class="text-base dark:text-white">GUI select change event.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-2xl dark:text-white mt-10">Input</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">事件名稱</p>
          <p class="text-base dark:text-white">Event Name</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">說明</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerKeyBoardEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">鍵盤有關的事件。</p>
          <p class="text-base dark:text-white">Keyboard related events.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerMouseInputEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">按下滑鼠的事件。</p>
          <p class="text-base dark:text-white">Mouse click event.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerMouseMoveEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">滑鼠移動時的事件。</p>
          <p class="text-base dark:text-white">Events when the mouse is moved.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">PlayerMouseScrollEvent</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">使用滑鼠滾輪的事件。</p>
          <p class="text-base dark:text-white">Events for using the mouse wheel.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


</template>

<style scoped>

</style>