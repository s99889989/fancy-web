<script setup lang="ts">
import {useFancyCorePages} from "~/stores/plugins/fancy_series/fancy_core/useFancyCorePages";
const fancyCoreSidebar = useFancyCorePages();


import FancyCoreSidebar from "~/pages/plugins/fancy_series/fancy_core/FancyCoreSidebar.vue";

import FCO_Commands from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_Commands.vue";
import FCO_Permissions from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_Permissions.vue";
import FCO_DownLoad from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_DownLoad.vue";
import FCO_API from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_API.vue";


import FCO_Entity_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Entity_List.vue";
import FCO_Player_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Player_List.vue";
import FCO_Location_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Location_List.vue";
import FCO_Meta_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Meta_List.vue";
import FCO_Classes_List from "~/pages/plugins/fancy_series/fancy_core/pages/action/FCO_Classes_List.vue";

import FCO_Character_Character from "~/pages/plugins/fancy_series/fancy_core/pages/character/FCO_Character_Character.vue";
import FCO_Character_Placeholders from "~/pages/plugins/fancy_series/fancy_core/pages/character/FCO_Character_Placeholders.vue";
import FCO_Character_Attribute from "~/pages/plugins/fancy_series/fancy_core/pages/character/FCO_Character_Attribute.vue";

import FCO_Examples from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_Examples.vue";
import FCO_Example_1 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_1.vue";
import FCO_Example_2 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_2.vue";
import FCO_Example_3 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_3.vue";
import FCO_Example_4 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_4.vue";
import FCO_Example_5 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_5.vue";
import FCO_Example_6 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_6.vue";
import FCO_Example_7 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_7.vue";
import FCO_Example_8 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_8.vue";
import FCO_Example_9 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_9.vue";
import FCO_Example_10 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_10.vue";
import FCO_Example_11 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_11.vue";
import FCO_Example_12 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_12.vue";
import FCO_Example_13 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_13.vue";
import FCO_Example_14 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_14.vue";
import FCO_Example_15 from "~/pages/plugins/fancy_series/fancy_core/pages/example/FCO_Example_15.vue";

import FCO_Aims from "~/pages/plugins/fancy_series/fancy_core/pages/FCO_Aims.vue";

import FCO_Classes_AttributePoint from "~/pages/plugins/fancy_series/fancy_core/pages/action/classes/FCO_Classes_AttributePoint.vue";
import FCO_Classes_CustomPoint from "~/pages/plugins/fancy_series/fancy_core/pages/action/classes/FCO_Classes_CustomPoint.vue";
import FCO_Classes_SetSkillLevel from "~/pages/plugins/fancy_series/fancy_core/pages/action/classes/FCO_Classes_SetSkillLevel.vue";

import FCO_Entity_Attribute from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Attribute.vue";
import FCO_Entity_CustomValue from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_CustomValue.vue";
import FCO_Entity_Damage from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Damage.vue";
import FCO_Entity_DCMessage from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_DCMessage.vue";
import FCO_Entity_Glow from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Glow.vue";
import FCO_Entity_Heal from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Heal.vue";
import FCO_Entity_Invisible from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Invisible.vue";
import FCO_Entity_LoggerInfo from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_LoggerInfo.vue";
import FCO_Entity_Message from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Message.vue";
import FCO_Entity_Move from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Move.vue";
import FCO_Entity_MythicSkill from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_MythicSkill.vue";
import FCO_Entity_Name from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Name.vue";
import FCO_Entity_PotionEffect from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_PotionEffect.vue";
import FCO_Entity_Teleport from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Teleport.vue";
import FCO_Entity_Threat from "~/pages/plugins/fancy_series/fancy_core/pages/action/entity/FCO_Entity_Threat.vue";

