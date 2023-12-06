////////////////////////////////////////////////////////////
// GAME v1.0
////////////////////////////////////////////////////////////

/*!
 *
 * GAME SETTING CUSTOMIZATION START
 *
 */

//truck assets
var trucks_arr = [
	{ src: "assets/truck_01.png" },
]

//farm settings
var factory_arr = [
	{
		top: "assets/factory_top_01.png",
		bottom: "assets/factory_bottom_01.png",
		output: "assets/factory_output_01.png",
		item: "assets/factory_item_01.png",
		lock: "assets/factory_lock_01.png",
		animal: {
			src: "assets/factory_animal_01.png",
			width: 50,
			height: 50,
			regX: 25,
			regY: 45,
			audio: [
				"assets/sounds/sound_animal_01_a.ogg",
				"assets/sounds/sound_animal_01_b.ogg",
				"assets/sounds/sound_animal_01_c.ogg",
			]
		},
		height: 300,
		animalSettings: {
			cost: 500,
			animalStart: 2,
			animalMax: 15,
			speed: 1,
			idle: [2, 8],
			life: [100, 150],
			boostTime: 30,
			moveArea: {
				x: 113,
				y: 50,
				w: 350,
				h: 170
			},
			productTime: .5,
			productBoostTime: .2,
			productIncreaseLevel: 3,
			productIncreaseTime: .5,
			productProfit: 2000,
		}
	},
	{
		top: "assets/factory_top_02.png",
		bottom: "assets/factory_bottom_01.png",
		output: "assets/factory_output_01.png",
		item: "assets/factory_item_02.png",
		lock: "assets/factory_lock_02.png",
		animal: {
			src: "assets/factory_animal_02.png",
			width: 95,
			height: 70,
			regX: 47,
			regY: 60,
			audio: [
				"assets/sounds/sound_animal_02_a.ogg",
				"assets/sounds/sound_animal_02_b.ogg",
				"assets/sounds/sound_animal_02_c.ogg",
			]
		},
		height: 300,
		animalSettings: {
			cost: 8000,
			animalStart: 2,
			animalMax: 5,
			speed: 2,
			idle: [2, 8],
			life: [200, 250],
			boostTime: 30,
			moveArea: {
				x: 130,
				y: 50,
				w: 300,
				h: 170
			},
			productTime: 2,
			productBoostTime: .5,
			productIncreaseLevel: 3,
			productIncreaseTime: .5,
			productProfit: 3000,
		}
	},
	{
		top: "assets/factory_top_03.png",
		bottom: "assets/factory_bottom_01.png",
		output: "assets/factory_output_01.png",
		item: "assets/factory_item_03.png",
		lock: "assets/factory_lock_03.png",
		animal: {
			src: "assets/factory_animal_03.png",
			width: 70,
			height: 65,
			regX: 35,
			regY: 55,
			audio: [
				"assets/sounds/sound_animal_03_a.ogg",
				"assets/sounds/sound_animal_03_b.ogg",
				"assets/sounds/sound_animal_03_c.ogg",
			]
		},
		height: 300,
		animalSettings: {
			cost: 5000,
			animalStart: 2,
			animalMax: 8,
			speed: 1,
			idle: [2, 8],
			life: [200, 250],
			boostTime: 30,
			moveArea: {
				x: 120,
				y: 50,
				w: 310,
				h: 170
			},
			productTime: 1,
			productBoostTime: .2,
			productIncreaseLevel: 3,
			productIncreaseTime: .5,
			productProfit: 5000,
		}
	}
];

//game settings
var gameSettings = {
	cash: 1000,
	timer: 300000,
	lockAlpha: .5, //factory lock alpha
	instructionTime: 200,
	color: {
		factoryLevel: "#FFD400",
		factoryCount: "#fff",
		progressBorder: "#3A3A3A",
		progressBg: "#fff",
		progressBar: "#33CE72",
	},
	factoryHouse: {
		railSpeed: 50,
		truckSpeed: 100,
		truckBoostSpeed: 100,
		truckCapacity: 1,
		truckCapacityMax: 6,
		truckLoadSpeed: 10,
		truckBoostLoadSpeed: 5,
		truckBoostTime: 10,
		upgrade: {
			cost: 3000, //cost to upgrade next level (2500 = level 2, 5000 = level 3, 10000 = level 4)
			railSpeedIncrease: 30, //rail speed increase each level
			truckSpeedIncrease: 30, //truck speed increase each level
			truckCapacityIncrease: 1, //truck capacity increase each level
			truckLoadSpeedIncrease: 2, //truck load speed increase each level
		}
	},
	factory: [
		{
			type: 0,
			lock: false,
			unlock: 1, //level to unlock
			unlockCost: 0,
		},
		{
			type: 1,
			lock: true,
			unlock: 3,
			unlockCost: 10000
		},
		{
			type: 2,
			lock: true,
			unlock: 5,
			unlockCost: 10000
		}
	],

}

//game text display
var textDisplay = {
	level: "LEVEL [NUMBER]",
	itemCount: "x[NUMBER]",
	animalCount: "[NUMBER] / [MAX]",
	reachedMax: "MAX",
	percent: "[NUMBER]%",
	levelUnlock: "LEVEL[NUMBER] TO UNLOCK",
	purchaseUnlock: "PURCHASE TO UNLOCK",
	increaseLevel: "LEVEL[NUMBER]\n+PRODUCE SPEED",
	tapTruckBoost: "TAP TRUCK TO BOOST",
	tapAnimalBoost: "TAP ANIMAL TO BOOST",
	increaseRailSpeed: "+RAIL SPEED",
	increaseTruckSpeedCapacity: "+TRUCK SPEED\n+TRUCK CAPACITY",
	timesup: "TIME\'S UP!",
	exitTitle: 'EXIT GAME',
	exitMessage: 'ARE YOU SURE\nYOU WANT TO\nQUIT THE GAME?',
	share: 'SHARE YOUR SCORE',
	resultTitle: 'GAME OVER',
	resultRank: 'LEVEL[NUMBER]',
	resultDesc: '[NUMBER]'
}

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareTitle = 'Highscore on Farm Factory is [SCORE]PTS';//social share score title
var shareMessage = '[SCORE]PTS is mine new highscore on Farm Factory Game game! Try it now!'; //social share score message

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
$.editor = { enable: false };
var playerData = { score: 0, level: 0 };
var gameData = { paused: true, items: [], trucks: [], instruction: [], firstTruck: false, targetTruck: null, house: { level: 0, railSpeed: 0, truckSpeed: 0, truckCapacity: 0, truckLoadSpeed: 0, truckBoostTime: 0 }, bar: { w: 100, h: 15, radius: 8 }, complete: false };
var tweenData = { score: 0, tweenScore: 0 };
var timeData = { enable: false, startDate: null, sessionDate: null, nowDate: null, sessionTimer: 0, timer: 0, oldTimer: 0, accumulate: 0 };

/*!
 *
 * GAME BUTTONS - This is the function that runs to setup button event
 *
 */
function buildGameButton() {
	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function (evt) {
		playSound('soundButton');
		goPage('game');
	});

	itemExit.addEventListener("click", function (evt) {
	});

	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function (evt) {
		playSound('soundButton');
		goPage('main');

		LaggedAPI.APIAds.show(function () { });
	});

	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function (evt) {
		share('facebook');
	});

	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function (evt) {
		share('twitter');
	});
	buttonWhatsapp.cursor = "pointer";
	buttonWhatsapp.addEventListener("click", function (evt) {
		share('whatsapp');
	});

	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function (evt) {
		toggleGameMute(true);
	});

	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function (evt) {
		toggleGameMute(false);
	});

	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function (evt) {
		toggleFullScreen();
	});

	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function (evt) {
		togglePop(true);
		toggleOption();
	});

	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function (evt) {
		toggleOption();
	});

	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function (evt) {
		playSound('soundButton');
		togglePop(false);

		stopAudio();
		stopGame();
		goPage('main');
		LaggedAPI.APIAds.show(function () { });
	});

	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function (evt) {
		playSound('soundButton');
		togglePop(false);
	});

	buttonHouseUpgrade.cursor = "pointer";
	buttonHouseUpgrade.addEventListener("click", function (evt) {
		animateBounce(buttonHouseUpgrade, false);
		upgradeHouse();
	});

	window.addEventListener('blur', function () {
		TweenMax.ticker.useRAF(false);
	}, false);


	window.addEventListener('focus', function () {
		TweenMax.ticker.useRAF(true);
	}, false);
}

