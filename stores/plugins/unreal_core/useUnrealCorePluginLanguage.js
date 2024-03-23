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
                sound: '',
                math: '',
            },
            model: '',
            model_list: {
                molang: '',
            },
            download: '',
            api: '',
        },
        gui_config:{
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
                sound: 'Sound',
                math: 'Math',
            },
            model: 'Model',
            model_list: {
                molang: 'Molang',
            },
            download: 'DownLoad',
            api: 'API',
        },
        gui_config:{
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
                sound: '聲音',
                math: '數學',
            },
            model: '模型',
            model_list: {
                molang: 'Molang',
            },
            download: '下載',
            api: '開發說明',
        },
        gui_config:{
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

    const chinese_simplified = reactive({
        sidebar:{
            title: 'UnrealCore插件',
            introduce: '说明',
            commands: '指令',
            tooltip_config: '工具提示设定',
            gui_config: '介面设定',
            hud_config: 'HUD设定',
            module_config: '模块设定',
            module_config_list: {
                area_input: '多行输入',
                button: '按钮',
                check: '选取框',
                container: '容器',
                entity: '实体',
                image: '图片',
                input: '输入框',
                item: '物品',
                progress: '进度条',
                range: '范围选择器',
                select: '选项',
                slot: '物品拦',
                text: '文本',
            },
            placeholder: '占位符',
            placeholder_list: {
                display: '显示',
                entity: '实体',
                player: '玩家',
                resource: '资源',
                system: '系统',
                sound: '声音',
                math: '数学',
            },
            model: '模型',
            model_list: {
                molang: 'Molang',
            },
            download: '下载',
            api: '开发说明',
        },
        gui_config:{
            common: {
                position: {
                    attribute: 'Position',
                    description: ['相对位置，使用后会以父模块为基础位置。', '(0=不使用,1=左上,2=中上,3=右上,4=左,5=中,6=右,7=左下,8=中下,9=右下)'],
                    example: '5',
                    default: '0',
                },
                x: {
                    attribute: 'X',
                    description: ['模块在画面上的左右位置。'],
                    example: '30',
                    default: '0',
                },
                y: {
                    attribute: 'Y',
                    description: ['模块在画面上的上下位置。'],
                    example: '25',
                    default: '0',
                },
            },
            common2: {
                width: {
                    attribute: 'Width',
                    description: ['模块的宽度。'],
                    example: '75',
                    default: '0',
                },
                height: {
                    attribute: 'Height',
                    description: ['模块的高度。'],
                    example: '60',
                    default: '0',
                },
                image: {
                    attribute: 'Image',
                    description: ['背景要使用的图。', '如果没有设置，就会显示设置的颜色。'],
                    example: 'gui/background/background_2.png',
                    default: '',
                },
                color: {
                    attribute: 'Color',
                    description: ['背景颜色，设定后会影响Image的颜色。'],
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

    const getSidebarLanguage = computed(()=>{
        let language_local = localStorage.getItem("language");
        if(language_local == null){
            language_local = 'english';
            localStorage.setItem("language", 'english');
        }
        if(language_local === 'chinese_traditional'){
            data.gui_config = { ...chinese_traditional.gui_config}
            data.sidebar = { ...chinese_traditional.sidebar}
        }
        if(language_local === 'chinese_simplified'){
            data.gui_config = { ...chinese_simplified.gui_config}
            data.sidebar = { ...chinese_simplified.sidebar}
        }
        if(language_local === 'english'){
            data.gui_config = { ...english.gui_config}
            data.sidebar = { ...english.sidebar}
        }
        return data.sidebar;
    })

    //改變語言
    const setLanguage = (set_language) => {


        if(set_language === 'chinese_traditional'){
            data.gui_config = { ...chinese_traditional.gui_config}
            data.sidebar = chinese_traditional.sidebar
        }
        if(set_language === 'chinese_simplified'){
            data.gui_config = { ...chinese_simplified.gui_config}
            data.sidebar = { ...chinese_simplified.sidebar}
        }
        if(set_language === 'english'){
            data.gui_config = { ...english.gui_config}
            data.sidebar = english.sidebar
        }
    }

    return { data, english, chinese_traditional, setLanguage, getSidebarLanguage }
})
