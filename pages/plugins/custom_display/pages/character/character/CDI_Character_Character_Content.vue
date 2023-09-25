<script setup lang="ts">

</script>

<template>
  <p class="text-4xl dark:text-white">Content</p>

  <p class="text-3xl text-red-500 mt-5">內容Content</p>
  <p class="text-2xl dark:text-white">對佔位符等變量做轉換。</p>
  <p class="text-2xl dark:text-white">Convert variables such as placeholders.</p>


  <p class="text-3xl text-red-500 mt-10">範例Examples</p>
  <p class="text-2xl dark:text-white">放入目標PlaceholderAPI內容。</p>
  <p class="text-2xl dark:text-white">因為PlaceholderAPI本身不能指定對象，就要指定目標，沒有指定對象就是代表自己。</p>
  <p class="text-2xl dark:text-white">Put the PlaceholderAPI content.</p>
  <p class="text-2xl dark:text-white">Because PlaceholderAPI itself cannot specify an object, you must specify the target. If you don't specify an object, you represent yourself.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
target_name:#名稱自行命名，不要重複就好。
  message:
  - content[%player_name%] @=target

self_name:#Name the name yourself, don’t repeat it.
  message:
  - content[%player_name%]</code>
  </pre>

  <p class="text-2xl dark:text-white">放入插件內的佔位符。</p>
  <p class="text-2xl dark:text-white">不需要指定對象，因為佔位符內就有指定。</p>
  <p class="text-2xl dark:text-white">如果要放入雙方的資訊，只能用內建佔位符。</p>
  <p class="text-2xl dark:text-white">Placeholder placed in the plugin.</p>
  <p class="text-2xl dark:text-white">There is no need to specify the object because it is specified in the placeholder.</p>
  <p class="text-2xl dark:text-white">If you want to put information on both sides, you can only use built-in placeholders.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_target_name:
  message:
  - content[&lt;cd_self_name>&lt;cd_target_name>]</code>
  </pre>

  <p class="text-2xl dark:text-white">放入轉換過的內容。</p>
  <p class="text-2xl dark:text-white">可以使用自訂佔位符，多次轉換。</p>
  <p class="text-2xl dark:text-white">Put the converted content.</p>
  <p class="text-2xl dark:text-white">You can use custom placeholders to convert multiple times.</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <code class="dark:text-white">
self_target_name_cc:
  message:
  - content[&self_target_name&&self_target_name&]</code>
  </pre>


</template>

<style scoped>

</style>