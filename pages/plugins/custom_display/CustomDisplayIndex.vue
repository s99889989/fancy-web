<script setup lang="ts">
import {useCustomDisplayPages} from "~/stores/plugins/custom_display/useCustomDisplayPages";
const customDisplayPages = useCustomDisplayPages();

import CustomDisplaySidebar from "~/pages/plugins/custom_display/CustomDisplaySidebar.vue";

import CDI_Introduce from "~/pages/plugins/custom_display/pages/CDI_Introduce.vue";
import CDI_Commands from "~/pages/plugins/custom_display/pages/CDI_Commands.vue";
import CDI_TexturePack from "~/pages/plugins/custom_display/pages/CDI_TexturePack.vue";
import CDI_Example_List from "~/pages/plugins/custom_display/pages/CDI_Example_List.vue";
import CDI_Example_1 from "~/pages/plugins/custom_display/pages/example/CDI_Example_1.vue";
import CDI_Example_2 from "~/pages/plugins/custom_display/pages/example/CDI_Example_2.vue";
import CDI_Example_3 from "~/pages/plugins/custom_display/pages/example/CDI_Example_3.vue";
import CDI_Example_4 from "~/pages/plugins/custom_display/pages/example/CDI_Example_4.vue";
import CDI_Example_5 from "~/pages/plugins/custom_display/pages/example/CDI_Example_5.vue";
import CDI_Example_6 from "~/pages/plugins/custom_display/pages/example/CDI_Example_6.vue";
import CDI_Example_7 from "~/pages/plugins/custom_display/pages/example/CDI_Example_7.vue";
import CDI_Example_8 from "~/pages/plugins/custom_display/pages/example/CDI_Example_8.vue";
import CDI_Example_9 from "~/pages/plugins/custom_display/pages/example/CDI_Example_9.vue";
import CDI_Example_10 from "~/pages/plugins/custom_display/pages/example/CDI_Example_10.vue";
import CDI_Example_11 from "~/pages/plugins/custom_display/pages/example/CDI_Example_11.vue";
import CDI_Example_12 from "~/pages/plugins/custom_display/pages/example/CDI_Example_12.vue";
import CDI_Example_13 from "~/pages/plugins/custom_display/pages/example/CDI_Example_13.vue";
import CDI_Example_14 from "~/pages/plugins/custom_display/pages/example/CDI_Example_14.vue";
import CDI_Example_15 from "~/pages/plugins/custom_display/pages/example/CDI_Example_15.vue";
import CDI_Item from "~/pages/plugins/custom_display/pages/CDI_Item.vue";
import CDI_ModDownLoad from "~/pages/plugins/custom_display/pages/CDI_ModDownLoad.vue";
import CDI_Video from "~/pages/plugins/custom_display/pages/CDI_Video.vue";
import CDI_Class_Main from "~/pages/plugins/custom_display/pages/class/CDI_Class_Main.vue";
import CDI_Class_Action from "~/pages/plugins/custom_display/pages/class/CDI_Class_Action.vue";
import CDI_Class_Attributes from "~/pages/plugins/custom_display/pages/class/CDI_Class_Attributes.vue";
import CDI_Class_Level from "~/pages/plugins/custom_display/pages/class/CDI_Class_Level.vue";
import CDI_Class_Skill from "~/pages/plugins/custom_display/pages/class/CDI_Class_Skill.vue";
import CDI_GUI from "~/pages/plugins/custom_display/pages/CDI_GUI.vue";
import CDI_Character_Character from "~/pages/plugins/custom_display/pages/character/CDI_Character_Character.vue";
import CDI_Character_Placeholders from "~/pages/plugins/custom_display/pages/character/CDI_Character_Placeholders.vue";
import CDI_Character_Attribute from "~/pages/plugins/custom_display/pages/character/CDI_Character_Attribute.vue";
import CDI_Config from "~/pages/plugins/custom_display/pages/CDI_Config.vue";
import CDI_Teaching from "~/pages/plugins/custom_display/pages/CDI_Teaching.vue";
import CDI_Teach_Class from "~/pages/plugins/custom_display/pages/teach/CDI_Teach_Class.vue";
import CDI_Teach_Skill from "~/pages/plugins/custom_display/pages/teach/CDI_Teach_Skill.vue";

