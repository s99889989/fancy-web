
import { defineStore } from 'pinia'


export const useLanguageControl = defineStore('useLanguageControl', () => {

  const data = reactive({
    language: 'english',
    display: 'English (US)',
    navbar:{
      home: '',
      plugins: '',
      mods: '',
    },
    attributes:{
      head: '',
      attribute: '',
      description: '',
      example: '',
      default: '',
    },
  })

  const english = reactive({
    navbar:{
      home: 'Home',
      plugins: 'Plugins',
      mods: 'Mods',
    },
    attributes:{
      head: 'Attributes',
      attribute: 'Attribute',
      description: 'Description',
      example: 'Example',
      default: 'Default',
    },
  })

  const chinese_traditional = reactive({
    navbar:{
      home: '首頁',
      plugins: '插件',
      mods: '模組',
    },
    attributes:{
      head: '屬性',
      attribute: '屬性名稱',
      description: '描述',
      example: '範例',
      default: '預設值',
    },
  })

  //改變語言
  const setLanguage = (set_language) => {
    data.language = set_language;
    localStorage.setItem("language", data.language);
    if(set_language === 'english'){
      data.display = "English (US)";
      data.navbar = english.navbar;
      data.attributes = english.attributes;
    }
    if(set_language === 'chinese_traditional'){
      data.display = "中文 (台灣)";
      data.navbar = chinese_traditional.navbar;
      data.attributes = chinese_traditional.attributes;
    }
  }
  const setLocalLanguage = () => {
    const language_local = localStorage.getItem("language");
    if(language_local == null){
      localStorage.setItem("language", data.language);
    }else {
      data.language = language_local;
    }
    setLanguage(data.language);
  }

  return {
    data, setLanguage, setLocalLanguage,
  }
})
