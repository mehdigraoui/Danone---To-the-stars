gdjs.planeteCode = {};
gdjs.planeteCode.localVariables = [];
gdjs.planeteCode.GDinput_9595reponseObjects1_1final = [];

gdjs.planeteCode.GDbgObjects1= [];
gdjs.planeteCode.GDbgObjects2= [];
gdjs.planeteCode.GDbgObjects3= [];
gdjs.planeteCode.GDbgObjects4= [];
gdjs.planeteCode.GDinput_9595reponseObjects1= [];
gdjs.planeteCode.GDinput_9595reponseObjects2= [];
gdjs.planeteCode.GDinput_9595reponseObjects3= [];
gdjs.planeteCode.GDinput_9595reponseObjects4= [];
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1= [];
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects2= [];
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects3= [];
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects4= [];
gdjs.planeteCode.GDfelicitationsObjects1= [];
gdjs.planeteCode.GDfelicitationsObjects2= [];
gdjs.planeteCode.GDfelicitationsObjects3= [];
gdjs.planeteCode.GDfelicitationsObjects4= [];
gdjs.planeteCode.GDerreurObjects1= [];
gdjs.planeteCode.GDerreurObjects2= [];
gdjs.planeteCode.GDerreurObjects3= [];
gdjs.planeteCode.GDerreurObjects4= [];
gdjs.planeteCode.GDerreur_9595bgObjects1= [];
gdjs.planeteCode.GDerreur_9595bgObjects2= [];
gdjs.planeteCode.GDerreur_9595bgObjects3= [];
gdjs.planeteCode.GDerreur_9595bgObjects4= [];
gdjs.planeteCode.GDbg_9595inputObjects1= [];
gdjs.planeteCode.GDbg_9595inputObjects2= [];
gdjs.planeteCode.GDbg_9595inputObjects3= [];
gdjs.planeteCode.GDbg_9595inputObjects4= [];
gdjs.planeteCode.GDeffet_9595felicitationsObjects1= [];
gdjs.planeteCode.GDeffet_9595felicitationsObjects2= [];
gdjs.planeteCode.GDeffet_9595felicitationsObjects3= [];
gdjs.planeteCode.GDeffet_9595felicitationsObjects4= [];
gdjs.planeteCode.GDbtn_9595commencerObjects1= [];
gdjs.planeteCode.GDbtn_9595commencerObjects2= [];
gdjs.planeteCode.GDbtn_9595commencerObjects3= [];
gdjs.planeteCode.GDbtn_9595commencerObjects4= [];
gdjs.planeteCode.GDlogoObjects1= [];
gdjs.planeteCode.GDlogoObjects2= [];
gdjs.planeteCode.GDlogoObjects3= [];
gdjs.planeteCode.GDlogoObjects4= [];
gdjs.planeteCode.GDbtn_9595validerObjects1= [];
gdjs.planeteCode.GDbtn_9595validerObjects2= [];
gdjs.planeteCode.GDbtn_9595validerObjects3= [];
gdjs.planeteCode.GDbtn_9595validerObjects4= [];
gdjs.planeteCode.GDbtn_9595retourObjects1= [];
gdjs.planeteCode.GDbtn_9595retourObjects2= [];
gdjs.planeteCode.GDbtn_9595retourObjects3= [];
gdjs.planeteCode.GDbtn_9595retourObjects4= [];
gdjs.planeteCode.GDfadeObjects1= [];
gdjs.planeteCode.GDfadeObjects2= [];
gdjs.planeteCode.GDfadeObjects3= [];
gdjs.planeteCode.GDfadeObjects4= [];


gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDfadeObjects1Objects = Hashtable.newFrom({"fade": gdjs.planeteCode.GDfadeObjects1});
gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595retourObjects1Objects = Hashtable.newFrom({"btn_retour": gdjs.planeteCode.GDbtn_9595retourObjects1});
gdjs.planeteCode.eventsList0 = function(runtimeScene) {

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


};gdjs.planeteCode.eventsList1 = function(runtimeScene) {

};gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595validerObjects1Objects = Hashtable.newFrom({"btn_valider": gdjs.planeteCode.GDbtn_9595validerObjects1});
gdjs.planeteCode.asyncCallback16679068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects4);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects4.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects4[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects3) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16679068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16681940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects3[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects2) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects2) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects2) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16681940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects3.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects3[i].getBehavior("Text").getText() == "2830" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects3[k] = gdjs.planeteCode.GDinput_9595reponseObjects3[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects3);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects3);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("terre");
}{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Animation").setAnimationName("terre");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "2830") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.asyncCallback16687196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects4);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects4.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects4[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects3) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16687196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16690764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects3[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects2) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects2) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects2) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16690764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects3.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects3[i].getBehavior("Text").getText() == "ZYROS" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects3[k] = gdjs.planeteCode.GDinput_9595reponseObjects3[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects3);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects3);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects3 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("mars");
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Animation").setAnimationName("mars");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "ZYROS") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.asyncCallback16695820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects4);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects4.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects4[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects3) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16695820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16699388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects3[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects2) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects2) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects2) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16699388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects3.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects3[i].getBehavior("Text").getText() == "ORION" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects3[k] = gdjs.planeteCode.GDinput_9595reponseObjects3[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects3);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects3);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects3 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(true);
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("uranus");
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Animation").setAnimationName("uranus");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "ORION") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.asyncCallback16704620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects4);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects4.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects4[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects3) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16704620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16708188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects3[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects2) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects2) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects2) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16708188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects3.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects3[i].getBehavior("Text").getText() == "0369" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects3[k] = gdjs.planeteCode.GDinput_9595reponseObjects3[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects3);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects3);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects3 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("jupiter");
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Animation").setAnimationName("jupiter");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "0369") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.asyncCallback16713604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects4);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects4.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects4[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects3) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16713604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16716468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects3[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects2) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects2) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects2) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16716468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects3.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects3[i].getBehavior("Text").getText() == "NYLEN" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects3[k] = gdjs.planeteCode.GDinput_9595reponseObjects3[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects3);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects3);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects3 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("venus");
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Animation").setAnimationName("venus");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "NYLEN") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.asyncCallback16721604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects4);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects4.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects4[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects3) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16721604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16724468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects3[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects2) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects2) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects2) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16724468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects3.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects3[i].getBehavior("Text").getText() == "CORTEX" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects3[k] = gdjs.planeteCode.GDinput_9595reponseObjects3[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects3);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects3);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects3 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("neptune");
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Animation").setAnimationName("neptune");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "CORTEX") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.asyncCallback16729604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects4);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects4.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects4[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects3) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16729604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16732468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects3[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects2) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects2) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects2) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16732468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects3.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects3[i].getBehavior("Text").getText() == "7914" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects3[k] = gdjs.planeteCode.GDinput_9595reponseObjects3[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects3);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects3);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects3 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("saturne");
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Animation").setAnimationName("saturne");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "7914") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.asyncCallback16737604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects4);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects4.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects4[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects3) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16737604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16740468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects3[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects2) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects2) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects2) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16740468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects3.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects3[i].getBehavior("Text").getText() == "DANOVA" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects3[k] = gdjs.planeteCode.GDinput_9595reponseObjects3[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects3);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects3);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects3 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects3[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("orvian");
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Animation").setAnimationName("orvian");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "DANOVA") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.asyncCallback16745468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects3);

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects3.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects3[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDfelicitationsObjects2) asyncObjectsList.addObject("felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.planeteCode.asyncCallback16745468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.asyncCallback16748332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects2);

{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].setTextColor("255;239;213");
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects2[i].hide();
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDerreurObjects1) asyncObjectsList.addObject("erreur", obj);
for (const obj of gdjs.planeteCode.GDerreur_9595bgObjects1) asyncObjectsList.addObject("erreur_bg", obj);
for (const obj of gdjs.planeteCode.GDinput_9595reponseObjects1) asyncObjectsList.addObject("input_reponse", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.planeteCode.asyncCallback16748332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1, gdjs.planeteCode.GDinput_9595reponseObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "LUNO" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_input"), gdjs.planeteCode.GDbg_9595inputObjects2);
gdjs.copyArray(gdjs.planeteCode.GDbtn_9595validerObjects1, gdjs.planeteCode.GDbtn_9595validerObjects2);

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects2);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects2 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDbg_9595inputObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDbg_9595inputObjects2[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("mercure");
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects2[i].getBehavior("Animation").setAnimationName("mercure");
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects2[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}
{ //Subevents
gdjs.planeteCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects1.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects1[i].getBehavior("Text").getText() == "LUNO") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects1[k] = gdjs.planeteCode.GDinput_9595reponseObjects1[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects1);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects1);
/* Reuse gdjs.planeteCode.GDinput_9595reponseObjects1 */
{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 0, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects1[i].setTextColor("255;55;55");
}
}
{ //Subevents
gdjs.planeteCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.eventsList29 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "terre");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "mars");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "uranus");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "jupiter");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "venus");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "neptune");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList19(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "saturne");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList22(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "orvian");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList25(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "mercure");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595validerObjects1Objects = Hashtable.newFrom({"btn_valider": gdjs.planeteCode.GDbtn_9595validerObjects1});
gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595retourObjects1Objects = Hashtable.newFrom({"btn_retour": gdjs.planeteCode.GDbtn_9595retourObjects1});
gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595validerObjects1Objects = Hashtable.newFrom({"btn_valider": gdjs.planeteCode.GDbtn_9595validerObjects1});
gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595retourObjects1Objects = Hashtable.newFrom({"btn_retour": gdjs.planeteCode.GDbtn_9595retourObjects1});
gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDeffet_95959595felicitationsObjects1Objects = Hashtable.newFrom({"effet_felicitations": gdjs.planeteCode.GDeffet_9595felicitationsObjects1});
gdjs.planeteCode.asyncCallback16759268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.planeteCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("effet_felicitations"), gdjs.planeteCode.GDeffet_9595felicitationsObjects2);

