﻿/*********************** Environment specific variable ***********************/
var loadAd_UrlLocation = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//aps.hearstnp.com/";

/*********************** Load Main file for serving ads ***********************/
var mainFile = loadAd_UrlLocation + 'Scripts/loadAdsMain.js';
document.write('<scr' + 'ipt id="loadAdConfig" type="text/javascript" src="' + mainFile + '"><\/scr' + 'ipt>');