/*!
 *
 * TOGGLE POP - This is the function that runs to toggle popup overlay
 *
 */
function togglePop(con) {
	confirmContainer.visible = con;
}


/*!
 *
 * DISPLAY PAGES - This is the function that runs to display pages
 *
 */
var curPage = ''
function goPage(page) {
	curPage = page;

	mainContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	removeMoveEvents();

	var targetContainer = null;
	switch (page) {
		case 'main':
			targetContainer = mainContainer;
			playSoundLoop("musicMain");
			stopSoundLoop("musicGame");
			break;

		case 'game':
			targetContainer = gameContainer;
			startGame();
			stopSoundLoop("musicMain");
			playSoundLoop("musicGame");
			break;

		case 'result':
			targetContainer = resultContainer;
			stopGame();
			togglePop(false);
			playSound('soundResult');
			stopSoundLoop("musicGame");

			resultRankTxt.text = textDisplay.resultRank.replace("[NUMBER]", playerData.level);
			tweenData.tweenScore = 0;
			TweenMax.to(tweenData, .5, {
				tweenScore: playerData.score, overwrite: true, onUpdate: function () {
					resultDescTxt.text = textDisplay.resultDesc.replace('[NUMBER]', addCommas(Math.floor(tweenData.tweenScore)));
				}
			});
			saveGame(playerData.score);

			var boardinfo = {};
			boardinfo.score = playerData.score;
			boardinfo.board = 'farm_factory_hsbdsbc';
			LaggedAPI.Scores.save(boardinfo, function (response) {
				if (response.success) {
					console.log('high score saved')
				} else {
					console.log(response.errormsg);
				}
			});


			var api_awards = [];

			if (playerData.level > 3) {
				api_awards.push("farm_factory_oqkhe001");
			}
			if (playerData.level > 4) {
				api_awards.push("farm_factory_oqkhe002");
			}

			if (api_awards.length > 0) {
				LaggedAPI.Achievements.save(api_awards, function (response) {
					if (response.success) {
						console.log('achievement saved')
					} else {
						console.log(response.errormsg);
					}
				});
			}

			LaggedAPI.APIAds.show(function () { });


			break;
	}

	if (targetContainer != null) {
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, { alpha: 1, overwrite: true });
	}

	resizeCanvas();
}

/*!
 *
 * START GAME - This is the function that runs to start game
 *
 */
function startGame() {
	gameData.paused = false;

	playerData.score = gameSettings.cash;
	playerData.level = 1;
	timeData.countdown = timeData.timer = gameSettings.timer;
	itemTimesup.visible = false;

	farmContainer.y = 0;
	buildFactory();
	setupMoveEvents();
	toggleGameTimer(true);
	autoScroll();

	playSoundLoop("soundFarm");
	playSound("soundStart");
	animateTouch();
}

function toggleAnimateTouch(con) {
	touchContainer.visible = con;

	if (con) {
		animateTouch();
	} else {
		TweenMax.killTweensOf(itemTouchHand);
	}
}

function animateTouch() {
	itemTouchHand.y = -10;
	TweenMax.to(itemTouchHand, .5, {
		y: 40, overwrite: true, onComplete: function () {
			TweenMax.to(itemTouchHand, .5, { y: -10, overwrite: true, onComplete: animateTouch, onCompleteParams: [itemTouchHand] });
		}
	});
}

/*!
*
* STOP GAME - This is the function that runs to stop play game
*
*/
function stopGame() {
	stopSoundLoop("soundFarm");
	toggleGameTimer(false);
	gameData.paused = true;
	TweenMax.killAll(false, true, false);
}

function saveGame(score) {
	if (typeof toggleScoreboardSave == 'function') {
		$.scoreData.score = score;
		if (typeof type != 'undefined') {
			$.scoreData.type = type;
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
			type: "POST",
			url: 'saveResults.php',
			data: {score:score},
			success: function (result) {
					console.log(result);
			}
		});*/
}

function resizeGameUI() {
	scoreStatusContainer.y = rankStatusContainer.y = timerStatusContainer.y = offset.y + 45;

	scoreStatusContainer.x = canvasW / 2;
	rankStatusContainer.x = scoreStatusContainer.x - 175;
	timerStatusContainer.x = scoreStatusContainer.x + 175;

	farmContainer.x = canvasW / 2;

	touchContainer.x = canvasW / 2;
	touchContainer.y = canvasH / 2;

	if (viewport.isLandscape) {
		farmContainer.scaleX = farmContainer.scaleY = 1;
	} else {
		farmContainer.scaleX = farmContainer.scaleY = .95;
	}

	scrollPosition(0);
}

/*!
 *
 * BUILD FACTORY - This is the function that runs to build factory
 *
 */