{for(var i = 0, len = gdjs.planeteCode.GDeffet_9595felicitationsObjects2.length ;i < len;++i) {
    gdjs.planeteCode.GDeffet_9595felicitationsObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.planeteCode.localVariables.length = 0;
}
gdjs.planeteCode.eventsList30 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.planeteCode.localVariables);
for (const obj of gdjs.planeteCode.GDeffet_9595felicitationsObjects1) asyncObjectsList.addObject("effet_felicitations", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.planeteCode.asyncCallback16759268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.planeteCode.eventsList31 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16651996);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("erreur"), gdjs.planeteCode.GDerreurObjects1);
gdjs.copyArray(runtimeScene.getObjects("erreur_bg"), gdjs.planeteCode.GDerreur_9595bgObjects1);
gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects1);
gdjs.planeteCode.GDfadeObjects1.length = 0;

{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreurObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDerreurObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.planeteCode.GDerreur_9595bgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDerreur_9595bgObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDfadeObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.planeteCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDfadeObjects1[i].setZOrder(999);
}
}{for(var i = 0, len = gdjs.planeteCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 1, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects1.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects1[k] = gdjs.planeteCode.GDinput_9595reponseObjects1[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_fakeplaceholder"), gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1[i].hide(false);
}
}}

}


