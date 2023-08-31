<script setup lang="ts">

</script>

<template>

  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">

    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <NuxtLink class="dark:text-gray-400 flex items-center text-center text-xl font-bold " to="/face/Home">FancyWeb</NuxtLink>
      <div class="flex md:order-2">

        <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="https://crafatar.com/avatars/5ee41d51-9137-4a84-8968-55676f9763a8" alt="user photo">
        </button>

        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">Steve</span>
<!--            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>-->
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">

            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>

            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>

        <ThemeToggle/>

        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NuxtLink class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/face/Home">Home</NuxtLink>
          </li>

          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Plugins <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>

            <div id="dropdownNavbar1" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <NuxtLink class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/plugins/unreal_core/UnrealCoreIndex">UnrealCore</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/plugins/fancy_core/FancyCoreIndex">FancyCore</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/plugins/custom_display/CustomDisplayIndex">CustomDisplay</NuxtLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar2" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Mods <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg></button>

            <div id="dropdownNavbar2" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <NuxtLink class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/mods/unreal_core/UnrealCoreIndex">UnrealCore</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/mods/fancy_discord/FancyDiscordIndex">FancyDiscord</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/mods/fancy_clear/FancyClearIndex">FancyClear</NuxtLink>
                </li>
              </ul>
            </div>
          </li>

          <li class="flex">
            <i class="dark:text-white fa-brands fa-discord py-1"></i>
            <NuxtLink class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" target="_blank" to="https://discord.gg/dXee2YTpbn">Discord</NuxtLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>




</template>

<style scoped>

</style>