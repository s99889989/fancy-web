import { defineStore } from 'pinia'

export const useFancyActionPages = defineStore('useFancyActionPages', () => {
    const pageName = ref('FAC_Action')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyActionPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyActionPages");
    })

    return { pageName, setPage }
})
