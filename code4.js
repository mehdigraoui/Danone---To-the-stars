gdjs.reveler_95lettreCode = {};
gdjs.reveler_95lettreCode.localVariables = [];
gdjs.reveler_95lettreCode.GDNewSpriteObjects1= [];
gdjs.reveler_95lettreCode.GDNewSpriteObjects2= [];
gdjs.reveler_95lettreCode.GDNewSpriteObjects3= [];
gdjs.reveler_95lettreCode.GDbgObjects1= [];
gdjs.reveler_95lettreCode.GDbgObjects2= [];
gdjs.reveler_95lettreCode.GDbgObjects3= [];
gdjs.reveler_95lettreCode.GDlettre_9595pObjects1= [];
gdjs.reveler_95lettreCode.GDlettre_9595pObjects2= [];
gdjs.reveler_95lettreCode.GDlettre_9595pObjects3= [];
gdjs.reveler_95lettreCode.GDlettre_9595lObjects1= [];
gdjs.reveler_95lettreCode.GDlettre_9595lObjects2= [];
gdjs.reveler_95lettreCode.GDlettre_9595lObjects3= [];
gdjs.reveler_95lettreCode.GDlettre_9595aObjects1= [];
gdjs.reveler_95lettreCode.GDlettre_9595aObjects2= [];
gdjs.reveler_95lettreCode.GDlettre_9595aObjects3= [];
gdjs.reveler_95lettreCode.GDlettre_9595nObjects1= [];
gdjs.reveler_95lettreCode.GDlettre_9595nObjects2= [];
gdjs.reveler_95lettreCode.GDlettre_9595nObjects3= [];
gdjs.reveler_95lettreCode.GDlettre_9595eObjects1= [];
gdjs.reveler_95lettreCode.GDlettre_9595eObjects2= [];
gdjs.reveler_95lettreCode.GDlettre_9595eObjects3= [];
gdjs.reveler_95lettreCode.GDlettre_9595tObjects1= [];
gdjs.reveler_95lettreCode.GDlettre_9595tObjects2= [];
gdjs.reveler_95lettreCode.GDlettre_9595tObjects3= [];
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1= [];
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects2= [];
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects3= [];
gdjs.reveler_95lettreCode.GDlettre_9595sObjects1= [];
gdjs.reveler_95lettreCode.GDlettre_9595sObjects2= [];
gdjs.reveler_95lettreCode.GDlettre_9595sObjects3= [];
gdjs.reveler_95lettreCode.GDtxtObjects1= [];
gdjs.reveler_95lettreCode.GDtxtObjects2= [];
gdjs.reveler_95lettreCode.GDtxtObjects3= [];
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects1= [];
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects2= [];
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects3= [];
gdjs.reveler_95lettreCode.GDlogoObjects1= [];
gdjs.reveler_95lettreCode.GDlogoObjects2= [];
gdjs.reveler_95lettreCode.GDlogoObjects3= [];
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects1= [];
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects2= [];
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects3= [];
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects1= [];
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects2= [];
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects3= [];
gdjs.reveler_95lettreCode.GDfadeObjects1= [];
gdjs.reveler_95lettreCode.GDfadeObjects2= [];
gdjs.reveler_95lettreCode.GDfadeObjects3= [];


gdjs.reveler_95lettreCode.mapOfGDgdjs_9546reveler_959595lettreCode_9546GDbtn_95959595retourObjects1Objects = Hashtable.newFrom({"btn_retour": gdjs.reveler_95lettreCode.GDbtn_9595retourObjects1});
gdjs.reveler_95lettreCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "galaxie");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main_galaxie", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "carousel");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main_carousel", false);
}}

}


};gdjs.reveler_95lettreCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16536396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_p"), gdjs.reveler_95lettreCode.GDlettre_9595pObjects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595pObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595pObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16561116);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_l"), gdjs.reveler_95lettreCode.GDlettre_9595lObjects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595lObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595lObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16562268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_a"), gdjs.reveler_95lettreCode.GDlettre_9595aObjects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595aObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595aObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16563124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_n"), gdjs.reveler_95lettreCode.GDlettre_9595nObjects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595nObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595nObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16563972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_e"), gdjs.reveler_95lettreCode.GDlettre_9595eObjects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595eObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595eObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16565076);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_t"), gdjs.reveler_95lettreCode.GDlettre_9595tObjects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595tObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595tObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16565932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_e2"), gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16566788);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_s"), gdjs.reveler_95lettreCode.GDlettre_9595sObjects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595sObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595sObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_retour"), gdjs.reveler_95lettreCode.GDbtn_9595retourObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.reveler_95lettreCode.mapOfGDgdjs_9546reveler_959595lettreCode_9546GDbtn_95959595retourObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16567908);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.reveler_95lettreCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16570340);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lettre_a"), gdjs.reveler_95lettreCode.GDlettre_9595aObjects1);
gdjs.copyArray(runtimeScene.getObjects("lettre_e"), gdjs.reveler_95lettreCode.GDlettre_9595eObjects1);
gdjs.copyArray(runtimeScene.getObjects("lettre_e2"), gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1);
gdjs.copyArray(runtimeScene.getObjects("lettre_l"), gdjs.reveler_95lettreCode.GDlettre_9595lObjects1);
gdjs.copyArray(runtimeScene.getObjects("lettre_n"), gdjs.reveler_95lettreCode.GDlettre_9595nObjects1);
gdjs.copyArray(runtimeScene.getObjects("lettre_p"), gdjs.reveler_95lettreCode.GDlettre_9595pObjects1);
gdjs.copyArray(runtimeScene.getObjects("lettre_s"), gdjs.reveler_95lettreCode.GDlettre_9595sObjects1);
gdjs.copyArray(runtimeScene.getObjects("lettre_t"), gdjs.reveler_95lettreCode.GDlettre_9595tObjects1);
{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595pObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595pObjects1[i].setY(gdjs.reveler_95lettreCode.GDlettre_9595pObjects1[i].getY() - (20));
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595lObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595lObjects1[i].setY(gdjs.reveler_95lettreCode.GDlettre_9595lObjects1[i].getY() - (20));
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595aObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595aObjects1[i].setY(gdjs.reveler_95lettreCode.GDlettre_9595aObjects1[i].getY() - (20));
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595nObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595nObjects1[i].setY(gdjs.reveler_95lettreCode.GDlettre_9595nObjects1[i].getY() - (20));
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595eObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595eObjects1[i].setY(gdjs.reveler_95lettreCode.GDlettre_9595eObjects1[i].getY() - (20));
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595tObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595tObjects1[i].setY(gdjs.reveler_95lettreCode.GDlettre_9595tObjects1[i].getY() - (20));
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1[i].setY(gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1[i].getY() - (20));
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595sObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595sObjects1[i].setY(gdjs.reveler_95lettreCode.GDlettre_9595sObjects1[i].getY() - (20));
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595pObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595pObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", (gdjs.reveler_95lettreCode.GDlettre_9595pObjects1[i].getPointY("")) + 20, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595lObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595lObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", (gdjs.reveler_95lettreCode.GDlettre_9595lObjects1[i].getPointY("")) + 20, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595aObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595aObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", (gdjs.reveler_95lettreCode.GDlettre_9595aObjects1[i].getPointY("")) + 20, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595nObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595nObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", (gdjs.reveler_95lettreCode.GDlettre_9595nObjects1[i].getPointY("")) + 20, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595eObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595eObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", (gdjs.reveler_95lettreCode.GDlettre_9595eObjects1[i].getPointY("")) + 20, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595tObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595tObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", (gdjs.reveler_95lettreCode.GDlettre_9595tObjects1[i].getPointY("")) + 20, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1[i].getBehavior("Tween").addObjectPositionYTween2("", (gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1[i].getPointY("")) + 20, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.reveler_95lettreCode.GDlettre_9595sObjects1.length ;i < len;++i) {
    gdjs.reveler_95lettreCode.GDlettre_9595sObjects1[i].getBehavior("Tween").addObjectPositionYTween2("", (gdjs.reveler_95lettreCode.GDlettre_9595sObjects1[i].getPointY("")) + 20, "linear", 1, false);
}
}}

}


};

