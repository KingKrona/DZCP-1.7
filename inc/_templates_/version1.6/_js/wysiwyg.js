function ajaxfilemanager(e,t,n,r){var i="detail";switch(n){case"image":i="thumbnail";break;case"media":break;case"flash":break;case"file":break;default:return false}tinyMCE.activeEditor.windowManager.open({url:"../inc/tinymce/plugins/ajaxfilemanager/ajaxfilemanager.php?view="+i,width:850,height:478,inline:"yes",close_previous:"no"},{window:r,input:e})}tinyMCE_GZ.init({plugins:"contextmenu,dzcp,advimage,paste,table,fullscreen,inlinepopups,spellchecker,searchreplace,insertdatetime,dzcp",themes:"advanced",languages:lng=="de"?lng:"en",disk_cache:true,debug:false});tinyMCE.init({theme:"advanced",mode:"specific_textareas",editor_selector:"editorStyle",plugins:"contextmenu,dzcp,inlinepopups,spellchecker",language:lng=="de"?lng:"en",theme_advanced_buttons1:"bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,link,unlink,|,image,youtube,forecolor,"+"backcolor,|,smileys,flags,dzcpuser,spellchecker",theme_advanced_toolbar_location:"top",theme_advanced_toolbar_align:"center",theme_advanced_statusbar_location:"bottom",spellchecker_languages:"English=en,+Deutsch=de",theme_advanced_resizing:true,theme_advanced_resize_horizontal:false,theme_advanced_resizing_use_cookie:false,accessibility_warnings:false,entity_encoding:"raw",verify_html:false,button_tile_map:true});tinyMCE.init({mode:"specific_textareas",editor_selector:"editorStyleMini",theme:"advanced",plugins:"contextmenu,dzcp,inlinepopups",language:lng=="de"?lng:"en",theme_advanced_buttons1:"bold,italic,underline,|,link,unlink,|,image",theme_advanced_buttons2:"",theme_advanced_buttons3:"",theme_advanced_toolbar_location:"top",theme_advanced_toolbar_align:"center",theme_advanced_resizing:true,theme_advanced_resize_horizontal:false,theme_advanced_resizing_use_cookie:false,accessibility_warnings:false,entity_encoding:"raw",verify_html:false,button_tile_map:true});tinyMCE.init({mode:"specific_textareas",editor_selector:"editorStyleNewsletter",theme:"advanced",plugins:"contextmenu,dzcp",language:lng=="de"?lng:"en",theme_advanced_buttons1:"bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,bullist,numlist,|,link,unlink,|,image,forecolor,backcolor",theme_advanced_buttons2:"",theme_advanced_buttons3:"",theme_advanced_toolbar_location:"top",theme_advanced_toolbar_align:"center",theme_advanced_statusbar_location:"bottom",theme_advanced_resizing:true,theme_advanced_resize_horizontal:false,theme_advanced_resizing_use_cookie:false,accessibility_warnings:false,entity_encoding:"raw",verify_html:false,button_tile_map:true,convert_urls:false});tinyMCE.init({mode:"specific_textareas",editor_selector:"editorStyleWord",theme:"advanced",elements:"ajaxfilemanager",plugins:"contextmenu,dzcp,advimage,paste,table,fullscreen,inlinepopups,spellchecker,searchreplace,insertdatetime,",language:lng=="de"?lng:"en",theme_advanced_buttons1:"bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,undo,redo,|,bullist,numlist,|,link,unlink,|,pastephp,|,forecolor,"+"backcolor,|,smileys,flags,",theme_advanced_buttons2:"paste,pastetext,pasteword,|,search,replace,|,image,|,tablecontrols,|,dzcpuser",theme_advanced_buttons3:"fontselect,fontsizeselect,|,insertdate,inserttime,|,sub,sup,|,outdent,indent,|,fullscreen,clip,spellchecker,code,youtube",extended_valid_elements:"img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name|style],"+"hr[class|width|size|noshade],font[face|size|color|style],span[class|align|style]",theme_advanced_toolbar_location:"top",spellchecker_languages:"English=en,+Deutsch=de",theme_advanced_toolbar_align:"center",theme_advanced_statusbar_location:"bottom",theme_advanced_resizing:true,theme_advanced_resize_horizontal:false,accessibility_warnings:false,button_tile_map:true,entity_encoding:"raw",verify_html:false,file_browser_callback:"ajaxfilemanager"})