function buildFactory() {
	instructionContainer.removeAllChildren();
	gameStatusContainer.removeAllChildren();
	roadContainer.removeAllChildren();
	itemsContainer.removeAllChildren();
	factoryContainer.removeAllChildren();
	itemCountContainer.removeAllChildren();

	gameData.instruction = [];
	gameData.warehouse = [];
	gameData.items = [];
	gameData.trucks = [];
	gameData.targetTruck = null;
	gameData.firstTruck = true;
	toggleTruckProgress(false);

	gameData.house.level = 1;
	gameData.house.upgradeCode = gameSettings.factoryHouse.upgrade.cost;
	gameData.house.railSpeed = gameSettings.factoryHouse.railSpeed;
	gameData.house.truckSpeed = gameSettings.factoryHouse.truckSpeed;
	gameData.house.truckCapacity = gameSettings.factoryHouse.truckCapacity;
	gameData.house.truckCapacityMax = gameSettings.factoryHouse.truckCapacityMax;
	gameData.house.truckLoadSpeed = gameSettings.factoryHouse.truckLoadSpeed;
	gameData.house.truckBoostTime = gameSettings.factoryHouse.truckBoostTime;

	gameData.house.truckBoostSpeed = gameSettings.factoryHouse.truckBoostSpeed;
	gameData.house.truckBoostLoadSpeed = gameSettings.factoryHouse.truckBoostLoadSpeed;

	addInstruction(95, 290, textDisplay.tapTruckBoost);

	var pos = { x: itemHouse.x + 53, y: itemHouse.y + 120 };
	for (var n = 0; n < gameSettings.factory.length; n++) {
		var factoryIndex = gameSettings.factory[n].type;
		$.factory[n] = new createjs.Container();
		$.factory[n].data = {
			lock: gameSettings.factory[n].lock,
			unlock: gameSettings.factory[n].unlock,
			unlockCost: gameSettings.factory[n].unlockCost,
			level: 1,
			animal: [],
			animalMax: factory_arr[factoryIndex].animalSettings.animalMax,
			animalCost: factory_arr[factoryIndex].animalSettings.cost,
			progress: 0,
			produce: 0,
			boostTime: 0,
			produceTarget: factory_arr[factoryIndex].animalSettings.productIncreaseLevel,
			productIncreaseLevel: factory_arr[factoryIndex].animalSettings.productIncreaseLevel,
			productTime: factory_arr[factoryIndex].animalSettings.productTime,
			productIncreaseTime: factory_arr[factoryIndex].animalSettings.productIncreaseTime,
			productBoostTime: factory_arr[factoryIndex].animalSettings.productBoostTime,
		};

		$.factory["animal" + n] = new createjs.Container();
		$.factory["top" + n] = new createjs.Bitmap(loader.getResult('factoryTop' + factoryIndex));
		$.factory["bottom" + n] = new createjs.Bitmap(loader.getResult('factoryBottom' + factoryIndex));
		$.factory["lock" + n] = new createjs.Bitmap(loader.getResult('factoryLock' + factoryIndex));
		$.factory["output" + n] = new createjs.Bitmap(loader.getResult('factoryOutput' + factoryIndex));
		centerReg($.factory["output" + n]);

		$.factory["stats" + n] = new createjs.Container();
		var factoryStatShape = new createjs.Shape();
		factoryStatShape.graphics.beginFill("#000").drawRoundRectComplex(0, 0, 375, 30, 10, 10, 10, 10);
		factoryStatShape.alpha = .2;

		$.factory["levelTxt" + n] = new createjs.Text();
		$.factory["levelTxt" + n].font = "20px the_bold_fontbold";
		$.factory["levelTxt" + n].color = gameSettings.color.factoryLevel;
		$.factory["levelTxt" + n].textAlign = "left";
		$.factory["levelTxt" + n].textBaseline = 'alphabetic';
		$.factory["levelTxt" + n].text = "LEVEL";

		$.factory["levelShadowTxt" + n] = new createjs.Text();
		$.factory["levelShadowTxt" + n].font = "20px the_bold_fontbold";
		$.factory["levelShadowTxt" + n].color = '#000';
		$.factory["levelShadowTxt" + n].textAlign = "left";
		$.factory["levelShadowTxt" + n].textBaseline = 'alphabetic';
		$.factory["levelShadowTxt" + n].text = "LEVEL";

		$.factory["levelTxt" + n].x = 15;
		$.factory["levelTxt" + n].y = 22;
		$.factory["levelShadowTxt" + n].x = $.factory["levelTxt" + n].x;
		$.factory["levelShadowTxt" + n].y = $.factory["levelTxt" + n].y + 3;

		$.factory["countTxt" + n] = new createjs.Text();
		$.factory["countTxt" + n].font = "20px the_bold_fontbold";
		$.factory["countTxt" + n].color = gameSettings.color.factoryCount;
		$.factory["countTxt" + n].textAlign = "right";
		$.factory["countTxt" + n].textBaseline = 'alphabetic';
		$.factory["countTxt" + n].text = "1/10";

		$.factory["countShadowTxt" + n] = new createjs.Text();
		$.factory["countShadowTxt" + n].font = "20px the_bold_fontbold";
		$.factory["countShadowTxt" + n].color = '#000';
		$.factory["countShadowTxt" + n].textAlign = "right";
		$.factory["countShadowTxt" + n].textBaseline = 'alphabetic';
		$.factory["countShadowTxt" + n].text = "1/10";

		$.factory["countTxt" + n].x = 260;
		$.factory["countTxt" + n].y = 22;
		$.factory["countShadowTxt" + n].x = $.factory["countTxt" + n].x;
		$.factory["countShadowTxt" + n].y = $.factory["countTxt" + n].y + 3;

		$.factory["button" + n] = new createjs.Container();
		$.factory["button" + n].index = factoryIndex;
		$.factory["button" + n].target = n;
		$.factory["upgrade" + n] = new createjs.Bitmap(loader.getResult('buttonPurchase'));
		centerReg($.factory["upgrade" + n]);

		$.factory["button" + n].cursor = "pointer";
		$.factory["button" + n].addEventListener("click", function (evt) {
			animateBounce($.factory["button" + evt.currentTarget.target], false);
			purchaseAnimal(evt.currentTarget.index, evt.currentTarget.target);
		});

		$.factory["upgradeDisabled" + n] = new createjs.Bitmap(loader.getResult('buttonPurchaseDisabled'));
		centerReg($.factory["upgradeDisabled" + n]);
		$.factory["plus" + n] = new createjs.Bitmap(loader.getResult('itemPlus'));
		centerReg($.factory["plus" + n]);

		$.factory["cost" + n] = new createjs.Text();
		$.factory["cost" + n].font = "22px the_bold_fontbold";
		$.factory["cost" + n].color = '#fff';
		$.factory["cost" + n].textAlign = "center";
		$.factory["cost" + n].textBaseline = 'alphabetic';
		$.factory["cost" + n].text = addCommas(factory_arr[factoryIndex].animalSettings.cost);

		$.factory["cost" + n].y = 8;
		$.factory["plus" + n].x = 47;

		$.factory["button" + n].x = 325;
		$.factory["button" + n].y = 14;
		$.factory["button" + n].addChild($.factory["upgradeDisabled" + n], $.factory["upgrade" + n], $.factory["cost" + n], $.factory["plus" + n]);
		$.factory["stats" + n].addChild(factoryStatShape, $.factory["levelShadowTxt" + n], $.factory["levelTxt" + n], $.factory["countShadowTxt" + n], $.factory["countTxt" + n], $.factory["button" + n]);

		$.factory["progress" + n] = new createjs.Container();

		$.factory["progressTxt" + n] = new createjs.Text();
		$.factory["progressTxt" + n].font = "20px the_bold_fontbold";
		$.factory["progressTxt" + n].color = '#fff';
		$.factory["progressTxt" + n].textAlign = "center";
		$.factory["progressTxt" + n].textBaseline = 'alphabetic';
		$.factory["progressTxt" + n].text = "";

		$.factory["progressShadowTxt" + n] = new createjs.Text();
		$.factory["progressShadowTxt" + n].font = "20px the_bold_fontbold";
		$.factory["progressShadowTxt" + n].color = '#000';
		$.factory["progressShadowTxt" + n].textAlign = "center";
		$.factory["progressShadowTxt" + n].textBaseline = 'alphabetic';
		$.factory["progressShadowTxt" + n].text = "";

		$.factory["progressTxt" + n].y = 3;
		$.factory["progressShadowTxt" + n].x = $.factory["progressTxt" + n].x;
		$.factory["progressShadowTxt" + n].y = $.factory["progressTxt" + n].y + 3;

		var progressW = gameData.bar.w;
		var progressH = gameData.bar.h;
		var progressRadius = gameData.bar.radius;
		var factoryProgressStroke = new createjs.Shape();
		factoryProgressStroke.graphics.setStrokeStyle(3).beginStroke(gameSettings.color.progressBorder).drawRoundRectComplex(0, 0, progressW, progressH, progressRadius, progressRadius, progressRadius, progressRadius);
		factoryProgressStroke.x = -(progressW / 2);

		var factoryProgressBg = new createjs.Shape();
		factoryProgressBg.graphics.beginFill(gameSettings.color.progressBg).drawRoundRectComplex(0, 0, progressW, progressH, progressRadius, progressRadius, progressRadius, progressRadius);
		factoryProgressBg.x = -(progressW / 2);

		var factoryProgressMask = new createjs.Shape();
		factoryProgressMask.graphics.beginFill(gameSettings.color.progressBg).drawRoundRectComplex(0, 0, progressW, progressH, progressRadius, progressRadius, progressRadius, progressRadius);
		factoryProgressMask.x = -(progressW / 2);

		$.factory["progressBar" + n] = new createjs.Shape();
		$.factory["progressBar" + n].graphics.beginFill(gameSettings.color.progressBar).drawRect(0, 0, 0, progressH);
		$.factory["progressBar" + n].x = -(progressW / 2);
		$.factory["progressBar" + n].mask = factoryProgressMask;

		var factoryProgressShine = new createjs.Shape();
		factoryProgressShine.graphics.beginFill("#000").drawRect(0, 0, progressW, progressH);
		factoryProgressShine.x = -(progressW / 2);
		factoryProgressShine.y = (progressH / 2);
		factoryProgressShine.alpha = .2;
		factoryProgressShine.mask = factoryProgressMask;

		$.factory["progress" + n].addChild(factoryProgressBg, $.factory["progressBar" + n], factoryProgressShine, factoryProgressStroke, $.factory["progressShadowTxt" + n], $.factory["progressTxt" + n]);

		$.factory["buttonUnlock" + n] = new createjs.Container();
		$.factory["intruct" + n] = new createjs.Container();
		$.factory["buttonUnlock" + n].index = factoryIndex;
		$.factory["buttonUnlock" + n].target = n;
		$.factory["unlock" + n] = new createjs.Bitmap(loader.getResult('buttonPurchase'));
		centerReg($.factory["unlock" + n]);

		$.factory["buttonUnlock" + n].cursor = "pointer";
		$.factory["buttonUnlock" + n].addEventListener("click", function (evt) {
			resetInstruction(evt.currentTarget.target + 1);
			purchaseFactory(evt.currentTarget.target);
		});

		$.factory["unlockDisabled" + n] = new createjs.Bitmap(loader.getResult('buttonPurchaseDisabled'));
		centerReg($.factory["unlockDisabled" + n]);

		$.factory["unlockLevel" + n] = new createjs.Text();
		$.factory["unlockLevel" + n].font = "25px the_bold_fontbold";
		$.factory["unlockLevel" + n].color = '#fff';
		$.factory["unlockLevel" + n].textAlign = "center";
		$.factory["unlockLevel" + n].textBaseline = 'alphabetic';
		$.factory["unlockLevel" + n].text = textDisplay.levelUnlock.replace("[NUMBER]", gameSettings.factory[n].unlock)

		$.factory["unlockShadowLevel" + n] = new createjs.Text();
		$.factory["unlockShadowLevel" + n].font = "25px the_bold_fontbold";
		$.factory["unlockShadowLevel" + n].color = '#000';
		$.factory["unlockShadowLevel" + n].textAlign = "center";
		$.factory["unlockShadowLevel" + n].textBaseline = 'alphabetic';
		$.factory["unlockShadowLevel" + n].text = textDisplay.levelUnlock.replace("[NUMBER]", gameSettings.factory[n].unlock);
		$.factory["unlockShadowLevel" + n].y = 3;

		$.factory["intruct" + n].addChild($.factory["unlockShadowLevel" + n], $.factory["unlockLevel" + n]);

		$.factory["unlockCost" + n] = new createjs.Text();
		$.factory["unlockCost" + n].font = "22px the_bold_fontbold";
		$.factory["unlockCost" + n].color = '#fff';
		$.factory["unlockCost" + n].textAlign = "center";
		$.factory["unlockCost" + n].textBaseline = 'alphabetic';
		$.factory["unlockCost" + n].text = addCommas(gameSettings.factory[n].unlockCost);
		$.factory["unlockCost" + n].y = 7;

		$.factory["buttonUnlock" + n].addChild($.factory["unlockDisabled" + n], $.factory["unlock" + n], $.factory["unlockCost" + n]);

		$.factory[n].x = pos.x;
		$.factory[n].y = pos.y;
		$.factory["output" + n].x = -30;
		$.factory["output" + n].y = $.factory["output" + n].oriY = 100;
		$.factory["stats" + n].x = 100;
		$.factory["stats" + n].y = -20;
		$.factory["progress" + n].x = 70;
		$.factory["progress" + n].y = 110;

		$.factory["intruct" + n].x = 290;
		$.factory["intruct" + n].y = 120;
		$.factory["buttonUnlock" + n].x = $.factory["intruct" + n].x;
		$.factory["buttonUnlock" + n].y = $.factory["intruct" + n].y + 30;

		$.factory[n].addChild($.factory["lock" + n], $.factory["bottom" + n], $.factory["animal" + n], $.factory["top" + n], $.factory["output" + n], $.factory["stats" + n], $.factory["progress" + n], $.factory["intruct" + n], $.factory["buttonUnlock" + n]);
		factoryContainer.addChild($.factory[n]);

		if (gameSettings.factory[n].lock) {
			$.factory["top" + n].visible = false;
			$.factory["bottom" + n].visible = false;
			$.factory["stats" + n].visible = false;
			$.factory["progress" + n].visible = false;

			$.factory["lock" + n].alpha = gameSettings.lockAlpha;
			$.factory["output" + n].alpha = gameSettings.lockAlpha;
		} else {
			unlockFactory(n);
		}

		addInstruction(pos.x + 290, pos.y + 210, textDisplay.tapAnimalBoost);
		pos.y += factory_arr[factoryIndex].height;
	}

	gameData.scrollMax = pos.y + 100;

	updateGameScore();
	updateGameStats();
	updateGameLoop();
	createCountItem();
}

