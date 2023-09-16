import { defineStore } from 'pinia'

export const useFancyEquipmentPages = defineStore('useFancyEquipmentPages', () => {
    const pageName = ref('FEQ_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useFancyEquipmentPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useFancyEquipmentPages");
    })

    return { pageName, setPage }
})
