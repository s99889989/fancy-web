import { defineStore } from 'pinia'

export const useFancyClientPages = defineStore('useFancyClientPages', () => {
    const pageName = ref('FCM_Introduce')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyClearPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyClearPages");
    })

    return { pageName, setPage }
})
