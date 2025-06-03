gdjs.loadingCode = {};
gdjs.loadingCode.localVariables = [];
gdjs.loadingCode.GDbgObjects1= [];
gdjs.loadingCode.GDbgObjects2= [];
gdjs.loadingCode.GDloaderObjects1= [];
gdjs.loadingCode.GDloaderObjects2= [];
gdjs.loadingCode.GDbtn_9595commencerObjects1= [];
gdjs.loadingCode.GDbtn_9595commencerObjects2= [];
gdjs.loadingCode.GDlogoObjects1= [];
gdjs.loadingCode.GDlogoObjects2= [];
gdjs.loadingCode.GDbtn_9595validerObjects1= [];
gdjs.loadingCode.GDbtn_9595validerObjects2= [];
gdjs.loadingCode.GDbtn_9595retourObjects1= [];
gdjs.loadingCode.GDbtn_9595retourObjects2= [];
gdjs.loadingCode.GDfadeObjects1= [];
gdjs.loadingCode.GDfadeObjects2= [];


gdjs.loadingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15958084);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loader"), gdjs.loadingCode.GDloaderObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loading");
}{for(var i = 0, len = gdjs.loadingCode.GDloaderObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").setWidth(0);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "loading.wav", 1, false, 25, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loader"), gdjs.loadingCode.GDloaderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDloaderObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").getWidth() < 300 ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDloaderObjects1[k] = gdjs.loadingCode.GDloaderObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDloaderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDloaderObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDloaderObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").setWidth(gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").getWidth() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loader"), gdjs.loadingCode.GDloaderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDloaderObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").getWidth() > 300 ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDloaderObjects1[k] = gdjs.loadingCode.GDloaderObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDloaderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDloaderObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").getWidth() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDloaderObjects1[k] = gdjs.loadingCode.GDloaderObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDloaderObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDloaderObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDloaderObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").setWidth(gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").getWidth() + (2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loader"), gdjs.loadingCode.GDloaderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDloaderObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").getWidth() > 500 ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDloaderObjects1[k] = gdjs.loadingCode.GDloaderObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDloaderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDloaderObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDloaderObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").setWidth(gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").getWidth() + (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("loader"), gdjs.loadingCode.GDloaderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDloaderObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDloaderObjects1[i].getBehavior("Resizable").getWidth() > 600 ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDloaderObjects1[k] = gdjs.loadingCode.GDloaderObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDloaderObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15963964);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main_galaxie", false);
}}

}


};

gdjs.loadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadingCode.GDbgObjects1.length = 0;
gdjs.loadingCode.GDbgObjects2.length = 0;
gdjs.loadingCode.GDloaderObjects1.length = 0;
gdjs.loadingCode.GDloaderObjects2.length = 0;
gdjs.loadingCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.loadingCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.loadingCode.GDlogoObjects1.length = 0;
gdjs.loadingCode.GDlogoObjects2.length = 0;
gdjs.loadingCode.GDbtn_9595validerObjects1.length = 0;
gdjs.loadingCode.GDbtn_9595validerObjects2.length = 0;
gdjs.loadingCode.GDbtn_9595retourObjects1.length = 0;
gdjs.loadingCode.GDbtn_9595retourObjects2.length = 0;
gdjs.loadingCode.GDfadeObjects1.length = 0;
gdjs.loadingCode.GDfadeObjects2.length = 0;

gdjs.loadingCode.eventsList0(runtimeScene);
gdjs.loadingCode.GDbgObjects1.length = 0;
gdjs.loadingCode.GDbgObjects2.length = 0;
gdjs.loadingCode.GDloaderObjects1.length = 0;
gdjs.loadingCode.GDloaderObjects2.length = 0;
gdjs.loadingCode.GDbtn_9595commencerObjects1.length = 0;
gdjs.loadingCode.GDbtn_9595commencerObjects2.length = 0;
gdjs.loadingCode.GDlogoObjects1.length = 0;
gdjs.loadingCode.GDlogoObjects2.length = 0;
gdjs.loadingCode.GDbtn_9595validerObjects1.length = 0;
gdjs.loadingCode.GDbtn_9595validerObjects2.length = 0;
gdjs.loadingCode.GDbtn_9595retourObjects1.length = 0;
gdjs.loadingCode.GDbtn_9595retourObjects2.length = 0;
gdjs.loadingCode.GDfadeObjects1.length = 0;
gdjs.loadingCode.GDfadeObjects2.length = 0;


return;

}

gdjs['loadingCode'] = gdjs.loadingCode;
