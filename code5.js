gdjs.transitionCode = {};
gdjs.transitionCode.localVariables = [];
gdjs.transitionCode.GDNewVideoObjects1= [];
gdjs.transitionCode.GDNewVideoObjects2= [];
gdjs.transitionCode.GDNewVideoObjects3= [];
gdjs.transitionCode.GDoverlayObjects1= [];
gdjs.transitionCode.GDoverlayObjects2= [];
gdjs.transitionCode.GDoverlayObjects3= [];
gdjs.transitionCode.GDbtn_9595commencerObjects1= [];
gdjs.transitionCode.GDbtn_9595commencerObjects2= [];
gdjs.transitionCode.GDbtn_9595commencerObjects3= [];
gdjs.transitionCode.GDlogoObjects1= [];
gdjs.transitionCode.GDlogoObjects2= [];
gdjs.transitionCode.GDlogoObjects3= [];
gdjs.transitionCode.GDbtn_9595validerObjects1= [];
gdjs.transitionCode.GDbtn_9595validerObjects2= [];
gdjs.transitionCode.GDbtn_9595validerObjects3= [];
gdjs.transitionCode.GDbtn_9595retourObjects1= [];
gdjs.transitionCode.GDbtn_9595retourObjects2= [];
gdjs.transitionCode.GDbtn_9595retourObjects3= [];
gdjs.transitionCode.GDfadeObjects1= [];
gdjs.transitionCode.GDfadeObjects2= [];
gdjs.transitionCode.GDfadeObjects3= [];


gdjs.transitionCode.mapOfGDgdjs_9546transitionCode_9546GDfadeObjects1Objects = Hashtable.newFrom({"fade": gdjs.transitionCode.GDfadeObjects1});
gdjs.transitionCode.asyncCallback16635940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.transitionCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "planete", false);
}gdjs.transitionCode.localVariables.length = 0;
}
gdjs.transitionCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.transitionCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.transitionCode.asyncCallback16635940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.transitionCode.asyncCallback16635332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.transitionCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewVideo"), gdjs.transitionCode.GDNewVideoObjects2);

{for(var i = 0, len = gdjs.transitionCode.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.transitionCode.GDNewVideoObjects2[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 1, false);
}
}
{ //Subevents
gdjs.transitionCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.transitionCode.localVariables.length = 0;
}
gdjs.transitionCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.transitionCode.localVariables);
for (const obj of gdjs.transitionCode.GDNewVideoObjects1) asyncObjectsList.addObject("NewVideo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.transitionCode.asyncCallback16635332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.transitionCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16634028);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.transitionCode.GDNewVideoObjects1);
gdjs.transitionCode.GDfadeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.transitionCode.mapOfGDgdjs_9546transitionCode_9546GDfadeObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.transitionCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.transitionCode.GDfadeObjects1[i].setZOrder(999);
}
}{for(var i = 0, len = gdjs.transitionCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.transitionCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("", 0, "linear", 1, true);
}
}{for(var i = 0, len = gdjs.transitionCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.transitionCode.GDNewVideoObjects1[i].play();
}
}
{ //Subevents
gdjs.transitionCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.transitionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.transitionCode.GDNewVideoObjects1.length = 0;
gdjs.transitionCode.GDNewVideoObjects2.length = 0;
gdjs.transitionCode.GDNewVideoObjects3.length = 0;
gdjs.transitionCode.GDoverlayObjects1.length = 0;
gdjs.transitionCode.GDoverlayObjects2.length = 0;
gdjs.transitionCode.GDoverlayObjects3.length = 0;
gdjs.transitionCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.transitionCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.transitionCode.GDbtn_9595commencerObjects3.length = 0;
gdjs.transitionCode.GDlogoObjects1.length = 0;
gdjs.transitionCode.GDlogoObjects2.length = 0;
gdjs.transitionCode.GDlogoObjects3.length = 0;
gdjs.transitionCode.GDbtn_9595validerObjects1.length = 0;
gdjs.transitionCode.GDbtn_9595validerObjects2.length = 0;
gdjs.transitionCode.GDbtn_9595validerObjects3.length = 0;
gdjs.transitionCode.GDbtn_9595retourObjects1.length = 0;
gdjs.transitionCode.GDbtn_9595retourObjects2.length = 0;
gdjs.transitionCode.GDbtn_9595retourObjects3.length = 0;
gdjs.transitionCode.GDfadeObjects1.length = 0;
gdjs.transitionCode.GDfadeObjects2.length = 0;
gdjs.transitionCode.GDfadeObjects3.length = 0;

gdjs.transitionCode.eventsList2(runtimeScene);
gdjs.transitionCode.GDNewVideoObjects1.length = 0;
gdjs.transitionCode.GDNewVideoObjects2.length = 0;
gdjs.transitionCode.GDNewVideoObjects3.length = 0;
gdjs.transitionCode.GDoverlayObjects1.length = 0;
gdjs.transitionCode.GDoverlayObjects2.length = 0;
gdjs.transitionCode.GDoverlayObjects3.length = 0;
gdjs.transitionCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.transitionCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.transitionCode.GDbtn_9595commencerObjects3.length = 0;
gdjs.transitionCode.GDlogoObjects1.length = 0;
gdjs.transitionCode.GDlogoObjects2.length = 0;
gdjs.transitionCode.GDlogoObjects3.length = 0;
gdjs.transitionCode.GDbtn_9595validerObjects1.length = 0;
gdjs.transitionCode.GDbtn_9595validerObjects2.length = 0;
gdjs.transitionCode.GDbtn_9595validerObjects3.length = 0;
gdjs.transitionCode.GDbtn_9595retourObjects1.length = 0;
gdjs.transitionCode.GDbtn_9595retourObjects2.length = 0;
gdjs.transitionCode.GDbtn_9595retourObjects3.length = 0;
gdjs.transitionCode.GDfadeObjects1.length = 0;
gdjs.transitionCode.GDfadeObjects2.length = 0;
gdjs.transitionCode.GDfadeObjects3.length = 0;


return;

}

gdjs['transitionCode'] = gdjs.transitionCode;
