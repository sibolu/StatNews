(function(){window.adaptvInfo={videoPlayerNode:null,POSITION:{ABOVE_VISIBLE_AREA:"aboveVisibleArea",BELOW_VISIBLE_AREA:"belowVisibleArea",LEFT_TO_VISIBLE_AREA:"leftToVisibleArea",RIGHT_TO_VISIBLE_AREA:"rightToVisibleArea",IN_VISIBLE_AREA:"inVisibleArea",HIDDEN:"hidden",UNKNOWN:"NA"},ADSAFE:{URL:"//pixel.adsafeprotected.com/bapi",AN_ID:6058},VW:{spotsState:[-1,-1,-1,-1],spotsInjected:false,numOfSpots:4,injectTimeout:0,timeoutVar:null,detectorUrl:"/redir/client/FPSDetector.swf",cdnPath:"//redir.adap.tv",secureCdnPath:"//adaptv-a.akamaihd.net"},getElementInfo:function(a){var c=document[a]||window[a];var b=this.getElementInfoForElement(c);b.id=a;return b},getElementXY:function(d){var b=d,a=0,f=0,e=0;while(b&&!isNaN(b.offsetLeft)&&!isNaN(b.offsetTop)){if(window.getComputedStyle){e=window.getComputedStyle(b,null)}a+=b.offsetLeft-b.scrollLeft+(e?parseInt(e.getPropertyValue("border-left-width"),10):0);f+=b.offsetTop-b.scrollTop+(e?parseInt(e.getPropertyValue("border-top-width"),10):0);b=b.offsetParent}return{x:d.X=a,y:d.Y=f}},getElementStyle:function(a,b){if(a.currentStyle){return a.currentStyle[b]}else{if(document.defaultView&&document.defaultView.getComputedStyle){return document.defaultView.getComputedStyle(a,"")[b]}else{return a.style[b]}}},getElementInfoForElement:function(c){var b={leftOffset:0,topOffset:0,width:0,height:0};if(c){b.width=c.offsetWidth;b.height=c.offsetHeight;if(c.getBoundingClientRect){var a=c.getBoundingClientRect();b.leftOffset=Math.round(a.left);b.topOffset=Math.round(a.top)}else{var d=this.getElementXY(c);b.leftOffset=d.x;b.topOffset=d.y}}return b},isElementHidden:function(c){var a=false;var b=c;while(b){a=this.getElementStyle(c,"visibility")=="hidden"||this.getElementStyle(c,"display")=="none";if(a){break}b=b.offsetParent}return a},getBrowserInfo:function(){var c={searchString:function(g){for(var d=0;d<g.length;d++){var e=g[d].string;var f=g[d].prop;this.versionSearchString=g[d].versionSearch||g[d].identity;if(e){if(e.indexOf(g[d].subString)!=-1){return g[d].identity}}else{if(f){return g[d].identity}}}},searchVersion:function(e){var d=e.indexOf(this.versionSearchString);if(d==-1){return}return parseFloat(e.substring(d+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}],toString:function(){return"AdapTV browser and os detector"}};var b=c.searchString(c.dataBrowser)||"An unknown browser";var a={browser:b};return a},getWindowInfo:function(c){var a={width:0,height:0,leftOffset:0,topOffset:0};if(typeof(c.innerWidth)!="undefined"){a.width=c.innerWidth;a.height=c.innerHeight}else{if(c.document.documentElement&&(c.document.documentElement.clientWidth||c.document.documentElement.clientHeight)){a.width=c.document.documentElement.clientWidth;a.height=c.document.documentElement.clientHeight}else{if(document.body.offsetWidth&&document.body.offsetHeight){a.width=c.document.body.offsetWidth;a.height=c.document.body.offsetHeight}}}var b=(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;a.leftOffset=document.all?b.scrollLeft:window.pageXOffset;a.topOffset=document.all?b.scrollTop:window.pageYOffset;return a},getElementPositionRelativeToVisiblearea:function(a,c){var b;if(c.width>0&&c.height>0&&a.width>0&&a.height>0){if(a.topOffset+a.height<=c.topOffset){b=this.POSITION.ABOVE_VISIBLE_AREA}else{if(a.topOffset>=c.height+c.topOffset){b=this.POSITION.BELOW_VISIBLE_AREA}else{if(a.leftOffset+a.width<=c.leftOffset){b=this.POSITION.LEFT_TO_VISIBLE_AREA}else{if(a.leftOffset>=c.width+c.leftOffset){b=this.POSITION.RIGHT_TO_VISIBLE_AREA}else{b=this.POSITION.IN_VISIBLE_AREA}}}}}else{b=this.POSITION.HIDDEN}return b},getVisibleFrameRect:function(b,a){var c={leftOffset:0,topOffset:0,width:0,height:0};c.leftOffset=Math.max(b.leftOffset,a.leftOffset);c.topOffset=Math.max(b.topOffset,a.topOffset);c.width=Math.min(b.leftOffset+b.width,a.leftOffset+a.width)-c.leftOffset;c.height=Math.min(b.topOffset+b.height,a.topOffset+a.height)-c.topOffset;return c},getHorizontalPercentageVisibility:function(b,c){var a=0;a=(Math.min((c.width-b.leftOffset),(b.width+b.leftOffset))/b.width)*100;a=Math.round(Math.min(Math.max(0,a),100)*100)/100;a=Math.round(a);return a},getVerticalPercentageVisibility:function(b,c){var a=0;a=(Math.min((c.height-b.topOffset),(b.height+b.topOffset))/b.height)*100;a=Math.round(Math.min(Math.max(0,a),100)*100)/100;a=Math.round(a);return a},getPlacementInfo:function(c,e,f){var b={position:this.POSITION.UNKNOWN,hVisibility:0,vVisibility:0};if(this.isElementHidden(c)){b.position=this.POSITION.HIDDEN}if(b.position!=this.POSITION.HIDDEN){var d={leftOffset:0,topOffset:0,width:f.width,height:f.height};var a=this.getElementPositionRelativeToVisiblearea(e,d);b.position=a;if(a==this.POSITION.IN_VISIBLE_AREA){b.hVisibility=this.getHorizontalPercentageVisibility(e,d);b.vVisibility=this.getVerticalPercentageVisibility(e,d)}if(b.hVisibility==0||b.vVisibility==0){b.hVisibility=0;b.vVisibility=0}}return b},getPlacementInfoWhenEmbeddedInIFrames:function(h,d,f,q){var c={position:this.POSITION.UNKNOWN,hVisibility:0,vVisibility:0};if(this.isElementHidden(h)){c.position=this.POSITION.HIDDEN}if(c.position!=this.POSITION.HIDDEN){var p=f[f.length-1];var m={leftOffset:0,topOffset:0,width:q.width,height:q.height};var l=this.getElementPositionRelativeToVisiblearea(p,m);c.position=l;if(l==this.POSITION.IN_VISIBLE_AREA){var b=this.getVisibleFrameRect(p,m);var e=f.length-1;var g=l;while(e>0){var o=f[e-1];var n=b;o.leftOffset+=n.leftOffset;o.topOffset+=n.topOffset;g=this.getElementPositionRelativeToVisiblearea(o,n);if(g==this.POSITION.IN_VISIBLE_AREA){b=this.getVisibleFrameRect(o,n)}else{break}e--}if(g==this.POSITION.IN_VISIBLE_AREA){d.leftOffset+=b.leftOffset;d.topOffset+=b.topOffset;var k=this.getElementPositionRelativeToVisiblearea(d,b);if(k==this.POSITION.IN_VISIBLE_AREA){b=this.getVisibleFrameRect(d,b);var a=(b.width/d.width)*100;a=Math.round(a*100)/100;a=Math.round(a);c.hVisibility=a;a=(b.height/d.height)*100;a=Math.round(a*100)/100;a=Math.round(a);c.vVisibility=a}else{c.position=this.POSITION.HIDDEN}}else{c.position=this.POSITION.HIDDEN}}}return c},getAdPlayerPositionInfo:function(f){var l={hostname:window.location.hostname,pageUrl:window.location.href,referrer:document.referrer,inIFrame:false,iframe:{parentUrl:"",topUrl:"",leftOffset:0,topOffset:0,width:0,height:0,crossDomain:false,levels:0},win:{width:0,height:0,leftOffset:0,topOffset:0},el:{leftOffset:0,topOffset:0,width:0,height:0,position:this.POSITION.UNKNOWN,hVisibility:0,vVisibility:0},browser:"NA"};l.browser=this.getBrowserInfo().browser;var b=this.getElementInfoForElement(f);l.el.leftOffset=b.leftOffset;l.el.topOffset=b.topOffset;l.el.width=b.width;l.el.height=b.height;if(this.isElementHidden(f)){l.el.position=this.POSITION.HIDDEN}l.win=this.getWindowInfo(window);var a=this.getPlacementInfo(f,l.el,l.win);if(a.position!=this.POSITION.IN_VISIBLE_AREA){l.el.position=a.position;l.el.hVisibility=a.hVisibility;l.el.vVisibility=a.vVisibility;l.el.width=l.el.width<l.win.width?l.el.width:l.win.width;l.el.height=l.el.height<l.win.height?l.el.height:l.win.height;return l}try{var o=window;var c=window.location;var n;try{n=window.top.location.href;if(typeof n===undefined){throw new Error("WebKit browser based adplayer is in an IFrame!")}else{if(n!==l.pageUrl){l.inIFrame=true;l.iframe.topUrl=n}}}catch(m){l.inIFrame=true;l.iframe.crossDomain=true}if(l.inIFrame&&n){if(window.parent&&window.parent.location){l.iframe.parentUrl=window.parent.location.href}l.win=this.getWindowInfo(window.top);var g=new Array();while(o.parent&&o.parent.document&&o.frames&&o!=window.top){var j=o.parent.document.getElementsByTagName("iframe");for(var h=0;h<j.length;h++){if(j[h].src&&j[h].src==c.href){var d=this.getElementInfoForElement(j[h]);if(h==0){l.iframe.width=d.width;l.iframe.height=d.height}l.iframe.leftOffset=d.leftOffset;l.iframe.topOffset=d.topOffset;g[l.iframe.levels]=d;l.iframe.levels+=1;c=o.parent.location;break}}o=o.parent}var a=this.getPlacementInfoWhenEmbeddedInIFrames(f,l.el,g,l.win);l.el.position=a.position;l.el.hVisibility=a.hVisibility;l.el.vVisibility=a.vVisibility}}catch(k){l.iframe.levels=-1}if(!l.inIFrame){var a=this.getPlacementInfo(f,l.el,l.win);l.el.position=a.position;l.el.hVisibility=a.hVisibility;l.el.vVisibility=a.vVisibility}return l},getPageVisibility:function(){if(typeof(document.visibilityState)!="undefined"){return document.visibilityState}else{var c=["webkit","moz","o","ms"];var a;for(var b=0;b<c.length;b++){a=c[b]+"VisibilityState";if(typeof(document[a])!="undefined"){return document[a]}}}return"NA"},getPlayerElement:function(b){var c;var h=document.getElementsByTagName("object");var d=document.getElementsByTagName("embed");var a=Array.prototype.slice.call(h,0);var j=Array.prototype.slice.call(d,0);var g=a.concat(j);for(i=0;i<g.length;i++){try{if(g[i][b]()){c=g[i];break}}catch(f){}}return c},getAdaptvAdPlayerInfo:function(a,c){var b=document[a]||window[a]||this.getPlayerElement(c);if(b){var d=this.getAdPlayerPositionInfo(b);d.pageVisibility=this.getPageVisibility();return d}},injectJavascript:function(b){var a=document.createElement("script");var c=document.head||document.getElementsByTagName("head")[0]||document.documentElement;a.type="text/javascript";a.src=b;if(c!==null){c.appendChild(a)}},fraudScoreCallback:function(c,a){var b=this.getPlayerElement(c);b.__adaptv__fraudscore(a)},loadAdsafeJS:function(a,c,d){var e="adaptv"+new Date().getTime();window[e]=function(){adaptvInfo.fraudScoreCallback.apply(adaptvInfo,[c,arguments[0]]);window[e]=undefined};var b=this.ADSAFE.URL+"?anid="+this.ADSAFE.AN_ID+"&ias_callback="+e+"&pubid="+window.location.hostname+"&placementId="+d;this.injectJavascript(b)},injectViewabilitySpots:function(){if(this.videoPlayerNode){var m=window.adaptvInfo.getElementInfoForElement(this.videoPlayerNode)}var e=m.topOffset;var k=m.leftOffset;var a=m.width;var l=m.height;var h=[{left:k+(a/2),top:e},{left:(a+k)-1,top:e+(l/2)},{left:(k+(a/2)),top:(l+e)-1},{left:k,top:e+(l/2)}];var d=document.body||document.getElementsByTagName("body")[0]||document.documentElement;adaptvInfo.VW.timeoutVar=setTimeout(adaptvInfo.handleInjectSpotTimeout,3000);var n=document.location.protocol=="https:";var f=(n)?window.adaptvInfo.VW.secureCdnPath:window.adaptvInfo.VW.cdnPath;var c=f+window.adaptvInfo.VW.detectorUrl;for(var j=1;j<=adaptvInfo.VW.numOfSpots;j++){var b=document.createElement("div");b.id="adaptv_vw_div"+j;d.appendChild(b);b.style.top=h[j-1].top+"px";b.style.left=h[j-1].left+"px";b.style.height="1px";b.style.width="1px";b.style.position="absolute";var g=adaptvInfo.getObjectTag("adaptv_vw_"+j,"adaptv_vw_"+j,c);b.innerHTML=g}},getObjectTag:function(d,c,b){var a="";a+='<object width="1px" height="1px" id="'+d+'" name="'+c+'" align="center">';a+='<param name="movie" value="'+b+'" />';a+='<param name="bgcolor" value="#000000"/><param name="allowScriptAccess" value="always" />';a+='<param name="FlashVars" value="callback=adaptvInfo.handleViewabilityChange&autoStart=true"/>';a+='<embed src="'+b+'" ';a+='width="1px" height="1px" id="'+d+'" name="'+c+'" align="center" bgcolor="#000000" allowScriptAccess="always" FlashVars = "callback=adaptvInfo.handleViewabilityChange&autoStart=true" type="application/x-shockwave-flash"/></object>';return a},handleInjectSpotTimeout:function(){window.adaptvInfo.VW.injectTimeout=1;clearTimeout(adaptvInfo.VW.timeoutVar);var a=adaptvInfo.getViewabilityInfo();a.viewableNew=-1;if(adaptvInfo.videoPlayerNode&&adaptvInfo.videoPlayerNode.__adaptv__viewabiliyInfo){adaptvInfo.videoPlayerNode.__adaptv__viewabiliyInfo(a)}},removeViewabilitySpots:function(){var c=document.body||document.getElementsByTagName("body")[0]||document.documentElement;for(var a=1;a<=adaptvInfo.VW.numOfSpots;a++){var b=document.getElementById("adaptv_vw_div"+a);c.removeChild(b)}},handleViewabilityChange:function(b,e,d){var a=b.split("_")[2];adaptvInfo.VW.spotsState[a-1]=d;if(!adaptvInfo.VW.spotsInjected){for(var c=0;c<adaptvInfo.VW.spotsState.length;c++){if(adaptvInfo.VW.spotsState[c]==-1){adaptvInfo.VW.spotsInjected=false;break}else{adaptvInfo.VW.spotsInjected=true}}if(adaptvInfo.VW.spotsInjected&&window.adaptvInfo.VW.injectTimeout===0){clearTimeout(adaptvInfo.VW.timeoutVar);if(this.videoPlayerNode&&this.videoPlayerNode.__adaptv__viewabiliyInfo){this.videoPlayerNode.__adaptv__viewabiliyInfo(adaptvInfo.getViewabilityInfo())}}}}};window.adaptvInfo.getInfo=function(b,c,a){var d={viewable:-1,viewableNew:-1,domId:"",active:0,spotsState:""};adaptvInfo.videoPlayerNode=document[b]||window[b]||this.getPlayerElement(c);if(a=="mindjoltinc"){d=adaptvInfo.getVWInfo();d.viewableNew=-1;d.spotsState=adaptvInfo.VW.spotsState.toString();return d}if(adaptvInfo.VW.spotsInjected){d=adaptvInfo.getViewabilityInfo()}else{if(adaptvInfo.VW.injectTimeout===1){d=adaptvInfo.getViewabilityInfo();d.viewableNew=-1}else{adaptvInfo.injectViewabilitySpots();return null}}return d};window.adaptvInfo.getViewabilityInfo=function(){var a=0;var c=adaptvInfo.getVWInfo();c.spotsState=adaptvInfo.VW.spotsState.toString();for(var b=0;b<adaptvInfo.VW.spotsState.length;b++){if(adaptvInfo.VW.spotsState[b]!==-1){a=a+adaptvInfo.VW.spotsState[b]}if(a>=3){c.viewableNew=1}else{c.viewableNew=0}}if(c.active===0){c.viewableNew=0}return c};window.adaptvInfo.getVWInfo=function(){var b={viewable:-1,domId:"",active:0};var j={ACTIVE:1,INACTIVE:0};if(adaptvInfo.videoPlayerNode){var d=window.adaptvInfo.getAdPlayerPositionInfo(adaptvInfo.videoPlayerNode);b.pWidth=d.el.width;b.pHeight=d.el.height;b.domId=adaptvInfo.videoPlayerNode.id;if(d.el.position!=window.adaptvInfo.POSITION.UNKNOWN){var g=(d.el.width*d.el.hVisibility)/100;var a=(d.el.height*d.el.vVisibility)/100;if(g==0||a==0){b.viewable=0}else{var c=(g*a)/(d.el.width*d.el.height);b.viewable=(c>=0.5)?1:0}}else{if(d.inIFrame){b.errinfo="inIframe"}if(d.iframe.crossDomain){b.errinfo="iframeCrossDomain"}}var h=false;var f=["webkit","moz","ms","o"];if(document.visibilityState){h=document.visibilityState!="visible"}else{for(var e=0;e<f.length;e++){if(document[f[e]+"VisibilityState"]){h=document[f[e]+"VisibilityState"]!="visible";break}}}b.active=(!h)?j.ACTIVE:j.INACTIVE}return b}})();