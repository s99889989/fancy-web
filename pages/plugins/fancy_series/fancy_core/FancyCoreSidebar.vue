<script setup lang="ts">

import {integer} from "vscode-languageserver-types";

const emit = defineEmits(['select_page'])

const currentPath = ref('123')

const setPage = (data: string) => {
  console.log(data)
  currentPath.value = data;
}

const pageName = computed(()=>{
  return currentPath.value;
})

watch(pageName, (newValue)=>{
  emit('select_page', newValue);
})

</script>

<template>

  <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="fixed inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>

  <aside id="default-sidebar" class="f-top fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="#" @click="setPage('FC_Commands')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="ml-3">Commands</span>
          </a>
        </li>
<!--        <li>-->
<!--          <a href="#" @click="setPage('FC_Permissions')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->

<!--            <span class="flex-1 ml-3 whitespace-nowrap">Permissions</span>-->

<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" @click="setPage('FC_DownLoad')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->

<!--            <span class="flex-1 ml-3 whitespace-nowrap">DownLoad</span>-->

<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" @click="setPage('FC_API')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">-->

<!--            <span class="flex-1 ml-3 whitespace-nowrap">API</span>-->
<!--          </a>-->
<!--        </li>-->

        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-action" data-collapse-toggle="dropdown-action">

            <span class="flex-1 ml-3 text-left whitespace-nowrap">Action</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-action" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="setPage('FC_Entity_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Entity</a>
            </li>

            <li>
              <a href="#" @click="setPage('FC_Player_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Player</a>
            </li>

            <li>
              <a href="#" @click="setPage('FC_Location_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Location</a>
            </li>

            <li>
              <a href="#" @click="setPage('FC_Meta_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Meta</a>
            </li>

            <li>
              <a href="#" @click="setPage('FC_Classes_List')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Classes</a>
            </li>

          </ul>
        </li>

        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-character" data-collapse-toggle="dropdown-character">

            <span class="flex-1 ml-3 text-left whitespace-nowrap">Character</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-character" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="setPage('FC_Character_Character')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Character</a>
            </li>

            <li>
              <a href="#" @click="setPage('FC_Character_Placeholders')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Placeholders</a>
            </li>

            <li>
              <a href="#" @click="setPage('FC_Character_Attribute')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Attribute</a>
            </li>

          </ul>
        </li>

        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

            <span class="flex-1 ml-3 text-left whitespace-nowrap">Example</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2">
            <li>
              <a href="#" @click="setPage('FC_Example_1')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                1</a>
            </li>

            <li>
              <a href="#" @click="setPage('FC_Example_2')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                2</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_3')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                3</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_4')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                4</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_5')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                5</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_6')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                6</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_7')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                7</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_8')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                8</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_9')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                9</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_10')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                10</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_11')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                11</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_12')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                12</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_13')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                13</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_14')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                14</a>
            </li>
            <li>
              <a href="#" @click="setPage('FC_Example_15')" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                15</a>
            </li>

          </ul>
        </li>

        <li>
          <a href="#" @click="setPage('FC_Aims')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span class="flex-1 ml-3 whitespace-nowrap">Aims</span>
          </a>
        </li>

        <li>
          <a href="https://www.spigotmc.org/resources/fancycore.94736/" target="_blank" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">Spigot</span>
          </a>
        </li>

      </ul>
    </div>
  </aside>




</template>

<style scoped>
.ff-top{
  margin-top: 70px;
}
.f-top{
  margin-top: 70px;

  min-height: calc(100vh - 70px);
  max-height: calc(100% - 70px);
}


@media (min-width: 768px) {
  .f-top{
    margin-top: 65px;

    min-height: calc(100vh - 65px);
    height: calc(100% - 65px);
  //max-height: calc(100% - 65px);
  }
}
</style>