import CDI_Action_Classes_List from "~/pages/plugins/custom_display/pages/action/CDI_Action_Classes_List.vue";
import CDI_Action_Entity_List from "~/pages/plugins/custom_display/pages/action/CDI_Action_Entity_List.vue";
import CDI_Action_Location_List from "~/pages/plugins/custom_display/pages/action/CDI_Action_Location_List.vue";
import CDI_Action_Meta_List from "~/pages/plugins/custom_display/pages/action/CDI_Action_Meta_List.vue";
import CDI_Action_Player_List from "~/pages/plugins/custom_display/pages/action/CDI_Action_Player_List.vue";
import CDI_MOD_ModMessage from "~/pages/plugins/custom_display/pages/action/mod/CDI_MOD_ModMessage.vue";
import CDI_Other_Cancell from "~/pages/plugins/custom_display/pages/action/other/CDI_Other_Cancell.vue";

import CDI_Classes_AttributePoint from "~/pages/plugins/custom_display/pages/action/class/CDI_Classes_AttributePoint.vue";
import CDI_Classes_AttributeStats from "~/pages/plugins/custom_display/pages/action/class/CDI_Classes_AttributeStats.vue";
import CDI_Classes_ClassAttr from "~/pages/plugins/custom_display/pages/action/class/CDI_Classes_ClassAttr.vue";
import CDI_Classes_CustomPoint from "~/pages/plugins/custom_display/pages/action/class/CDI_Classes_CustomPoint.vue";
import CDI_Classes_SetSkillLevel from "~/pages/plugins/custom_display/pages/action/class/CDI_Classes_SetSkillLevel.vue";

import CDI_Entity_Attribute from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Attribute.vue";
import CDI_Entity_Damage from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Damage.vue";
import CDI_Entity_DCMessage from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_DCMessage.vue";
import CDI_Entity_Glow from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Glow.vue";
import CDI_Entity_Heal from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Heal.vue";
import CDI_Entity_Invisible from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Invisible.vue";
import CDI_Entity_LoggerInfo from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_LoggerInfo.vue";
import CDI_Entity_Message from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Message.vue";
import CDI_Entity_Move from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Move.vue";
import CDI_Entity_MythicSkill from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_MythicSkill.vue";
import CDI_Entity_Name from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Name.vue";
import CDI_Entity_PotionEffect from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_PotionEffect.vue";
import CDI_Entity_Teleport from "~/pages/plugins/custom_display/pages/action/entity/CDI_Entity_Teleport.vue";

import CDI_Location_Block from "~/pages/plugins/custom_display/pages/action/location/CDI_Location_Block.vue";
import CDI_Location_Guise from "~/pages/plugins/custom_display/pages/action/location/CDI_Location_Guise.vue";
import CDI_Location_Hologram from "~/pages/plugins/custom_display/pages/action/location/CDI_Location_Hologram.vue";
import CDI_Location_Light from "~/pages/plugins/custom_display/pages/action/location/CDI_Location_Light.vue";
import CDI_Location_Model from "~/pages/plugins/custom_display/pages/action/location/CDI_Location_Model.vue";
import CDI_Location_Particle from "~/pages/plugins/custom_display/pages/action/location/CDI_Location_Particle.vue";
import CDI_Location_Sound from "~/pages/plugins/custom_display/pages/action/location/CDI_Location_Sound.vue";