gdjs.reveler_95lettreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.reveler_95lettreCode.GDNewSpriteObjects1.length = 0;
gdjs.reveler_95lettreCode.GDNewSpriteObjects2.length = 0;
gdjs.reveler_95lettreCode.GDNewSpriteObjects3.length = 0;
gdjs.reveler_95lettreCode.GDbgObjects1.length = 0;
gdjs.reveler_95lettreCode.GDbgObjects2.length = 0;
gdjs.reveler_95lettreCode.GDbgObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595pObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595pObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595pObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595lObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595lObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595lObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595aObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595aObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595aObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595nObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595nObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595nObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595eObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595eObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595eObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595tObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595tObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595tObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595sObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595sObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595sObjects3.length = 0;
gdjs.reveler_95lettreCode.GDtxtObjects1.length = 0;
gdjs.reveler_95lettreCode.GDtxtObjects2.length = 0;
gdjs.reveler_95lettreCode.GDtxtObjects3.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlogoObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlogoObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlogoObjects3.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects1.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects2.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects3.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects1.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects2.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects3.length = 0;
gdjs.reveler_95lettreCode.GDfadeObjects1.length = 0;
gdjs.reveler_95lettreCode.GDfadeObjects2.length = 0;
gdjs.reveler_95lettreCode.GDfadeObjects3.length = 0;

gdjs.reveler_95lettreCode.eventsList1(runtimeScene);
gdjs.reveler_95lettreCode.GDNewSpriteObjects1.length = 0;
gdjs.reveler_95lettreCode.GDNewSpriteObjects2.length = 0;
gdjs.reveler_95lettreCode.GDNewSpriteObjects3.length = 0;
gdjs.reveler_95lettreCode.GDbgObjects1.length = 0;
gdjs.reveler_95lettreCode.GDbgObjects2.length = 0;
gdjs.reveler_95lettreCode.GDbgObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595pObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595pObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595pObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595lObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595lObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595lObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595aObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595aObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595aObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595nObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595nObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595nObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595eObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595eObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595eObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595tObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595tObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595tObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595e2Objects3.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595sObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595sObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlettre_9595sObjects3.length = 0;
gdjs.reveler_95lettreCode.GDtxtObjects1.length = 0;
gdjs.reveler_95lettreCode.GDtxtObjects2.length = 0;
gdjs.reveler_95lettreCode.GDtxtObjects3.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595commencerObjects3.length = 0;
gdjs.reveler_95lettreCode.GDlogoObjects1.length = 0;
gdjs.reveler_95lettreCode.GDlogoObjects2.length = 0;
gdjs.reveler_95lettreCode.GDlogoObjects3.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects1.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects2.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595validerObjects3.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects1.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects2.length = 0;
gdjs.reveler_95lettreCode.GDbtn_9595retourObjects3.length = 0;
gdjs.reveler_95lettreCode.GDfadeObjects1.length = 0;
gdjs.reveler_95lettreCode.GDfadeObjects2.length = 0;
gdjs.reveler_95lettreCode.GDfadeObjects3.length = 0;


return;

}

gdjs['reveler_95lettreCode'] = gdjs.reveler_95lettreCode;
