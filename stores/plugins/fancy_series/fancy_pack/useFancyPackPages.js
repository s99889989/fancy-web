import { defineStore } from 'pinia'

export const useFancyPackPages = defineStore('useFancyPackPages', () => {
    const pageName = ref('FPA_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyPackPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyPackPages");
    })

    return { pageName, setPage }
})
