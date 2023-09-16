import { defineStore } from 'pinia'

export const useFancyTeamPages = defineStore('useFancyTeamPages', () => {
    const pageName = ref('FTE_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyTeamPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyTeamPages");
    })

    return { pageName, setPage }
})