{

gdjs.planeteCode.GDinput_9595reponseObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.planeteCode.GDinput_9595reponseObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects2);
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( gdjs.planeteCode.GDinput_9595reponseObjects2[i].isFocused() ) {
        isConditionTrue_1 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.planeteCode.GDinput_9595reponseObjects2.length; j < jLen ; ++j) {
        if ( gdjs.planeteCode.GDinput_9595reponseObjects1_1final.indexOf(gdjs.planeteCode.GDinput_9595reponseObjects2[j]) === -1 )
            gdjs.planeteCode.GDinput_9595reponseObjects1_1final.push(gdjs.planeteCode.GDinput_9595reponseObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects2);
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects2.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects2[i].getBehavior("Text").getText() == "") ) {
        isConditionTrue_1 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects2[k] = gdjs.planeteCode.GDinput_9595reponseObjects2[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.planeteCode.GDinput_9595reponseObjects2.length; j < jLen ; ++j) {
        if ( gdjs.planeteCode.GDinput_9595reponseObjects1_1final.indexOf(gdjs.planeteCode.GDinput_9595reponseObjects2[j]) === -1 )
            gdjs.planeteCode.GDinput_9595reponseObjects1_1final.push(gdjs.planeteCode.GDinput_9595reponseObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.planeteCode.GDinput_9595reponseObjects1_1final, gdjs.planeteCode.GDinput_9595reponseObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txt_fakeplaceholder"), gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "terre");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16657972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("terre");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "mercure");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16659500);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("mercure");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "mars");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16660956);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("mars");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "venus");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16662476);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("venus");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "saturne");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16663932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("saturne");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "uranus");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16665388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("uranus");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "orvian");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16666844);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("orvian");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "jupiter");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16668300);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("jupiter");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "neptune");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16669756);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.planeteCode.GDbgObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbgObjects1[i].getBehavior("Animation").setAnimationName("neptune");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_retour"), gdjs.planeteCode.GDbtn_9595retourObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595retourObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16671092);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.planeteCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("btn_valider"), gdjs.planeteCode.GDbtn_9595validerObjects1);
gdjs.copyArray(runtimeScene.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595validerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDinput_9595reponseObjects1.length;i<l;++i) {
    if ( !(gdjs.planeteCode.GDinput_9595reponseObjects1[i].getBehavior("Text").getText() == "") ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDinput_9595reponseObjects1[k] = gdjs.planeteCode.GDinput_9595reponseObjects1[i];
        ++k;
    }
}
gdjs.planeteCode.GDinput_9595reponseObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16674588);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.planeteCode.eventsList29(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_valider"), gdjs.planeteCode.GDbtn_9595validerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595validerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16750068);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.planeteCode.GDbtn_9595validerObjects1 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_retour"), gdjs.planeteCode.GDbtn_9595retourObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595retourObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16751492);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.planeteCode.GDbtn_9595retourObjects1 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595retourObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595retourObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1.1, "linear", 0.25, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_valider"), gdjs.planeteCode.GDbtn_9595validerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595validerObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16752820);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.planeteCode.GDbtn_9595validerObjects1 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_retour"), gdjs.planeteCode.GDbtn_9595retourObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDbtn_95959595retourObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16753908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.planeteCode.GDbtn_9595retourObjects1 */
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595retourObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595retourObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.25, false, true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("input_reponse"), gdjs.planeteCode.GDinput_9595reponseObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDinput_9595reponseObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDinput_9595reponseObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase((gdjs.planeteCode.GDinput_9595reponseObjects1[i].getBehavior("Text").getText())));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDfelicitationsObjects1.length;i<l;++i) {
    if ( gdjs.planeteCode.GDfelicitationsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDfelicitationsObjects1[k] = gdjs.planeteCode.GDfelicitationsObjects1[i];
        ++k;
    }
}
gdjs.planeteCode.GDfelicitationsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.planeteCode.GDfelicitationsObjects1 */
{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.planeteCode.GDfelicitationsObjects1[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.planeteCode.GDfelicitationsObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.planeteCode.GDfelicitationsObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDfelicitationsObjects1[i].setY(760);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("felicitations"), gdjs.planeteCode.GDfelicitationsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.planeteCode.GDfelicitationsObjects1.length;i<l;++i) {
    if ( gdjs.planeteCode.GDfelicitationsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.planeteCode.GDfelicitationsObjects1[k] = gdjs.planeteCode.GDfelicitationsObjects1[i];
        ++k;
    }
}
gdjs.planeteCode.GDfelicitationsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16758404);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.planeteCode.GDfelicitationsObjects1 */
gdjs.planeteCode.GDeffet_9595felicitationsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.planeteCode.mapOfGDgdjs_9546planeteCode_9546GDeffet_95959595felicitationsObjects1Objects, (( gdjs.planeteCode.GDfelicitationsObjects1.length === 0 ) ? 0 :gdjs.planeteCode.GDfelicitationsObjects1[0].getCenterXInScene()), (( gdjs.planeteCode.GDfelicitationsObjects1.length === 0 ) ? 0 :gdjs.planeteCode.GDfelicitationsObjects1[0].getCenterYInScene()), "");
}
{ //Subevents
gdjs.planeteCode.eventsList30(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "venus");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16760532);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_retour"), gdjs.planeteCode.GDbtn_9595retourObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_valider"), gdjs.planeteCode.GDbtn_9595validerObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects1[i].getBehavior("Animation").setAnimationName("dark");
}
}{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595retourObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595retourObjects1[i].getBehavior("Animation").setAnimationName("dark");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsString() == "saturne");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16762636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_retour"), gdjs.planeteCode.GDbtn_9595retourObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_valider"), gdjs.planeteCode.GDbtn_9595validerObjects1);
{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595validerObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595validerObjects1[i].getBehavior("Animation").setAnimationName("dark");
}
}{for(var i = 0, len = gdjs.planeteCode.GDbtn_9595retourObjects1.length ;i < len;++i) {
    gdjs.planeteCode.GDbtn_9595retourObjects1[i].getBehavior("Animation").setAnimationName("dark");
}
}}

}


