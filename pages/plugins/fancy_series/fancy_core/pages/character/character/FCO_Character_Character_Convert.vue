<script setup lang="ts">

</script>

<template>
  <p class="text-2xl dark:text-white">字的轉換</p>
  <p class="text-2xl dark:text-white">Convert</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-lg dark:text-white">對內容做變換。</p>
  <p class="text-lg dark:text-white">Change the content.</p>


  <p class="text-lg dark:text-white pt-10">屬性Attributes</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >動作 Actions</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">縮寫 Aliases</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">預設值 Default</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Function</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">要使用的轉換功能。</p>
          <p class="text-base">conversion function to be used.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">message</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base">要轉換的內容。</p>
          <p class="text-base">The content to be converted.</p>
        </td>
        <td class="px-6 py-4">
          <p class="text-base"></p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

  <p class="text-lg dark:text-white pt-10">功能Features</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
    <table class="w-full text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base" >動作 Actions</p>

        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base">描述 Description</p>
        </th>

      </tr>
      </thead>
      <tbody>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">Contain</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">只要包含該內容，就把指定字，轉換成指定內容。</p>
          <p class="text-base">As long as the content is included, the specified word is converted into the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">ContainColor</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">功能跟上面相同，只是會把會把顏色代碼的§0~§9轉成§h~§q。</p>
          <p class="text-base">The function is the same as above, except that §0~§9 that will change the color code are converted to §h~§q.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">StringColor</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">這是搭配上面的功能把§h~§q轉成§0~§9。</p>
          <p class="text-base">This is combined with the above function to convert §h~§q to §0~§9.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">ContainAll</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">只要包含該內容，就全部內容轉換成指定內容。</p>
          <p class="text-base">As long as the content is included, the entire content is converted to the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">ExSame</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">整個內容完全相同，就轉換成指定內容。</p>
          <p class="text-base">If the entire content is exactly the same, it is converted to the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">ConverHead</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">只要字首包含指定字，就轉換成指定內容。</p>
          <p class="text-base">As long as the prefix contains the specified word, it will be converted into the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">ConverUnits</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">只要內容的單位數字，包含指定內容，就轉成指定內容。</p>
          <p class="text-base">As long as the unit number of the content contains the specified content, it will be converted to the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">ConverDouble</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">只要內容的雙位數字，包含指定內容，就轉成指定內容。</p>
          <p class="text-base">As long as the double-digit number of the content contains the specified content, it will be converted to the specified content.</p>
        </td>
      </tr>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base">ConverAddRL</p>

        </th>
        <td class="px-6 py-4">
          <p class="text-base">在每個字的兩邊加上想要加的內容。</p>
          <p class="text-base">Add the content you want to add on both sides of each word.</p>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


  <p class="text-lg dark:text-white pt-16">範例</p>
  <p class="text-lg dark:text-white">Examples</p>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
  <p class="text-lg dark:text-white">如果自內容，有包含a就把a轉成b，有包含d就轉成c。</p>
  <p class="text-lg dark:text-white">例如：adidas  ->   bdicbs</p>
  <p class="text-lg dark:text-white">If the content of your own name contains a, convert a to b, and convert d to c.</p>
  <p class="text-lg dark:text-white">Example: adidas  -->  bdicbs</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_conver_name:
  message:
  - content[%player_name%]
  - Conver[function=Contain;m=a>b,d>c]</code>
  </pre>

  <p class="text-lg dark:text-white pt-10">如果內容，有包含a就內把容轉成c。</p>
  <p class="text-lg dark:text-white">例如：adidas  ->   c</p>
  <p class="text-lg dark:text-white">If the content of one's own name contains a, convert the content to c.</p>
  <p class="text-lg dark:text-white">Example: adidas  ->  c</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converAll_name:
  message:
  - content[%player_name%]
  - Conver[function=ContainAll;m=a>c]</code>
  </pre>

  <p class="text-lg dark:text-white pt-10">如果內容只有a，就把內容轉成c。</p>
  <p class="text-lg dark:text-white">例如：adidas  ->   adidas</p>
  <p class="text-lg dark:text-white">例如：a  ->   c</p>
  <p class="text-lg dark:text-white">If the content is only a, convert the content to c.</p>
  <p class="text-lg dark:text-white">Example: adidas  ->  adidas</p>
  <p class="text-lg dark:text-white">Example: a  ->  c</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_exSame_name:
  message:
  - content[%player_name%]
  - Conver[function=ExSame;m=a>c]</code>
  </pre>

  <p class="text-lg dark:text-white pt-10">如果內容的字首是a，就把a轉成c。</p>
  <p class="text-lg dark:text-white">例如：adidas  ->   cdidas</p>
  <p class="text-lg dark:text-white">If the prefix of your name is a, change a to c.</p>
  <p class="text-lg dark:text-white">Example: adidas  ->  cdidas</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converHead_name:
  message:
  - content[%player_name%]
  - Conver[function=ConverHead;m=a>c]</code>
  </pre>

  <p class="text-lg dark:text-white pt-10">如果內容的單位數包含a或b就轉換，不包含字首。</p>
  <p class="text-lg dark:text-white">例如：adidas  ->   adidcs</p>
  <p class="text-lg dark:text-white">If the unit number of the content contains a or b, it is converted, excluding the prefix.</p>
  <p class="text-lg dark:text-white">Example: adidas  ->   adidcs</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converUnits_name:
  message:
  - content[%player_name%]
  - Conver[function=ConverHead;m=a>c,m=b>d]</code>
  </pre>

  <p class="text-lg dark:text-white pt-10">如果內容的雙位數包含a或b就轉換，不包含字首。</p>
  <p class="text-lg dark:text-white">例如：playerwalk  ->   playerwclk</p>
  <p class="text-lg dark:text-white">If the double-digit number of the content contains a or b, it is converted, excluding the prefix.</p>
  <p class="text-lg dark:text-white">Example: playerwalk  ->   playerwclk</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converDouble_name:
  message:
  - content[%player_name%]
  - Conver[function=ConverDouble;m=a>c,m=b>d]</code>
  </pre>

  <p class="text-lg dark:text-white pt-10">在每個字的左右邊加上字。(左邊為小字體，右邊為比較大的字體(中文等字體))</p>
  <p class="text-lg dark:text-white">例如：你知道adidas是什麼  ->   x你kx知kx道kyazydzyizydzyazyszx是kx什kx麼k</p>
  <p class="text-lg dark:text-white">Add words to the left and right of each word. (On the left is a small font, on the right is a larger font (Chinese and other fonts))</p>
  <p class="text-lg dark:text-white">Example:  你知道adidas是什麼  ->   x你kx知kx道kyazydzyizydzyazyszx是kx什kx麼k</p>
  <pre class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_converAddRL_name:
  message:
  - content[%player_name%]
  - Conver[function=ConverAddRL;m=y>z,x>k]</code>
  </pre>
  <br/><br/><br/>
</template>

<style scoped>

</style>