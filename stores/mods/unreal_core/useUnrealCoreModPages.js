import { defineStore } from 'pinia'

export const useUnrealCoreModPages = defineStore('useUnrealCoreModPages', () => {
    const pageName = ref('UCM_Commands')

    const setPage = (data) => {
        pageName.value = data;
        localStorage.setItem("useUnrealCoreModPages", data);
    }

    onMounted(() => {
        pageName.value = localStorage.getItem("useUnrealCoreModPages");
    })

    return { pageName, setPage }
})