function updateGameLoop() {
	totalH = gameData.scrollMax;

	grassBg.uncache();
	railBg.uncache();
	railMove.uncache();
	grassBg.x = 0;

	grassBg.graphics.clear().beginBitmapFill(itemGrass).drawRect(0, 0, itemGrass.width, totalH + itemGrass.height);
	grassBg.tileH = itemGrass.height;
	grassBg.cache(0, 0, itemGrass.width, totalH + itemGrass.height);
	grassBg.x -= (itemGrass.width / 2);

	railBg.graphics.clear().beginBitmapFill(itemRailBg).drawRect(0, 0, itemRailBg.width, totalH + itemRailBg.height);
	railBg.tileH = itemRailBg.height;
	railBg.cache(0, 0, itemRailBg.width, totalH + itemRailBg.height);

	railMove.graphics.clear().beginBitmapFill(itemRail).drawRect(0, 0, itemRail.width, totalH + itemRail.height);
	railMove.tileH = itemRail.height;
	railMove.cache(0, 0, itemRail.width, totalH + itemRail.height);

	railBg.x = itemHouse.x - (itemRailBg.width / 2);
	railBg.y = itemHouse.y;

	railMove.x = itemHouse.x - (itemRail.width / 2);
	railMove.y = itemHouse.y;
	railMove.endY = itemHouse.y - 50;

	touchScroll.hitArea = new createjs.Shape(new createjs.Graphics().beginFill('#fff').drawRect(-(landscapeSize.w / 2), 0, landscapeSize.w, totalH));
}

/*!
 *
 * GAME EVENTS - This is the function that runs for game events
 *
 */
function purchaseAnimal(index, factory) {
	if (gameData.paused) {
		return;
	}

	if (playerData.score >= factory_arr[index].animalSettings.cost && $.factory[factory].data.animal.length < factory_arr[index].animalSettings.animalMax) {
		playerData.score -= factory_arr[index].animalSettings.cost;
		createAnimal(index, factory);

		updateGameScore();
		playAnimalSound(index);
		playSound("soundPurchase");
	}
}

function purchaseFactory(factory) {
	if (gameData.paused) {
		return;
	}

	if (playerData.score >= $.factory[factory].data.unlockCost) {
		playerData.score -= $.factory[factory].data.unlockCost;

		unlockFactory(factory);
		updateGameScore();

		playSound("soundPurchase");
		playSound("soundUpgrade");
	}
}

function unlockFactory(factory) {
	$.factory[factory].data.lock = false;
	$.factory["lock" + factory].visible = false;
	$.factory["unlockLevel" + factory].visible = false;
	$.factory["unlockShadowLevel" + factory].visible = false;
	$.factory["buttonUnlock" + factory].visible = false;

	$.factory["top" + factory].visible = true;
	$.factory["bottom" + factory].visible = true;
	$.factory["stats" + factory].visible = true;
	$.factory["progress" + factory].visible = true;
	$.factory["output" + factory].alpha = 1;

	var factoryIndex = gameSettings.factory[factory].type;
	for (var a = 0; a < factory_arr[factoryIndex].animalSettings.animalStart; a++) {
		createAnimal(factoryIndex, factory);
	}
}

function upgradeHouse() {
	if (playerData.score >= gameData.house.upgradeCode) {
		playerData.score -= gameData.house.upgradeCode;

		gameData.house.level++;
		gameData.house.upgradeCode += gameSettings.factoryHouse.upgrade.cost;

		gameData.house.railSpeed += gameSettings.factoryHouse.upgrade.railSpeedIncrease;
		gameData.house.truckSpeed += gameSettings.factoryHouse.upgrade.truckSpeedIncrease;
		gameData.house.truckCapacity += gameSettings.factoryHouse.upgrade.truckCapacityIncrease;
		gameData.house.truckCapacity = gameData.house.truckCapacity >= gameData.house.truckCapacityMax ? gameData.house.truckCapacityMax : gameData.house.truckCapacity;
		gameData.house.truckLoadSpeed += gameSettings.factoryHouse.upgrade.truckLoadSpeedIncrease;

		showGameStatus(itemHouse.x, itemHouse.y + 150, textDisplay.increaseRailSpeed);
		showGameStatus(itemHouse.x + 200, itemHouse.y - 50, textDisplay.increaseTruckSpeedCapacity);
		updateGameScore();
		playSound("soundPurchase");
		playSound("soundUpgrade");
	}
}

