import { defineStore } from 'pinia'

export const useUnrealCorePluginLanguage = defineStore('useUnrealCorePluginLanguage', () => {

    const data = reactive({
        sidebar:{
            title: '',
            introduce: '',
            commands: '',
            tooltip_config: '',
            gui_config: '',
            hud_config: '',
            module_config: '',
            module_config_list: {
                area_input: '',
                button: '',
                check: '',
                container: '',
                entity: '',
                image: '',
                input: '',
                item: '',
                progress: '',
                range: '',
                select: '',
                slot: '',
                text: '',
            },
            placeholder: '',
            placeholder_list: {
                display: '',
                entity: '',
                player: '',
                resource: '',
                system: '',
                music: '',
            },
            download: '',
            api: '',
        },
        gui_config:{
            attributes:{
                head: '',
                attribute: '',
                description: '',
                example: '',
                default: '',
            },
            common:{
                position: {attribute: '',
                    description: [''],
                    example: '', default: '',
                },
                x: {attribute: '',
                    description: [''],
                    example: '', default: '',
                },
                y: {attribute: '',
                    description: [''],
                    example: '', default: '',
                },
            },
            common2:{
                width: {attribute: '',
                    description: [''],
                    example: '', default: '',
                },
                height: {attribute: '',
                    description: [''],
                    example: '', default: '',
                },
                image: {attribute: '',
                    description: [''],
                    example: '', default: '',
                },
                color: {attribute: '',
                    description: [''],
                    example: '', default: '',
                },
                transparent: {attribute: '',
                    description: [''],
                    example: '', default: '',
                },
            }

        }
    })


    const english = reactive({
        sidebar:{
            title: 'UnrealCorePlugin',
            introduce: 'Introduce',
            commands: 'Commands',
            tooltip_config: 'TooltipConfig',
            gui_config: 'GUIConfig',
            hud_config: 'HUDConfig',
            module_config: 'ModuleConfig',
            module_config_list: {
                area_input: 'AreaInput',
                button: 'Button',
                check: 'Check',
                container: 'Container',
                entity: 'Entity',
                image: 'Image',
                input: 'Input',
                item: 'Item',
                progress: 'Progress',
                range: 'Range',
                select: 'Select',
                slot: 'Slot',
                text: 'Text',
            },
            placeholder: 'Placeholder',
            placeholder_list: {
                display: 'Display',
                entity: 'Entity',
                player: 'Player',
                resource: 'Resource',
                system: 'System',
                music: 'Music',
            },
            download: 'DownLoad',
            api: 'API',
        },
        gui_config:{
            attributes:{
                head: 'Attributes',
                attribute: 'Attribute',
                description: 'Description',
                example: 'Example',
                default: 'Default',
            },
            common: {
                position: {
                    attribute: 'Position',
                    description: ['Relative position, after use, the parent module will be the base position.', '(0=not used, 1=upper left, 2=upper middle, 3=upper right, 4=left, 5=center, 6=right, 7=lower left, 8=lower middle, 9=lower right)'],
                    example: '1',
                    default: '0',
                },
                x: {
                    attribute: 'X',
                    description: ['The left and right positions of the module on the screen.'],
                    example: '30',
                    default: '0',
                },
                y: {
                    attribute: 'Y',
                    description: ["The module's upper and lower position on the screen."],
                    example: '40',
                    default: '0',
                },
            },
            common2: {
                width: {
                    attribute: 'Width',
                    description: ['The width of the module.'],
                    example: '20',
                    default: '0',
                },
                height: {
                    attribute: 'Height',
                    description: ['The height of the module.'],
                    example: '86',
                    default: '0',
                },
                image: {
                    attribute: 'Image',
                    description: ['The image to use for the background.', 'If not set, the set color will be displayed.'],
                    example: 'gui/background/background_2.png',
                    default: '',
                },
                color: {
                    attribute: 'Color',
                    description: ['The background color will affect the color of the Image after setting.'],
                    example: '',
                    default: '',
                },
                transparent: {
                    attribute: 'Transparent',
                    description: ['Background transparency. (0~255)'],
                    example: 'C6AE98',
                    default: '0xFFFFFF',
                },
            }
        }
    })

    const chinese_traditional = reactive({
        sidebar:{
            title: 'UnrealCore插件',
            introduce: '說明',
            commands: '指令',
            tooltip_config: '工具提示設定',
            gui_config: '介面設定',
            hud_config: 'HUD設定',
            module_config: '模塊設定',
            module_config_list: {
                area_input: '多行輸入',
                button: '按鈕',
                check: '選取框',
                container: '容器',
                entity: '實體',
                image: '圖片',
                input: '輸入框',
                item: '物品',
                progress: '進度條',
                range: '範圍選擇器',
                select: '選項',
                slot: '物品攔',
                text: '文字',
            },
            placeholder: '佔位符',
            placeholder_list: {
                display: '顯示',
                entity: '實體',
                player: '玩家',
                resource: '資源',
                system: '系統',
                music: '音樂',
            },
            download: '下載',
            api: '開發說明',
        },
        gui_config:{
            attributes:{
                head: '屬性',
                attribute: '屬性名稱',
                description: '描述',
                example: '範例',
                default: '預設值',
            },
            common: {
                position: {
                    attribute: 'Position',
                    description: ['相對位置，使用後會以父模塊為基礎位置。', '(0=不使用,1=左上,2=中上,3=右上,4=左,5=中,6=右,7=左下,8=中下,9=右下)'],
                    example: '5',
                    default: '0',
                },
                x: {
                    attribute: 'X',
                    description: ['模塊在畫面上的左右位置。'],
                    example: '30',
                    default: '0',
                },
                y: {
                    attribute: 'Y',
                    description: ['模塊在畫面上的上下位置。'],
                    example: '25',
                    default: '0',
                },
            },
            common2: {
                width: {
                    attribute: 'Width',
                    description: ['模塊的寬度。'],
                    example: '75',
                    default: '0',
                },
                height: {
                    attribute: 'Height',
                    description: ['模塊的高度。'],
                    example: '60',
                    default: '0',
                },
                image: {
                    attribute: 'Image',
                    description: ['背景要使用的圖。', '如果沒有設置，就會顯示設置的顏色。'],
                    example: 'gui/background/background_2.png',
                    default: '',
                },
                color: {
                    attribute: 'Color',
                    description: ['背景顏色，設定後會影響Image的顏色。'],
                    example: 'C6AE98',
                    default: '0xFFFFFF',
                },
                transparent: {
                    attribute: 'Transparent',
                    description: ['背景透明度。(0~255)'],
                    example: '100',
                    default: '255',
                },
            }

        }
    })

    //改變語言
    const setLanguage = (set_language) => {


        if(set_language === 'chinese_traditional'){
            data.gui_config = { ...chinese_traditional.gui_config}
            data.sidebar = { ...chinese_traditional.sidebar}
        }else {
            data.gui_config = { ...english.gui_config}
            data.sidebar = { ...english.sidebar}
        }
        localStorage.setItem("language", set_language);
    }

    onMounted(()=>{

        let language_local = localStorage.getItem("language");
        if(language_local == null){
            language_local = 'english';
            localStorage.setItem("language", 'english');
        }

        if(language_local === 'chinese_traditional'){
            data.gui_config = { ...chinese_traditional.gui_config}
            data.sidebar = { ...chinese_traditional.sidebar}
        }else {
            data.gui_config = { ...english.gui_config}
            data.sidebar = { ...english.sidebar}
        }

    })


    return { data, setLanguage }
})