{



}


{



}


};

gdjs.planeteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.planeteCode.GDbgObjects1.length = 0;
gdjs.planeteCode.GDbgObjects2.length = 0;
gdjs.planeteCode.GDbgObjects3.length = 0;
gdjs.planeteCode.GDbgObjects4.length = 0;
gdjs.planeteCode.GDinput_9595reponseObjects1.length = 0;
gdjs.planeteCode.GDinput_9595reponseObjects2.length = 0;
gdjs.planeteCode.GDinput_9595reponseObjects3.length = 0;
gdjs.planeteCode.GDinput_9595reponseObjects4.length = 0;
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1.length = 0;
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects2.length = 0;
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects3.length = 0;
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects4.length = 0;
gdjs.planeteCode.GDfelicitationsObjects1.length = 0;
gdjs.planeteCode.GDfelicitationsObjects2.length = 0;
gdjs.planeteCode.GDfelicitationsObjects3.length = 0;
gdjs.planeteCode.GDfelicitationsObjects4.length = 0;
gdjs.planeteCode.GDerreurObjects1.length = 0;
gdjs.planeteCode.GDerreurObjects2.length = 0;
gdjs.planeteCode.GDerreurObjects3.length = 0;
gdjs.planeteCode.GDerreurObjects4.length = 0;
gdjs.planeteCode.GDerreur_9595bgObjects1.length = 0;
gdjs.planeteCode.GDerreur_9595bgObjects2.length = 0;
gdjs.planeteCode.GDerreur_9595bgObjects3.length = 0;
gdjs.planeteCode.GDerreur_9595bgObjects4.length = 0;
gdjs.planeteCode.GDbg_9595inputObjects1.length = 0;
gdjs.planeteCode.GDbg_9595inputObjects2.length = 0;
gdjs.planeteCode.GDbg_9595inputObjects3.length = 0;
gdjs.planeteCode.GDbg_9595inputObjects4.length = 0;
gdjs.planeteCode.GDeffet_9595felicitationsObjects1.length = 0;
gdjs.planeteCode.GDeffet_9595felicitationsObjects2.length = 0;
gdjs.planeteCode.GDeffet_9595felicitationsObjects3.length = 0;
gdjs.planeteCode.GDeffet_9595felicitationsObjects4.length = 0;
gdjs.planeteCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.planeteCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.planeteCode.GDbtn_9595commencerObjects3.length = 0;
gdjs.planeteCode.GDbtn_9595commencerObjects4.length = 0;
gdjs.planeteCode.GDlogoObjects1.length = 0;
gdjs.planeteCode.GDlogoObjects2.length = 0;
gdjs.planeteCode.GDlogoObjects3.length = 0;
gdjs.planeteCode.GDlogoObjects4.length = 0;
gdjs.planeteCode.GDbtn_9595validerObjects1.length = 0;
gdjs.planeteCode.GDbtn_9595validerObjects2.length = 0;
gdjs.planeteCode.GDbtn_9595validerObjects3.length = 0;
gdjs.planeteCode.GDbtn_9595validerObjects4.length = 0;
gdjs.planeteCode.GDbtn_9595retourObjects1.length = 0;
gdjs.planeteCode.GDbtn_9595retourObjects2.length = 0;
gdjs.planeteCode.GDbtn_9595retourObjects3.length = 0;
gdjs.planeteCode.GDbtn_9595retourObjects4.length = 0;
gdjs.planeteCode.GDfadeObjects1.length = 0;
gdjs.planeteCode.GDfadeObjects2.length = 0;
gdjs.planeteCode.GDfadeObjects3.length = 0;
gdjs.planeteCode.GDfadeObjects4.length = 0;

