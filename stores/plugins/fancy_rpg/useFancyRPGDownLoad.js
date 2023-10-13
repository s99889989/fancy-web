import { defineStore } from 'pinia'

export const useFancyRPGDownLoad = defineStore('useFancyRPGDownLoad', () => {

    const data = reactive({
        filter_minecraft_version: "All",
        filter_mod_loaders: "All",
        downloadList: [
            {
                name: "FancyRPG-1.0.3",
                plugin_version: "1.0.3",
                uploaded: "2023/08/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326413332992030/FancyRPG-1.0.3.jar?ex=653b87d3&is=652912d3&hm=ab56df070609232a963fc046f2c90183cccea1fa239109298c55a4a1dc32c7a3&",
                download_times: ""
            },
            {
                name: "FancyRPG-1.0.2",
                plugin_version: "1.0.2",
                uploaded: "2023/08/04",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1136952522968399932/FancyRPG-1.0.2.jar?ex=6532470d&is=651fd20d&hm=11be2c50c7ea26d4bee69a8a24b28acdfe0eb14fabc00fb868bc3308effd864a&",
                download_times: ""
            },
        ],
    })

    return { data }
})