import CDI_Meta_Action from "~/pages/plugins/custom_display/pages/action/meta/CDI_Meta_Action.vue";
import CDI_Meta_Break from "~/pages/plugins/custom_display/pages/action/meta/CDI_Meta_Break.vue";
import CDI_Meta_Delay from "~/pages/plugins/custom_display/pages/action/meta/CDI_Meta_Delay.vue";
import CDI_Meta_FixedPoint from "~/pages/plugins/custom_display/pages/action/meta/CDI_Meta_FixedPoint.vue";
import CDI_Meta_LocPng from "~/pages/plugins/custom_display/pages/action/meta/CDI_Meta_LocPng.vue";
import CDI_Meta_Loop from "~/pages/plugins/custom_display/pages/action/meta/CDI_Meta_Loop.vue";
import CDI_Meta_Orbital from "~/pages/plugins/custom_display/pages/action/meta/CDI_Meta_Orbital.vue";
import CDI_Meta_SwitchAction from "~/pages/plugins/custom_display/pages/action/meta/CDI_Meta_SwitchAction.vue";

import CDI_Player_ActionBar from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_ActionBar.vue";
import CDI_Player_BossBar from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_BossBar.vue";
import CDI_Player_Command from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_Command.vue";
import CDI_Player_Exp from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_Exp.vue";
import CDI_Player_Inventory from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_Inventory.vue";
import CDI_Player_Item from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_Item.vue";
import CDI_Player_Level from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_Level.vue";
import CDI_Player_Mana from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_Mana.vue";
import CDI_Player_Money from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_Money.vue";
import CDI_Player_Title from "~/pages/plugins/custom_display/pages/action/player/CDI_Player_Title.vue";