gdjs.planeteCode.eventsList31(runtimeScene);
gdjs.planeteCode.GDbgObjects1.length = 0;
gdjs.planeteCode.GDbgObjects2.length = 0;
gdjs.planeteCode.GDbgObjects3.length = 0;
gdjs.planeteCode.GDbgObjects4.length = 0;
gdjs.planeteCode.GDinput_9595reponseObjects1.length = 0;
gdjs.planeteCode.GDinput_9595reponseObjects2.length = 0;
gdjs.planeteCode.GDinput_9595reponseObjects3.length = 0;
gdjs.planeteCode.GDinput_9595reponseObjects4.length = 0;
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects1.length = 0;
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects2.length = 0;
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects3.length = 0;
gdjs.planeteCode.GDtxt_9595fakeplaceholderObjects4.length = 0;
gdjs.planeteCode.GDfelicitationsObjects1.length = 0;
gdjs.planeteCode.GDfelicitationsObjects2.length = 0;
gdjs.planeteCode.GDfelicitationsObjects3.length = 0;
gdjs.planeteCode.GDfelicitationsObjects4.length = 0;
gdjs.planeteCode.GDerreurObjects1.length = 0;
gdjs.planeteCode.GDerreurObjects2.length = 0;
gdjs.planeteCode.GDerreurObjects3.length = 0;
gdjs.planeteCode.GDerreurObjects4.length = 0;
gdjs.planeteCode.GDerreur_9595bgObjects1.length = 0;
gdjs.planeteCode.GDerreur_9595bgObjects2.length = 0;
gdjs.planeteCode.GDerreur_9595bgObjects3.length = 0;
gdjs.planeteCode.GDerreur_9595bgObjects4.length = 0;
gdjs.planeteCode.GDbg_9595inputObjects1.length = 0;
gdjs.planeteCode.GDbg_9595inputObjects2.length = 0;
gdjs.planeteCode.GDbg_9595inputObjects3.length = 0;
gdjs.planeteCode.GDbg_9595inputObjects4.length = 0;
gdjs.planeteCode.GDeffet_9595felicitationsObjects1.length = 0;
gdjs.planeteCode.GDeffet_9595felicitationsObjects2.length = 0;
gdjs.planeteCode.GDeffet_9595felicitationsObjects3.length = 0;
gdjs.planeteCode.GDeffet_9595felicitationsObjects4.length = 0;
gdjs.planeteCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.planeteCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.planeteCode.GDbtn_9595commencerObjects3.length = 0;
gdjs.planeteCode.GDbtn_9595commencerObjects4.length = 0;
gdjs.planeteCode.GDlogoObjects1.length = 0;
gdjs.planeteCode.GDlogoObjects2.length = 0;
gdjs.planeteCode.GDlogoObjects3.length = 0;
gdjs.planeteCode.GDlogoObjects4.length = 0;
gdjs.planeteCode.GDbtn_9595validerObjects1.length = 0;
gdjs.planeteCode.GDbtn_9595validerObjects2.length = 0;
gdjs.planeteCode.GDbtn_9595validerObjects3.length = 0;
gdjs.planeteCode.GDbtn_9595validerObjects4.length = 0;
gdjs.planeteCode.GDbtn_9595retourObjects1.length = 0;
gdjs.planeteCode.GDbtn_9595retourObjects2.length = 0;
gdjs.planeteCode.GDbtn_9595retourObjects3.length = 0;
gdjs.planeteCode.GDbtn_9595retourObjects4.length = 0;
gdjs.planeteCode.GDfadeObjects1.length = 0;
gdjs.planeteCode.GDfadeObjects2.length = 0;
gdjs.planeteCode.GDfadeObjects3.length = 0;
gdjs.planeteCode.GDfadeObjects4.length = 0;


return;

}

gdjs['planeteCode'] = gdjs.planeteCode;
