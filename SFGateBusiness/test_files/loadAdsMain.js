var adwiz_errors = ''; /* this is a container to hold errors */
var JuicePageUrl = "";
var taxOverride = null;
var secOverride = null;
var cccOverride = null;
var YSMTier;
var YSMCategory;
var APSpageUrl;
var juice_errors = "";


/*** Get Page URL, clean it up, and then call Juice Service ****/
JuicePageUrl = getPageUrl();
JuicePageUrl = cleanUrl(JuicePageUrl);
serve_JuiceAds(JuicePageUrl);


/*********************** Get URL from parent or URL Override ***********************/
function getPageUrl() 
{
    var returnUrl;

    /* due to cross site scripting, attempt to get information from parent */
    var parentAPSPageURL;
    var parentPageUrl;
    try {
        parentAPSPageURL = parent.APSpageUrl;
        parentPageUrl = parent.window.location.host + parent.window.location.pathname + parent.window.location.search;
    }
    catch (e) {
        juice_errors = "juice service error - unable to get parent information\n";
    }

    /* iFrames need to use APSpageUrl variable or parents URL. If these don't exist (then not in iFrame) use current url */
    try {
        returnUrl = parentAPSPageURL || APSpageUrl || parentPageUrl ||
        window.location.host + window.location.pathname + window.location.search;
    }
    catch (e) {
        /* error probably occured trying to get the parent hostname */
        returnUrl = window.location.host + window.location.pathname + window.location.search;
        juice_errors += 'juice serve error - getting JuicePageUrl\n';
    }

    return returnUrl;
}

/*********************** Clean up URL ***********************/
function cleanUrl(returnUrl) 
{
    /* Remove http:// and https:// */
    if (returnUrl.toLowerCase().indexOf('http://') == 0) {
        returnUrl = returnUrl.substr(7, returnUrl.length);
    }
    if (returnUrl.toLowerCase().indexOf('https://') == 0) {
        returnUrl = returnUrl.substr(8, returnUrl.length);
    }

    /* page URL can only be 300 chars long */
    if (returnUrl.length > 300) {
        returnUrl = returnUrl.substr(0, 300);
    }

    /* If the last character is a '/' then we need to remove the slash. This allows the system to distinguish
    ads that go on this page and adds that do not fall in correct bucket. (I.E. www.chron.com/ and www.chron.com/notReal/ */
    if (returnUrl.charAt(returnUrl.length - 1) == "/") {
        returnUrl = returnUrl.slice(0, -1);
    }

    return returnUrl;
}

/*********************** Pare down the URL to what we need  ***********************/
function getAutoKVPPageURL(juicePageUrl) {
    juicePageUrl = juicePageUrl.replace(new RegExp(/\/$/), ""); //Strip trailing Slash
    var doubleSlash = juicePageUrl.indexOf('//');
    var lastSlash = juicePageUrl.lastIndexOf('/');
    var lastPeriod = juicePageUrl.lastIndexOf('.');

    if ((lastSlash > doubleSlash + 2) && (lastPeriod > lastSlash)) {
        juicePageUrl = juicePageUrl.substring(0, lastSlash);
    }
    return juicePageUrl;
}


/*********************** Write calls to document ***********************/
function serve_JuiceAds(urlToSend) 
{

    window.onJuiceEvent_ServeAds && window.onJuiceEvent_ServeAds();
    
    try {

        var adUrl = loadAd_UrlLocation + 'SRO/GetJS?url=' + escape(urlToSend);
        document.write('<scr' + 'ipt id="AdsConfigJavaScript" type="text/javascript" src="' + adUrl + '"><\/scr' + 'ipt>');

        /* call yahoo Ads */
        var eyieldSrc = '<scr' + 'ipt id="CallToYahoo" type="text/javascript" src="http://e.yieldmanager.net/script.js"></scr' + 'ipt>';
        document.write(eyieldSrc);
    } 
    catch (e) 
    {
        juice_errors += 'juice serve error - writing to document\n';
    }
}
