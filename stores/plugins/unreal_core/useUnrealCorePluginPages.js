import { defineStore } from 'pinia'

export const useUnrealCorePluginPages = defineStore('useUnrealCorePluginPages', () => {
    const pageName = ref('UCP_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useUnrealCorePluginPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useUnrealCorePluginPages");
    })

    return { pageName, setPage }
})
