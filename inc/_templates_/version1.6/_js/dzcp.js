var doc=document,ie4=document.all,opera=window.opera,innerLayer,layer,x,y,doWheel=!1,offsetX=15,offsetY=5,tickerc=0,mTimer=new Array,tickerTo=new Array,tickerSpeed=new Array,isIE=!1,isWin=!1,isOpera=!1,jQueryV="1.10.2",$=jQuery,DZCP={jQueryCheck:function(e){return"undefined"!=typeof jQuery&&$().jquery>=jQueryV?!0:(e&&alert("Update your jQuery Version to >= "+jQueryV),!1)},init:function(){doc.body.id="dzcp-engine-1.7",DZCP.DebugLogger("jQuery Version: "+$().jquery+" is loaded!"),DZCP.DebugLogger("Load DZCP-Engine 1.7"),isIE=-1!==navigator.appVersion.indexOf("MSIE")?!0:!1,isWin=-1!==navigator.appVersion.toLowerCase().indexOf("win")?!0:!1,isOpera=-1!==navigator.userAgent.indexOf("Opera")?!0:!1,$("body").append('<div id="infoDiv"></div>'),layer=$("#infoDiv")[0],doc.body.onmousemove=DZCP.trackMouse,dzcp_config.shoutInterval>1&&$("#navShout")[0]&&window.setInterval("$('#navShout').load('../inc/ajax.php?i=shoutbox');",dzcp_config.shoutInterval),DZCP.initLightbox(),$("#colorpicker").colorpicker(),$(".slidetabs").tabs(".images > div",{effect:"fade",rotate:!0}).slideshow(dzcp_config.slideshowInterval>1?{autoplay:!0,interval:dzcp_config.slideshowInterval}:{autoplay:!1,interval:6e3}),$(".tabs").tabs("> .switchs"),$(".tabs2").tabs(".switchs2 > div",{effect:"fade",rotate:!0})},initLightbox:function(){return DZCP.jQueryCheck(!1)?(DZCP.DebugLogger("Initiation Lightbox"),void $("a[rel^=lightbox]").magnificPopup({type:"image",gallery:{enabled:!0},mainClass:"mfp-with-zoom",zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}}})):!1},addEvent:function(e,t,i){if(!DZCP.jQueryCheck(!1))return!1;if(e.addEventListener)return e.addEventListener(t,i,!1),!0;if(e.attachEvent){var n=e.attachEvent("on"+t,i);return n}return!1},trackMouse:function(e){if(!DZCP.jQueryCheck(!1))return!1;if(innerLayer=$("#infoInnerLayer")[0],"object"==typeof layer){var t=doc.all,i=doc.getElementById&&!doc.all,n=5,o=-15;if(x=i?e.pageX-n:window.event.clientX+doc.documentElement.scrollLeft-n,y=i?e.pageY-o:window.event.clientY+doc.documentElement.scrollTop-o,innerLayer)var r=(t?innerLayer.offsetWidth:innerLayer.clientWidth)-3;else var r=(t?layer.clientWidth:layer.offsetWidth)-3;var a=i?window.innerWidth+window.pageXOffset-12:doc.documentElement.clientWidth+doc.documentElement.scrollLeft;layer.style.left=(x+offsetX+r>=a-offsetX?x-(r+offsetX):x+offsetX)+"px",layer.style.top=y+offsetY+"px"}return!0},popup:function(e,t,i){t=parseInt(t),i=parseInt(i)+50,popup=window.open(e,"Popup","width=1,height=1,location=0,scrollbars=0,resizable=1,status=0"),popup.resizeTo(t,i),popup.moveTo((screen.width-t)/2,(screen.height-i)/2),popup.focus()},initGameServer:function(e){DZCP.initDynLoader("navGameServer_"+e,"server","&serverID="+e)},initTeamspeakServer:function(){DZCP.initDynLoader("navTeamspeakServer","teamspeak","")},initDynLoader:function(e,t,i){if(!DZCP.jQueryCheck(!1))return!1;DZCP.DebugLogger("DynLoader -> Tag: '"+e+"' / URL: '../inc/ajax.php?i="+t+i+"'");var n=$.ajax({url:"../inc/ajax.php?i="+t+i,type:"GET",data:{},cache:!0,dataType:"html",contentType:"application/x-www-form-urlencoded;"});n.done(function(t){$("#"+e).html(t).hide().fadeIn("normal")})},initPageDynLoader:function(e,t){if(!DZCP.jQueryCheck(!1))return!1;DZCP.DebugLogger("PageDynLoader -> Tag: '"+e+"' / URL: '"+t+"'");var i=$.ajax({url:t,type:"GET",data:{},cache:!0,dataType:"html",contentType:"application/x-www-form-urlencoded;"});i.done(function(t){$("#"+e).html(t).hide().fadeIn("normal"),DZCP.initLightbox()})},initDynCaptcha:function(e,t,i,n,o,r,a){if(!DZCP.jQueryCheck(!1))return!1;var c="../inc/ajax.php?i=securimage";t>1&&(c=c+"&height="+t),i>1&&(c=c+"&width="+i),n>=1&&(c=c+"&lines="+n),o.length>1&&(c=c+"&namespace="+o),r>=1&&(c=c+"&length="+r),c=a>0?c+"&sid="+a:c+"&sid="+Math.random(),DZCP.DebugLogger("DynCaptcha -> Tag: '"+e+"' / URL: '"+c+"'");var l=$.ajax({url:c,type:"GET",data:{},cache:!1,dataType:"html",contentType:"application/x-www-form-urlencoded;"});l.done(function(t){$("#"+e).attr("src",t).hide().fadeIn("normal")})},EvalSound:function(e){if(!DZCP.jQueryCheck(!1))return!1;DZCP.DebugLogger("EvalSound -> URL: '"+e+"'");var t=new Audio(e);t.play()},shoutSubmit:function(){return DZCP.jQueryCheck(!1)?($.post("../shout/index.php?ajax",$("#shoutForm").serialize(),function(e){e&&alert(e.replace(/  /g," ")),$("#navShout").load("../inc/ajax.php?i=shoutbox"),e||$("#shouteintrag").prop("value","")}),!1):!1},switchuser:function(){var e=doc.formChange.changeme.options[doc.formChange.changeme.selectedIndex].value;window.location.href=e},tempswitch:function(){var e=doc.form.tempswitch.options[doc.form.tempswitch.selectedIndex].value;"lazy"!==e&&DZCP.goTo(e)},autocomplete:function(e,t){if(!DZCP.jQueryCheck(!1))return!1;DZCP.DebugLogger("Autocomplete -> URL: '../inc/ajax.php?i=autocomplete&type="+e+"&game="+i+"'");var i=$("#status :selected").val();$(document).load("../inc/ajax.php?i=autocomplete&type="+e+"&game="+i,function(e){var i=jQuery.parseJSON(e);""!==i.qport&&(t||""===$("#qport").val())&&($("#qport").val(i.qport),$("#autochanged").show())})},goTo:function(e,t){1===t?window.open(e):window.location.href=e},maxlength:function(e,t,i){e.value.length>i?e.value=e.value.substring(0,i):t.value=i-e.value.length},showInfo:function(e,t,i,n,o,r){if("object"==typeof layer){var a="";if(t&&i){for(var c=t.split(";"),l=i.split(";"),d="",s=0;s<c.length;++s)d=d+"<tr><td>"+c[s]+"</td><td>"+l[s]+"</td></tr>";a='<tr><td class="infoTop" colspan="2">'+e+"</td></tr>"+d}else a=t&&"undefined"==typeof i?'<tr><td class="infoTop" colspan="2">'+e+"</td></tr><tr><td>"+t+"</td></tr>":"<tr><td>"+e+"</td></tr>";var u="";u=n?'<tr><td colspan=2 align=center><img src="'+n+'" width="'+o+'" height="'+r+'" alt="" /></td></tr>':"",layer.innerHTML='<div id="hDiv">  <table class="hperc" cellspacing="0" style="height:100%">    <tr>      <td style="vertical-align:middle">        <div id="infoInnerLayer">          <table class="hperc" cellspacing="0">              '+a+"              "+u+"          </table>        </div>      </td>    </tr>  </table></div>",ie4&&!opera?(layer.innerHTML+='<iframe id="ieFix" frameborder="0" width="'+$("#hDiv")[0].offsetWidth+'" height="'+$("#hDiv")[0].offsetHeight+'"></iframe>',layer.style.display="block"):layer.style.display="block"}},showSteamBox:function(e,t,i,n,o){var r;switch(o){case 1:r="online";break;case 2:r="in-game";break;default:r="offline"}"object"==typeof layer&&(layer.innerHTML='<div id="hDiv">  <table class="hperc" cellspacing="0" style="height:100%">    <tr>      <td style="vertical-align:middle">        <div id="infoInnerLayer">             <table class="steam_box_bg" border="0" cellspacing="0" cellpadding="0">              <tr>                <td>                   <div class="steam_box steam_box_user '+r+'">                     <div class="steam_box_avatar '+r+'"> <img src="'+t+'" /></div>                     <div class="steam_box_content">'+e+'<br />                     <span class="friendSmallText">'+i+"<br>"+n+"</span></div>                   </div>                </td>              </tr>            </table>        </div>      </td>    </tr>  </table></div>",ie4&&!opera?(layer.innerHTML+='<iframe id="ieFix" frameborder="0" width="'+$("#hDiv")[0].offsetWidth+'" height="'+$("#hDiv")[0].offsetHeight+'"></iframe>',layer.style.display="block"):layer.style.display="block")},hideInfo:function(){"object"==typeof layer&&(layer.innerHTML="",layer.style.display="none")},toggle:function(e){return DZCP.jQueryCheck(!1)?void(0!==e&&("none"===$("#more"+e).css("display")?($("#more"+e).fadeIn("normal"),$("#img"+e).prop("src","../inc/images/collapse.gif")):($("#more"+e).fadeOut("normal"),$("#img"+e).prop("src","../inc/images/expand.gif")))):!1},fadetoggle:function(e){return DZCP.jQueryCheck(!1)?void(0!==e&&($("#more_"+e).fadeToggle("slow","swing"),$("#img_"+e).prop("hidden"===$("#img_"+e).prop("alt")?{alt:"normal",src:"../inc/images/toggle_normal.png"}:{alt:"hidden",src:"../inc/images/toggle_hidden.png"}))):!1},resizeImages:function(){if(!DZCP.jQueryCheck(!1))return!1;for(var e=0;e<doc.images.length;e++){var t=doc.images[e];if("content"===t.className){var i=t.width,n=t.height;if(0!==dzcp_config.maxW&&i>dzcp_config.maxW&&(t.width=dzcp_config.maxW,t.height=Math.round(n*(dzcp_config.maxW/i)),!DZCP.linkedImage(t))){var o=doc.createElement("span"),r=doc.createElement("a");o.appendChild(doc.createElement("br")),o.setAttribute("class","resized"),o.appendChild(doc.createTextNode("auto resized to "+t.width+"x"+t.height+" px")),r.setAttribute("href",t.src),r.setAttribute("rel","lightbox"),r.appendChild(t.cloneNode(!0)),t.parentNode.appendChild(o),t.parentNode.replaceChild(r,t),DZCP.initLightbox()}}}},linkedImage:function(e){do if(e=e.parentNode,"A"===e.nodeName)return!0;while("TD"!==e.nodeName&&"BODY"!==e.nodeName);return!1},calSwitch:function(e,t){if(!DZCP.jQueryCheck(!1))return!1;var i=$.ajax({url:"../inc/ajax.php?i=kalender&month="+e+"&year="+t,type:"GET",data:{},cache:!1,dataType:"html",contentType:"application/x-www-form-urlencoded;"});i.done(function(e){$("#navKalender").html(e).hide().fadeIn("normal")})},teamSwitch:function(e){return DZCP.jQueryCheck(!1)?(clearTimeout(mTimer[1]),void $("#navTeam").load("../inc/ajax.php?i=teams&tID="+e,DZCP.initTicker("teams","h",60))):!1},ajaxVote:function(e){return DZCP.jQueryCheck(!1)?(DZCP.submitButton("contentSubmitVote"),$.post("../votes/index.php?action=do&ajax=1&what=vote&id="+e,$("#navAjaxVote").serialize(),function(e){$("#navVote").html(e)}),!1):!1},ajaxFVote:function(e){return DZCP.jQueryCheck(!1)?(DZCP.submitButton("contentSubmitFVote"),$.post("../votes/index.php?action=do&fajax=1&what=fvote&id="+e,$("#navAjaxFVote").serialize(),function(e){$("#navFVote").html(e)}),!1):!1},ajaxPreview:function(e){if(!DZCP.jQueryCheck(!1))return!1;DZCP.DebugLogger("Ajax Preview -> Tag: '"+e+"'");for(var t=doc.getElementsByTagName("textarea"),i=0;i<t.length;i++){var n=t[i].className,o=t[i].id;if("editorStyle"===n||"editorStyleWord"===n||"editorStyleNewsletter"===n){var r=tinyMCE.getInstanceById(o);$("#"+o).prop("value",r.getBody().innerHTML)}}$("#previewDIV").html('<div style="width:100%;text-align:center"> <img src="../inc/images/admin/loading.gif" alt="" /></div>');var a="";"cwForm"===e&&$("input[type=file]").each(function(){a=a+"&"+$(this).prop("name")+"="+$(this).prop("value")});var c=prevURL;$.post(c,$("#"+e).serialize()+a,function(e){$("#previewDIV").html(e).hide().fadeIn("fast"),DZCP.resizeImages()})},del:function(e){return e=e.replace(/\+/g," "),e=e.replace(/oe/g,"�"),confirm(e+"?")},hideForumFirst:function(){return DZCP.jQueryCheck(!1)?void $("#allkat").prop("checked",!1):!1},hideForumAll:function(){if(!DZCP.jQueryCheck(!1))return!1;for(var e=0;e<doc.forms.search.elements.length;e++){var t=doc.forms.search.elements[e];t.id.match(/k_/g)&&(t.checked=!1)}},submitButton:function(e){return DZCP.jQueryCheck(!1)?(submitID=e?e:"contentSubmit",$("#"+submitID).prop("disabled",!0),$("#"+submitID).css("color","#909090"),$("#"+submitID).css("cursor","default"),!0):!1},initTicker:function(e,t,i){if(!DZCP.jQueryCheck(!1))return!1;DZCP.DebugLogger("Initiation Newticker"),tickerTo[tickerc]="h"===t||"v"===t?t:"v",tickerSpeed[tickerc]=parseInt(i)<=10?10:parseInt(i);var n=$("#"+e).html(),o='  <div id="scrollDiv'+tickerc+'" class="scrollDiv" style="position:relative;left:0;z-index:1">';o+='    <table id="scrollTable'+tickerc+'" class="scrolltable"  cellpadding="0" cellspacing="0">',o+="      <tr>",o+='        <td onmouseover="clearTimeout(mTimer['+tickerc+'])" onmouseout="DZCP.startTickerDiv('+tickerc+')">';for(var r=0;10>r;r++)o+=n;o+="        </td>",o+="      </tr>",o+="    </table>",o+="  </div>",$("#"+e).html(o),window.setTimeout("DZCP.startTickerDiv("+tickerc+");",1500),tickerc++},startTickerDiv:function(e){return DZCP.jQueryCheck(!1)?(tableObj=$("#scrollTable"+e)[0],obj=tableObj.parentNode,objWidth="h"===tickerTo[e]?tableObj.offsetWidth:tableObj.offsetHeight,newWidth=2*Math.floor(objWidth/2)+2,obj.style.width=newWidth,void(mTimer[e]=setInterval("DZCP.moveDiv('"+obj.id+"', "+newWidth+", "+e+");",tickerSpeed[e]))):!1},moveDiv:function(e,t,i){if(!DZCP.jQueryCheck(!1))return!1;var n=$("#"+e)[0];"h"===tickerTo[i]?n.style.left=parseInt(n.style.left)<=0-t/2+2?0:parseInt(n.style.left)-1+"px":n.style.top=""===n.style.top||parseInt(n.style.top)<0-t/2+6?0:parseInt(n.style.top)-1+"px"},GoToAnchor:function(){return DZCP.jQueryCheck(!1)?void(DZCP.empty(dzcp_config.AnchorMove)||(DZCP.DebugLogger("GoToAnchor -> Tag: '"+dzcp_config.AnchorMove+"'"),$("html, body").animate({scrollTop:$("#"+dzcp_config.AnchorMove).offset().top-12},"slow"))):!1},empty:function(e){return DZCP.jQueryCheck(!1)?null===e||$.noop(e)||!/\S/.test(e):!1},DebugLogger:function(e){dzcp_config.debug&&console.info("DZCP Debug: "+e)},checkbox_switch:function(e,t){return DZCP.jQueryCheck(!1)?(DZCP.DebugLogger("Change all Checkboxes with ID:"+t+"_*"),void $('input:checkbox[id^="'+t+'_"]').not(e).prop("checked",e.checked)):!1}};$(document).ready(function(){DZCP.jQueryCheck(!0)&&DZCP.init()}),$(window).load(function(){DZCP.jQueryCheck(!1)&&(DZCP.resizeImages(),DZCP.GoToAnchor())});