function playAnimalSound(index) {
	var randomAudio = Math.floor(Math.random() * factory_arr[index].animal.audio.length);
	playSound('soundAnimal' + index + '_' + randomAudio)
}

/*!
 *
 * SETUP MOVE DIRECTION - This is the function that runs to setup move direction
 *
 */
function setupMoveEvents() {
	touchScroll.addEventListener("mousedown", handlerMoveMethod);
	touchScroll.addEventListener("pressmove", handlerMoveMethod);
	touchScroll.addEventListener("pressup", handlerMoveMethod);
}

function removeMoveEvents() {
	touchScroll.removeEventListener("mousedown", handlerMoveMethod);
	touchScroll.removeEventListener("pressmove", handlerMoveMethod);
	touchScroll.removeEventListener("pressup", handlerMoveMethod);
}

function handlerMoveMethod(evt) {
	if (gameData.paused) {
		return;
	}

	switch (evt.type) {
		case 'mousedown':
			var global = farmContainer.localToGlobal(evt.target.x, evt.target.y);
			evt.target.offset = { x: global.x - (evt.stageX), y: global.y - (evt.stageY) };
			TweenMax.killTweensOf(farmContainer);

			if (touchContainer.visible) {
				toggleAnimateTouch(false);
			}
			break;

		case 'pressmove':
			var local = farmContainer.globalToLocal(evt.stageX, evt.stageY);
			var moveY = ((local.y) + evt.target.offset.y);
			scrollPosition(moveY);
			break;

		case 'pressup':
			break;
	}
}

function scrollPosition(moveY) {
	var startY = 0;
	var newY = 0;

	if (gameData.scrollMax > canvasH) {
		var endY = -(gameData.scrollMax - canvasH);
		var newY = farmContainer.y + moveY;
		newY = newY > startY ? startY : newY;
		newY = newY < endY ? endY : newY;
	} else {
		farmContainer.y = 0;
	}

	TweenMax.to(farmContainer, .2, { y: newY, overwrite: true });
}

function autoScroll() {
	TweenMax.to(timeData, 1, {
		overwrite: true, onComplete: function () {
			var endY = 0;
			if (gameData.scrollMax > canvasH) {
				endY = -(gameData.scrollMax - canvasH);
			}

			TweenMax.to(farmContainer, .6, {
				y: endY, overwrite: true, onComplete: function () {
					TweenMax.to(farmContainer, .6, { delay: .3, y: 0, overwrite: true });
				}
			});
		}
	});
}

/*!
 *
 * CREATE ANIMAL - This is the function that runs to create animal
 *
 */
function createAnimal(index, factory) {
	var newAnimal = getSpriteSheet(index, factory);
	var pos = getAnimalPos(index);

	newAnimal.data = { x: 0, y: 0, boost: 0, boostTime: factory_arr[index].animalSettings.boostTime, factory: factory };
	newAnimal.x = pos.x;
	newAnimal.y = pos.y;
	newAnimal.data.x = pos.x;
	newAnimal.data.y = pos.y;
	newAnimal.life = randomIntFromInterval(factory_arr[index].animalSettings.life[0], factory_arr[index].animalSettings.life[1]);
	newAnimal.index = index;
	newAnimal.direction = randomBoolean() == true ? "left" : "right";

	loopAnimalIdle(newAnimal);
	$.factory[factory].data.animal.push(newAnimal);
	$.factory["animal" + factory].addChild(newAnimal);

	newAnimal.cursor = "pointer";
	newAnimal.addEventListener("click", function (evt) {
		if (gameData.paused) {
			return;
		}

		if (evt.target.data.boost == 0 && evt.target.life > 0) {
			resetInstruction(evt.target.data.factory + 1);
			animateBounce(evt.target, true);
			playAnimalSound(evt.target.index);
			playSound("soundBoost");
			evt.target.data.boost = evt.target.data.boostTime;
		}
	});
}

/*!
 *
 * ANIMAL ANIMATION - This is the function that runs for animal animation
 *
 */
function getAnimalPos(index) {
	var pos = { x: 0, y: 0 };
	pos.x = randomIntFromInterval(factory_arr[index].animalSettings.moveArea.x, factory_arr[index].animalSettings.moveArea.x + factory_arr[index].animalSettings.moveArea.w);
	pos.y = randomIntFromInterval(factory_arr[index].animalSettings.moveArea.y, factory_arr[index].animalSettings.moveArea.y + factory_arr[index].animalSettings.moveArea.h);
	return pos;
}

function loopAnimalIdle(animal, delay) {
	var randomIdle = randomIntFromInterval(factory_arr[animal.index].animalSettings.idle[0], factory_arr[animal.index].animalSettings.idle[1]) * 0.3;
	randomIdle = !isNaN(delay) == true ? delay : randomIdle;
	TweenMax.to(animal, randomIdle, { onComplete: moveAnimal, onCompleteParams: [animal] });
}

function moveAnimal(animal) {
	var newPos = getAnimalPos(animal.index);
	var tweenSpeed = getDistance(animal.x, animal.y, newPos.x, newPos.y) * (factory_arr[animal.index].animalSettings.speed * 0.01);
	TweenMax.to(animal, tweenSpeed, { x: newPos.x, y: newPos.y, ease: Linear.easeNone, onComplete: loopAnimalIdle, onCompleteParams: [animal] });
}

function animalDead(animal) {
	TweenMax.killTweensOf(animal);
	TweenMax.to(animal, 1, { delay: 1, alpha: 0, y: animal.y - 100, onComplete: animalDeadComplete, onCompleteParams: [animal] });
}

function animalDeadComplete(animal) {
	$.factory["animal" + animal.index].removeChild(animal);
}

/*!
 *
 * COMING TRUCK - This is the function that runs for coming truck
 *
 */
function comingTruck() {
	var randomTruckIndex = Math.floor(Math.random() * trucks_arr.length);

	var _speed = 1;
	var _frameW = 110;
	var _frameH = 100;
	var _regX = _frameW / 2;
	var _regY = _frameH / 2;
	var _count = 8;
	var _source = "truck" + randomTruckIndex;

	var _animations = {
		stop: { frames: [0, 1], speed: _speed },
		drive: { frames: [2, 3], speed: _speed },
		stopboost: { frames: [4, 5], speed: _speed },
		driveboost: { frames: [6, 7], speed: _speed },
	};

	var _frame = { "regX": _regX, "regY": _regY, "height": _frameH, "width": _frameW, "count": _count };
	var spriteData = new createjs.SpriteSheet({
		"images": [loader.getResult(_source)],
		"frames": _frame,
		"animations": _animations
	});

	var newTruck = new createjs.Sprite(spriteData, _frame);
	newTruck.framerate = 20;
	newTruck.frame = "";
	getObjectFrame(newTruck, "drive");

	newTruck.data = {
		state: 0,
		drive: true,
		capacity: [],
		percent: 0,
		percentTarget: 0,
		percentMax: 100,
		boost: 0,
		width: _frameW
	};

	newTruck.x = -(landscapeSize.w / 2) - _frameW;
	newTruck.y = 230;

	newTruck.cursor = "pointer";
	newTruck.addEventListener("click", function (evt) {
		if (gameData.paused) {
			return;
		}

		if (evt.target.data.boost == 0) {
			resetInstruction(0);
			animateBounce(evt.target, false);
			playSound("soundTruck");
			playSound("soundBoost");
			evt.target.data.boost = gameData.house.truckBoostTime;
		}
	});

	gameData.trucks.push(newTruck);
	roadContainer.addChild(newTruck);
}

function toggleTruckProgress(con) {
	truckProgressContainer.visible = con;

	if (con) {
		truckProgressContainer.x = gameData.targetTruck.x - 15;
		truckProgressContainer.y = gameData.targetTruck.y + 12;
		truckProgressTxt.text = truckProgressShadowTxt.text = textDisplay.percent.replace("[NUMBER]", 0);
	}
}

