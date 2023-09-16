import { defineStore } from 'pinia'

export const useFancyGUIPages = defineStore('useFancyGUIPages', () => {
    const pageName = ref('FGU_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyGUIPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyGUIPages");
    })

    return { pageName, setPage }
})