import FCO_Location_Block from "~/pages/plugins/fancy_series/fancy_core/pages/action/location/FCO_Location_Block.vue";
import FCO_Location_FloatMessage from "~/pages/plugins/fancy_series/fancy_core/pages/action/location/FCO_Location_FloatMessage.vue";
import FCO_Location_Guise from "~/pages/plugins/fancy_series/fancy_core/pages/action/location/FCO_Location_Guise.vue";
import FCO_Location_Light from "~/pages/plugins/fancy_series/fancy_core/pages/action/location/FCO_Location_Light.vue";
import FCO_Location_Model from "~/pages/plugins/fancy_series/fancy_core/pages/action/location/FCO_Location_Model.vue";
import FCO_Location_Particle from "~/pages/plugins/fancy_series/fancy_core/pages/action/location/FCO_Location_Particle.vue";
import FCO_Location_Sound from "~/pages/plugins/fancy_series/fancy_core/pages/action/location/FCO_Location_Sound.vue";

import FCO_Meta_Break from "~/pages/plugins/fancy_series/fancy_core/pages/action/meta_action/FCO_Meta_Break.vue";
import FCO_Meta_Action from "~/pages/plugins/fancy_series/fancy_core/pages/action/meta_action/FCO_Meta_Action.vue";
import FCO_Meta_Delay from "~/pages/plugins/fancy_series/fancy_core/pages/action/meta_action/FCO_Meta_Delay.vue";
import FCO_Meta_FixedPoint from "~/pages/plugins/fancy_series/fancy_core/pages/action/meta_action/FCO_Meta_FixedPoint.vue";
import FCO_Meta_LocPng from "~/pages/plugins/fancy_series/fancy_core/pages/action/meta_action/FCO_Meta_LocPng.vue";
import FCO_Meta_Loop from "~/pages/plugins/fancy_series/fancy_core/pages/action/meta_action/FCO_Meta_Loop.vue";
import FCO_Meta_Orbital from "~/pages/plugins/fancy_series/fancy_core/pages/action/meta_action/FCO_Meta_Orbital.vue";
import FCO_Meta_SwitchAction from "~/pages/plugins/fancy_series/fancy_core/pages/action/meta_action/FCO_Meta_SwitchAction.vue";

import FCO_Player_ActionBar from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_ActionBar.vue";
import FCO_Player_BossBar from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_BossBar.vue";
import FCO_Player_Command from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_Command.vue";
import FCO_Player_Exp from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_Exp.vue";
import FCO_Player_Inventory from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_Inventory.vue";
import FCO_Player_Item from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_Item.vue";
import FCO_Player_Level from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_Level.vue";
import FCO_Player_Mana from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_Mana.vue";
import FCO_Player_Money from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_Money.vue";
import FCO_Player_Title from "~/pages/plugins/fancy_series/fancy_core/pages/action/player/FCO_Player_Title.vue";