/*!
 *
 * TRANSITION - This is the function that runs for transition
 *
 */
function animateBounce(obj, con) {
	var tweenSpeed = .2;
	TweenMax.to(obj, tweenSpeed, {
		scaleX: 1.2, scaleY: 1.2, overwrite: true, onComplete: function () {
			TweenMax.to(obj, tweenSpeed, {
				scaleX: 1, scaleY: 1, overwrite: true, onComplete: function () {
					if (con) {
						loopAnimalIdle(obj);
					}
				}
			});
		}
	});
}

function animateDrop(obj) {
	var tweenSpeed = .2;
	TweenMax.to(obj, tweenSpeed, {
		y: obj.oriY + 10, overwrite: true, onComplete: function () {
			TweenMax.to(obj, tweenSpeed, {
				y: obj.oriY, overwrite: true, onComplete: function () {

				}
			});
		}
	});
}

function animateBlink(obj) {
	var tweenSpeed = .3;
	TweenMax.to(obj, tweenSpeed, {
		alpha: .3, overwrite: true, onComplete: function () {
			TweenMax.to(obj, tweenSpeed, { alpha: 1, overwrite: true, onComplete: animateBlink, onCompleteParams: [obj] });
		}
	});
}

/*!
 *
 * SPRITE SHEET - This is the function that runs to get sprite sheet
 *
 */
function getSpriteSheet(index) {
	var _speed = 1;
	var _frameW = factory_arr[index].animal.width;
	var _frameH = factory_arr[index].animal.height;
	var _regX = factory_arr[index].animal.regX;
	var _regY = factory_arr[index].animal.regY;
	var _count = 22;
	var _source = "factoryAnimal" + index;

	var _animations = {
		standleft: { frames: [0, 0, 0, 1, 0, 0, 0, 2], speed: _speed },
		runleft: { frames: [3, 4], speed: _speed },
		standright: { frames: [5, 5, 5, 6, 5, 5, 5, 7], speed: _speed },
		runright: { frames: [8, 9], speed: _speed },
		standleftboost: { frames: [10, 10, 10, 11, 10, 10, 10, 12], speed: _speed },
		runleftboost: { frames: [13, 14], speed: _speed },
		standrightboost: { frames: [15, 15, 15, 16, 15, 15, 15, 17], speed: _speed },
		runrightboost: { frames: [18, 19], speed: _speed },
		deadleft: { frames: [20], speed: _speed },
		deadright: { frames: [21], speed: _speed },
	};

	var _frame = { "regX": _regX, "regY": _regY, "height": _frameH, "width": _frameW, "count": _count };
	var spriteData = new createjs.SpriteSheet({
		"images": [loader.getResult(_source)],
		"frames": _frame,
		"animations": _animations
	});

	var newSpriteSheet = new createjs.Sprite(spriteData, _frame);
	newSpriteSheet.framerate = 20;
	newSpriteSheet.index = index;
	return newSpriteSheet;
}

/*!
 *
 * GAME TIMER - This is the function that runs for game timer
 *
 */
function toggleGameTimer(con) {
	if (con) {
		timeData.oldTimer = -1;
		timeData.startDate = new Date();
		gameTimerRedTxt.alpha = 0;
	} else {

	}
	timeData.enable = con;
}

/*!
 *
 * UPDATE GAME - This is the function that runs to loop game update
 *
 */
function updateGame(event) {
	if (!gameData.paused) {
		if (timeData.enable) {
			timeData.nowDate = new Date();
			timeData.elapsedTime = Math.floor((timeData.nowDate.getTime() - timeData.startDate.getTime()));
			timeData.timer = Math.floor((timeData.countdown) - (timeData.elapsedTime));

			if (timeData.oldTimer == -1) {
				timeData.oldTimer = timeData.timer;
			}

			if (timeData.timer <= 0) {
				//stop
				endGame();
			} else {
				if ((timeData.oldTimer - timeData.timer) > 1000) {
					if (timeData.timer < 1000) {
						animateTimer()
						playSound('soundTimerEnd');
					} else if (timeData.timer < 5000) {
						animateTimer()
						playSound('soundTimer');
					}
					timeData.oldTimer = timeData.timer;
				}

				updateGameStats();
			}
		}

		var deltaS = event.delta / 1000;
		loopRail(deltaS);
		loopTruck(deltaS);
		loopAnimalAnimation(deltaS);
		loopFactoryProgress(deltaS);
		loopInstruction(deltaS);
		updateChildrenIndex();
	}
}

function animateTimer() {
	var tweenSpeed = .8;
	gameTimerRedTxt.alpha = 1;
	TweenMax.to(gameTimerRedTxt, tweenSpeed, { alpha: 0 });
}

/*!
 *
 * GAME LOOP - This is the function that runs for game loop
 *
 */
function loopRail(deltaS) {
	railMove.y = railMove.endY + ((railMove.y - deltaS * gameData.house.railSpeed) % railMove.tileH);

	for (var n = 0; n < gameData.items.length; n++) {
		var thisItem = gameData.items[n];
		thisItem.y = (thisItem.y - deltaS * gameData.house.railSpeed);
		if (thisItem.y < railMove.endY + 100) {
			gameData.warehouse.push(thisItem.index);
			gameData.items.splice(n, 1);
			itemsContainer.removeChild(thisItem);
			updateWarehouse();
		}
	}
}

function loopTruck(deltaS) {
	for (var n = 0; n < gameData.trucks.length; n++) {
		var thisTruck = gameData.trucks[n];
		if (thisTruck.data.drive) {
			var extraSpeed = thisTruck.data.boost > 0 ? gameData.house.truckBoostSpeed : 0;
			thisTruck.x = (thisTruck.x + deltaS * (gameData.house.truckSpeed + extraSpeed));
		}

		var frame = "drive";
		if (thisTruck.data.state == 0 && thisTruck.x > itemHouse.x + 170) {
			thisTruck.data.state = 1;
			thisTruck.data.drive = false;
			gameData.targetTruck = thisTruck;
			toggleTruckProgress(true);
		} else if (thisTruck.data.state == 1) {
			frame = "stop";
			if (gameData.warehouse.length > 0 && thisTruck.data.capacity.length < gameData.house.truckCapacity) {
				var itemIndex = gameData.warehouse[0];
				thisTruck.data.capacity.push(itemIndex);
				thisTruck.data.percentTarget = thisTruck.data.capacity.length / gameData.house.truckCapacity * thisTruck.data.percentMax;

				gameData.warehouse.splice(0, 1);
				updateWarehouse();
			}

			var extraSpeed = thisTruck.data.boost > 0 ? gameData.house.truckBoostLoadSpeed : 0;
			thisTruck.data.percent = (thisTruck.data.percent + deltaS * (gameData.house.truckLoadSpeed + extraSpeed));
			thisTruck.data.percent = thisTruck.data.percent > thisTruck.data.percentTarget ? thisTruck.data.percentTarget : thisTruck.data.percent;
			if (thisTruck.data.percent >= thisTruck.data.percentMax) {
				thisTruck.data.percent = thisTruck.data.percentMax;
				thisTruck.data.state = 2;
				thisTruck.data.drive = true;
				toggleTruckProgress(false);
				comingTruck();
			}

			truckProgressTxt.text = truckProgressShadowTxt.text = textDisplay.percent.replace("[NUMBER]", Math.floor(thisTruck.data.percent));
		} else if (thisTruck.data.state == 2 && thisTruck.x > itemGate.x) {
			thisTruck.data.state = 3;

			var scoreText = 0;
			for (var c = 0; c < thisTruck.data.capacity.length; c++) {
				scoreText += factory_arr[thisTruck.data.capacity[c]].animalSettings.productProfit;
			}
			playerData.score += scoreText;
			updateGameScore();
			showGameStatus(thisTruck.x, thisTruck.y, "+" + addCommas(scoreText));
			playSound("soundPurchase");
		} else if (thisTruck.data.state == 3 && thisTruck.x > (landscapeSize.w / 2) + thisTruck.data.width) {
			thisTruck.data.drive = false;
			gameData.trucks.slice(n, 1);
			roadContainer.removeChild(thisTruck);
		}

		var boost = "";
		if (thisTruck.data.boost > 0) {
			boost = "boost";
			thisTruck.data.boost = thisTruck.data.boost - (10) * deltaS;
		} else {
			thisTruck.data.boost = 0;
		}

		getObjectFrame(thisTruck, frame + boost);
	}
}

