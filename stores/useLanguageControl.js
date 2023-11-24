
import { defineStore } from 'pinia'
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";

export const useLanguageControl = defineStore('useLanguageControl', () => {
  const unrealCorePluginLanguage = useUnrealCorePluginLanguage();

  const data = reactive({
    language: 'english',
    display: 'English (US)',
  })


  //改變語言
  const setLanguage = (set_language) => {
    data.language = set_language;
    localStorage.setItem("language", data.language);
    if(set_language === 'english'){
      data.display = "English (US)";
    }
    if(set_language === 'chinese_traditional'){
      data.display = "中文 (台灣)";
    }
    unrealCorePluginLanguage.setLanguage(data.language)
  }

  onMounted(()=>{
    const language_local = localStorage.getItem("language");
    if(language_local == null){
      localStorage.setItem("language", data.language);
    }else {
      data.language = language_local;
    }

  })

  return {
    data, setLanguage
  }
})
