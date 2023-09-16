import { defineStore } from 'pinia'

export const useFancyMobsPages = defineStore('useFancyMobsPages', () => {
    const pageName = ref('FMO_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyMobsPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyMobsPages");
    })

    return { pageName, setPage }
})