function loopAnimalAnimation(deltaS) {
	for (var n = 0; n < gameSettings.factory.length; n++) {
		$.factory[n].data.boost = 0;
		for (var a = 0; a < $.factory[n].data.animal.length; a++) {
			var thisAnimal = $.factory[n].data.animal[a];

			if (!gameData.complete) {
				var boost = "";
				if (thisAnimal.data.boost > 0) {
					$.factory[n].data.boost++;
					thisAnimal.data.boost = thisAnimal.data.boost - (10) * deltaS;
					boost = "boost";
				} else {
					thisAnimal.data.boost = 0;
				}

				if (thisAnimal.x == thisAnimal.data.x && thisAnimal.y == thisAnimal.data.y) {
					getObjectFrame(thisAnimal, "stand" + thisAnimal.direction + boost);
				} else {
					var direction = "right";
					if (thisAnimal.x < thisAnimal.data.x) {
						direction = "left";
					}

					thisAnimal.direction = direction;
					getObjectFrame(thisAnimal, "run" + direction + boost);
				}

				thisAnimal.data.x = thisAnimal.x;
				thisAnimal.data.y = thisAnimal.y;

				if (thisAnimal.life > 0) {
					thisAnimal.life = thisAnimal.life - (1) * deltaS;
				} else {
					thisAnimal.life = 0;
					getObjectFrame(thisAnimal, "dead" + thisAnimal.direction);
					$.factory[n].data.animal.splice(a, 1);
					animalDead(thisAnimal);
				}
			}
		}
	}
}

function loopFactoryProgress(deltaS) {
	for (var n = 0; n < gameSettings.factory.length; n++) {
		var totalAnimals = $.factory[n].data.animal.length;
		var boostTime = $.factory[n].data.boost * $.factory[n].data.productBoostTime;
		$.factory[n].data.progress = $.factory[n].data.progress + (($.factory[n].data.productTime + boostTime) * totalAnimals) * deltaS;

		if ($.factory[n].data.progress > gameData.bar.w) {
			$.factory[n].data.produce++;

			animateDrop($.factory["output" + n]);
			dropItems(gameSettings.factory[n].type, n);

			if ($.factory[n].data.produce >= $.factory[n].data.produceTarget) {
				playSound("soundUpgrade");
				$.factory[n].data.level++;
				$.factory[n].data.produce = 0;
				$.factory[n].data.produceTarget = $.factory[n].data.produceTarget + $.factory[n].data.productIncreaseLevel;
				$.factory[n].data.productTime += $.factory[n].data.productIncreaseTime;

				showGameStatus($.factory[n].x + 70, $.factory[n].y + 50, textDisplay.increaseLevel.replace("[NUMBER]", $.factory[n].data.level));
			}
			$.factory[n].data.progress = 0;
		}
	}
}

function dropItems(index, factory) {
	playSound("soundOutput");
	var newItem = new createjs.Bitmap(loader.getResult('factoryItem' + index));
	centerReg(newItem);

	newItem.x = randomIntFromInterval(itemHouse.x - 20, itemHouse.x + 20);
	newItem.y = ($.factory[factory].y + 130) + newItem.image.naturalHeight;
	newItem.index = index;

	gameData.items.push(newItem);
	itemsContainer.addChild(newItem);
	itemsContainer.sortChildren(sortFunction);

	if (gameData.firstTruck) {
		gameData.firstTruck = false;
		resetInstruction(0);
		comingTruck();
	}
}

function getObjectFrame(obj, frame) {
	if (obj.frame != frame) {
		obj.frame = frame;
		obj.gotoAndPlay(frame);
	}
}

function updateChildrenIndex() {
	for (var n = 0; n < gameSettings.factory.length; n++) {
		$.factory["animal" + n].sortChildren(sortFunction);
	}
}

var sortFunction = function (obj1, obj2, options) {
	if (obj1.y > obj2.y) { return 1; }
	if (obj1.y < obj2.y) { return -1; }
	return 0;
}

function loopInstruction(deltaS) {
	for (var n = 0; n < gameData.instruction.length; n++) {
		if (gameData.instruction[n].time >= gameSettings.instructionTime) {
			if (!gameData.instruction[n].show) {
				gameData.instruction[n].show = true;
				if (n > 0) {
					if ($.factory[n - 1].data.lock == false) {
						animateBlink(gameData.instruction[n].obj);
					}
				} else {
					if (gameData.trucks.length > 0) {
						animateBlink(gameData.instruction[n].obj);
					} else {
						gameData.instruction[n].show = false;
					}
				}
			}
		} else {
			gameData.instruction[n].time = (gameData.instruction[n].time + deltaS * 10);
		}
	}
}

function resetInstruction(index) {
	gameData.instruction[index].show = false;
	gameData.instruction[index].time = 0;

	var thisInstruct = gameData.instruction[index].obj;
	thisInstruct.alpha = 0;
	TweenMax.killTweensOf(thisInstruct);
}

/*!
 *
 * UPDATE GAME SCORE - This is the function that runs for game score
 *
 */

function updateGameScore() {
	TweenMax.to(tweenData, .5, {
		tweenScore: playerData.score, overwrite: true, onUpdate: function () {
			gameScoreTxt.text = addCommas(Math.floor(tweenData.tweenScore));
		}
	});
}

function updateGameStats() {
	var overallLevel = 0;
	var overallLevelMax = 0;
	for (var n = 0; n < gameSettings.factory.length; n++) {
		if (!$.factory[n].data.lock) {
			overallLevel += $.factory[n].data.level;
			overallLevelMax++;
		}

		$.factory["levelTxt" + n].text = textDisplay.level.replace("[NUMBER]", $.factory[n].data.level);
		$.factory["levelShadowTxt" + n].text = textDisplay.level.replace("[NUMBER]", $.factory[n].data.level);

		var total = textDisplay.animalCount.replace("[NUMBER]", $.factory[n].data.animal.length);
		total = total.replace("[MAX]", $.factory[n].data.animalMax);
		$.factory["countTxt" + n].text = total;
		$.factory["countShadowTxt" + n].text = total;

		var totalPercent = textDisplay.percent.replace("[NUMBER]", Math.round($.factory[n].data.progress));
		$.factory["progressTxt" + n].text = totalPercent;
		$.factory["progressShadowTxt" + n].text = totalPercent;

		$.factory["progressBar" + n].graphics.clear().beginFill(gameSettings.color.progressBar).drawRect(0, 0, $.factory[n].data.progress, gameData.bar.h);
	}

	overallLevel += gameData.house.level;
	overallLevelMax++;
	playerData.level = Math.round(overallLevel / overallLevelMax);

	gameRankTxt.text = textDisplay.level.replace("[NUMBER]", playerData.level);
	gameTimerTxt.text = gameTimerRedTxt.text = millisecondsToTimeGame(timeData.timer);

	updateGameCost();
}

