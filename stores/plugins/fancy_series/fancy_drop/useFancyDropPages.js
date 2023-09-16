import { defineStore } from 'pinia'

export const useFancyDropPages = defineStore('useFancyDropPages', () => {
    const pageName = ref('FDR_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyDropPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyDropPages");
    })

    return { pageName, setPage }
})