const currentView = computed(() => {
  switch (customDisplayPages.pageName){
    case 'CDI_Introduce':return CDI_Introduce;
    case 'CDI_Commands':return CDI_Commands;
    case 'CDI_Item':return CDI_Item;
    case 'CDI_Teaching':return CDI_Teaching;
    case 'CDI_Teach_Class':return CDI_Teach_Class;
    case 'CDI_Teach_Skill':return CDI_Teach_Skill;
    case 'CDI_Config':return CDI_Config;
    case 'CDI_GUI':return CDI_GUI;
    case 'CDI_Character_Character':return CDI_Character_Character;
    case 'CDI_Character_Placeholders':return CDI_Character_Placeholders;
    case 'CDI_Character_Attribute':return CDI_Character_Attribute;
    case 'CDI_Class_Action':return CDI_Class_Action;
    case 'CDI_Class_Attributes':return CDI_Class_Attributes;
    case 'CDI_Class_Level':return CDI_Class_Level;
    case 'CDI_Class_Main':return CDI_Class_Main;
    case 'CDI_Class_Skill':return CDI_Class_Skill;
    case 'CDI_TexturePack':return CDI_TexturePack;
    case 'CDI_ModDownLoad':return CDI_ModDownLoad;
    case 'CDI_Video':return CDI_Video;
    case 'CDI_Example_List':return CDI_Example_List;
    case 'CDI_Example_1':return CDI_Example_1;
    case 'CDI_Example_2':return CDI_Example_2;
    case 'CDI_Example_3':return CDI_Example_3;
    case 'CDI_Example_4':return CDI_Example_4;
    case 'CDI_Example_5':return CDI_Example_5;
    case 'CDI_Example_6':return CDI_Example_6;
    case 'CDI_Example_7':return CDI_Example_7;
    case 'CDI_Example_8':return CDI_Example_8;
    case 'CDI_Example_9':return CDI_Example_9;
    case 'CDI_Example_10':return CDI_Example_10;
    case 'CDI_Example_11':return CDI_Example_11;
    case 'CDI_Example_12':return CDI_Example_12;
    case 'CDI_Example_13':return CDI_Example_13;
    case 'CDI_Example_14':return CDI_Example_14;
    case 'CDI_Example_15':return CDI_Example_15;
    case 'CDI_Action_Classes_List':return CDI_Action_Classes_List;
    case 'CDI_Action_Entity_List':return CDI_Action_Entity_List;
    case 'CDI_Action_Location_List':return CDI_Action_Location_List;
    case 'CDI_Action_Meta_List':return CDI_Action_Meta_List;
    case 'CDI_Action_Player_List':return CDI_Action_Player_List;
    case 'CDI_MOD_ModMessage':return CDI_MOD_ModMessage;
    case 'CDI_Other_Cancell':return CDI_Other_Cancell;
    case 'CDI_Classes_AttributePoint':return CDI_Classes_AttributePoint;
    case 'CDI_Classes_AttributeStats':return CDI_Classes_AttributeStats;
    case 'CDI_Classes_ClassAttr':return CDI_Classes_ClassAttr;
    case 'CDI_Classes_CustomPoint':return CDI_Classes_CustomPoint;
    case 'CDI_Classes_SetSkillLevel':return CDI_Classes_SetSkillLevel;
    case 'CDI_Entity_Attribute':return CDI_Entity_Attribute;
    case 'CDI_Entity_Damage':return CDI_Entity_Damage;
    case 'CDI_Entity_DCMessage':return CDI_Entity_DCMessage;
    case 'CDI_Entity_Glow':return CDI_Entity_Glow;
    case 'CDI_Entity_Heal':return CDI_Entity_Heal;
    case 'CDI_Entity_Invisible':return CDI_Entity_Invisible;
    case 'CDI_Entity_LoggerInfo':return CDI_Entity_LoggerInfo;
    case 'CDI_Entity_Message':return CDI_Entity_Message;
    case 'CDI_Entity_Move':return CDI_Entity_Move;
    case 'CDI_Entity_MythicSkill':return CDI_Entity_MythicSkill;
    case 'CDI_Entity_Name':return CDI_Entity_Name;
    case 'CDI_Entity_PotionEffect':return CDI_Entity_PotionEffect;
    case 'CDI_Entity_Teleport':return CDI_Entity_Teleport;
    case 'CDI_Location_Block':return CDI_Location_Block;
    case 'CDI_Location_Guise':return CDI_Location_Guise;
    case 'CDI_Location_Hologram':return CDI_Location_Hologram;
    case 'CDI_Location_Light':return CDI_Location_Light;
    case 'CDI_Location_Model':return CDI_Location_Model;
    case 'CDI_Location_Particle':return CDI_Location_Particle;
    case 'CDI_Location_Sound':return CDI_Location_Sound;
    case 'CDI_Meta_Action':return CDI_Meta_Action;
    case 'CDI_Meta_Break':return CDI_Meta_Break;
    case 'CDI_Meta_Delay':return CDI_Meta_Delay;
    case 'CDI_Meta_FixedPoint':return CDI_Meta_FixedPoint;
    case 'CDI_Meta_LocPng':return CDI_Meta_LocPng;
    case 'CDI_Meta_Loop':return CDI_Meta_Loop;
    case 'CDI_Meta_Orbital':return CDI_Meta_Orbital;
    case 'CDI_Meta_SwitchAction':return CDI_Meta_SwitchAction;
    case 'CDI_Player_ActionBar':return CDI_Player_ActionBar;
    case 'CDI_Player_BossBar':return CDI_Player_BossBar;
    case 'CDI_Player_Command':return CDI_Player_Command;
    case 'CDI_Player_Exp':return CDI_Player_Exp;
    case 'CDI_Player_Inventory':return CDI_Player_Inventory;
    case 'CDI_Player_Item':return CDI_Player_Item;
    case 'CDI_Player_Level':return CDI_Player_Level;
    case 'CDI_Player_Mana':return CDI_Player_Mana;
    case 'CDI_Player_Money':return CDI_Player_Money;
    case 'CDI_Player_Title':return CDI_Player_Title;
    default:return CDI_Introduce;
  }
})

</script>

<template>
  <CustomDisplaySidebar/>
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>