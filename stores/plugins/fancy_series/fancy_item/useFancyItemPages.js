import { defineStore } from 'pinia'

export const useFancyItemPages = defineStore('useFancyItemPages', () => {
    const pageName = ref('FIT_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyItemPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyItemPages");
    })

    return { pageName, setPage }
})
