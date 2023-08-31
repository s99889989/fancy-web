<script setup lang="ts">

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
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="ml-3">Commands</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">Permissions</span>

          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">DownLoad</span>

          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

            <span class="flex-1 ml-3 whitespace-nowrap">API</span>
          </a>
        </li>

        <li>
          <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

            <span class="flex-1 ml-3 text-left whitespace-nowrap">Spigot</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2">
            <li>
              <a href="https://www.spigotmc.org/resources/fancycore.94736/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyCore</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancypack.94737/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyPack</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancychat.94838/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyChat</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancyteam.95051/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyTeam</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancymobs.95079/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyMobs</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancydrop.95081/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyDrop</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancyaction.95531/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyAction</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancyitems.95957/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyItems</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancyequipment.95958/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyEquipment</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancyattributes.96003/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyAttributes</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancygui.96026/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyGui</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancyclasses.96628/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyClasses</a>
            </li>
            <li>
              <a href="https://www.spigotmc.org/resources/fancyhud.97854/" target="_blank" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                FancyHUD</a>
            </li>
          </ul>
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