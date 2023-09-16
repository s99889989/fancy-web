import { defineStore } from 'pinia'

export const useFancyClearPages = defineStore('useFancyClearPages', () => {
    const pageName = ref('FCL_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyClearPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyClearPages");
    })

    return { pageName, setPage }
})
