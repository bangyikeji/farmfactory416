////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
function initPreload(){
	toggleLoader(true);
	
	checkMobileEvent();
	
	$(window).resize(function(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkMobileOrientation, 1000);
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/background_p.png', id:'backgroundP'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/logo_p.png', id:'logoP'},
			{src:'assets/background_game.png', id:'backgroundGame'},
			{src:'assets/button_start.png', id:'buttonStart'},

			{src:'assets/button_purchase.png', id:'buttonPurchase'},
			{src:'assets/button_purchase_disabled.png', id:'buttonPurchaseDisabled'},
			{src:'assets/item_arrow.png', id:'itemArrow'},
			{src:'assets/item_plus.png', id:'itemPlus'},
			{src:'assets/item_rank.png', id:'itemRank'},
			{src:'assets/item_score.png', id:'itemScore'},
			{src:'assets/item_timer.png', id:'itemTimer'},
			{src:'assets/item_house.png', id:'itemHouse'},
			{src:'assets/item_rail.png', id:'itemRail'},
			{src:'assets/item_rail_bg.png', id:'itemRailBg'},
			{src:'assets/item_grass.png', id:'itemGrass'},
			{src:'assets/item_gate.png', id:'itemGate'},
			{src:'assets/item_timesup.png', id:'itemTimesup'},
			{src:'assets/item_touch_hand.png', id:'itemTouchHand'},
			{src:'assets/item_touch_arrow.png', id:'itemTouchArrow'},
		
			{src:'assets/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/button_continue.png', id:'buttonContinue'},
			{src:'assets/item_pop.png', id:'itemPop'},
			{src:'assets/item_pop_p.png', id:'itemPopP'},
			{src:'assets/button_confirm.png', id:'buttonConfirm'},
			{src:'assets/button_cancel.png', id:'buttonCancel'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/button_settings.png', id:'buttonSettings'}
	];

	for(var n=0; n<trucks_arr.length; n++){
		manifest.push({src:trucks_arr[n].src, id:'truck'+n});
	}

	for(var n=0; n<factory_arr.length; n++){
		manifest.push({src:factory_arr[n].top, id:'factoryTop'+n});
		manifest.push({src:factory_arr[n].bottom, id:'factoryBottom'+n});
		manifest.push({src:factory_arr[n].output, id:'factoryOutput'+n});
		manifest.push({src:factory_arr[n].animal.src, id:'factoryAnimal'+n});
		manifest.push({src:factory_arr[n].item, id:'factoryItem'+n});
		manifest.push({src:factory_arr[n].lock, id:'factoryLock'+n});
	}
	
	if ( typeof addScoreboardAssets == 'function' ) { 
		addScoreboardAssets();
	}
	
	soundOn = true;
	if($.browser.mobile || isTablet){
		if(!enableMobileSound){
			soundOn=false;
		}
	}
	
	if(soundOn){
		manifest.push({src:'assets/sounds/sound_click.ogg', id:'soundButton'});
		manifest.push({src:'assets/sounds/sound_score.ogg', id:'soundScore'});
		manifest.push({src:'assets/sounds/sound_timer.ogg', id:'soundTimer'});
		manifest.push({src:'assets/sounds/sound_timer_end.ogg', id:'soundTimerEnd'});
		manifest.push({src:'assets/sounds/sound_result.ogg', id:'soundResult'});
		manifest.push({src:'assets/sounds/sound_start.ogg', id:'soundStart'});
		manifest.push({src:'assets/sounds/sound_timesup.ogg', id:'soundTimesup'});
		manifest.push({src:'assets/sounds/sound_purchase.ogg', id:'soundPurchase'});
		manifest.push({src:'assets/sounds/sound_upgrade.ogg', id:'soundUpgrade'});
		manifest.push({src:'assets/sounds/sound_truck.ogg', id:'soundTruck'});
		manifest.push({src:'assets/sounds/sound_farm.ogg', id:'soundFarm'});
		manifest.push({src:'assets/sounds/sound_output.ogg', id:'soundOutput'});
		manifest.push({src:'assets/sounds/sound_boost.ogg', id:'soundBoost'});
		manifest.push({src:'assets/sounds/music_game.ogg', id:'musicGame'});
		manifest.push({src:'assets/sounds/music_main.ogg', id:'musicMain'});

		for(var n=0; n<factory_arr.length; n++){
			for(var a=0; a<factory_arr[n].animal.audio.length; a++){
				manifest.push({src:factory_arr[n].animal.audio[a], id:'soundAnimal'+n+'_'+a});
			}
		}
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", evt.item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}