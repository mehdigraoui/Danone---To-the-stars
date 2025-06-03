gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDvideoObjects1= [];
gdjs.introCode.GDvideoObjects2= [];
gdjs.introCode.GDtxtObjects1= [];
gdjs.introCode.GDtxtObjects2= [];
gdjs.introCode.GDbgtestObjects1= [];
gdjs.introCode.GDbgtestObjects2= [];
gdjs.introCode.GDlogointroObjects1= [];
gdjs.introCode.GDlogointroObjects2= [];
gdjs.introCode.GDoverlayObjects1= [];
gdjs.introCode.GDoverlayObjects2= [];
gdjs.introCode.GDbtn_9595commencerObjects1= [];
gdjs.introCode.GDbtn_9595commencerObjects2= [];
gdjs.introCode.GDlogoObjects1= [];
gdjs.introCode.GDlogoObjects2= [];
gdjs.introCode.GDbtn_9595validerObjects1= [];
gdjs.introCode.GDbtn_9595validerObjects2= [];
gdjs.introCode.GDbtn_9595retourObjects1= [];
gdjs.introCode.GDbtn_9595retourObjects2= [];
gdjs.introCode.GDfadeObjects1= [];
gdjs.introCode.GDfadeObjects2= [];


gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDbtn_95959595commencerObjects1Objects = Hashtable.newFrom({"btn_commencer": gdjs.introCode.GDbtn_9595commencerObjects1});
gdjs.introCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15931492);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.introCode.GDvideoObjects1);
{for(var i = 0, len = gdjs.introCode.GDvideoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDvideoObjects1[i].play();
}
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "transition");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_commencer"), gdjs.introCode.GDbtn_9595commencerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDbtn_95959595commencerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15933052);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "loading", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click ui.mp3", false, 100, 1);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDvideoObjects1.length = 0;
gdjs.introCode.GDvideoObjects2.length = 0;
gdjs.introCode.GDtxtObjects1.length = 0;
gdjs.introCode.GDtxtObjects2.length = 0;
gdjs.introCode.GDbgtestObjects1.length = 0;
gdjs.introCode.GDbgtestObjects2.length = 0;
gdjs.introCode.GDlogointroObjects1.length = 0;
gdjs.introCode.GDlogointroObjects2.length = 0;
gdjs.introCode.GDoverlayObjects1.length = 0;
gdjs.introCode.GDoverlayObjects2.length = 0;
gdjs.introCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.introCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.introCode.GDlogoObjects1.length = 0;
gdjs.introCode.GDlogoObjects2.length = 0;
gdjs.introCode.GDbtn_9595validerObjects1.length = 0;
gdjs.introCode.GDbtn_9595validerObjects2.length = 0;
gdjs.introCode.GDbtn_9595retourObjects1.length = 0;
gdjs.introCode.GDbtn_9595retourObjects2.length = 0;
gdjs.introCode.GDfadeObjects1.length = 0;
gdjs.introCode.GDfadeObjects2.length = 0;

gdjs.introCode.eventsList0(runtimeScene);
gdjs.introCode.GDvideoObjects1.length = 0;
gdjs.introCode.GDvideoObjects2.length = 0;
gdjs.introCode.GDtxtObjects1.length = 0;
gdjs.introCode.GDtxtObjects2.length = 0;
gdjs.introCode.GDbgtestObjects1.length = 0;
gdjs.introCode.GDbgtestObjects2.length = 0;
gdjs.introCode.GDlogointroObjects1.length = 0;
gdjs.introCode.GDlogointroObjects2.length = 0;
gdjs.introCode.GDoverlayObjects1.length = 0;
gdjs.introCode.GDoverlayObjects2.length = 0;
gdjs.introCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.introCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.introCode.GDlogoObjects1.length = 0;
gdjs.introCode.GDlogoObjects2.length = 0;
gdjs.introCode.GDbtn_9595validerObjects1.length = 0;
gdjs.introCode.GDbtn_9595validerObjects2.length = 0;
gdjs.introCode.GDbtn_9595retourObjects1.length = 0;
gdjs.introCode.GDbtn_9595retourObjects2.length = 0;
gdjs.introCode.GDfadeObjects1.length = 0;
gdjs.introCode.GDfadeObjects2.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
