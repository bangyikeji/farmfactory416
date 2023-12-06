////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);
}

var guide = false;
var canvasContainer, mainContainer, gameContainer, resultContainer, confirmContainer;
var guideline, bg, logo, buttonOk, result, shadowResult, buttonReplay, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff;

$.factory = {};
$.count = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	titleContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	farmContainer = new createjs.Container();
	touchContainer = new createjs.Container();
	factoryContainer = new createjs.Container();
	itemsContainer = new createjs.Container();
	roadContainer = new createjs.Container();
	instructionContainer = new createjs.Container();
	truckProgressContainer = new createjs.Container();
	gameStatusContainer = new createjs.Container();
	rankStatusContainer = new createjs.Container();
	scoreStatusContainer = new createjs.Container();
	timerStatusContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	
	
	bg = new createjs.Bitmap(loader.getResult('background'));
	bgP = new createjs.Bitmap(loader.getResult('backgroundP'));

	logo = new createjs.Bitmap(loader.getResult('logo'));
	logoP = new createjs.Bitmap(loader.getResult('logoP'));
	
	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);
	
	//game
	itemTouchHand = new createjs.Bitmap(loader.getResult('itemTouchHand'));
	centerReg(itemTouchHand);

	itemTouchArrowUp = new createjs.Bitmap(loader.getResult('itemTouchArrow'));
	centerReg(itemTouchArrowUp);

	itemTouchArrowDown = new createjs.Bitmap(loader.getResult('itemTouchArrow'));
	centerReg(itemTouchArrowDown);

	itemTouchHand.x = 10;
	itemTouchArrowUp.y = -50;
	itemTouchArrowDown.y = 50;
	itemTouchArrowDown.scaleY = -1;

	touchContainer.addChild(itemTouchArrowUp, itemTouchArrowDown, itemTouchHand);

	itemRank = new createjs.Bitmap(loader.getResult('itemRank'));
	centerReg(itemRank);

	gameRankTxt = new createjs.Text();
	gameRankTxt.font = "22px the_bold_fontbold";
	gameRankTxt.lineHeight = 35;
	gameRankTxt.color = "#fff";
	gameRankTxt.textAlign = "left";
	gameRankTxt.x = -70;
	gameRankTxt.y = -10;

	rankStatusContainer.addChild(itemRank, gameRankTxt);

	itemScore = new createjs.Bitmap(loader.getResult('itemScore'));
	centerReg(itemScore);

	gameScoreTxt = new createjs.Text();
	gameScoreTxt.font = "22px the_bold_fontbold";
	gameScoreTxt.lineHeight = 35;
	gameScoreTxt.color = "#fff";
	gameScoreTxt.textAlign = "left";
	gameScoreTxt.x = -70;
	gameScoreTxt.y = -10;

	scoreStatusContainer.addChild(itemScore, gameScoreTxt);

	itemTimer = new createjs.Bitmap(loader.getResult('itemTimer'));
	centerReg(itemTimer);

	gameTimerTxt = new createjs.Text();
	gameTimerTxt.font = "22px the_bold_fontbold";
	gameTimerTxt.lineHeight = 35;
	gameTimerTxt.color = "#fff";
	gameTimerTxt.textAlign = "left";
	gameTimerTxt.x = -70;
	gameTimerTxt.y = -10;

	gameTimerRedTxt = new createjs.Text();
	gameTimerRedTxt.font = "22px the_bold_fontbold";
	gameTimerRedTxt.lineHeight = 35;
	gameTimerRedTxt.color = "#CE1111";
	gameTimerRedTxt.textAlign = "left";
	gameTimerRedTxt.x = -70;
	gameTimerRedTxt.y = -10;

	timerStatusContainer.addChild(itemTimer, gameTimerTxt, gameTimerRedTxt);

	itemCountContainer = new createjs.Container();
	bgGame = new createjs.Bitmap(loader.getResult('backgroundGame'));
	centerReg(bgGame);
	bgGame.regY = 0;
	itemHouse = new createjs.Bitmap(loader.getResult('itemHouse'));
	centerReg(itemHouse);
	itemHouse.x = -250;
	itemHouse.y = 240;

	itemCountContainer.x = itemHouse.x;
	itemCountContainer.y = itemHouse.y - 80;

	itemGate = new createjs.Bitmap(loader.getResult('itemGate'));
	centerReg(itemGate);
	itemGate.x = 260;
	itemGate.y = 240;

	itemRailBg = loader.getResult("itemRailBg");
	railBg = new createjs.Shape();

	itemRail = loader.getResult("itemRail");
	railMove = new createjs.Shape();

	itemGrass = loader.getResult("itemGrass");
	grassBg = new createjs.Shape();

	buttonHouseUpgrade = new createjs.Container();
	buttonLevelUpgrade = new createjs.Bitmap(loader.getResult('buttonPurchase'));
	centerReg(buttonLevelUpgrade);
	buttonLevelUpgradeDisabled = new createjs.Bitmap(loader.getResult('buttonPurchaseDisabled'));
	centerReg(buttonLevelUpgradeDisabled);
	itemArrow = new createjs.Bitmap(loader.getResult('itemArrow'));
	centerReg(itemArrow);

	upgradeTargetTxt = new createjs.Text();
	upgradeTargetTxt.font = "13px the_bold_fontbold";
	upgradeTargetTxt.color = '#fff';
	upgradeTargetTxt.textAlign = "center";
	upgradeTargetTxt.textBaseline='alphabetic';
	upgradeTargetTxt.text = textDisplay.share;

	upgradeLevelTxt = new createjs.Text();
	upgradeLevelTxt.font = "15px the_bold_fontbold";
	upgradeLevelTxt.color = '#fff';
	upgradeLevelTxt.textAlign = "center";
	upgradeLevelTxt.textBaseline='alphabetic';
	upgradeLevelTxt.text = textDisplay.share;

	itemArrow.x = 45;
	upgradeTargetTxt.y = 12;
	upgradeLevelTxt.y = 0;

	buttonHouseUpgrade.x = itemHouse.x;
	buttonHouseUpgrade.y = itemHouse.y - 25;
	buttonHouseUpgrade.addChild(buttonLevelUpgradeDisabled, buttonLevelUpgrade, itemArrow, upgradeTargetTxt, upgradeLevelTxt);

	truckProgressTxt = new createjs.Text();
	truckProgressTxt.font = "20px the_bold_fontbold";
	truckProgressTxt.color = '#fff';
	truckProgressTxt.textAlign = "center";
	truckProgressTxt.textBaseline='alphabetic';
	truckProgressTxt.text = "";

	truckProgressShadowTxt = new createjs.Text();
	truckProgressShadowTxt.font = "20px the_bold_fontbold";
	truckProgressShadowTxt.color = '#000';
	truckProgressShadowTxt.textAlign = "center";
	truckProgressShadowTxt.textBaseline='alphabetic';
	truckProgressShadowTxt.text = "";
	truckProgressShadowTxt.y = 3;
	
	truckProgressContainer.addChild(truckProgressShadowTxt, truckProgressTxt);

	touchScroll = new createjs.Shape();	
	farmContainer.addChild(grassBg, touchScroll, bgGame, railBg, railMove, roadContainer, truckProgressContainer, itemGate, itemsContainer, itemHouse, itemCountContainer, buttonHouseUpgrade, factoryContainer, instructionContainer, gameStatusContainer);

	itemTimesup = new createjs.Bitmap(loader.getResult('itemTimesup'));
	centerReg(itemTimesup);

	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemPop'));
	itemResultP = new createjs.Bitmap(loader.getResult('itemPopP'));
	
	buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonContinue);
	
	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "20px the_bold_fontbold";
	resultShareTxt.color = '#FADEB1';
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = textDisplay.share;
	
	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "45px the_bold_fontbold";
	resultTitleTxt.color = '#fff';
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = textDisplay.resultTitle;
	
	resultRankTxt = new createjs.Text();
	resultRankTxt.font = "30px the_bold_fontbold";
	resultRankTxt.color = '#FADEB1';
	resultRankTxt.textAlign = "center";
	resultRankTxt.textBaseline='alphabetic';
	resultRankTxt.text = '';
	
	resultDescTxt = new createjs.Text();
	resultDescTxt.font = "55px the_bold_fontbold";
	resultDescTxt.color = '#FFB600';
	resultDescTxt.textAlign = "center";
	resultDescTxt.textBaseline='alphabetic';
	resultDescTxt.text = '';
	
	
	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonWhatsapp = new createjs.Bitmap(loader.getResult('buttonWhatsapp'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonWhatsapp);
	createHitarea(buttonWhatsapp);
	
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	optionsContainer = new createjs.Container();
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit);
	optionsContainer.visible = false;
	
	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemPop'));
	itemExitP = new createjs.Bitmap(loader.getResult('itemPopP'));
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	
	popTitleTxt = new createjs.Text();
	popTitleTxt.font = "45px the_bold_fontbold";
	popTitleTxt.color = "#fff";
	popTitleTxt.textAlign = "center";
	popTitleTxt.textBaseline='alphabetic';
	popTitleTxt.text = textDisplay.exitTitle;
	
	popDescTxt = new createjs.Text();
	popDescTxt.font = "30px the_bold_fontbold";
	popDescTxt.lineHeight = 35;
	popDescTxt.color = "#FADEB1";
	popDescTxt.textAlign = "center";
	popDescTxt.textBaseline='alphabetic';
	popDescTxt.text = textDisplay.exitMessage;
	
	confirmContainer.addChild(itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel);
	confirmContainer.visible = false;
	
	if(guide){
		guideline = new createjs.Shape();	
		guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
	}
	
	mainContainer.addChild(logo, logoP, titleContainer, buttonStart);
	gameContainer.addChild(farmContainer, touchContainer, rankStatusContainer, scoreStatusContainer, timerStatusContainer, itemTimesup);
	resultContainer.addChild(itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, resultRankTxt);
	
	if(shareEnable){
		resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonWhatsapp);
	}
	
	canvasContainer.addChild(bg, bgP, mainContainer, gameContainer, resultContainer, confirmContainer, optionsContainer, buttonSettings, guideline);
	stage.addChild(canvasContainer);
	
	changeViewport(viewport.isLandscape);
	resizeGameFunc();
}

