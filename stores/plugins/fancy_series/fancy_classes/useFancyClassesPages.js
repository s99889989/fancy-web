import { defineStore } from 'pinia'

export const useFancyClassesPages = defineStore('useFancyClassesPages', () => {
    const pageName = ref('FCL_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyClassesPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyClassesPages");
    })

    return { pageName, setPage }
})
