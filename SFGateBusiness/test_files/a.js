var cid='1347713b6807e75';
function cmIV_(){var e=this;this.ts=null,this.tsV=null,this.te=null,this.teV=null,this.fV=!1,this.fFV=!1,this.fATF=!1,this.nLg=0,this._ob=null,this._obi=null,this._id=null,this._ps=null,this._it=0,this._ic=0,this._vt=0,this._vtl=0,this.oDoc=null,this._w=0,this.height=0,this._to=null,this.mxVT=150,this.done=!1,this._init=function(t,n,r,i,s){e.spider=s;if(!document.getElementById)return;t===undefined&&(t=this.buildTxId()),e._w=r,e.height=i,e._id=t,e.oDoc=n,CollectiveMedia.addEvt(window,"load",this.onLoad)},this.buildTxId=function(){var e=new Date,t,n=""+e.getYear()+e.getMonth()+e.getDate()+e.getHours()+e.getMinutes()+e.getSeconds();for(t=0;t<36;t++)n+=CollectiveMedia.rand(10);return CollectiveMedia.network+"-"+n},this._findUnit=function(t,n){if(n++>5)return null;var r=null,i,s;for(i=t.length-1;i>=0;i--){r=t[i],s=r.nodeName;if((s=="OBJECT"||s=="IFRAME"||s=="IMG")&&r.width==e._w&&r.height==e.height){e._ob=r;break}if(s=="EMBED"&&(r.width==e._w&&r.height==e.height||r.style.width==e._w+"px"&&r.style.height==e.height+"px")){e._ob=r;break}if(s=="DIV"||s=="A")e._findUnit(r.childNodes,n);else if(s=="FORM"){e._ob=r;break}}return r},this.onLoad=function(){if(e._ob)return;if(e.oDoc===null||e.oDoc===document.getElementsByTagName("head")[0])e.oDoc=document.body;var t,n=0;e._findUnit(e.oDoc.childNodes,n),e._ob!==null&&(t=document.createElement("IMG"),t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.opacity=0,t.height=1,t.width=1,t.id="img"+e._id,document.body.appendChild(t),e.obj_init(e._ob),e._log("L"),e.spider&&(e.spider.el=e._ob,CMSpiderIO(e.spider)))},this.obj_init=function(t){this._ob=t;var n="img"+this._id;this._obi=document.getElementById(n),this._ob!==null&&(CollectiveMedia.addEvt(window,"beforeunload",this._e_b4),CollectiveMedia.addEvt(window,"blur",this._e_bl),CollectiveMedia.addEvt(window,"focus",this._e_scr),CollectiveMedia.addEvt(window,"unload",this._e_b4),CollectiveMedia.addEvt(window,"scroll",this._e_scr),CollectiveMedia.addEvt(window,"resize",this._e_scr),CollectiveMedia.addEvt(this._ob,"mouseover",this._e_in),CollectiveMedia.addEvt(this._ob,"mouseout",this._e_ou),CollectiveMedia.addEvt(this._ob,this._ob.nodeName=="FORM"?"submit":"click",this._e_cl),this._ps=fP(this._ob)),this._e_scr(null),this._to=window.setInterval(function(){e.checkViewTimeout()},15e3)},this._e_in=function(t){e.ts==null&&(e.ts=new Date),e._ic=e._ic+1},this._e_scr=function(t){var n,r,i,s,o,u,a=!1;e._ob!==null&&e._ps!==null&&(e._ps=fP(e._ob),i=getWS(),s=getXY(),o=Math.round(e._ps[1])+Math.round(e._ob.height),u=Math.round(e._ps[0])+Math.round(e._ob.width),Math.round(i[1])+Math.round(s[1])>Math.round(e._ps[1])&&s[1]<o&&Math.round(i[0])+Math.round(s[0])>Math.round(e._ps[0])&&s[0]<u?(e.fV||(e.fV=!0,a=!0,e.nLg==0&&(e.fATF=!0)),e.tsV==null&&(e.tsV=new Date),n=!1,r=!1,e._ps[1]>s[1]&&o<s[1]+i[1]&&(n=!0),e._ps[0]>s[0]&&u<s[0]+i[0]&&(r=!0),r&&n&&(e.fFV||(e.fFV=!0,a=!0))):(e._vt_0(),e._vt>e._vtl&&e._log("H"))),(a||e.nLg==0)&&e._log("V")},this._vt_0=function(){if(e.tsV!=null){e.teV=new Date;var t=e.teV.getTime()-e.tsV.getTime();e.teV.setTime(t),e.tsV=null,e._vt+=Math.round(t/1e3)}e._it_0()},this._it_0=function(){if(e.ts!=null){e.te=new Date;var t=e.te.getTime()-e.ts.getTime();e.te.setTime(t),e.ts=null,e._it+=Math.round(t/1e3)}},this._e_ou=function(t){e._vt_0(),e._log("I"),e._e_scr()},this._e_b4=function(t){e._to!=null&&(window.clearInterval(e._to),e._to=null),e._vt_0(),e._log("U"),e.done=!0},this._e_cl=function(t){return e._ic=e._ic+1,e._vt_0(),e._log("C"),e._e_scr(),!0},this._e_bl=function(t){e._vt_0(),e._log("B"),e._e_scr()},this.checkViewTimeout=function(){if(e.tsV!=null){var t=new Date,n=t.getTime()-e.tsV.getTime();t.setTime(n);var r=e._vt+Math.round(n/1e3);r>=e.mxVT?e._e_b4():r>e._vtl&&e._e_bl()}},this.getLogData=function(t){var n="tx="+e._id+";it="+e._it+";vt="+e._vt+";ic="+e._ic+";atf="+(e.fATF?"1":"0")+";pv="+(e.fV?"1":"0")+";fv="+(e.fFV?"1":"0")+";seq="+e.nLg+";et="+t+";cid="+cid+";ord="+CollectiveMedia.rand(1e6);return/\?$/.test(n)||(n+="?"),n},this.getLogUrl=function(t){return t==null&&(t="U"),location.protocol+"//l.collective-media.net/log;"+e.getLogData(t)},this._log=function(t){e.done||(e.nLg++,e._obi&&(e._obi.src=e.getLogUrl(t),e._vtl=e._vt))}}function fP(e){var t=fPX(e),n=fPY(e);return[t,n]}function fPX(e){var t=0;if(e.offsetParent)for(;;){t+=e.offsetLeft;if(!e.offsetParent)break;e=e.offsetParent}else e.x&&(t+=e.x);return t}function fPY(e){var t=0;if(e.offsetParent)for(;;){t+=e.offsetTop;if(!e.offsetParent)break;e=e.offsetParent}else e.y&&(t+=e.y);return t}function getWS(){var e=0,t=0;return typeof window.innerWidth=="number"?(e=window.innerWidth,t=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(e=document.body.clientWidth,t=document.body.clientHeight),[e,t]}function getXY(){var e=0,t=0;return typeof window.pageYOffset=="number"?(t=window.pageYOffset,e=window.pageXOffset):document.body&&(document.body.scrollLeft||document.body.scrollTop)?(t=document.body.scrollTop,e=document.body.scrollLeft):document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)&&(t=document.documentElement.scrollTop,e=document.documentElement.scrollLeft),[e,t]};
var CollectiveMedia={rand:function(e){return Math.floor(Math.random()*e)},appendChild:function(e,t){null==e.canHaveChildren||e.canHaveChildren?e.appendChild(document.createTextNode(t)):e.text=t},createAndAttachAd:function(e,t,n,r,i,s){var o=document.getElementsByTagName("script"),u=o[o.length-1];if(u===null)return;var a=document.createElement("script");a.language="javascript",a.setAttribute("type","text/javascript");var f="document.write('<scr'+'ipt language=\"javascript\" src=\""+t+"\"></scr'+'ipt>');"+"document.write('<scr'+'ipt>window.cmcb[\""+e+"\"]();</scr'+'ipt>');";u.parentNode.insertBefore(a,u);if(i){try{var l=new cmIV_}catch(c){return!1}l._init(e,a.parentNode,n,r,s)}window.cmcb||(window.cmcb={}),window.cmcb[e]=function(){i&&l.onLoad()},CollectiveMedia.appendChild(a,f)},buildPixel:function(e){var t=document.createElement("img");t.src=e,CollectiveMedia.appendChild(t)},addPixel:function(e,t){if(!navigator.cookieEnabled)return!0;t?CollectiveMedia.buildPixel(e):CollectiveMedia.addEvt(window,"load",function(){CollectiveMedia.buildPixel(e)})},addTrackingImages:function(){CollectiveMedia.trackingImages=arguments,CollectiveMedia.addEvt(window,"load",CollectiveMedia.loadTrackingImages)},loadTrackingImages:function(){var e=CollectiveMedia.trackingImages,t="?";t+=CollectiveMedia.rand(1e6);for(var n=0;n<e.length;n++)(new Image).src=e[n]+t}};window.addEventListener?CollectiveMedia.addEvt=function(e,t,n){e.addEventListener(t,n,!1)}:window.attachEvent?CollectiveMedia.addEvt=function(e,t,n){e.attachEvent("on"+t,n)}:CollectiveMedia.addEvt=function(){};
document.write('<scr'+'ipt language="Javascript">CollectiveMedia.createAndAttachAd("cm-31195844596_1394754966","http://ib.adnxs.com/ptj?member=311&imp_id=cm-31195844596_1394754966,1347713b6807e75&inv_code=cm.hearst_sanfrancisco_chronicle&size=728x90&referrer=www.sfgate.com&redir=http%3A%2F%2Fad.doubleclick.net%2FN4155%2Fadj%2Fcm.hearst_sanfrancisco_chronicle%2Fbtf%2Fflook_kv%3Bnet%3Dcm%3Bu%3D%2Ccm-31195844596_1394754966%2C1347713b6807e75%2Ctech%2Cax.{PRICEBUCKET}-bu.{BUYER_MEMBER_ID}-bd.{BRAND_ID}-axi.{USER_ID}%3Bsz%3D728x90%3Bord1%3D488010%3Bcmw%3Dowl%3Bdcopt%3Dist%3Bcontx%3Dtech%3Bcmd%3Dwww.sfgate.com%3Ban%3D{PRICEBUCKET}%3Bbu%3D{BUYER_MEMBER_ID}%3Bbr%3D{BRAND_ID}%3B*_*%3Bbtg%3Det.arr%3Bbtg%3Det.alm%3Bbtg%3Det.aos%3Bbtg%3Det.bcf%3Bbtg%3Det.agk%3Bbtg%3Det.baf%3Bbtg%3Det.adj%3Bbtg%3Det.ajp%3Bbtg%3Det.bbi%3Bbtg%3Det.aju%3Bbtg%3Det.ags%3Bbtg%3Det.1b%3Bbtg%3Det.abq%3Bbtg%3Det.ads%3Bbtg%3Det.asd%3Bbtg%3Det.ana%3Bbtg%3Det.adw%3Bbtg%3Det.aph%3Bbtg%3Det.atn%3Bbtg%3Det.aup%3Bbtg%3Det.ami%3Bbtg%3Dbk.gy%3Bbtg%3Dbk.jis%3Bbtg%3Dcm.music_l%3Bbtg%3Dcm.jobs_l%3Bbtg%3Dpr.mj%3Bbtg%3Dpr.il%3Bbtg%3Dpr.iq%3Bbtg%3Dpr.ny%3Bbtg%3Dpr.od%3Bbtg%3Dpr.of%3Bbtg%3Dpr.ec%3Bbtg%3Dpr.yt%3Bbtg%3Dqc.4%3Bbtg%3Dqc.8%3Bbtg%3Dqc.10%3Bbtg%3Dqc.12%3Bbtg%3Dqc.13%3Bbtg%3Dad.wo%3Bbtg%3Dad.wp%3Bbtg%3Dad.hn%3Bbtg%3Dad.hu%3Bbtg%3Dad.hy%3Bbtg%3Dbz.ac%3Bbtg%3Das.3%3B%40%3Bord%3D936244057","728","90",true);</scr'+'ipt>');
CollectiveMedia.addPixel("http://b.scorecardresearch.com/p?c1=8&c2=6035092&c3=0",true);CollectiveMedia.addPixel("http://ib.adnxs.com/mapuid?member=311&user=1347713b6807e75&seg_code=bk.gy,bk.jis,qc.4,qc.8,qc.10,qc.12,qc.13,bz.40,bz.ac,bz.8,bz.86,ad.wo,ad.wp,ad.hn,ad.hu,ad.hy,cm.music_l,cm.jobs_l,as.3,pr.mj,pr.il,pr.iq,pr.ny,pr.od,pr.of,pr.ec,pr.yt,et.arr,et.alm,et.aik,et.bce,et.aos,et.bcf,et.agk,et.baf,et.adj,et.ajp,et.bbi,et.ado,et.aju,et.ags,et.1b,et.abq,et.ads,et.asd,et.ana,et.bdv,et.adw,et.aph,et.nj,et.atn,et.aup,et.ami,bk.gy,bk.jis,ad.hy,ad.wo,ad.hu,ad.hn,ad.wp&ord=1394754967",true);
CollectiveMedia.addPixel("http://t4.liverail.com/?metric=msync&p=3&s=et.arr,et.alm,et.aos,et.bcf,et.agk,et.baf,et.adj,et.ajp,et.bbi,et.aju,et.ags,et.1b,et.abq,et.ads,et.asd,et.ana,et.adw,et.aph,et.atn,et.aup,et.ami,bk.gy,bk.jis,cm.music_l,cm.jobs_l,pr.mj,pr.il,pr.iq,pr.ny,pr.od,pr.of,pr.ec,pr.yt,qc.4,qc.8,qc.10,qc.12,qc.13,ad.wo,ad.wp,ad.hn,ad.hu,ad.hy,bz.ac,as.3",false);
CollectiveMedia.addPixel("http://rc.rlcdn.com/365978.gif",false);
CollectiveMedia.addPixel("http://tags.bluekai.com/site/15200?id=1347713b6807e75",false);
CollectiveMedia.addPixel("http://segments.adap.tv/data/?p=collective&type=gif&seg_id=et.arr,et.alm,et.aos,et.bcf,et.agk,et.baf,et.adj,et.ajp,et.bbi,et.aju,et.ags,et.1b,et.abq,et.ads,et.asd,et.ana,et.adw,et.aph,et.atn,et.aup,et.ami,bk.gy,bk.jis,cm.music_l,cm.jobs_l,pr.mj,pr.il,pr.iq,pr.ny,pr.od,pr.of,pr.ec,pr.yt,qc.4,qc.8,qc.10,qc.12,qc.13,ad.wo,ad.wp,ad.hn,ad.hu,ad.hy,bz.ac,as.3&add=true",false);
CollectiveMedia.addPixel("http://rc.rlcdn.com/378608.gif",false);
CollectiveMedia.addPixel("http://ad.doubleclick.net/activity;src=1379696;dcnet=4155;boom=66342;sz=1x1;ord=1?",false);
CollectiveMedia.addPixel("http://tag.admeld.com/pixel?admeld_adprovider_id=2&_segment=2",false);
CollectiveMedia.addPixel("http://pixel.rubiconproject.com/tap.php?v=10665",false);
CollectiveMedia.addPixel("http://image2.pubmatic.com/AdServer/Pug?vcode=bz0xJnR5cGU9MSZjb2RlPTI0NjImdGw9MjE2MDA=",false);
CollectiveMedia.addPixel("http://ad.yieldmanager.com/pixel?id=1419085&t=2",false);
CollectiveMedia.addPixel("http://r.nexac.com/e/getdata.xgi?dt=br&pkey=xkeii93kdn349&reppipe=,&edr=off&repequal=_&ru=http%3A%2F%2Fa.collective-media.net%2Fdatapair%3Fnet%3Dna%26pasv%3D0%26id%3D%3Cna_id%3E%26pid%3D%3Cna_mp%3E%26segs%3D%3Cna_da%3E%26op%3Dadd",false);
CollectiveMedia.addPixel("http://loadr.exelator.com/load/?p=104&g=210&j=0",false);
CollectiveMedia.addPixel("http://tags.bluekai.com/site/2731",false);
CollectiveMedia.addPixel("http://e.nexac.com/e/collective_sync.xgi?na_exid=1347713b6807e75",false);
(function() {
document.write('<sc'+'ript type="text/javascript">try{var additional = ""; if (window.bap_skip_next) {additional = window.bap_skip_next; window.bap_skip_next = false;}; var src = "//c.betrad.com/surly.js?;ad_w=728;ad_h=90;coid=44;nid=546;cps=et,bk,cm,pr,qc,ad,bz,as;" + additional; additional = "";document.write(\'<sc\'+\'ript type="text/javascript" src="\' + src + \'"></scr\'+\'ipt>\');}catch(err){ alert( err ); }</scr'+'ipt>');
}());
(function(){document.write('<script type="text/javascript" src="http://pixel.adsafeprotected.com/jload?anId=6279&pubId=cm.hearst_sanfrancisco_chronicle&placementId=btf/flook_kv&adsafe_par&uId=1347713b6807e75&impId=cm-31195844596_1394754966&adsafe_par"></script>')})();