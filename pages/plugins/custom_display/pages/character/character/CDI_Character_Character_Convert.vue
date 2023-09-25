<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Convert</p>

  <p class="text-3xl text-red-500 mt-5">字的轉換Word conversion</p>
  <p class="text-2xl dark:text-white">對內容做變換。</p>
  <p class="text-2xl dark:text-white">Change the content.</p>

  <p class="text-3xl dark:text-white mt-5">屬性Attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">屬性名稱</p>
          <p class="text-base dark:text-white">Attribute</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Function</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要使用的轉換功能。</p>
          <p class="text-base dark:text-white">The conversion function to be used.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">message</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">要轉換的內容。</p>
          <p class="text-base dark:text-white">The content to be converted.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl dark:text-white mt-5">功能Features</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">功能名稱</p>
          <p class="text-base dark:text-white">Function</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">描述</p>
          <p class="text-base dark:text-white">Description</p>
        </th>
      </tr>

      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">Contain</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">只要包含該內容，就把指定字，轉換成指定內容。</p>
          <p class="text-base dark:text-white">As long as the content is included, the specified word is converted into the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ContainAll</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">只要包含該內容，就全部內容轉換成指定內容。</p>
          <p class="text-base dark:text-white">As long as the content is included, the entire content is converted to the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ExSame</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">整個內容完全相同，就轉換成指定內容。</p>
          <p class="text-base dark:text-white">If the entire content is exactly the same, it is converted to the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ConverHead</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">只要字首包含指定字，就轉換成指定內容。</p>
          <p class="text-base dark:text-white">As long as the prefix contains the specified word, it will be converted into the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ConverUnits</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">只要內容的單位數字，包含指定內容，就轉成指定內容。</p>
          <p class="text-base dark:text-white">As long as the unit number of the content contains the specified content, it will be converted to the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ConverDouble</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">只要內容的雙位數字，包含指定內容，就轉成指定內容。</p>
          <p class="text-base dark:text-white">As long as the double-digit number of the content contains the specified content, it will be converted to the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">ConverAddRL</p>
        </th>
        <td class="px-6 py-4">
          <p class="text-base dark:text-white">在每個字的兩邊加上想要加的內容。</p>
          <p class="text-base dark:text-white">Add the content you want to add on both sides of each word.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-3xl text-red-500 mt-10">範例Examples</p>
  <p class="text-2xl dark:text-white mt-5">如果自內容，有包含a就把a轉成b，有包含d就轉成c。</p>
  <p class="text-2xl dark:text-white">例如：adidas  ->   bdicbs</p>
  <p class="text-2xl dark:text-white">If the content of your own name contains a, convert a to b, and convert d to c.</p>
  <p class="text-2xl dark:text-white">Example: adidas  -->  bdicbs</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_conver_name:
  message:
  - content[%player_name%]
  - Conver[function=Contain;m=a>b,d>c]</code>
  </pre>

  <p class="text-2xl dark:text-white mt-5">如果內容，有包含a就內把容轉成c。</p>
  <p class="text-2xl dark:text-white">例如：adidas  ->   c</p>
  <p class="text-2xl dark:text-white">If the content of one's own name contains a, convert the content to c.</p>
  <p class="text-2xl dark:text-white">Example: adidas  ->  c</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converAll_name:
  message:
  - content[%player_name%]
  - Conver[function=ContainAll;m=a>c]</code>
  </pre>

  <p class="text-2xl dark:text-white mt-5">如果內容只有a，就把內容轉成c。</p>
  <p class="text-2xl dark:text-white">例如：adidas  ->   adidas</p>
  <p class="text-2xl dark:text-white">例如：a  ->   c</p>
  <p class="text-2xl dark:text-white">If the content is only a, convert the content to c.</p>
  <p class="text-2xl dark:text-white">Example: adidas  ->  adidas</p>
  <p class="text-2xl dark:text-white">Example: a  ->  c</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_exSame_name:
  message:
  - content[%player_name%]
  - Conver[function=ExSame;m=a>c]</code>
  </pre>

  <p class="text-2xl dark:text-white mt-5">如果內容的字首是a，就把a轉成c。</p>
  <p class="text-2xl dark:text-white">例如：adidas  ->   cdidas</p>
  <p class="text-2xl dark:text-white">If the prefix of your name is a, change a to c.</p>
  <p class="text-2xl dark:text-white">Example: adidas  ->  cdidas</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converHead_name:
  message:
  - content[%player_name%]
  - Conver[function=ConverHead;m=a>c]</code>
  </pre>

  <p class="text-2xl dark:text-white mt-5">如果內容的單位數包含a或b就轉換，不包含字首。</p>
  <p class="text-2xl dark:text-white">例如：adidas  ->   adidcs</p>
  <p class="text-2xl dark:text-white">If the unit number of the content contains a or b, it is converted, excluding the prefix.</p>
  <p class="text-2xl dark:text-white">Example: adidas  ->   adidcs</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converUnits_name:
  message:
  - content[%player_name%]
  - Conver[function=ConverHead;m=a>c,m=b>d]</code>
  </pre>

  <p class="text-2xl dark:text-white mt-5">如果內容的雙位數包含a或b就轉換，不包含字首。</p>
  <p class="text-2xl dark:text-white">例如：playerwalk  ->   playerwclk</p>
  <p class="text-2xl dark:text-white">If the double-digit number of the content contains a or b, it is converted, excluding the prefix.</p>
  <p class="text-2xl dark:text-white">Example: playerwalk  ->   playerwclk</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converDouble_name:
  message:
  - content[%player_name%]
  - Conver[function=ConverDouble;m=a>c,m=b>d]</code>
  </pre>

  <p class="text-2xl dark:text-white mt-5">在每個字的左右邊加上字。(左邊為小字體，右邊為比較大的字體(中文等字體))</p>
  <p class="text-2xl dark:text-white">例如：你知道adidas是什麼  ->   x你kx知kx道kyazydzyizydzyazyszx是kx什kx麼k</p>
  <p class="text-2xl dark:text-white">Add words to the left and right of each word. (On the left is a small font, on the right is a larger font (Chinese and other fonts))</p>
  <p class="text-2xl dark:text-white">Example:  你知道adidas是什麼  ->   x你kx知kx道kyazydzyizydzyazyszx是kx什kx麼k</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converAddRL_name:
  message:
  - content[%player_name%]
  - Conver[function=ConverAddRL;m=y>z,x>k]</code>
  </pre>



</template>

<style scoped>

</style>