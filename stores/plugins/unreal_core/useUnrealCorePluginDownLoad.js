import { defineStore } from 'pinia'

export const useUnrealCorePluginDownLoad = defineStore('useUnrealCorePluginDownLoad', () => {




    const data = reactive({
        filter_plugin_version: "All",
        downloadList: [
            {
                name: "UnrealCore-Plugin-2.0",
                plugin_version: "2.0-beta1",
                uploaded: "2023/12/16",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1185551325069590528/UnrealCore-Plugin-2.0-beta1.jar?ex=659005b6&is=657d90b6&hm=a8012cb9a44ef0f8ee12fabc8afec41d442d2d68a2f5c6b878d13703dfeb7c35&",
                download_times: ""
            },
            {
                name: "UnrealCore-Plugin-1.0.8",
                plugin_version: "1.0.8",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326413018398770/UnrealCore-Plugin-1.0.8.jar?ex=653b87d3&is=652912d3&hm=96dc2bd72567031a8a1469cdcccb5f0bbc402617cc32f0d0a01a24f8954c2b71&",
                download_times: ""
            },
            {
                name: "UnrealCore-Plugin-1.0.7.1",
                plugin_version: "1.0.7.1",
                uploaded: "2023/09/20",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1154056047724593222/UnrealCore-Plugin-1.0.7.1.jar",
                download_times: ""
            },
            {
                name: "UnrealCore-Plugin-1.0.7",
                plugin_version: "1.0.7",
                uploaded: "2023/08/04",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1136952523383652443/UnrealCore-Plugin-1.0.7.jar",
                download_times: ""
            },
        ],
    })








    return { data }
})
