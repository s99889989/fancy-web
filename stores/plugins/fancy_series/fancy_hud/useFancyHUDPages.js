import { defineStore } from 'pinia'

export const useFancyHUDPages = defineStore('useFancyHUDPages', () => {
    const pageName = ref('FHU_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyHUDPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyHUDPages");
    })

    return { pageName, setPage }
})
