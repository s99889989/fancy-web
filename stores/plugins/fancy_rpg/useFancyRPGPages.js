import { defineStore } from 'pinia'

export const useFancyRPGPages = defineStore('useFancyRPGPages', () => {
    const pageName = ref('FRP_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyRPGPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyRPGPages");
    })

    return { pageName, setPage }
})
