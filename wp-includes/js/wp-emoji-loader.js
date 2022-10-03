(function(window,document,settings){var src,ready,ii,tests;var canvas=document.createElement('canvas');var context=canvas.getContext&&canvas.getContext('2d');function emojiSetsRenderIdentically(set1,set2){var stringFromCharCode=String.fromCharCode;context.clearRect(0,0,canvas.width,canvas.height);context.fillText(stringFromCharCode.apply(this,set1),0,0);var rendered1=canvas.toDataURL();context.clearRect(0,0,canvas.width,canvas.height);context.fillText(stringFromCharCode.apply(this,set2),0,0);var rendered2=canvas.toDataURL();return rendered1===rendered2;}
function browserSupportsEmoji(type){var isIdentical;if(!context||!context.fillText){return false;}
context.textBaseline='top';context.font='600 32px Arial';switch(type){case 'flag':isIdentical=emojiSetsRenderIdentically([0x1F3F3,0xFE0F,0x200D,0x26A7,0xFE0F],[0x1F3F3,0xFE0F,0x200B,0x26A7,0xFE0F]);if(isIdentical){return false;}
isIdentical=emojiSetsRenderIdentically([0xD83C,0xDDFA,0xD83C,0xDDF3],[0xD83C,0xDDFA,0x200B,0xD83C,0xDDF3]);if(isIdentical){return false;}
isIdentical=emojiSetsRenderIdentically([0xD83C,0xDFF4,0xDB40,0xDC67,0xDB40,0xDC62,0xDB40,0xDC65,0xDB40,0xDC6E,0xDB40,0xDC67,0xDB40,0xDC7F],[0xD83C,0xDFF4,0x200B,0xDB40,0xDC67,0x200B,0xDB40,0xDC62,0x200B,0xDB40,0xDC65,0x200B,0xDB40,0xDC6E,0x200B,0xDB40,0xDC67,0x200B,0xDB40,0xDC7F]);return!isIdentical;case 'emoji':isIdentical=emojiSetsRenderIdentically([0x1FAF1,0x1F3FB,0x200D,0x1FAF2,0x1F3FF],[0x1FAF1,0x1F3FB,0x200B,0x1FAF2,0x1F3FF]);return!isIdentical;}
return false;}
function addScript(src){var script=document.createElement('script');script.src=src;script.defer=script.type='text/javascript';document.getElementsByTagName('head')[0].appendChild(script);}
tests=Array('flag','emoji');settings.supports={everything:true,everythingExceptFlag:true};for(ii=0;ii<tests.length;ii++){settings.supports[tests[ii]]=browserSupportsEmoji(tests[ii]);settings.supports.everything=settings.supports.everything&&settings.supports[tests[ii]];if('flag'!==tests[ii]){settings.supports.everythingExceptFlag=settings.supports.everythingExceptFlag&&settings.supports[tests[ii]];}}
settings.supports.everythingExceptFlag=settings.supports.everythingExceptFlag&&!settings.supports.flag;settings.DOMReady=false;settings.readyCallback=function(){settings.DOMReady=true;};if(!settings.supports.everything){ready=function(){settings.readyCallback();};if(document.addEventListener){document.addEventListener('DOMContentLoaded',ready,false);window.addEventListener('load',ready,false);}else{window.attachEvent('onload',ready);document.attachEvent('onreadystatechange',function(){if('complete'===document.readyState){settings.readyCallback();}});}
src=settings.source||{};if(src.concatemoji){addScript(src.concatemoji);}else if(src.wpemoji&&src.twemoji){addScript(src.twemoji);addScript(src.wpemoji);}}})(window,document,window._wpemojiSettings);