const currentView = computed(() => {
  switch (fancyCoreSidebar.pageName){
    case "FCO_Commands":return FCO_Commands;
    case "FCO_Permissions":return FCO_Permissions;
    case "FCO_DownLoad":return FCO_DownLoad;
    case "FCO_API":return FCO_API;
    case "FCO_Entity_List":return FCO_Entity_List;
    case "FCO_Player_List":return FCO_Player_List;
    case "FCO_Location_List":return FCO_Location_List;
    case "FCO_Meta_List":return FCO_Meta_List;
    case "FCO_Classes_List":return FCO_Classes_List;
    case "FCO_Character_Character":return FCO_Character_Character;
    case "FCO_Character_Placeholders":return FCO_Character_Placeholders;
    case "FCO_Character_Attribute":return FCO_Character_Attribute;
    case "FCO_Examples":return FCO_Examples;
    case "FCO_Example_1":return FCO_Example_1;
    case "FCO_Example_2":return FCO_Example_2;
    case "FCO_Example_3":return FCO_Example_3;
    case "FCO_Example_4":return FCO_Example_4;
    case "FCO_Example_5":return FCO_Example_5;
    case "FCO_Example_6":return FCO_Example_6;
    case "FCO_Example_7":return FCO_Example_7;
    case "FCO_Example_8":return FCO_Example_8;
    case "FCO_Example_9":return FCO_Example_9;
    case "FCO_Example_10":return FCO_Example_10;
    case "FCO_Example_11":return FCO_Example_11;
    case "FCO_Example_12":return FCO_Example_12;
    case "FCO_Example_13":return FCO_Example_13;
    case "FCO_Example_14":return FCO_Example_14;
    case "FCO_Example_15":return FCO_Example_15;
    case "FCO_Aims":return FCO_Aims;
    case "FCO_Classes_AttributePoint":return FCO_Classes_AttributePoint;
    case "FCO_Classes_CustomPoint":return FCO_Classes_CustomPoint;
    case "FCO_Classes_SetSkillLevel":return FCO_Classes_SetSkillLevel;
    case "FCO_Entity_Attribute":return FCO_Entity_Attribute;
    case "FCO_Entity_CustomValue":return FCO_Entity_CustomValue;
    case "FCO_Entity_Damage":return FCO_Entity_Damage;
    case "FCO_Entity_DCMessage":return FCO_Entity_DCMessage;
    case "FCO_Entity_Glow":return FCO_Entity_Glow;
    case "FCO_Entity_Heal":return FCO_Entity_Heal;
    case "FCO_Entity_Invisible":return FCO_Entity_Invisible;
    case "FCO_Entity_LoggerInfo":return FCO_Entity_LoggerInfo;
    case "FCO_Entity_Message":return FCO_Entity_Message;
    case "FCO_Entity_Move":return FCO_Entity_Move;
    case "FCO_Entity_MythicSkill":return FCO_Entity_MythicSkill;
    case "FCO_Entity_Name":return FCO_Entity_Name;
    case "FCO_Entity_PotionEffect":return FCO_Entity_PotionEffect;
    case "FCO_Entity_Teleport":return FCO_Entity_Teleport;
    case "FCO_Entity_Threat":return FCO_Entity_Threat;
    case "FCO_Location_Block":return FCO_Location_Block;
    case "FCO_Location_FloatMessage":return FCO_Location_FloatMessage;
    case "FCO_Location_Guise":return FCO_Location_Guise;
    case "FCO_Location_Light":return FCO_Location_Light;
    case "FCO_Location_Model":return FCO_Location_Model;
    case "FCO_Location_Particle":return FCO_Location_Particle;
    case "FCO_Location_Sound":return FCO_Location_Sound;
    case "FCO_Meta_Break":return FCO_Meta_Break;
    case "FCO_Meta_Action":return FCO_Meta_Action;
    case "FCO_Meta_Delay":return FCO_Meta_Delay;
    case "FCO_Meta_FixedPoint":return FCO_Meta_FixedPoint;
    case "FCO_Meta_LocPng":return FCO_Meta_LocPng;
    case "FCO_Meta_Loop":return FCO_Meta_Loop;
    case "FCO_Meta_Orbital":return FCO_Meta_Orbital;
    case "FCO_Meta_SwitchAction":return FCO_Meta_SwitchAction;
    case "FCO_Player_ActionBar":return FCO_Player_ActionBar;
    case "FCO_Player_BossBar":return FCO_Player_BossBar;
    case "FCO_Player_Command":return FCO_Player_Command;
    case "FCO_Player_Exp":return FCO_Player_Exp;
    case "FCO_Player_Inventory":return FCO_Player_Inventory;
    case "FCO_Player_Item":return FCO_Player_Item;
    case "FCO_Player_Level":return FCO_Player_Level;
    case "FCO_Player_Mana":return FCO_Player_Mana;
    case "FCO_Player_Money":return FCO_Player_Money;
    case "FCO_Player_Title":return FCO_Player_Title;
    default:return FCO_Commands;
  }
})

</script>

<template>
  <FancyCoreSidebar />
  <div class="dark:bg-dark p-4 sm:ml-64 container-top">
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>