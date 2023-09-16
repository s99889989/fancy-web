import { defineStore } from 'pinia'

export const useFancyCorePages = defineStore('useFancyCorePages', () => {
    const pageName = ref('FC_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyCorePages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyCorePages");
    })

    return { pageName, setPage }
})