function updateGameCost() {
	if (playerData.score >= gameData.house.upgradeCode) {
		buttonHouseUpgrade.cursor = "pointer";
		buttonLevelUpgrade.visible = true;
	} else {
		buttonHouseUpgrade.cursor = "default";
		buttonLevelUpgrade.visible = false;
	}

	upgradeTargetTxt.text = addCommas(gameData.house.upgradeCode);
	upgradeLevelTxt.text = textDisplay.level.replace("[NUMBER]", gameData.house.level + 1);

	for (var n = 0; n < gameSettings.factory.length; n++) {
		if ($.factory[n].data.lock) {
			$.factory["buttonUnlock" + n].cursor = "default";
			$.factory["unlock" + n].visible = false;

			if (playerData.level >= $.factory[n].data.unlock) {
				$.factory["unlockLevel" + n].text = textDisplay.purchaseUnlock;
				$.factory["unlockShadowLevel" + n].text = textDisplay.purchaseUnlock;

				if (playerData.score >= $.factory[n].data.unlockCost) {
					$.factory["buttonUnlock" + n].cursor = "pointer";
					$.factory["unlock" + n].visible = true;
				}
			}
		} else {
			$.factory["cost" + n].text = $.factory[n].data.animalCost;
			if ($.factory[n].data.animal.length >= $.factory[n].data.animalMax) {
				$.factory["cost" + n].text = textDisplay.reachedMax;
				$.factory["upgrade" + n].visible = false;
				$.factory["button" + n].cursor = "default";
				$.factory["plus" + n].visible = false;
			} else if (playerData.score >= $.factory[n].data.animalCost) {
				$.factory["upgrade" + n].visible = true;
				$.factory["button" + n].cursor = "pointer";
			} else {
				$.factory["upgrade" + n].visible = false;
				$.factory["button" + n].cursor = "default";
			}
		}
	}
}

function createCountItem() {
	itemCountContainer.removeAllChildren();

	var pos = { x: 0, y: 0, space: 52 };
	var countW = (factory_arr.length - 1) * pos.space;
	var totalW = (factory_arr.length) * pos.space;
	var totalH = 70;
	pos.x = -(countW / 2);

	var countShape = new createjs.Shape();
	countShape.graphics.beginFill("#000").drawRoundRectComplex(-(totalW / 2), -(totalH / 2), totalW, totalH, 10, 10, 10, 10);
	countShape.alpha = .5;
	itemCountContainer.addChild(countShape);

	for (var n = 0; n < factory_arr.length; n++) {
		$.count[n] = new createjs.Bitmap(loader.getResult('factoryItem' + n));
		centerReg($.count[n]);
		$.count[n].regY = $.count[n].image.naturalHeight;
		$.count[n].x = pos.x;
		$.count[n].y = 5;

		$.count["count" + n] = new createjs.Text();
		$.count["count" + n].font = "20px the_bold_fontbold";
		$.count["count" + n].color = '#fff';
		$.count["count" + n].textAlign = "center";
		$.count["count" + n].textBaseline = 'alphabetic';
		$.count["count" + n].text = textDisplay.itemCount.replace("[NUMBER]", 0);
		$.count["count" + n].count = 0;
		$.count["count" + n].x = pos.x;
		$.count["count" + n].y = 25;

		pos.x += pos.space;
		itemCountContainer.addChild($.count[n], $.count["count" + n]);
	}

	itemCountContainer.visible = false;
}

function updateWarehouse() {
	itemCountContainer.visible = true;
	for (var n = 0; n < factory_arr.length; n++) {
		$.count["count" + n].count = 0;
		$.count["count" + n].text = textDisplay.itemCount.replace("[NUMBER]", $.count["count" + n].count);
	}

	for (var n = 0; n < gameData.warehouse.length; n++) {
		var itemIndex = gameData.warehouse[n];
		$.count["count" + itemIndex].count++;
		$.count["count" + itemIndex].text = textDisplay.itemCount.replace("[NUMBER]", $.count["count" + itemIndex].count);
	}
}

/*!
 *
 * ADD INSTRUCTION - This is the function that runs to add instruction
 *
 */
function addInstruction(x, y, text) {
	var newStatusContainer = new createjs.Container();
	statusTxt = new createjs.Text();
	statusTxt.font = "20px the_bold_fontbold";
	statusTxt.color = '#fff';
	statusTxt.textAlign = "center";
	statusTxt.textBaseline = 'alphabetic';
	statusTxt.text = text;

	statusShadowTxt = new createjs.Text();
	statusShadowTxt.font = "20px the_bold_fontbold";
	statusShadowTxt.color = '#000';
	statusShadowTxt.textAlign = "center";
	statusShadowTxt.textBaseline = 'alphabetic';
	statusShadowTxt.text = text;
	statusShadowTxt.y = 3;

	newStatusContainer.x = x;
	newStatusContainer.y = y;
	newStatusContainer.alpha = 0;
	newStatusContainer.addChild(statusShadowTxt, statusTxt);
	instructionContainer.addChild(newStatusContainer);

	gameData.instruction.push({ obj: newStatusContainer, show: false, time: 0 });
}

/*!
 *
 * GAME STATUS - This is the function that runs for game status
 *
 */
function showGameStatus(x, y, text) {
	var newStatusContainer = new createjs.Container();
	statusTxt = new createjs.Text();
	statusTxt.font = "20px the_bold_fontbold";
	statusTxt.color = '#fff';
	statusTxt.textAlign = "center";
	statusTxt.textBaseline = 'alphabetic';
	statusTxt.text = text;

	statusShadowTxt = new createjs.Text();
	statusShadowTxt.font = "20px the_bold_fontbold";
	statusShadowTxt.color = '#000';
	statusShadowTxt.textAlign = "center";
	statusShadowTxt.textBaseline = 'alphabetic';
	statusShadowTxt.text = text;
	statusShadowTxt.y = 3;

	newStatusContainer.x = newStatusContainer.oriX = x;
	newStatusContainer.y = newStatusContainer.oriY = y;
	newStatusContainer.addChild(statusShadowTxt, statusTxt);
	gameStatusContainer.addChild(newStatusContainer);

	newStatusContainer.alpha = 0;
	newStatusContainer.y = newStatusContainer.oriY + 20;
	TweenMax.to(newStatusContainer, .3, {
		alpha: 1, y: newStatusContainer.oriY, overwrite: true, ease: Sine.easeOut, onComplete: function () {
			TweenMax.to(newStatusContainer, .3, { delay: 1, alpha: 0, y: newStatusContainer.oriY - 50, overwrite: true, ease: Sine.easeIn, onComplete: showGameStatusComplete, onCompleteParams: [newStatusContainer] });
		}
	});
}

function showGameStatusComplete(obj) {
	gameStatusContainer.removeChild(obj);
}

/*!
 *
 * END GAME - This is the function that runs for game end
 *
 */
function endGame() {
	gameData.paused = true;
	stopGame();
	toggleGameTimer(false);

	playSound("soundTimesup");
	itemTimesup.visible = true;
	itemTimesup.alpha = 0;
	TweenMax.to(itemTimesup, 1, { alpha: 1, overwrite: true });

	TweenMax.to(gameContainer, 3, {
		overwrite: true, onComplete: function () {
			goPage('result');
		}
	});

	LaggedAPI.APIAds.show(function () {
	});
}

/*!
 *
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 *
 */
function millisecondsToTimeGame(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);

	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	return minutes + ':' + seconds;
}

/*!
 *
 * OPTIONS - This is the function that runs to toggle options
 *
 */

function toggleOption() {
	if (optionsContainer.visible) {
		optionsContainer.visible = false;
	} else {
		optionsContainer.visible = true;
	}
}


/*!
 *
 * OPTIONS - This is the function that runs to mute and fullscreen
 *
 */
function toggleGameMute(con) {
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleMute(con);
	if (con) {
		buttonSoundOn.visible = true;
	} else {
		buttonSoundOff.visible = true;
	}
}

function toggleFullScreen() {
	if (!document.fullscreenElement &&    // alternative standard method
		!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}

/*!
 *
 * SHARE - This is the function that runs to open share url
 *
 */
function share(action) {

	var loc = "https://lagged.com/en/g/farm-factory"

	var title = '';
	var text = '';

	title = shareTitle.replace("[SCORE]", addCommas(playerData.score));
	text = shareMessage.replace("[SCORE]", addCommas(playerData.score));

	var shareurl = '';

	if (action == 'twitter') {
		shareurl = 'https://twitter.com/intent/tweet?url=' + loc + '&text=' + text;
	} else if (action == 'facebook') {
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(loc + 'share.php?desc=' + text + '&title=' + title + '&url=' + loc + '&thumb=' + loc + 'share.jpg&width=590&height=300');
	} else if (action == 'google') {
		shareurl = 'https://plus.google.com/share?url=' + loc;
	} else if (action == 'whatsapp') {
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}

	// window.open(shareurl);
}