function changeViewport(isLandscape){
	if(isLandscape){
		//landscape
		stageW=landscapeSize.w;
		stageH=landscapeSize.h;
		contentW = landscapeSize.cW;
		contentH = landscapeSize.cH;
	}else{
		//portrait
		stageW=portraitSize.w;
		stageH=portraitSize.h;
		contentW = portraitSize.cW;
		contentH = portraitSize.cH;
	}
	
	gameCanvas.width = stageW;
	gameCanvas.height = stageH;
	
	canvasW=stageW;
	canvasH=stageH;
	
	changeCanvasViewport();
}

function changeCanvasViewport(){
	if(canvasContainer!=undefined){
		if(viewport.isLandscape){
			bg.visible = true;
			bgP.visible = false;

			logo.visible = true;
			logoP.visible = false;

			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 70;

			//game
			itemTimesup.x = canvasW/2;
			itemTimesup.y = canvasH/2;
			
			//result
			itemResult.visible = true;
			itemResultP.visible = false;
			
			buttonFacebook.x = canvasW/100*45;
			buttonFacebook.y = canvasH/100*61;
			buttonTwitter.x = canvasW/2;
			buttonTwitter.y = canvasH/100*61;
			buttonWhatsapp.x = canvasW/100*55;
			buttonWhatsapp.y = canvasH/100*61;

			buttonContinue.x = canvasW/2;
			buttonContinue.y = canvasH/100 * 70;
	
			resultShareTxt.x = canvasW/2;
			resultShareTxt.y = canvasH/100 * 55;
	
			resultTitleTxt.x = canvasW/2;
			resultTitleTxt.y = canvasH/100 * 37;
	
			resultDescTxt.x = canvasW/2;
			resultDescTxt.y = canvasH/100 * 50;
			
			resultRankTxt.x = canvasW/2;
			resultRankTxt.y = canvasH/100 * 43;

			//exit
			itemExit.visible = true;
			itemExitP.visible = false;

			buttonConfirm.x = (canvasW/2);
			buttonConfirm.y = (canvasH/100 * 62);
			
			buttonCancel.x = (canvasW/2);
			buttonCancel.y = (canvasH/100 * 70);

			popTitleTxt.x = canvasW/2;
			popTitleTxt.y = canvasH/100 * 37;
			
			popDescTxt.x = canvasW/2;
			popDescTxt.y = canvasH/100 * 44;

		}else{
			bg.visible = false;
			bgP.visible = true;

			logo.visible = false;
			logoP.visible = true;

			buttonStart.x = canvasW/2;
			buttonStart.y = canvasH/100 * 73;

			//game
			itemTimesup.x = canvasW/2;
			itemTimesup.y = canvasH/2;
			
			//result
			itemResult.visible = false;
			itemResultP.visible = true;
			
			buttonFacebook.x = canvasW/100*40;
			buttonFacebook.y = canvasH/100*58;
			buttonTwitter.x = canvasW/2;
			buttonTwitter.y = canvasH/100*58;
			buttonWhatsapp.x = canvasW/100*60;
			buttonWhatsapp.y = canvasH/100*58;

			buttonContinue.x = canvasW/2;
			buttonContinue.y = canvasH/100 * 65;
	
			resultShareTxt.x = canvasW/2;
			resultShareTxt.y = canvasH/100 * 54;
	
			resultTitleTxt.x = canvasW/2;
			resultTitleTxt.y = canvasH/100 * 40;
	
			resultDescTxt.x = canvasW/2;
			resultDescTxt.y = canvasH/100 * 50;
			
			resultRankTxt.x = canvasW/2;
			resultRankTxt.y = canvasH/100 * 45;
			
			//exit
			itemExit.visible = false;
			itemExitP.visible = true;

			buttonConfirm.x = (canvasW/2);
			buttonConfirm.y = (canvasH/100 * 59);
			
			buttonCancel.x = (canvasW/2);
			buttonCancel.y = (canvasH/100 * 65);

			popTitleTxt.x = canvasW/2;
			popTitleTxt.y = canvasH/100 * 40;
			
			popDescTxt.x = canvasW/2;
			popDescTxt.y = canvasH/100 * 45;
		}
	}
}



/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		
		buttonSettings.x = (canvasW - offset.x) - 50;
		buttonSettings.y = offset.y + 45;
		
		var distanceNum = 60;
		if(curPage != 'game'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
		}else{
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*3);
		}

		resizeGameUI();
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame(event);
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));	
}