import { defineStore } from 'pinia'

export const useFancyDiscordPages = defineStore('useFancyDiscordPages', () => {
    const pageName = ref('FDI_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyDiscordPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyDiscordPages");
    })

    return { pageName, setPage }
})
