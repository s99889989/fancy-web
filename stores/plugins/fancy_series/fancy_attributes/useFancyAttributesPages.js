import { defineStore } from 'pinia'

export const useFancyAttributesPages = defineStore('useFancyAttributesPages', () => {
    const pageName = ref('FAT_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyAttributesPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyAttributesPages");
    })

    return { pageName, setPage }
})
