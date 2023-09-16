import { defineStore } from 'pinia'

export const useFancyChatPages = defineStore('useFancyChatPages', () => {
    const pageName = ref('FCH_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyChatPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyChatPages");
    })

    return { pageName, setPage }
})
