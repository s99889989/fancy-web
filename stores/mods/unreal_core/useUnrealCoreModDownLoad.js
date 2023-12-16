import { defineStore } from 'pinia'

export const useUnrealCoreModDownLoad = defineStore('useUnrealCoreModDownLoad', () => {


    const selectResults = computed(() => {

        let result = data.downloadList;

        if(data.filter_minecraft_version !== "All"){
            result = result.filter(item=>item.minecraft_version.includes(data.filter_minecraft_version));
        }

        if(data.filter_mod_loaders !== "All"){
            result = result.filter(item=>item.mod_loaders.includes(data.filter_mod_loaders));
        }

        return result;
    })

    const data = reactive({
        filter_minecraft_version: "All",
        filter_mod_loaders: "All",
        downloadList: [
            {
                name: "UnrealCore-Forge-1.20.2-2.0",
                mod_version: "2.0-beta2",
                minecraft_version: "1.20.2",
                mod_loaders: "Forge",
                uploaded: "2023/12/16",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1185566013132124190/UnrealCore-Forge-1.20.2-2.0-beta2.jar?ex=65901364&is=657d9e64&hm=fe57a880de8a105b0dfa0a515bc1ed4aecedb379cc6116634ff674987b852c2f&",
                download_times: ""
            },
            {
                name: "UnrealCore-Forge-1.20.2-2.0",
                mod_version: "2.0-beta1",
                minecraft_version: "1.20.2",
                mod_loaders: "Forge",
                uploaded: "2023/12/16",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1185551226075627560/UnrealCore-Forge-1.20.2-2.0-beta1.jar?ex=6590059e&is=657d909e&hm=a4987b8deae79a0b566e49580248a4368f6ac759d7cb87a72cc2fdc321cb42bb&",
                download_times: ""
            },
            {
                name: "UnrealCore-Fabric-1.20.2-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.20.2",
                mod_loaders: "Fabric",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326522925948969/UnrealCore-Fabric-1.20.2-1.0.8.jar?ex=653b87ee&is=652912ee&hm=5cd41418bd324a5b47d0af41f1e4f5add3b1580f22dff3024186b58b8be43c24&",
                download_times: ""
            },
            {
                name: "UnrealCore-Forge-1.20.2-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.20.2",
                mod_loaders: "Forge",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326521600540772/UnrealCore-Forge-1.20.2-1.0.8.jar?ex=653b87ed&is=652912ed&hm=cc17261e2094d425b0d8a58e8443a5f2cfe736d7273ada1285d0338d9e5609d5&",
                download_times: ""
            },
            {
                name: "UnrealCore-Fabric-1.19.4-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.19.4",
                mod_loaders: "Fabric",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326522623950848/UnrealCore-Fabric-1.19.4-1.0.8.jar?ex=653b87ed&is=652912ed&hm=fd273ae9f2400d2aee677f3c1518afb5dbd0238da22499e0b21e9604504d3753&",
                download_times: ""
            },
            {
                name: "UnrealCore-Forge-1.19.4-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.19.4",
                mod_loaders: "Forge",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326521172725760/UnrealCore-Forge-1.19.4-1.0.8.jar?ex=653b87ed&is=652912ed&hm=a48244f9094794cf05f4ec7cb9965e4b75483c8587d05fa02347a30b1aebade7&",
                download_times: ""
            },
            {
                name: "UnrealCore-Fabric-1.18.2-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.18.2",
                mod_loaders: "Fabric",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326522275827752/UnrealCore-Fabric-1.18.2-1.0.8.jar?ex=653b87ed&is=652912ed&hm=aa3011bbed658efe115730f1ae2d7305aa10334fbc8de988c62d8004ac084ab8&",
                download_times: ""
            },
            {
                name: "UnrealCore-Forge-1.18.2-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.18.2",
                mod_loaders: "Forge",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326520824602635/UnrealCore-Forge-1.18.2-1.0.8.jar?ex=653b87ed&is=652912ed&hm=d784bb2ecf8c4cdba80aa56acd70fd76273aa7f477b5ad2fcbc294b006ad5edd&",
                download_times: ""
            },
            {
                name: "UnrealCore-Fabric-1.17.1-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.17.1",
                mod_loaders: "Fabric",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326521965453322/UnrealCore-Fabric-1.17.1-1.0.8.jar?ex=653b87ed&is=652912ed&hm=d5377fe75267f8e9d5054fefc2d8447eae30f1c5f2a69b2df07f7c422b15aafb&",
                download_times: ""
            },
            {
                name: "UnrealCore-Forge-1.17.1-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.17.1",
                mod_loaders: "Forge",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326520287723530/UnrealCore-Forge-1.17.1-1.0.8.jar?ex=653b87ed&is=652912ed&hm=c3a546f079b1d3d721702bc4f4d3c714d43ff5869eadf27623fb0eb73effbc48&",
                download_times: ""
            },
            {
                name: "UnrealCore-Forge-1.16.5-1.0.8",
                mod_version: "1.0.8",
                minecraft_version: "1.16.5",
                mod_loaders: "Forge",
                uploaded: "2023/10/13",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1162326519855718451/UnrealCore-Forge-1.16.5-1.0.8.jar?ex=653b87ed&is=652912ed&hm=cfe741277ebe1167f1ac3679ae3a7befc64dd0d4810a22ad9af73b78e5bb487a&",
                download_times: ""
            },
            {
                name: "UnrealCore-Forge-1.20.1-1.0.7.1",
                mod_version: "1.0.7.1",
                minecraft_version: "1.20.1",
                mod_loaders: "Forge",
                uploaded: "2023/08/06",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1137706490698928188/UnrealCore-Forge-1.20.1-1.0.7.1.jar",
                download_times: ""
            },
            {
                name: "UnrealCore-Fabric-1.20.1-1.0.7",
                mod_version: "1.0.7",
                minecraft_version: "1.20.1",
                mod_loaders: "Fabric",
                uploaded: "2023/08/05",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1137368763784757368/UnrealCore-Fabric-1.20.1-1.0.7.jar",
                download_times: ""
            },
            {
                name: "UnrealCore-Forge-1.16.5-1.0.7",
                mod_version: "1.0.7",
                minecraft_version: "1.16.5",
                mod_loaders: "Forge",
                uploaded: "2023/08/04",
                download_link: "https://cdn.discordapp.com/attachments/1020195382787059793/1136952523882762312/UnrealCore-Forge-1.16.5-1.0.7.jar",
                download_times: ""
            }
        ],
    })







    onMounted(() => {

    })

    return {  data, selectResults }
})
