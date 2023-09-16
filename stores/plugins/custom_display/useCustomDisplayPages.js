import { defineStore } from 'pinia'

export const useCustomDisplayPages = defineStore('useCustomDisplayPages', () => {
    const pageName = ref('CDI_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useCustomDisplayPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useCustomDisplayPages");
    })

    return { pageName, setPage }
})
