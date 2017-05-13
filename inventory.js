
/*
##############################################
#				Ready JS			         #
#											 #
##############################################
*/

/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function"!==typeof Object.create&&(Object.create=function(d){function h(){}h.prototype=d;return new h});
(function(d,h,l,m){var k={init:function(b,a){var c=this;c.elem=a;c.$elem=d(a);c.imageSrc=c.$elem.data("zoom-image")?c.$elem.data("zoom-image"):c.$elem.attr("src");c.options=d.extend({},d.fn.elevateZoom.options,b);c.options.tint&&(c.options.lensColour="none",c.options.lensOpacity="1");"inner"==c.options.zoomType&&(c.options.showLens=!1);c.$elem.parent().removeAttr("title").removeAttr("alt");c.zoomImage=c.imageSrc;c.refresh(1);d("#"+c.options.gallery+" a").click(function(a){c.options.galleryActiveClass&&
(d("#"+c.options.gallery+" a").removeClass(c.options.galleryActiveClass),d(this).addClass(c.options.galleryActiveClass));a.preventDefault();d(this).data("zoom-image")?c.zoomImagePre=d(this).data("zoom-image"):c.zoomImagePre=d(this).data("image");c.swaptheimage(d(this).data("image"),c.zoomImagePre);return!1})},refresh:function(b){var a=this;setTimeout(function(){a.fetch(a.imageSrc)},b||a.options.refresh)},fetch:function(b){var a=this,c=new Image;c.onload=function(){a.largeWidth=c.width;a.largeHeight=
c.height;a.startZoom();a.currentImage=a.imageSrc;a.options.onZoomedImageLoaded(a.$elem)};c.src=b},startZoom:function(){var b=this;b.nzWidth=b.$elem.width();b.nzHeight=b.$elem.height();b.isWindowActive=!1;b.isLensActive=!1;b.isTintActive=!1;b.overWindow=!1;b.options.imageCrossfade&&(b.zoomWrap=b.$elem.wrap('<div style="height:'+b.nzHeight+"px;width:"+b.nzWidth+'px;" class="zoomWrapper" />'),b.$elem.css("position","absolute"));b.zoomLock=1;b.scrollingLock=!1;b.changeBgSize=!1;b.currentZoomLevel=b.options.zoomLevel;
b.nzOffset=b.$elem.offset();b.widthRatio=b.largeWidth/b.currentZoomLevel/b.nzWidth;b.heightRatio=b.largeHeight/b.currentZoomLevel/b.nzHeight;"window"==b.options.zoomType&&(b.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(b.options.zoomWindowBgColour)+";width: "+String(b.options.zoomWindowWidth)+"px;height: "+String(b.options.zoomWindowHeight)+"px;float: left;background-size: "+b.largeWidth/b.currentZoomLevel+"px "+b.largeHeight/b.currentZoomLevel+
"px;display: none;z-index:100;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;");if("inner"==b.options.zoomType){var a=b.$elem.css("border-left-width");b.zoomWindowStyle="overflow: hidden;margin-left: "+String(a)+";margin-top: "+String(a)+";background-position: 0px 0px;width: "+String(b.nzWidth)+"px;height: "+String(b.nzHeight)+"px;float: left;display: none;cursor:"+b.options.cursor+";px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;"}"window"==
b.options.zoomType&&(lensHeight=b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?b.nzHeight:String(b.options.zoomWindowHeight/b.heightRatio),lensWidth=b.largeWidth<b.options.zoomWindowWidth?b.nzWidth:b.options.zoomWindowWidth/b.widthRatio,b.lensStyle="background-position: 0px 0px;width: "+String(b.options.zoomWindowWidth/b.widthRatio)+"px;height: "+String(b.options.zoomWindowHeight/b.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+
b.options.lensOpacity+";filter: alpha(opacity = "+100*b.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+b.options.lensColour+";cursor:"+b.options.cursor+";border: "+b.options.lensBorderSize+"px solid "+b.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;");b.tintStyle="display: block;position: absolute;background-color: "+b.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+b.nzWidth+"px;height: "+b.nzHeight+"px;";
b.lensRound="";"lens"==b.options.zoomType&&(b.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";width:"+String(b.options.lensSize)+"px;height:"+String(b.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;");"round"==b.options.lensShape&&(b.lensRound="border-top-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-top-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+
"px;border-bottom-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-bottom-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;");b.zoomContainer=d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+b.nzOffset.left+"px;top:"+b.nzOffset.top+"px;height:"+b.nzHeight+"px;width:"+b.nzWidth+'px;"></div>');d("body").append(b.zoomContainer);b.options.containLensZoom&&"lens"==b.options.zoomType&&b.zoomContainer.css("overflow",
"hidden");"inner"!=b.options.zoomType&&(b.zoomLens=d("<div class='zoomLens' style='"+b.lensStyle+b.lensRound+"'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")}),b.options.tint&&(b.tintContainer=d("<div/>").addClass("tintContainer"),b.zoomTint=d("<div class='zoomTint' style='"+b.tintStyle+"'></div>"),b.zoomLens.wrap(b.tintContainer),b.zoomTintcss=b.zoomLens.after(b.zoomTint),b.zoomTintImage=d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+
b.nzWidth+"px; height: "+b.nzHeight+'px;" src="'+b.imageSrc+'">').appendTo(b.zoomLens).click(function(){b.$elem.trigger("click")})));isNaN(b.options.zoomWindowPosition)?b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){b.$elem.trigger("click")}):b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+
"' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")});b.zoomWindowContainer=d("<div/>").addClass("zoomWindowContainer").css("width",b.options.zoomWindowWidth);b.zoomWindow.wrap(b.zoomWindowContainer);"lens"==b.options.zoomType&&b.zoomLens.css({backgroundImage:"url('"+b.imageSrc+"')"});"window"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+"')"});"inner"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+
"')"});b.$elem.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchmove",function(a){"inner"==b.options.zoomType&&b.showHideWindow("show");a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});
b.$elem.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});b.options.showLens&&(b.zoomLens.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])}),b.zoomLens.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")}));
b.$elem.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"!=b.options.zoomType&&b.zoomLens.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),
b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.options.tint&&"inner"!=b.options.zoomType&&b.zoomTint.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"==b.options.zoomType&&b.zoomWindow.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.add(b.$elem).mouseenter(function(){!1==b.overWindow&&
b.setElements("show")}).mouseleave(function(){b.scrollLock||b.setElements("hide")});"inner"!=b.options.zoomType&&b.zoomWindow.mouseenter(function(){b.overWindow=!0;b.setElements("hide")}).mouseleave(function(){b.overWindow=!1});b.minZoomLevel=b.options.minZoomLevel?b.options.minZoomLevel:2*b.options.scrollZoomIncrement;b.options.scrollZoom&&b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){b.scrollLock=!0;clearTimeout(d.data(this,"timer"));d.data(this,"timer",
setTimeout(function(){b.scrollLock=!1},250));var e=a.originalEvent.wheelDelta||-1*a.originalEvent.detail;a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();0<e/120?b.currentZoomLevel>=b.minZoomLevel&&b.changeZoomLevel(b.currentZoomLevel-b.options.scrollZoomIncrement):b.options.maxZoomLevel?b.currentZoomLevel<=b.options.maxZoomLevel&&b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement):b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement);
return!1})},setElements:function(b){if(!this.options.zoomEnabled)return!1;"show"==b&&this.isWindowSet&&("inner"==this.options.zoomType&&this.showHideWindow("show"),"window"==this.options.zoomType&&this.showHideWindow("show"),this.options.showLens&&this.showHideLens("show"),this.options.tint&&"inner"!=this.options.zoomType&&this.showHideTint("show"));"hide"==b&&("window"==this.options.zoomType&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&this.showHideLens("hide"),
this.options.tint&&this.showHideTint("hide"))},setPosition:function(b){if(!this.options.zoomEnabled)return!1;this.nzHeight=this.$elem.height();this.nzWidth=this.$elem.width();this.nzOffset=this.$elem.offset();this.options.tint&&"inner"!=this.options.zoomType&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0}));this.options.responsive&&!this.options.scrollZoom&&this.options.showLens&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/
this.heightRatio),lensWidth=this.largeWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"lens"!=this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/
this.widthRatio,this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight),this.options.tint&&(this.zoomTintImage.css("width",this.nzWidth),this.zoomTintImage.css("height",this.nzHeight))),"lens"==this.options.zoomType&&this.zoomLens.css({width:String(this.options.lensSize)+"px",height:String(this.options.lensSize)+"px"}));this.zoomContainer.css({top:this.nzOffset.top});this.zoomContainer.css({left:this.nzOffset.left});this.mouseLeft=parseInt(b.pageX-this.nzOffset.left);this.mouseTop=
parseInt(b.pageY-this.nzOffset.top);"window"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorderSize);"inner"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-
this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize);0>=this.mouseLeft||0>this.mouseTop||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),
this.Eloppos&&(this.tintpos=this.lensLeftPos=this.windowLeftPos=0),"window"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),"inner"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),
"lens"==this.options.zoomType&&(this.windowLeftPos=String(-1*((b.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((b.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+
"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPostition(b)),this.options.tint&&"inner"!=this.options.zoomType&&
this.setTintPosition(b),"window"==this.options.zoomType&&this.setWindowPostition(b),"inner"==this.options.zoomType&&this.setWindowPostition(b),this.options.showLens&&(this.fullwidth&&"lens"!=this.options.zoomType&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos+"px",top:this.lensTopPos+"px"})))},showHideWindow:function(b){"show"!=b||this.isWindowActive||(this.options.zoomWindowFadeIn?this.zoomWindow.stop(!0,!0,!1).fadeIn(this.options.zoomWindowFadeIn):this.zoomWindow.show(),this.isWindowActive=
!0);"hide"==b&&this.isWindowActive&&(this.options.zoomWindowFadeOut?this.zoomWindow.stop(!0,!0).fadeOut(this.options.zoomWindowFadeOut):this.zoomWindow.hide(),this.isWindowActive=!1)},showHideLens:function(b){"show"!=b||this.isLensActive||(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show(),this.isLensActive=!0);"hide"==b&&this.isLensActive&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide(),
this.isLensActive=!1)},showHideTint:function(b){"show"!=b||this.isTintActive||(this.options.zoomTintFadeIn?this.zoomTint.css({opacity:this.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css({opacity:this.options.tintOpacity}).animate(),this.zoomTint.show()),this.isTintActive=!0);"hide"==b&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPostition:function(b){},
setWindowPostition:function(b){var a=this;if(isNaN(a.options.zoomWindowPosition))a.externalContainer=d("#"+a.options.zoomWindowPosition),a.externalContainerWidth=a.externalContainer.width(),a.externalContainerHeight=a.externalContainer.height(),a.externalContainerOffset=a.externalContainer.offset(),a.windowOffsetTop=a.externalContainerOffset.top,a.windowOffsetLeft=a.externalContainerOffset.left;else switch(a.options.zoomWindowPosition){case 1:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=
+a.nzWidth;break;case 2:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=a.nzWidth);break;case 3:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=a.nzWidth;break;case 4:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth;break;case 5:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 6:a.options.zoomWindowHeight>
a.nzHeight&&(a.windowOffsetTop=a.nzHeight,a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 7:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=0;break;case 8:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 9:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 10:a.options.zoomWindowHeight>a.nzHeight&&
(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize));break;case 11:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 12:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 13:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=
0;break;case 14:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize),a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 15:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 16:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth;break;default:a.windowOffsetTop=
a.options.zoomWindowOffety,a.windowOffsetLeft=a.nzWidth}a.isWindowSet=!0;a.windowOffsetTop+=a.options.zoomWindowOffety;a.windowOffsetLeft+=a.options.zoomWindowOffetx;a.zoomWindow.css({top:a.windowOffsetTop});a.zoomWindow.css({left:a.windowOffsetLeft});"inner"==a.options.zoomType&&(a.zoomWindow.css({top:0}),a.zoomWindow.css({left:0}));a.windowLeftPos=String(-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2));a.windowTopPos=String(-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/
2));a.Etoppos&&(a.windowTopPos=0);a.Eloppos&&(a.windowLeftPos=0);a.Eboppos&&(a.windowTopPos=-1*(a.largeHeight/a.currentZoomLevel-a.zoomWindow.height()));a.Eroppos&&(a.windowLeftPos=-1*(a.largeWidth/a.currentZoomLevel-a.zoomWindow.width()));a.fullheight&&(a.windowTopPos=0);a.fullwidth&&(a.windowLeftPos=0);if("window"==a.options.zoomType||"inner"==a.options.zoomType)1==a.zoomLock&&(1>=a.widthRatio&&(a.windowLeftPos=0),1>=a.heightRatio&&(a.windowTopPos=0)),a.largeHeight<a.options.zoomWindowHeight&&(a.windowTopPos=
0),a.largeWidth<a.options.zoomWindowWidth&&(a.windowLeftPos=0),a.options.easing?(a.xp||(a.xp=0),a.yp||(a.yp=0),a.loop||(a.loop=setInterval(function(){a.xp+=(a.windowLeftPos-a.xp)/a.options.easingAmount;a.yp+=(a.windowTopPos-a.yp)/a.options.easingAmount;a.scrollingLock?(clearInterval(a.loop),a.xp=a.windowLeftPos,a.yp=a.windowTopPos,a.xp=-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2),a.yp=-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/2),a.changeBgSize&&(a.nzHeight>
a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),
a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+"px "+a.windowTopPos+"px"}),a.scrollingLock=!1,a.loop=!1):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+
"px "+a.largeHeight/a.newvaluewidth+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.xp+"px "+a.yp+"px"}))},16))):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/
a.newvalueheight+"px"})):("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}),a.largeHeight/a.newvaluewidth<a.options.zoomWindowHeight?a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}):a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+
"px "+a.windowTopPos+"px"}))},setTintPosition:function(b){this.nzOffset=this.$elem.offset();this.tintpos=String(-1*(b.pageX-this.nzOffset.left-this.zoomLens.width()/2));this.tintposy=String(-1*(b.pageY-this.nzOffset.top-this.zoomLens.height()/2));this.Etoppos&&(this.tintposy=0);this.Eloppos&&(this.tintpos=0);this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize));this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize));
this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos+"px"}),this.zoomTintImage.css({top:this.tintposy+"px"}))},swaptheimage:function(b,a){var c=this,e=new Image;c.options.loadingIcon&&(c.spinner=d("<div style=\"background: url('"+c.options.loadingIcon+"') no-repeat center;height:"+c.nzHeight+"px;width:"+c.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),c.$elem.after(c.spinner));
c.options.onImageSwap(c.$elem);e.onload=function(){c.largeWidth=e.width;c.largeHeight=e.height;c.zoomImage=a;c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.swapAction(b,a)};e.src=a},swapAction:function(b,a){var c=this,e=new Image;e.onload=function(){c.nzHeight=e.height;c.nzWidth=e.width;c.options.onImageSwapComplete(c.$elem);c.doneCallback()};e.src=b;c.currentZoomLevel=c.options.zoomLevel;c.options.maxZoomLevel=
!1;"lens"==c.options.zoomType&&c.zoomLens.css({backgroundImage:"url('"+a+"')"});"window"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});"inner"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});c.currentImage=a;if(c.options.imageCrossfade){var f=c.$elem,g=f.clone();c.$elem.attr("src",b);c.$elem.after(g);g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()});c.$elem.width("auto").removeAttr("width");c.$elem.height("auto").removeAttr("height");
f.fadeIn(c.options.imageCrossfade);c.options.tint&&"inner"!=c.options.zoomType&&(f=c.zoomTintImage,g=f.clone(),c.zoomTintImage.attr("src",a),c.zoomTintImage.after(g),g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()}),f.fadeIn(c.options.imageCrossfade),c.zoomTint.css({height:c.$elem.height()}),c.zoomTint.css({width:c.$elem.width()}));c.zoomContainer.css("height",c.$elem.height());c.zoomContainer.css("width",c.$elem.width());"inner"!=c.options.zoomType||c.options.constrainType||
(c.zoomWrap.parent().css("height",c.$elem.height()),c.zoomWrap.parent().css("width",c.$elem.width()),c.zoomWindow.css("height",c.$elem.height()),c.zoomWindow.css("width",c.$elem.width()))}else c.$elem.attr("src",b),c.options.tint&&(c.zoomTintImage.attr("src",a),c.zoomTintImage.attr("height",c.$elem.height()),c.zoomTintImage.css({height:c.$elem.height()}),c.zoomTint.css({height:c.$elem.height()})),c.zoomContainer.css("height",c.$elem.height()),c.zoomContainer.css("width",c.$elem.width());c.options.imageCrossfade&&
(c.zoomWrap.css("height",c.$elem.height()),c.zoomWrap.css("width",c.$elem.width()));c.options.constrainType&&("height"==c.options.constrainType&&(c.zoomContainer.css("height",c.options.constrainSize),c.zoomContainer.css("width","auto"),c.options.imageCrossfade?(c.zoomWrap.css("height",c.options.constrainSize),c.zoomWrap.css("width","auto"),c.constwidth=c.zoomWrap.width()):(c.$elem.css("height",c.options.constrainSize),c.$elem.css("width","auto"),c.constwidth=c.$elem.width()),"inner"==c.options.zoomType&&
(c.zoomWrap.parent().css("height",c.options.constrainSize),c.zoomWrap.parent().css("width",c.constwidth),c.zoomWindow.css("height",c.options.constrainSize),c.zoomWindow.css("width",c.constwidth)),c.options.tint&&(c.tintContainer.css("height",c.options.constrainSize),c.tintContainer.css("width",c.constwidth),c.zoomTint.css("height",c.options.constrainSize),c.zoomTint.css("width",c.constwidth),c.zoomTintImage.css("height",c.options.constrainSize),c.zoomTintImage.css("width",c.constwidth))),"width"==
c.options.constrainType&&(c.zoomContainer.css("height","auto"),c.zoomContainer.css("width",c.options.constrainSize),c.options.imageCrossfade?(c.zoomWrap.css("height","auto"),c.zoomWrap.css("width",c.options.constrainSize),c.constheight=c.zoomWrap.height()):(c.$elem.css("height","auto"),c.$elem.css("width",c.options.constrainSize),c.constheight=c.$elem.height()),"inner"==c.options.zoomType&&(c.zoomWrap.parent().css("height",c.constheight),c.zoomWrap.parent().css("width",c.options.constrainSize),c.zoomWindow.css("height",
c.constheight),c.zoomWindow.css("width",c.options.constrainSize)),c.options.tint&&(c.tintContainer.css("height",c.constheight),c.tintContainer.css("width",c.options.constrainSize),c.zoomTint.css("height",c.constheight),c.zoomTint.css("width",c.options.constrainSize),c.zoomTintImage.css("height",c.constheight),c.zoomTintImage.css("width",c.options.constrainSize))))},doneCallback:function(){this.options.loadingIcon&&this.spinner.hide();this.nzOffset=this.$elem.offset();this.nzWidth=this.$elem.width();
this.nzHeight=this.$elem.height();this.currentZoomLevel=this.options.zoomLevel;this.widthRatio=this.largeWidth/this.nzWidth;this.heightRatio=this.largeHeight/this.nzHeight;"window"==this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&(this.zoomLens.css("width",
lensWidth),this.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var b=this;b.gallerylist=[];b.options.gallery?d("#"+b.options.gallery+" a").each(function(){var a="";d(this).data("zoom-image")?a=d(this).data("zoom-image"):d(this).data("image")&&(a=d(this).data("image"));a==b.zoomImage?b.gallerylist.unshift({href:""+a+"",title:d(this).find("img").attr("title")}):b.gallerylist.push({href:""+a+"",title:d(this).find("img").attr("title")})}):
b.gallerylist.push({href:""+b.zoomImage+"",title:d(this).find("img").attr("title")});return b.gallerylist},changeZoomLevel:function(b){this.scrollingLock=!0;this.newvalue=parseFloat(b).toFixed(2);newvalue=parseFloat(b).toFixed(2);maxheightnewvalue=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight);maxwidthtnewvalue=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth);"inner"!=this.options.zoomType&&(maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
maxheightnewvalue/this.nzHeight,this.newvalueheight=maxheightnewvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/maxwidthtnewvalue/this.nzWidth,this.newvaluewidth=maxwidthtnewvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1),"lens"==this.options.zoomType&&(maxheightnewvalue<=newvalue?
(this.fullwidth=!0,this.newvaluewidth=maxheightnewvalue):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1)));"inner"==this.options.zoomType&&(maxheightnewvalue=parseFloat(this.largeHeight/this.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(this.largeWidth/this.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue>maxwidthtnewvalue?maxwidthtnewvalue:newvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=
newvalue,this.fullwidth=!1));scrcontinue=!1;"inner"==this.options.zoomType&&(this.nzWidth>this.nzHeight&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)));"inner"!=this.options.zoomType&&(scrcontinue=!0);scrcontinue&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&
(this.currentZoomLevel=this.newvalueheight,"lens"!=this.options.zoomType&&"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({height:String(this.options.zoomWindowHeight/this.heightRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&("inner"!=this.options.zoomType&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),"lens"!=this.options.zoomType&&
"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({width:String(this.options.zoomWindowWidth/this.widthRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),"inner"==this.options.zoomType&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight&&(this.currentZoomLevel=this.newvaluewidth),this.nzHeight>this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth)));this.setPosition(this.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide();
self.zoomLens&&self.zoomLens.hide();self.zoomTint&&self.zoomTint.hide()},changeState:function(b){"enable"==b&&(this.options.zoomEnabled=!0);"disable"==b&&(this.options.zoomEnabled=!1)}};d.fn.elevateZoom=function(b){return this.each(function(){var a=Object.create(k);a.init(b,this);d.data(this,"elevateZoom",a)})};d.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:0.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,
zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:0.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:0.4,gallery:!1,
galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:d.noop,onZoomedImageLoaded:function(){},onImageSwap:d.noop,onImageSwapComplete:d.noop}})(jQuery,window,document);

if(!$.fn.tagsInput){
    !function(a){var b=new Array,c=new Array;a.fn.doAutosize=function(b){var c=a(this).data("minwidth"),d=a(this).data("maxwidth"),e="",f=a(this),g=a("#"+a(this).data("tester_id"));if(e!==(e=f.val())){var h=e.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");g.html(h);var i=g.width(),j=i+b.comfortZone>=c?i+b.comfortZone:c,k=f.width(),l=k>j&&j>=c||j>c&&d>j;l&&f.width(j)}},a.fn.resetAutosize=function(b){var c=a(this).data("minwidth")||b.minInputWidth||a(this).width(),d=a(this).data("maxwidth")||b.maxInputWidth||a(this).closest(".tagsinput").width()-b.inputPadding,e=a(this),f=a("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily"),fontWeight:e.css("fontWeight"),letterSpacing:e.css("letterSpacing"),whiteSpace:"nowrap"}),g=a(this).attr("id")+"_autosize_tester";!a("#"+g).length>0&&(f.attr("id",g),f.appendTo("body")),e.data("minwidth",c),e.data("maxwidth",d),e.data("tester_id",g),e.css("width",c)},a.fn.addTag=function(d,e){return e=jQuery.extend({focus:!1,callback:!0},e),this.each(function(){var f=a(this).attr("id"),g=a(this).val().split(b[f]);if(""==g[0]&&(g=new Array),d=jQuery.trim(d),e.unique){var h=a(this).tagExist(d);1==h&&a("#"+f+"_tag").addClass("not_valid")}else var h=!1;if(""!=d&&1!=h){if(a("<span>").addClass("tag").append(a("<span>").text(d).append("&nbsp;&nbsp;"),a("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return a("#"+f).removeTag(escape(d))})).insertBefore("#"+f+"_addTag"),g.push(d),a("#"+f+"_tag").val(""),e.focus?a("#"+f+"_tag").focus():a("#"+f+"_tag").blur(),a.fn.tagsInput.updateTagsField(this,g),e.callback&&c[f]&&c[f].onAddTag){var i=c[f].onAddTag;i.call(this,d)}if(c[f]&&c[f].onChange){var j=g.length,i=c[f].onChange;i.call(this,a(this),g[j-1])}}}),!1},a.fn.removeTag=function(d){return d=unescape(d),this.each(function(){var e=a(this).attr("id"),f=a(this).val().split(b[e]);for(a("#"+e+"_tagsinput .tag").remove(),str="",i=0;i<f.length;i++)f[i]!=d&&(str=str+b[e]+f[i]);if(a.fn.tagsInput.importTags(this,str),c[e]&&c[e].onRemoveTag){var g=c[e].onRemoveTag;g.call(this,d)}}),!1},a.fn.tagExist=function(c){var d=a(this).attr("id"),e=a(this).val().split(b[d]);return jQuery.inArray(c,e)>=0},a.fn.importTags=function(b){var c=a(this).attr("id");a("#"+c+"_tagsinput .tag").remove(),a.fn.tagsInput.importTags(this,b)},a.fn.tagsInput=function(e){var f=jQuery.extend({interactive:!0,defaultText:"add a tag",minChars:0,width:"300px",height:"100px",autocomplete:{selectFirst:!1},hide:!0,delimiter:",",unique:!0,removeWithBackspace:!0,placeholderColor:"#666666",autosize:!0,comfortZone:20,inputPadding:12},e),g=0;return this.each(function(){if("undefined"==typeof a(this).attr("data-tagsinput-init")){a(this).attr("data-tagsinput-init",!0),f.hide&&a(this).hide();var e=a(this).attr("id");(!e||b[a(this).attr("id")])&&(e=a(this).attr("id","tags"+(new Date).getTime()+g++).attr("id"));var h=jQuery.extend({pid:e,real_input:"#"+e,holder:"#"+e+"_tagsinput",input_wrapper:"#"+e+"_addTag",fake_input:"#"+e+"_tag"},f);b[e]=h.delimiter,(f.onAddTag||f.onRemoveTag||f.onChange)&&(c[e]=new Array,c[e].onAddTag=f.onAddTag,c[e].onRemoveTag=f.onRemoveTag,c[e].onChange=f.onChange);var i='<div id="'+e+'_tagsinput" class="tagsinput"><div id="'+e+'_addTag">';if(f.interactive&&(i=i+'<input id="'+e+'_tag" value="" data-default="'+f.defaultText+'" />'),i+='</div><div class="tags_clear"></div></div>',a(i).insertAfter(this),a(h.holder).css("width",f.width),a(h.holder).css("min-height",f.height),a(h.holder).css("height",f.height),""!=a(h.real_input).val()&&a.fn.tagsInput.importTags(a(h.real_input),a(h.real_input).val()),f.interactive){if(a(h.fake_input).val(a(h.fake_input).attr("data-default")),a(h.fake_input).css("color",f.placeholderColor),a(h.fake_input).resetAutosize(f),a(h.holder).bind("click",h,function(b){a(b.data.fake_input).focus()}),a(h.fake_input).bind("focus",h,function(b){a(b.data.fake_input).val()==a(b.data.fake_input).attr("data-default")&&a(b.data.fake_input).val(""),a(b.data.fake_input).css("color","#000000")}),void 0!=f.autocomplete_url){autocomplete_options={source:f.autocomplete_url};for(attrname in f.autocomplete)autocomplete_options[attrname]=f.autocomplete[attrname];void 0!==jQuery.Autocompleter?(a(h.fake_input).autocomplete(f.autocomplete_url,f.autocomplete),a(h.fake_input).bind("result",h,function(b,c,d){c&&a("#"+e).addTag(c[0]+"",{focus:!0,unique:f.unique})})):void 0!==jQuery.ui.autocomplete&&(a(h.fake_input).autocomplete(autocomplete_options),a(h.fake_input).bind("autocompleteselect",h,function(b,c){return a(b.data.real_input).addTag(c.item.value,{focus:!0,unique:f.unique}),!1}))}else a(h.fake_input).bind("blur",h,function(b){var c=a(this).attr("data-default");return""!=a(b.data.fake_input).val()&&a(b.data.fake_input).val()!=c?b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length)&&a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:!0,unique:f.unique}):(a(b.data.fake_input).val(a(b.data.fake_input).attr("data-default")),a(b.data.fake_input).css("color",f.placeholderColor)),!1});a(h.fake_input).bind("keypress",h,function(b){return d(b)?(b.preventDefault(),b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length)&&a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:!0,unique:f.unique}),a(b.data.fake_input).resetAutosize(f),!1):void(b.data.autosize&&a(b.data.fake_input).doAutosize(f))}),h.removeWithBackspace&&a(h.fake_input).bind("keydown",function(b){if(8==b.keyCode&&""==a(this).val()){b.preventDefault();var c=a(this).closest(".tagsinput").find(".tag:last").text(),d=a(this).attr("id").replace(/_tag$/,"");c=c.replace(/[\s]+x$/,""),a("#"+d).removeTag(escape(c)),a(this).trigger("focus")}}),a(h.fake_input).blur(),h.unique&&a(h.fake_input).keydown(function(b){(8==b.keyCode||String.fromCharCode(b.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/))&&a(this).removeClass("not_valid")})}}}),this},a.fn.tagsInput.updateTagsField=function(c,d){var e=a(c).attr("id");a(c).val(d.join(b[e]))},a.fn.tagsInput.importTags=function(d,e){a(d).val("");var f=a(d).attr("id"),g=e.split(b[f]);for(i=0;i<g.length;i++)a(d).addTag(g[i],{focus:!1,callback:!1});if(c[f]&&c[f].onChange){var h=c[f].onChange;h.call(d,d,g[i])}};var d=function(b){var c=!1;return 13==b.which?!0:("string"==typeof b.data.delimiter?b.which==b.data.delimiter.charCodeAt(0)&&(c=!0):a.each(b.data.delimiter,function(a,d){b.which==d.charCodeAt(0)&&(c=!0)}),c)}}(jQuery);
    $("body").append('<style type="text/css">div.tagsinput{border:1px solid #CCC;background:#FFF;padding:5px;width:300px;height:100px;overflow-y:auto}div.tagsinput span.tag{border:1px solid #a5d24a;-moz-border-radius:2px;-webkit-border-radius:2px;display:block;float:left;padding:5px;text-decoration:none;background:#cde69c;color:#638421;margin-right:5px;margin-bottom:5px;font-family:helvetica;font-size:13px}div.tagsinput span.tag a{font-weight:700;color:#82ad2b;text-decoration:none;font-size:11px}div.tagsinput input{width:80px;margin:0 5px 5px 0;font-family:helvetica;font-size:13px;border:1px solid transparent;padding:5px;background:0 0;color:#000;outline:0}div.tagsinput div{display:block;float:left}.tags_clear{clear:both;width:100%;height:0}.not_valid{background:#FBD8DB!important;color:#90111A!important} div.tagsinput input {width: 190px !important;}</style>');
}


if(!$.fn.jsSocials){
!function(a,b,c){function d(a,c){var d=b(a);d.data(f,this),this._$element=d,this.shares=[],this._init(c),this._render()}var e="JSSocials",f=e,g=function(a,c){return b.isFunction(a)?a.apply(c,b.makeArray(arguments).slice(2)):a},h=/(\.(jpeg|png|gif|bmp|svg\+xml)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,i=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,j={G:1e9,M:1e6,K:1e3},k={};d.prototype={url:"",text:"",shareIn:"blank",showLabel:function(a){return this.showCount===!1?a>this.smallScreenWidth:a>=this.largeScreenWidth},showCount:function(a){return a<=this.smallScreenWidth?"inside":!0},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(a){this._initDefaults(),b.extend(this,a),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=a.location.href,this.text=b.trim(b("meta[name=description]").attr("content")||b("title").text())},_initShares:function(){this.shares=b.map(this.shares,b.proxy(function(a){"string"==typeof a&&(a={share:a});var c=a.share&&k[a.share];if(!c&&!a.renderer)throw Error("Share '"+a.share+"' is not found");return b.extend({url:this.url,text:this.text},c,a)},this))},_attachWindowResizeCallback:function(){b(a).on("resize",b.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){b(a).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(b.isFunction(this.showLabel)||b.isFunction(this.showCount))&&(a.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(b.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=b("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=b(a).width(),this._showLabel=g(this.showLabel,this,this._screenWidth),this._showCount=g(this.showCount,this,this._screenWidth)},_renderShares:function(){b.each(this.shares,b.proxy(function(a,b){this._renderShare(b)},this))},_renderShare:function(a){var c;c=b.isFunction(a.renderer)?b(a.renderer()):this._createShare(a),c.addClass(this.shareClass).addClass(a.share?"jssocials-share-"+a.share:"").addClass(a.css).appendTo(this._$shares)},_createShare:function(a){var c=b("<div>"),d=this._createShareLink(a).appendTo(c);if(this._showCount){var e="inside"===this._showCount,f=e?d:b("<div>").addClass(this.shareCountBoxClass).appendTo(c);f.addClass(e?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(a,f)}return c},_createShareLink:function(a){var c=this._getShareStrategy(a),d=c.call(a,{shareUrl:this._getShareUrl(a)});return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)),this._showLabel&&d.append(this._createShareLabel(a)),b.each(this.on||{},function(c,e){b.isFunction(e)&&d.on(c,b.proxy(e,a))}),d},_getShareStrategy:function(a){var b=m[a.shareIn||this.shareIn];if(!b)throw Error("Share strategy '"+this.shareIn+"' not found");return b},_getShareUrl:function(a){var b=g(a.shareUrl,a);return this._formatShareUrl(b,a)},_createShareLogo:function(a){var c=a.logo,d=h.test(c)?b("<img>").attr("src",a.logo):b("<i>").addClass(c);return d.addClass(this.shareLogoClass),d},_createShareLabel:function(a){return b("<span>").addClass(this.shareLabelClass).text(a.label)},_renderShareCount:function(a,c){var d=b("<span>").addClass(this.shareCountClass);c.addClass(this.shareZeroCountClass).append(d),this._loadCount(a).done(b.proxy(function(a){a&&(c.removeClass(this.shareZeroCountClass),d.text(a))},this))},_loadCount:function(a){var c=b.Deferred(),d=this._getCountUrl(a);if(!d)return c.resolve(0).promise();var e=b.proxy(function(b){c.resolve(this._getCountValue(b,a))},this);return b.getJSON(d).done(e).fail(function(){b.get(d).done(e).fail(function(){c.resolve(0)})}),c.promise()},_getCountUrl:function(a){var b=g(a.countUrl,a);return this._formatShareUrl(b,a)},_getCountValue:function(a,c){var d=(b.isFunction(c.getCount)?c.getCount(a):a)||0;return"string"==typeof d?d:this._formatNumber(d)},_formatNumber:function(a){return b.each(j,function(b,c){return a>=c?(a=parseFloat((a/c).toFixed(2))+b,!1):void 0}),a},_formatShareUrl:function(b,c){return b.replace(i,function(b,d,e){var f=c[e]||"";return f?(d||"")+a.encodeURIComponent(f):""})},_clear:function(){a.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(a,c){var d=this.shares;b.each(["url","text"],function(e,f){f===a&&b.each(d,function(b,d){d[a]=c})})},_normalizeShare:function(a){return b.isNumeric(a)?this.shares[a]:"string"==typeof a?b.grep(this.shares,function(b){return b.share===a})[0]:a},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(f)},option:function(a,b){return 1===arguments.length?this[a]:(this[a]=b,this._passOptionToShares(a,b),void this.refresh())},shareOption:function(a,b,c){return a=this._normalizeShare(a),2===arguments.length?a[b]:(a[b]=c,void this.refresh())}},b.fn.jsSocials=function(a){var e=b.makeArray(arguments),g=e.slice(1),h=this;return this.each(function(){var e,i=b(this),j=i.data(f);if(j)if("string"==typeof a){if(e=j[a].apply(j,g),e!==c&&e!==j)return h=e,!1}else j._detachWindowResizeCallback(),j._init(a),j._render();else new d(i,a)}),h};var l=function(a){var c;b.isPlainObject(a)?c=d.prototype:(c=k[a],a=arguments[1]||{}),b.extend(c,a)},m={popup:function(c){return b("<a>").attr("href","#").on("click",function(){return a.open(c.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(a){return b("<a>").attr({target:"_blank",href:a.shareUrl})},self:function(a){return b("<a>").attr({target:"_self",href:a.shareUrl})}};a.jsSocials={Socials:d,shares:k,shareStrategies:m,setDefaults:l}}(window,jQuery),function(a,b,c){b.extend(c.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"http://graph.facebook.com/?id={url}",getCount:function(a){return a.share&&a.share.share_count||0}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:"https://cors-anywhere.herokuapp.com/https://plusone.google.com/_/+1/fastbutton?url={url}",getCount:function(a){return parseFloat((a.match(/\{c: ([.0-9E]+)/)||[])[1])}},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(a){return a.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(a){return a.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(a){return a.result.views}},telegram:{label:"Telegram",logo:"fa fa-paper-plane",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""}})}(window,jQuery,window.jsSocials);
}

var ready = (function(){

    var readyList,
        DOMContentLoaded,
        class2type = {};
        class2type["[object Boolean]"] = "boolean";
        class2type["[object Number]"] = "number";
        class2type["[object String]"] = "string";
        class2type["[object Function]"] = "function";
        class2type["[object Array]"] = "array";
        class2type["[object Date]"] = "date";
        class2type["[object RegExp]"] = "regexp";
        class2type["[object Object]"] = "object";

    var ReadyObj = {
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Hold (or release) the ready event
        holdReady: function( hold ) {
            if ( hold ) {
                ReadyObj.readyWait++;
            } else {
                ReadyObj.ready( true );
            }
        },
        // Handle when the DOM is ready
        ready: function( wait ) {
            // Either a released hold or an DOMready/load event and not yet ready
            if ( (wait === true && !--ReadyObj.readyWait) || (wait !== true && !ReadyObj.isReady) ) {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if ( !document.body ) {
                    return setTimeout( ReadyObj.ready, 1 );
                }

                // Remember that the DOM is ready
                ReadyObj.isReady = true;
                // If a normal DOM Ready event fired, decrement, and wait if need be
                if ( wait !== true && --ReadyObj.readyWait > 0 ) {
                    return;
                }
                // If there are functions bound, to execute
                readyList.resolveWith( document, [ ReadyObj ] );

                // Trigger any bound ready events
                //if ( ReadyObj.fn.trigger ) {
                //    ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
                //}
            }
        },
        bindReady: function() {
            if ( readyList ) {
                return;
            }
            readyList = ReadyObj._Deferred();

            // Catch cases where $(document).ready() is called after the
            // browser event has already occurred.
            if ( document.readyState === "complete" ) {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                return setTimeout( ReadyObj.ready, 1 );
            }

            // Mozilla, Opera and webkit nightlies currently support this event
            if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                // A fallback to window.onload, that will always work
                window.addEventListener( "load", ReadyObj.ready, false );

            // If IE event model is used
            } else if ( document.attachEvent ) {
                // ensure firing before onload,
                // maybe late but safe also for iframes
                document.attachEvent( "onreadystatechange", DOMContentLoaded );

                // A fallback to window.onload, that will always work
                window.attachEvent( "onload", ReadyObj.ready );

                // If IE and not a frame
                // continually check to see if the document is ready
                var toplevel = false;

                try {
                    toplevel = window.frameElement == null;
                } catch(e) {}

                if ( document.documentElement.doScroll && toplevel ) {
                    doScrollCheck();
                }
            }
        },
        _Deferred: function() {
            var // callbacks list
                callbacks = [],
                // stored [ context , args ]
                fired,
                // to avoid firing when already doing so
                firing,
                // flag to know if the deferred has been cancelled
                cancelled,
                // the deferred itself
                deferred  = {

                    // done( f1, f2, ...)
                    done: function() {
                        if ( !cancelled ) {
                            var args = arguments,
                                i,
                                length,
                                elem,
                                type,
                                _fired;
                            if ( fired ) {
                                _fired = fired;
                                fired = 0;
                            }
                            for ( i = 0, length = args.length; i < length; i++ ) {
                                elem = args[ i ];
                                type = ReadyObj.type( elem );
                                if ( type === "array" ) {
                                    deferred.done.apply( deferred, elem );
                                } else if ( type === "function" ) {
                                    callbacks.push( elem );
                                }
                            }
                            if ( _fired ) {
                                deferred.resolveWith( _fired[ 0 ], _fired[ 1 ] );
                            }
                        }
                        return this;
                    },

                    // resolve with given context and args
                    resolveWith: function( context, args ) {
                        if ( !cancelled && !fired && !firing ) {
                            // make sure args are available (#8421)
                            args = args || [];
                            firing = 1;
                            try {
                                while( callbacks[ 0 ] ) {
                                    callbacks.shift().apply( context, args );//shifts a callback, and applies it to document
                                }
                            }
                            finally {
                                fired = [ context, args ];
                                firing = 0;
                            }
                        }
                        return this;
                    },

                    // resolve with this as context and given arguments
                    resolve: function() {
                        deferred.resolveWith( this, arguments );
                        return this;
                    },

                    // Has this deferred been resolved?
                    isResolved: function() {
                        return !!( firing || fired );
                    },

                    // Cancel
                    cancel: function() {
                        cancelled = 1;
                        callbacks = [];
                        return this;
                    }
                };

            return deferred;
        },
        type: function( obj ) {
            return obj == null ?
                String( obj ) :
                class2type[ Object.prototype.toString.call(obj) ] || "object";
        }
    }
    // The DOM ready check for Internet Explorer
    function doScrollCheck() {
        if ( ReadyObj.isReady ) {
            return;
        }

        try {
            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            document.documentElement.doScroll("left");
        } catch(e) {
            setTimeout( doScrollCheck, 1 );
            return;
        }

        // and execute any waiting functions
        ReadyObj.ready();
    }
    // Cleanup functions for the document ready method
    if ( document.addEventListener ) {
        DOMContentLoaded = function() {
            document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
            ReadyObj.ready();
        };

    } else if ( document.attachEvent ) {
        DOMContentLoaded = function() {
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if ( document.readyState === "complete" ) {
                document.detachEvent( "onreadystatechange", DOMContentLoaded );
                ReadyObj.ready();
            }
        };
    }
    function ready( fn ) {
        // Attach the listeners
        ReadyObj.bindReady();

        var type = ReadyObj.type( fn );

        // Add the callback
        readyList.done( fn );//readyList is result of _Deferred()
    }
    return ready;
})();


function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

var serialize = function(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}




function makeid(length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function bindTagsInv(){
	var x = document.getElementsByClassName("sync-orkivinv");
     			for (var n = x.length - 1; n >= 0; n--) {
     				 var eleent =  x[n];
     				 var i = eleent.dataset.type;
     				 console.log(i);
     		
     				 document.getElementsByClassName("sync-orkivinv")[n].onclick = function(){

     				 		console.log("event");
     				 		return false
     				 	};

     				 if(i == "cart"){

     				 

     				 } else if(i == "buy"){
     				 	
     				 } else if(i == "wishlist"){
     				 	
     				 } else if(i == "checkout"){
     				 	
     				 } else if(i == "vwishlist"){
     				 	
     				 }
     			};
}


function hideInventoryModal(){

   if($(".inv-iframe-holder .inv-iframe-module").length > 0){
   if(  $(".inv-iframe-holder .inv-iframe-module").css('display') == "none"){
     $(".inv-iframe-holder-in").css('display','none');
      $(".inv-iframe-holder .inv-iframe-module").css('display','block');
       document.getElementById("InventoryIframe").src = "https://orkiv.com/i/loading.php";
       GetCardNSuch();
   } else {
        $(".inv-iframe-holder-in").css('display','block');
        $(".inv-iframe-holder .inv-iframe-module").remove();

           var x = document.getElementsByClassName("inv-to-fade");
                    x[0].className = x[0].className.replace("faded","");
                    x[1].className = x[1].className.replace("faded","");
                    $inventoryStandard.modal = false;
                 document.getElementById("InventoryIframe").src = "https://orkiv.com/i/loading.php";
   }
      
    } else {
      var x = document.getElementsByClassName("inv-to-fade");
                    x[0].className = x[0].className.replace("faded","");
                    x[1].className = x[1].className.replace("faded","");
                    $inventoryStandard.modal = false;
                 document.getElementById("InventoryIframe").src = "https://orkiv.com/i/loading.php";
    }
 
  

}


/*
##############################################
#				Orkiv inventory	             #
#											 #
##############################################
*/
var stripeMod = "";
if(!$.fn.jsSocials){
!function(a,b,c){function d(a,c){var d=b(a);d.data(f,this),this._$element=d,this.shares=[],this._init(c),this._render()}var e="JSSocials",f=e,g=function(a,c){return b.isFunction(a)?a.apply(c,b.makeArray(arguments).slice(2)):a},h=/(\.(jpeg|png|gif|bmp|svg\+xml)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,i=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,j={G:1e9,M:1e6,K:1e3},k={};d.prototype={url:"",text:"",shareIn:"blank",showLabel:function(a){return this.showCount===!1?a>this.smallScreenWidth:a>=this.largeScreenWidth},showCount:function(a){return a<=this.smallScreenWidth?"inside":!0},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(a){this._initDefaults(),b.extend(this,a),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=a.location.href,this.text=b.trim(b("meta[name=description]").attr("content")||b("title").text())},_initShares:function(){this.shares=b.map(this.shares,b.proxy(function(a){"string"==typeof a&&(a={share:a});var c=a.share&&k[a.share];if(!c&&!a.renderer)throw Error("Share '"+a.share+"' is not found");return b.extend({url:this.url,text:this.text},c,a)},this))},_attachWindowResizeCallback:function(){b(a).on("resize",b.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){b(a).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(b.isFunction(this.showLabel)||b.isFunction(this.showCount))&&(a.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(b.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=b("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=b(a).width(),this._showLabel=g(this.showLabel,this,this._screenWidth),this._showCount=g(this.showCount,this,this._screenWidth)},_renderShares:function(){b.each(this.shares,b.proxy(function(a,b){this._renderShare(b)},this))},_renderShare:function(a){var c;c=b.isFunction(a.renderer)?b(a.renderer()):this._createShare(a),c.addClass(this.shareClass).addClass(a.share?"jssocials-share-"+a.share:"").addClass(a.css).appendTo(this._$shares)},_createShare:function(a){var c=b("<div>"),d=this._createShareLink(a).appendTo(c);if(this._showCount){var e="inside"===this._showCount,f=e?d:b("<div>").addClass(this.shareCountBoxClass).appendTo(c);f.addClass(e?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(a,f)}return c},_createShareLink:function(a){var c=this._getShareStrategy(a),d=c.call(a,{shareUrl:this._getShareUrl(a)});return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)),this._showLabel&&d.append(this._createShareLabel(a)),b.each(this.on||{},function(c,e){b.isFunction(e)&&d.on(c,b.proxy(e,a))}),d},_getShareStrategy:function(a){var b=m[a.shareIn||this.shareIn];if(!b)throw Error("Share strategy '"+this.shareIn+"' not found");return b},_getShareUrl:function(a){var b=g(a.shareUrl,a);return this._formatShareUrl(b,a)},_createShareLogo:function(a){var c=a.logo,d=h.test(c)?b("<img>").attr("src",a.logo):b("<i>").addClass(c);return d.addClass(this.shareLogoClass),d},_createShareLabel:function(a){return b("<span>").addClass(this.shareLabelClass).text(a.label)},_renderShareCount:function(a,c){var d=b("<span>").addClass(this.shareCountClass);c.addClass(this.shareZeroCountClass).append(d),this._loadCount(a).done(b.proxy(function(a){a&&(c.removeClass(this.shareZeroCountClass),d.text(a))},this))},_loadCount:function(a){var c=b.Deferred(),d=this._getCountUrl(a);if(!d)return c.resolve(0).promise();var e=b.proxy(function(b){c.resolve(this._getCountValue(b,a))},this);return b.getJSON(d).done(e).fail(function(){b.get(d).done(e).fail(function(){c.resolve(0)})}),c.promise()},_getCountUrl:function(a){var b=g(a.countUrl,a);return this._formatShareUrl(b,a)},_getCountValue:function(a,c){var d=(b.isFunction(c.getCount)?c.getCount(a):a)||0;return"string"==typeof d?d:this._formatNumber(d)},_formatNumber:function(a){return b.each(j,function(b,c){return a>=c?(a=parseFloat((a/c).toFixed(2))+b,!1):void 0}),a},_formatShareUrl:function(b,c){return b.replace(i,function(b,d,e){var f=c[e]||"";return f?(d||"")+a.encodeURIComponent(f):""})},_clear:function(){a.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(a,c){var d=this.shares;b.each(["url","text"],function(e,f){f===a&&b.each(d,function(b,d){d[a]=c})})},_normalizeShare:function(a){return b.isNumeric(a)?this.shares[a]:"string"==typeof a?b.grep(this.shares,function(b){return b.share===a})[0]:a},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(f)},option:function(a,b){return 1===arguments.length?this[a]:(this[a]=b,this._passOptionToShares(a,b),void this.refresh())},shareOption:function(a,b,c){return a=this._normalizeShare(a),2===arguments.length?a[b]:(a[b]=c,void this.refresh())}},b.fn.jsSocials=function(a){var e=b.makeArray(arguments),g=e.slice(1),h=this;return this.each(function(){var e,i=b(this),j=i.data(f);if(j)if("string"==typeof a){if(e=j[a].apply(j,g),e!==c&&e!==j)return h=e,!1}else j._detachWindowResizeCallback(),j._init(a),j._render();else new d(i,a)}),h};var l=function(a){var c;b.isPlainObject(a)?c=d.prototype:(c=k[a],a=arguments[1]||{}),b.extend(c,a)},m={popup:function(c){return b("<a>").attr("href","#").on("click",function(){return a.open(c.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(a){return b("<a>").attr({target:"_blank",href:a.shareUrl})},self:function(a){return b("<a>").attr({target:"_self",href:a.shareUrl})}};a.jsSocials={Socials:d,shares:k,shareStrategies:m,setDefaults:l}}(window,jQuery),function(a,b,c){b.extend(c.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"http://graph.facebook.com/?id={url}",getCount:function(a){return a.share&&a.share.share_count||0}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:"https://cors-anywhere.herokuapp.com/https://plusone.google.com/_/+1/fastbutton?url={url}",getCount:function(a){return parseFloat((a.match(/\{c: ([.0-9E]+)/)||[])[1])}},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(a){return a.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(a){return a.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(a){return a.result.views}},telegram:{label:"Telegram",logo:"fa fa-paper-plane",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""}})}(window,jQuery,window.jsSocials);
$('head').append(' <link rel="stylesheet" type="text/css" href="https://orkiv.com/sapphire/jssocials/jssocials.css" />');
$('head').append(' <link rel="stylesheet" type="text/css" href="https://orkiv.com/sapphire/jssocials/jssocials-theme-flat.css" />');
}



$('head').append('<link rel="stylesheet"  type="text/css" href="https://www.orkiv.com/sapphire/inventory.php?mode=css"/>');


if(!$.fn.mask){
    (function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);
}

if(!$.fn.unslider) { 

    
    $('head').append('<link rel="stylesheet" href="https://www.orkiv.com/sapphire/dist-unslider/css/unslider.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="https://www.orkiv.com/sapphire/dist-unslider/css/unslider-dots.css" type="text/css" />');
    !function($){return $?($.Unslider=function(t,n){var e=this;return e._="unslider",e.defaults={autoplay:!1,delay:3e3,speed:750,easing:"swing",keys:{prev:37,next:39},nav:!0,arrows:{prev:'<a class="'+e._+'-arrow prev">Prev</a>',next:'<a class="'+e._+'-arrow next">Next</a>'},animation:"horizontal",selectors:{container:"ul:first",slides:"li"},animateHeight:!1,activeClass:e._+"-active",swipe:!0,swipeThreshold:.2},e.$context=t,e.options={},e.$parent=null,e.$container=null,e.$slides=null,e.$nav=null,e.$arrows=[],e.total=0,e.current=0,e.prefix=e._+"-",e.eventSuffix="."+e.prefix+~~(2e3*Math.random()),e.interval=null,e.init=function(t){return e.options=$.extend({},e.defaults,t),e.$container=e.$context.find(e.options.selectors.container).addClass(e.prefix+"wrap"),e.$slides=e.$container.children(e.options.selectors.slides),e.setup(),$.each(["nav","arrows","keys","infinite"],function(t,n){e.options[n]&&e["init"+$._ucfirst(n)]()}),jQuery.event.special.swipe&&e.options.swipe&&e.initSwipe(),e.options.autoplay&&e.start(),e.calculateSlides(),e.$context.trigger(e._+".ready"),e.animate(e.options.index||e.current,"init")},e.setup=function(){e.$context.addClass(e.prefix+e.options.animation).wrap('<div class="'+e._+'" />'),e.$parent=e.$context.parent("."+e._);var t=e.$context.css("position");"static"===t&&e.$context.css("position","relative"),e.$context.css("overflow","hidden")},e.calculateSlides=function(){if(e.total=e.$slides.length,"fade"!==e.options.animation){var t="width";"vertical"===e.options.animation&&(t="height"),e.$container.css(t,100*e.total+"%").addClass(e.prefix+"carousel"),e.$slides.css(t,100/e.total+"%")}},e.start=function(){return e.interval=setTimeout(function(){e.next()},e.options.delay),e},e.stop=function(){return clearTimeout(e.interval),e},e.initNav=function(){var t=$('<nav class="'+e.prefix+'nav"><ol /></nav>');e.$slides.each(function(n){var i=this.getAttribute("data-nav")||n+1;$.isFunction(e.options.nav)&&(i=e.options.nav.call(e.$slides.eq(n),n,i)),t.children("ol").append('<li data-slide="'+n+'">'+i+"</li>")}),e.$nav=t.insertAfter(e.$context),e.$nav.find("li").on("click"+e.eventSuffix,function(){var t=$(this).addClass(e.options.activeClass);t.siblings().removeClass(e.options.activeClass),e.animate(t.attr("data-slide"))})},e.initArrows=function(){e.options.arrows===!0&&(e.options.arrows=e.defaults.arrows),$.each(e.options.arrows,function(t,n){e.$arrows.push($(n).insertAfter(e.$context).on("click"+e.eventSuffix,e[t]))})},e.initKeys=function(){e.options.keys===!0&&(e.options.keys=e.defaults.keys),$(document).on("keyup"+e.eventSuffix,function(t){$.each(e.options.keys,function(n,i){t.which===i&&$.isFunction(e[n])&&e[n].call(e)})})},e.initSwipe=function(){var t=e.$slides.width();"fade"!==e.options.animation&&e.$container.on({movestart:function(t){return t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY?!!t.preventDefault():void e.$container.css("position","relative")},move:function(n){e.$container.css("left",-(100*e.current)+100*n.distX/t+"%")},moveend:function(n){Math.abs(n.distX)/t>e.options.swipeThreshold?e[n.distX<0?"next":"prev"]():e.$container.animate({left:-(100*e.current)+"%"},e.options.speed/2)}})},e.initInfinite=function(){var t=["first","last"];$.each(t,function(n,i){e.$slides.push.apply(e.$slides,e.$slides.filter(':not(".'+e._+'-clone")')[i]().clone().addClass(e._+"-clone")["insert"+(0===n?"After":"Before")](e.$slides[t[~~!n]]()))})},e.destroyArrows=function(){$.each(e.$arrows,function(t,n){n.remove()})},e.destroySwipe=function(){e.$container.off("movestart move moveend")},e.destroyKeys=function(){$(document).off("keyup"+e.eventSuffix)},e.setIndex=function(t){return 0>t&&(t=e.total-1),e.current=Math.min(Math.max(0,t),e.total-1),e.options.nav&&e.$nav.find('[data-slide="'+e.current+'"]')._active(e.options.activeClass),e.$slides.eq(e.current)._active(e.options.activeClass),e},e.animate=function(t,n){if("first"===t&&(t=0),"last"===t&&(t=e.total),isNaN(t))return e;e.options.autoplay&&e.stop().start(),e.setIndex(t),e.$context.trigger(e._+".change",[t,e.$slides.eq(t)]);var i="animate"+$._ucfirst(e.options.animation);return $.isFunction(e[i])&&e[i](e.current,n),e},e.next=function(){var t=e.current+1;return t>=e.total&&(t=0),e.animate(t,"next")},e.prev=function(){return e.animate(e.current-1,"prev")},e.animateHorizontal=function(t){var n="left";return"rtl"===e.$context.attr("dir")&&(n="right"),e.options.infinite&&e.$container.css("margin-"+n,"-100%"),e.slide(n,t)},e.animateVertical=function(t){return e.options.animateHeight=!0,e.options.infinite&&e.$container.css("margin-top",-e.$slides.outerHeight()),e.slide("top",t)},e.slide=function(t,n){if(e.options.animateHeight&&e._move(e.$context,{height:e.$slides.eq(n).outerHeight()},!1),e.options.infinite){var i;n===e.total-1&&(i=e.total-3,n=-1),n===e.total-2&&(i=0,n=e.total-2),"number"==typeof i&&(e.setIndex(i),e.$context.on(e._+".moved",function(){e.current===i&&e.$container.css(t,-(100*i)+"%").off(e._+".moved")}))}var o={};return o[t]=-(100*n)+"%",e._move(e.$container,o)},e.animateFade=function(t){var n=e.$slides.eq(t).addClass(e.options.activeClass);e._move(n.siblings().removeClass(e.options.activeClass),{opacity:0}),e._move(n,{opacity:1},!1)},e._move=function(t,n,i,o){return i!==!1&&(i=function(){e.$context.trigger(e._+".moved")}),t._move(n,o||e.options.speed,e.options.easing,i)},e.init(n)},$.fn._active=function(t){return this.addClass(t).siblings().removeClass(t)},$._ucfirst=function(t){return(t+"").toLowerCase().replace(/^./,function(t){return t.toUpperCase()})},$.fn._move=function(){return this.stop(!0,!0),$.fn[$.fn.velocity?"velocity":"animate"].apply(this,arguments)},void($.fn.unslider=function(t){return this.each(function(){var n=$(this);if("string"==typeof t&&n.data("unslider")){t=t.split(":");var e=n.data("unslider")[t[0]];if($.isFunction(e))return e.apply(n,t[1]?t[1].split(","):null)}return n.data("unslider",new $.Unslider(n,t))})})):console.warn("Unslider needs jQuery")}(window.jQuery);
} 
$inventoryStandard = {};


if (typeof swal == 'function') { 
    } else  {
         $("head").append('<link rel="stylesheet" type="text/css" href="https://orkiv.com/sapphire/dist/sweetalert.css">');
     !function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
}
window['findCss'] = function(fileName) {
  var finderRe = new RegExp(fileName + '.*?\.css', "i");
  var linkElems = document.getElementsByTagName("link");
  for (var i = 0, il = linkElems.length; i < il; i++) {
    if (linkElems[i].href && finderRe.test(linkElems[i].href)) {
        return true;
    }
  }
  return false;
}
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}


function Inventory(accountid, jstoken,alerts,syncdynamic) {
    this.accountid = accountid;
    this.jstoken = jstoken;
    this.modal = false;
    this.alerts = true;
    this.syncdynamic = true;


    if(typeof alerts !== 'undefined') this.alerts = alerts;

    if(typeof syncdynamic !== 'undefined') this.syncdynamic = syncdynamic;
    //load styles for drop in ui
    loadjscssfile("https://orkiv.com/i/ext_css.php?createSession=" + accountid,"css");
    if(!findCss("font-awesome"))
    loadjscssfile("https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css","css");
    //detect local store and alter user
   
    var hasStorage = (function() {
    try {
        localStorage.setItem("foo", "foo");
        localStorage.removeItem("foo");
        return true;
    } catch (exception) {
        return false;
    }
}());
    if(!hasStorage){
         swal("Data restricted", "Please add us to your list of trusted websites to better customize your experience,","warning");
    }
    if(window.localStorage){
        if(!window.localStorage['inventoryID']){
            window.localStorage['inventoryID'] = makeid(35) + Math.floor(Date.now() / 1000);

            window.localStorage['inventoryData'] = JSON.stringify({cart:[], wishlist:[]});
            /*

                bind classes
            */
        
            
        } else {
            console.log("Restoring session");
        }

        window["GETPARAM"] = function getUrlParameter(sParam) {
                var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : sParameterName[1];
                    }
                }
        };
         if(window["GETPARAM"]("refid") && window["GETPARAM"]("prog")){
                window.localStorage['refid'] = window["GETPARAM"]("ref");
                 window.localStorage['prog'] = window["GETPARAM"]("prog");
            }
            if(window["GETPARAM"]("setMastertoken")){
                window.localStorage['masterToken'] = window["GETPARAM"]("setMastertoken");
            }
            this.SyncDynamic();
            $inventoryStandard = this;
            this.xFetch("https://www.orkiv.com/i/ext_js.php",{},"POST",function(html){
                    //aalert(100);
                     $('body').append(html);
                    //check get for openwishlist
                    if(window["GETPARAM"]("sharewishlist")){
                        $inventoryStandard.ShowWishlistPublic(window["GETPARAM"]("sharewishlist"));
                    }



            });

    
    } else {
        console.log("No local storage support!, will use ext_js of Orkiv");
    }

    
 
}

Inventory.prototype.Data = function(){
    return this.getLocal("inventoryData",true);
}

Inventory.prototype.Reviews = function(itemid,callback){
     $.ajax({url:"https://www.orkiv.com/i/api.php?getPublicReviews=" + this.accountid + "&item=" + itemid, success:function(html){
                var reviews = JSON.parse(html);
                callback(reviews);
            }
        });
}

Inventory.prototype.Categories = function(callback){
    
            this.xFetchapi("https://www.orkiv.com/i/ext_js_api.php",{open:"categories"},"POST",function(html){
                    //aalert(100);
                    callback(JSON.parse(html));
            });
}

Inventory.prototype.Category = function(categoryid,callback){
    
            this.xFetchapi("https://www.orkiv.com/i/ext_js_api.php",{open:"category", cid: categoryid},"POST",function(html){
                    //aalert(100);
                    callback(JSON.parse(html));
            });
}

Inventory.prototype.Query = function(page, query, callback){
        query['pagination'] = page;
        query['query'] = "on";
            this.xFetchapi("https://www.orkiv.com/i/ext_js_api.php",query,"POST",function(html){
                    //aalert(100);
                    callback(JSON.parse(html));
            });
}

Inventory.prototype.Open = function(id ,callback){
             this.xFetchapi("https://www.orkiv.com/i/ext_js_api.php",{open: id},"POST",function(html){
                    //aalert(100);
                    callback(JSON.parse(html));
            });
}

Inventory.prototype.DestroyUserinfo = function(){

           if(window.localStorage['masterToken'])
       $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?deleteSession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                    delete window.localStorage['masterToken'];
                    delete window.localStorage['inventoryUSERID'];
                    window.location = window.location.pathname;
                    //user info profilepicture, firstname, cart with count, wishlist, logout
                }
                //silent failure
            } 
        });
}


//recordInterest itemid
Inventory.prototype.SaveInterest = function(itemid){
      $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordInt=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href,sessionid:window.localStorage["inventoryID"], itemid : itemid, token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
             //   callback(data.auth);
                //silent failure
            } 
        });
}
Inventory.prototype.Eval = function(guide, callback){

  
       $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifyGuide=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href,sessionid:window.localStorage["inventoryID"], guide : guide, token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                callback(data.auth);
                //silent failure
            } 
        });
}

Inventory.prototype.BindUserinfo = function(){
        //request with master token
        var plugin = this;
        if(window.localStorage['masterToken'])
        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifySession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                    plugin.user = data.user;
                    $inventoryStandard = plugin;
                    $(".inventory-target-social-user").children('div').css('display', 'none');
                    //user info profilepicture, firstname, cart with count, wishlist, logout
                    $(".inventory-target-social-user").append("<div class='inventory-realm social-mutable' style='text-align:right;display: inline-block;float:right;'></div>");
                    if(data.user.cart){

                        for (var i = data.user.cart.length - 1; i >= 0; i--) {
                           var cartentry =  data.user.cart[i];
                           $inventoryStandard.CartSafe(cartentry.id.split("%^}")[0], cartentry.quantity, cartentry.variations);
                        };
                    }

                    if(data.user.wishlist){
                      for (var i = data.user.wishlist.length - 1; i >= 0; i--) {
                           var cartentry =  data.user.wishlist[i];
                           $inventoryStandard.WishlistSafe(cartentry.id.split("%^}")[0], cartentry.variations);
                        };
                    }

                    var d = new Date();
                    var n = d.getUTCHours();
                     
                    window.localStorage["inventoryUSERID"] = data.user._id['$id'];
                    if(data.user.firstname){
                     $(".inventory-realm.social-mutable").append("<p style='display:inline;margin-right:15px;'>" + (!data.user.profileimagelink ? "" : '<img style="width: 23px;border-radius: 50%;border: 1px solid #bbb8b8;    margin-right: 10px;"  src="' + data.user.profileimagelink + '"/>' ) + (n > 12 ? ( n > 17 ? "Good evening" : "Good afternoon" )  : "Good morning " ) + " " + data.user.firstname + " [" + data.user.loyaltypoints + " Points]</p>");
                    }

                    $(".inventory-realm.social-mutable").append('<button onclick="$inventoryStandard.Checkout()" class="sync-orkivinv acu-sync-cart">Cart (0)</button>');
                    $(".inventory-realm.social-mutable").append('<button onclick="$inventoryStandard.ShowWishlist()" class="sync-orkivinv">Wishlist</button>');
                     $(".inventory-realm.social-mutable").append('<button onclick="$inventoryStandard.ShowAccount()" class="sync-orkivinv">Account</button>');
                     $(".inventory-realm.social-mutable").append('<button onclick="$inventoryStandard.DestroyUserinfo()" class="sync-orkivinv">Logout</button>');
                     $inventoryStandard.SyncDynamic();
                }
                //silent failure
            } 
        });
}

Inventory.prototype.CreateSocialSupport = function(selector, extraselectors){
        var target = $(selector), socialbutton = $('<a href="" class="sync-orkivinv" ><i class="fa fa-facebook"></i> Facebook </a>');
        if(!target.hasClass('inventory-realm')){
            //create element
            target.html('<div classs="column one-half"><h1><i class="fa fa-user"></i> Login</h1> <div class="inventory-form-group" style="margin-bottom:10px;"><input type="text" style="width: 260px;" placeholder="Email"><span style="float:left;height:48px;border-radius:0;" class="sync-orkivinv">@</span></div> <div class="inventory-form-group" style="margin-bottom:10px;"> <input type="password" style="width: 260px;" placeholder="Password"><span style="float:left;height:48px;border-radius:0;" class="sync-orkivinv"><i class="fa fa-lock"></i></span></div><p><button class="init-email sync-orkivinv">Login</button></p><p><button class="init-signup sync-orkivinv">Join</button> <button class="init-passrecovery sync-orkivinv">Forgot password?</button></p><div class="additional-fields" style="display:none;"></div><div class="social-prompts" style="text-align:center"><p>Login via a social media provider</p></div><div class="social-options" style="text-align:center"></div></div>');
        } 
        target.children('div').css('display','none');
      
        var plugin = this;
       // plugin.user = "";
        if(typeof extraselectors !== 'undefined'){
            //iterate and bind as receivable
            for (var i = extraselectors.length - 1; i >= 0; i--) {
                $(extraselectors[i]).addClass("inventory-target-social-user");
            };
        } else target.addClass('inventory-target-social-user')

        // $(selector).addClass("inventory-target-social-user");
        if(window.localStorage['masterToken'])   this.BindUserinfo();
         else  {
              target.append("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");

        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifySession=" + $inventoryStandard.accountid,type:"POST", data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"]}, success:function(html){
                    var data = JSON.parse(html);
                    if(data.auth){
                        //show logout prompt
                     // this.BindUserinfo();
                   //  console.log(plugin);
                     plugin.user = data.user;
                     $inventoryStandard = plugin;
                    } else {
                        $(".loader-temp", target).remove();
                        target.children('div').css('display', 'block');
                   

                    for (var i = data.additionalfields.length - 1; i >= 0; i--) {
                     var field = data.additionalfields[i],elem; 
                     //override 
                     if(field.type == "checkbox"){
                         elem =  $('<input style="" type="' + field.type + '" name="' + field.name + '" ' + ( (!field.value || field.value == "" ) ?  "" : "checked" )  +'/> ');
                     } else  if(field.type == "radio"){
                        elem = $('<p><label>' + field.placeholder + '</label><br /></p>');
                        for (var i = field.choices.length - 1; i >= 0; i--) {
                          elem.append('<input type="radio" style="height:initial;padding:0;" name="' + field.name + '" value="' +field.choices[i] +'"> ' + field.choices[i] + ' <br />');
                        };

                     } else  if(field.type == "select"){
                            var opsstring = '';
                             for (var i = field.choices.length - 1; i >= 0; i--) {
                           opsstring +=  '<option>' + field.choices[i] + '</option>';

                        };
                        elem = $('<p><label>' + field.placeholder +'</label><br /><select style="width:100%;max-width:280px;"  name="' + field.name + '">' + opsstring + '</select></p>')
                     } else  if(field.type == "phone"){
                          elem =  $('<input style="width:100%;max-width:280px;" type="text" is-required="' + field.required +'" placeholder="' + field.placeholder + '" value="' + field.value + '" name="' + field.name + '" />');
                            
                     }else {
                        elem =  $('<input style="width:100%;max-width:280px;" type="' + field.type + '" is-required="' + field.required +'" placeholder="' + field.placeholder + '" name="' + field.name + '" />');
                     }


                     if(field.type == "phone")  elem.mask("(999) 999-9999");

                  
                     if(field.type == "checkbox"){
                            $(".additional-fields", target).append($('<p/>').append(elem).append('<b>' + field.placeholder + '</b>') );
                     } else
                       $(".additional-fields", target).append($('<p/>').append(elem) );


                    };
                    $(".social-options", target).html("");

                    //
                    $(".init-email", target).click(function(){
                        var target = $(this).parents(".inventory-realm");

                        if($('[name="email"]',target).val() == ""){
                            $('[name="email"]',target).css('border-color', 'red');
                        } else if($('[name="password"]',target).val() == ""){
                                $('[name="password"]',target).css('border-color', 'red');
                        } else {
                                $('[name="email"]',target).css('border-color', 'none');
                            $('[name="password"]',target).css('border-color', 'none');
                          target.prepend("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");

                          $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?loginSession=" + $inventoryStandard.accountid, data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], username: $('[name="email"]',target).val(), password: $('[name="password"]',target).val() },type:"POST", success:function(html){
                             var data = JSON.parse(html);
                             $(".loader-temp", target).remove();
                             if(data.auth){
                                //session and origin saved
                                //cleartarget
                              //  target.addClass('inventory-target-social-user');
                                window.localStorage['masterToken'] = data.masterToken;
                                   target.children('div').css('display','none');
                                 $inventoryStandard.BindUserinfo();
                             } else {
                                 swal({   title: "Invalid credentials",   text:"Invalid username or password supplied" ,   type: "error",   confirmButtonText: "Okay!" });
                             }
                          }
                      });
                      }
                    });

                    $(".social-prompts", target).prepend("<p>Signing onto Orkiv inventory implies consent to our <a href='https://www.orkiv.com/support/tos/' target='_blank'>terms of use</a></p>");

                    $(".init-signup", target).click(function(){
                          var target= $(this).parents(".inventory-realm");
                           if($("input[name='password']", target).css("display") == "none"){
                            $(".init-signup", target).html($(".init-signup", target).attr("past-html"));
                                 $(".social-prompts, .social-options", target).css('display', 'block');
                                 $("input[name='password'], .init-email", target).css('display','inline-block');
                                  $("input[name='password']", target).parent().css('display', 'inline-block');

                           }
                            else if($(".additional-fields", target).css('display') == "none"){
                                $(".additional-fields", target).css('display', "block");
                                  $(".init-email", target).css('display', 'none');
                                $(".init-passrecovery", target).attr("past-html",  $(".init-passrecovery", target).html());
                                $(".init-passrecovery", target).html("<i class='fa fa-arrow-left'></i> Back");
                            } else {

                                //visible signin
                                var cancel = false;
                                var payload = {origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"] };
                                $("[name]" , target).each(function(e,i){
                                    $(this).css("border-color", 'none');
                                    if( ( $(this).attr("name") == "email" || $(this).attr("name") == "password" ) && $(this).val() == "" ){
                                          $(this).css("border-color", 'red');
                                          cancel = true;
                                    }
                                    else if($(this).attr("is-required") == "true" && $(this).val()  == ""){
                                         cancel = true;
                                         $(this).css("border-color", 'red');
                                    } else
                                    payload[$(this).attr("name")] = $(this).val();
                                });

                                if(!cancel){
                                     target.prepend("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");

                                     if(window.localStorage['refid'] && window.localStorage["prog"]){
                                        payload["refid"] = window.localStorage['refid'];
                                        payload['prog'] = window.localStorage['prog'];
                                     }
                                      $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?createSession=" + $inventoryStandard.accountid, type:"POST",data:payload,success:function(html){
                                    $(".loader-temp", target).remove();
                                        var data = JSON.parse(html);

                                        if(data.auth){
                                              swal({   title: "Success",   text:"Account created, Logging you in!" ,   type: "success",   confirmButtonText: "Okay!" });
                                              // target.addClass('inventory-target-social-user');
                                                window.localStorage['masterToken'] = data.masterToken;
                                                   target.children('div').css('display','none');
                                                 $inventoryStandard.BindUserinfo();
                                        } else {
                                             swal({   title: "Invalid credentials",   text:data.reason ,   type: "error",   confirmButtonText: "Okay!" });
                                        }

                                     } 
                             });
                                } else {
                                    swal({   title: "Error",   text:"Some required fields are missing" ,   type: "error",   confirmButtonText: "Okay!" });
                                }


                            }

                            return false;
                    });

                    $(".init-passrecovery", target).click(function(){
                         var target= $(this).parents(".inventory-realm");

                               if($("input[name='password']", target).css("display") == "none"){

                                if($('[name="email"]',target).val() == ""){
                                      $('[name="email"]',target).css('border-color', 'red');
                                } else {
                                      $('[name="email"]',target).css('border-color', 'none');
                                 target.prepend("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");
                                 $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?loginSession=" + $inventoryStandard.accountid, type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], username: $('[name="email"]',target).val()},success:function(html){
                                    $(".loader-temp", target).remove();
                                        var data = JSON.parse(html);

                                        if(data.auth){
                                              swal({   title: "Password changed!",   text:"Please check your email for your temporary password." ,   type: "success",   confirmButtonText: "Okay!" });
                                        } else {
                                             swal({   title: "Invalid credentials",   text:"Account not found" ,   type: "error",   confirmButtonText: "Okay!" });
                                        }

                                     } 
                             });
                             }
                                //send request
                            } else if($(".additional-fields", target).css('display') == "block"){

                                //go back
                                $(".init-passrecovery", target).html($(".init-passrecovery", target).attr("past-html"));
                                 $(".additional-fields", target).css('display', 'none');
                                 $(".init-email", target).removeAttr('style');


                            }
                                else {
                                //visible signin
                                $(".init-email", target).css('display', 'none');
                                $("input[name='password']", target).css('display', 'none');
                                $("input[name='password']", target).parent().css('display', 'none');
                                $(".init-signup", target).attr("past-html", $(".init-signup",target).html());
                                $(".init-signup", target).html("<i class='fa fa-arrow-left'></i> Back");

                                $(".social-prompts, .social-options", target).css('display', 'none');
                            }

                        return false;
                    });

                                $("input", target).keypress(function(e) {
                                    if(e.which == 13) {
                                    var target= $(this).parents(".inventory-realm");
                                   if($("input[name='password']", target).css("display") == "none")
                                        $(".init-passrecovery").click();
                                    else if($(".additional-fields", target).css('display') == "none")
                                       $( ".init-email", target).click();
                                    else $(".init-signup").click();
                                        return;
                                    }
                                });


                    for (var i = data.socialservices.length - 1; i >= 0; i--) {
                     var socialitem = data.socialservices[i];
                     socialbutton.clone().html(socialitem.text).attr("href", socialitem.authurl).appendTo($(".social-options",target));
                    };
                }
            } 
        });
}
        

}   


Inventory.prototype.SyncDynamic = function(){
    if(this.syncdynamic){

        $(".acu-sync-cart").html("CART (" + this.Data().cart.length + ")");
    var x = document.getElementsByClassName("sync-dynamic");
        
      for (var i = x.length - 1; i >= 0; i--) {
        if(x[i].dataset.link == "cart"){
        if(this.In(x[i].dataset.link,x[i].dataset.id) ){
        if(x[i].scrollWidth > 129)
            x[i].innerHTML = "<i class='fa fa-shopping-cart'></i> Remove from cart";
         else  x[i].innerHTML = "&times; Cart";
        } else {
         if(x[i].scrollWidth > 129)
            x[i].innerHTML = "<i class='fa fa-shopping-cart'></i> Add to cart";
        else  x[i].innerHTML = "<i class='fa fa-shopping-cart'></i> Cart";
        }
        } else  if(x[i].dataset.link == "wishlist"){
            if(this.In(x[i].dataset.link,x[i].dataset.id ) ){
            x[i].innerHTML = "<i class='fa fa-bars'></i> Remove from Wishlist";
        } else {
            x[i].innerHTML = "<i class='fa fa-bars'></i> Wishlist";
        }
        }
      };

      setTimeout(function(){
      var data = $inventoryStandard.Data();
      for (var i = data.cart.length - 1; i >= 0; i--) {
        var elem = data.cart[i];
            var v = document.getElementsByClassName("inventory-form-group");
            for (var c = v.length - 1; c >= 0; c--) {
                if(v[c].dataset.id == elem.id && v[c].dataset.type == "cart"){
                    for (var y = v[c].childNodes.length - 1; y >= 0; y--) {
                    if(v[c].childNodes[y].dataset){
                            if(v[c].childNodes[y].dataset.isf == "amt"){
                                
                                     v[c].childNodes[y].value =  elem.quantity + "";
                                
                                // console.log(elem);
                                //this.Cart(itemid, parseInt(v[c].childNodes[y].value),variations);
                            }
                     }
                };
                }
            }
      };
},1500);
                                
  }
}

Inventory.prototype.ExplicitCart = function(itemid,variations){
    //get qty only
        var x = document.getElementsByClassName("inventory-form-group");
        for (var i = x.length - 1; i >= 0; i--) {
             if (x[i].dataset.id == itemid  && x[i].dataset.type == "cart"){
                //get child elements
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                if(x[i].childNodes[y].dataset){
                    if(x[i].childNodes[y].dataset.isf == "amt"){
                        var amt = parseInt(x[i].childNodes[y].value);
                        if(amt > 0)
                        this.Cart(itemid, amt,variations); 
                        else {
                            this.RemoveFromCart(this.GenID(itemid,variations))
                        }
                    }
                }
                };
                
             }
        };
}

Inventory.prototype.ExplicitBuy = function(itemid,variations){
    //get qty only
        var x = document.getElementsByClassName("inventory-form-group");
        for (var i = x.length - 1; i >= 0; i--) {
             if (x[i].dataset.id == itemid && x[i].dataset.type == "buy"){
                //get child elements
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                    if(x[i].childNodes[y].dataset){
                    if(x[i].childNodes[y].dataset.isf == "amt"){
                        console.log(x[i].childNodes[y]);

                        var amt = parseInt(x[i].childNodes[y].value);

                        if(x[i].childNodes[y].value == "") amt = 1;
                        this.Buy(itemid, amt,variations);
                    }
                    }
                };
                
             }
        };
}


Inventory.prototype.In = function (col, id){
    var data = this.Data();
    if(col == "cart"){

        for (var i = data.cart.length - 1; i >= 0; i--) {
            if(data.cart[i].id == id ){
                return true;
            }
        };

    } else if(col == "wishlist") {

            for (var i = data.wishlist.length - 1; i >= 0; i--) {
            if(data.wishlist[i].id == id ){
                return true;
            }
        };
    }

    return false;
}


Inventory.prototype.HideAlert = function(alertid){
        var x = document.getElementsByClassName("inventory-alert");
        
      for (var i = x.length - 1; i >= 0; i--) {
        if(x[i].dataset.id == alertid){
            x[i].parentNode.removeChild(x[i]);
        }
      };
}


Inventory.prototype.Alert = function(text){
    if(this.alerts){
    var id = makeid(10)
    var actalert = '<div class="inventory-alert to-fade" data-id="' + id +'"><button onclick="$inventoryStandard.HideAlert(\'' + id + '\')" class="sync-orkivinv" style="color:#fff !important;">Got it</button><p style="    background: #333;color: #fff;  padding: 6px;">' + text + '</p></div>';

    $('body').append(actalert);

    setTimeout(function(){ 
            var x = document.getElementsByClassName("inventory-alert");
    
      for (var i = x.length - 1; i >= 0; i--) {
        if(x[i].dataset.id == id){
              x[i].className += " faded";
        }
      };
     }, 1000);
    } else {
        if(this.customalert){
            this.customalert(text);
        }
    }


    
}

Inventory.prototype.SetAlert = function(alertfunc){
    this.customalert = alertfunc;
    $inventoryStandard.customalert = alertfunc;
}

Inventory.prototype.RemoveFromCart = function(itemid){
        var data = this.getLocal("inventoryData",true); 
    
        var newset = [];
        if(itemid){
            var inalready = false
            
            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id != itemid){
                        newset.push(data.cart[i]);
                }
            };
        
            //variation array of names delim %^}
        }

        data.cart = newset;
     $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recorddrop=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
        
        this.Alert("Cart Updated!");
        this.saveLocal("inventoryData",data,true);
        this.SyncDynamic();
}

Inventory.prototype.UpdateCart = function(itemid,quantity){
    var data = this.getLocal("inventoryData",true); 
  
    var newset = [];
    if(itemid){
      var inalready = false
      
      for (var i = data.cart.length - 1; i >= 0; i--) {
        if(data.cart[i].id == itemid){
            var temp = data.cart[i];
            temp.quantity = quantity;
            newset.push(temp);
        } else {
           newset.push(data.cart[i]);
        }
      };
    
      //variation array of names delim %^}
    }

    data.cart = newset;
    
    this.Alert("Cart Updated!");
      this.saveLocal("inventoryData",data,true);
      this.SyncDynamic();
}

Inventory.prototype.RemoveFromWishlist = function(itemid){
        var data = this.getLocal("inventoryData",true); 
    
        var newset = [];
        if(itemid){
            var inalready = false
            
            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id != itemid){
                        newset.push(data.cart[i]);
                }
            };
            
            //variation array of names delim %^}
        }

        data.wishlist = newset;
          $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordwdrop=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
        this.Alert("Wishlist Updated!");

        this.saveLocal("inventoryData",data,true);
        this.SyncDynamic();
}

Inventory.prototype.GenID = function(itemid,variations){

        if(variations.length > 0){
                itemid += itemid + "%^}" + variations.join("%^}") ;
        }

        return itemid;
}

Inventory.prototype.Cart = function(itemid,quantity,variations) {
        
        var data = this.getLocal("inventoryData",true); 
        if(quantity == 0) quantity  = 1;
        if(itemid){
            var inalready = false

            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id == itemid){
                    inalready = true;
                    var tempholder = data.cart[i];
                    tempholder.quantity += quantity;
                    data.cart[i] = tempholder;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Cart Updated!");
                data.cart.push({id:itemid,quantity:quantity,variations:variations});
                this.saveLocal("inventoryData",data,true);
         $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordadd=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
            } else {
            // /    this.Alert("Item removed from cart!");
                this.RemoveFromCart(itemid);
            }

            
            this.SyncDynamic(); 

        } else {
            return data.cart;
        }

};

Inventory.prototype.CartSafe = function(itemid,quantity,variations) {
        
        var data = this.getLocal("inventoryData",true); 
        if(quantity == 0) quantity  = 1;
        if(itemid){
            var inalready = false

            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id == itemid){
                    inalready = true;
                    var tempholder = data.cart[i];
                    tempholder.quantity += quantity;
                    data.cart[i] = tempholder;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Cart Updated!");
                data.cart.push({id:itemid,quantity:quantity,variations:variations});
                this.saveLocal("inventoryData",data,true);
         $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordadd=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
            } else {
            // /    this.Alert("Item removed from cart!");
              //  this.RemoveFromCart(itemid);
            }

            
            this.SyncDynamic(); 

        } else {
            return data.cart;
        }

};

Inventory.prototype.addCart = function(itemid,quantity,variations) {
        
        var data = this.getLocal("inventoryData",true); 
        if(quantity == 0) quantity  = 1;
        if(itemid){
            var inalready = false

            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id == itemid){
                    inalready = true;
                    var tempholder = data.cart[i];
                    tempholder.quantity += quantity;
                    data.cart[i] = tempholder;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Cart Updated!");
                data.cart.push({id:itemid,quantity:quantity,variations:variations});
            
            } else {
            // /    this.Alert("Item removed from cart!");
            
            }

                    this.saveLocal("inventoryData",data,true);
        //  this.SyncDynamic(); 


        } else {
            return data.cart;
        }

};

function GetCardNSuch(){
    //atl-card 
     if(window.localStorage['masterToken'] && $(".invc.atl-card").length > 0)
        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?getBinfo=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                    //setu
                    var tmph = "";
                    for (var i = data.cards.length - 1; i >= 0; i--) {
                        card = data.cards[i];
                        tmph += '<div style="padding-top:20px"> <button class="remover" table="token_vault" oid="' + card._id['$id'] + '" style="float:right;">Delete</button><h5>' + card.nickname + '</h5><p><b><input type="radio" style="height:initial;" name="default_card" value="' + card._id['$id'] + '" ' + (card.default ? "checked" : "" ) +'> Default</b></p></div>';
                    };
                    $(".invc.atl-card").html(tmph);
                    tmph = "";
                     for (var i = data.addresses.length - 1; i >= 0; i--) {
                        address = data.addresses[i];
                        tmph += '<div style="padding-top:20px" > <button class="remover" table="address_vault" oid="' + address._id['$id'] + '" style="float:right;">Delete</button><h5>' + address.info_sadr1 + (address.info_sadr2 != "" ? " " + address.info_sadr2 : "" ) + ', ' + address.info_scty + ', ' + address.info_szip + ', ' + address.state + '</h5><p><b><input style="height:initial;" type="radio" name="default_address" value="' + address._id['$id'] + '" ' + (address.default ? "checked" : "" ) +'> Default</b></p></div>';
                    };
                    $(".invc.atl-addr").html(tmph);
                    

                    $("input[name='default_card']").change(function() { 
                           $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?setdefaultcard=" + $inventoryStandard.accountid,type:"POST",data:{ id: this.value,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                    if(data.auth){
                                     //   target.parent().remove(); 
                                    }
                            } 
                    });
                       } );

                     $("input[name='default_address']").change(function() {

                         $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?setdefaultaddress=" + $inventoryStandard.accountid,type:"POST",data:{ id: this.value,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                    if(data.auth){
                                     //   target.parent().remove(); 
                                    }
                            } 
                           });

                     } );

                    $(".invc .remover").click(function(){
                        var target = $(this);
                        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?removeBinfo=" + $inventoryStandard.accountid,type:"POST",data:{table: $(this).attr("table"), id: $(this).attr("oid") ,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                    if(data.auth){
                                        target.parent().remove(); 
                                    }
                            } 
                    });
                        return  false;
                    });

                }

            } });
}

Inventory.prototype.ShowCart = function(){
  var data = this.getLocal("inventoryData",true);   
    if(data.cart.length == 0){
        this.Alert("Cart empty!");
        console.log("Cart empty");
    } else {
        if(this.user){
            if(this.user.oneclick){
                this.OneClick();
                return;
            }
        } 
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/cart-checkout" + stripeMod + "/?" + $inventoryStandard.accountid + "=";
    var data = this.getLocal("inventoryData",true); 

    var quantitychain = [];
    for (var i = data.cart.length - 1; i >= 0; i--) {
        var item = data.cart[i];
        var itemlink =  item.id ;
        
        quantitychain.push(itemlink + "=" + item.quantity)

        cartlink += itemlink;

        if(i != 0)
        cartlink += ",";
    }
    cartlink += "&";
    for (var i = quantitychain.length - 1; i >= 0; i--) {
        cartlink += quantitychain[i];

        if(i != 0) cartlink += "&";
    };

    document.getElementById("InventoryIframe").src = cartlink  + ( $inventoryStandard.user ?  "&userid=" + $inventoryStandard.user._id.$id  : ""  );
    }             
}

Inventory.prototype.showModal = function(){
    if(!this.modal){
            if(document.getElementsByClassName("inventory-alert").length == 0){
        var x = document.getElementsByClassName("inv-to-fade");
      x[0].className += " faded";
      x[1].className+= " faded";    
      this.modal = true;
        $inventoryStandard.modal = true;
        }
    }
    

    if($(".inv-iframe-holder .inv-iframe-module").length > 0){
      $(".inv-iframe-holder .inv-iframe-module").css('display','none');
       $(".inv-iframe-holder-in").css('display','block');
    }
}

Inventory.prototype.hideModal = function(){
        

         var x = document.getElementsByClassName("inv-to-fade");
      x[0].className = x[0].className.replace("faded","");
      x[1].className = x[1].className.replace("faded","");
      this.modal = false;
      document.getElementById("InventoryIframe").src = "https://orkiv.com/i/loading.php";
}

Inventory.prototype.ShowAccount = function(){
     this.showModal();
   
 if(window.localStorage['masterToken'])
        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?accountSession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                     $(".inv-iframe-holder-in").css('display', 'none');
                       $(".inv-iframe-module").remove();

                       $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="cart-items" style="text-align:center;"><h3><i class="fa fa-wrench"></i> Account</h3> </div> </div>');

                       if(!data.user.profileimagelink){
                           $(".inv-iframe-module .cart-items").append('<h1 class="profile-target" style="text-align:center;"><i class="fa fa-3x fa-bomb"></i></h1><h2> Upload a profile picture </h2>');
                       } else {
                        $(".inv-iframe-module .cart-items").html('<h1 class="profile-target" style="text-align:center;"><img style="width: 128px;border-radius: 50%;border: 1px solid #bbb8b8;"  src="' + data.user.profileimagelink + '"/></h1>');
                       }

                   

                          $(".inv-iframe-module .cart-items").parent().prepend("<div style='display:none;text-align:center;padding:20px;'  class='card-items'><button class='invc add-new-card'>Add new card</button><form><div class='invc atl-card'></div></form></div><div style='display:none;text-align:center;padding:20px;' class='addr'><button class='invc add-new-addr'>Add new address</button><form><div class='invc atl-addr'></div></form></div>");
                          $(".invc.add-new-card").click(function(){

                             $inventoryStandard.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/add-card/?" + $inventoryStandard.accountid + "=" +  $inventoryStandard.user._id['$id'];

    
    document.getElementById("InventoryIframe").src = cartlink;
                            return false;
                          });

                                     $(".invc.add-new-addr").click(function(){

                             $inventoryStandard.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/add-addr/?" + $inventoryStandard.accountid + "=" +  $inventoryStandard.user._id['$id'];

    
    document.getElementById("InventoryIframe").src = cartlink;
                            return false;
                          });

                        GetCardNSuch();

                        $(".inv-iframe-module .cart-items").append("<p>Update profile picture</p>");
                            $(".inv-iframe-module .cart-items").parent().prepend('<div style="padding-top:35px;text-align:center;"><p><button tog=".cart-items" class="invc update-card">Account settings</button> <button tog=".card-items" class="invc update-card">Saved cards</button> <button tog=".addr" class="invc update-card">Saved addresses</button></p> </div>');
                       $(".invc.update-card").click(function(){
                               $(".inv-iframe-module .cart-items,.inv-iframe-module .card-items,.inv-iframe-module .addr").css('display',"none");
                               $(".inv-iframe-module " + $(this).attr("tog")).css('display', 'block');
                       });
                        $(".inv-iframe-module .cart-items").append($('<p/>').append($('<input type="file" adparam="p" accept="image/*" />').change(function(){

                             var file    = document.querySelector('input[adparam=p]').files[0];
                            var reader  = new FileReader();

                              reader.addEventListener("load", function () {
                                $(".inv-iframe-module .profile-target").html('<img style="width: 128px;border-radius: 50%;border: 1px solid #bbb8b8;"  src="' + reader.result + '"/>');
                                $(".inv-iframe-module [name=profilepicture]").val(reader.result);
                              }, false);

                              if (file) {
                                reader.readAsDataURL(file);
                              }
                        })).append("<input type='hidden' name='profilepicture' />"));
                    
                    for (var i = data.additionalfields.length - 1; i >= 0; i--) {
                     var field = data.additionalfields[i],elem; 
                     //override 
                     if(field.type == "checkbox"){
                          elem =  $('<input style="" type="' + field.type + '" name="' + field.name + '" ' + ( (!field.value || field.value == "" ) ?  "" : "checked" )  +'/> ');
                     } else  if(field.type == "radio"){
                        elem = $('<p><label>' + field.placeholder + '</label><br /></p>');
                        for (var i = field.choices.length - 1; i >= 0; i--) {
                          elem.append('<input type="radio" style="height:initial;padding:0;" name="' + field.name + '" value="' +field.choices[i] +'" ' + ( field.value != field.choices[i]  ?  "" : "checked" )  +'> ' + field.choices[i] + ' <br />');
                        };

                     } else  if(field.type == "select"){
                            var opsstring = '';
                             for (var i = field.choices.length - 1; i >= 0; i--) {
                           opsstring +=  '<option ' + (  field.value != field.choices[i] ?  "" : "selected" )  +'>' + field.choices[i] + '</option>';

                        };
                        elem = $('<p><label>' + field.placeholder +'</label><br /><select style="width:100%;max-width:280px;"  name="' + field.name + '">' + opsstring + '</select></p>')
                     } else  if(field.type == "phone"){
                          elem =  $('<input style="width:100%;max-width:280px;" type="text" is-required="' + field.required +'" placeholder="' + field.placeholder + '" value="' + field.value + '" name="' + field.name + '" />');
                            
                     }else {
                        elem =  $('<input style="width:100%;max-width:280px;" type="' + field.type + '" is-required="' + field.required +'" placeholder="' + field.placeholder + '" value="' + field.value +'" name="' + field.name + '" />');
                     }


                     if(field.type == "phone")  elem.mask("(999) 999-9999");
                  
                     if(field.type == "checkbox"){
                         $(".inv-iframe-module .cart-items").append($('<p/>').append(elem).append('<b>' + field.placeholder + '</b>') );
                     } else
                     $(".inv-iframe-module .cart-items").append($('<p/>').append(elem) );
                    };
                    $('<button  style="margin-right:10px;">Update account</button>').click(function(){
                        $(".inv-iframe-module .cart-items").append("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");
                        var payload = {};

                            $("[name]" , $(".inv-iframe-module .cart-items") ).each(function(e,i){
                                    $(this).css("border-color", 'none');
                                    if( ( $(this).attr("name") == "email" || $(this).attr("name") == "password" ) && $(this).val() == "" ){
                                          $(this).css("border-color", 'red');
                                          cancel = true;
                                    }
                                    else if($(this).attr("is-required") == "true" && $(this).val()  == ""){
                                         cancel = true;
                                         $(this).css("border-color", 'red');
                                    } else {
                                    if($(this).attr("type") == "checkbox"){
                                            payload[$(this).attr("name")] = $(this).prop('checked');
                                    } else
                                    payload[$(this).attr("name")] = $(this).val();
                                }
                                });

                        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?accountSession=" + $inventoryStandard.accountid,data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken'], payload:JSON.stringify(payload)}, type:"POST",success:function(html){
                            $(".inv-iframe-module .loader-temp").remove();
                            var data = JSON.parse(html);

                            if(data.saved){
                                 swal({   title: "Success",   text:"Account information saved!" ,   type: "success",   confirmButtonText: "Okay!" });
                            } else {
                                            swal({   title: "Error updating information",   text:data.reason ,   type: "error",   confirmButtonText: "Okay!" });
                                
                            }
                        }
                    });
                        return false;
                    }).appendTo(".inv-iframe-module .cart-items");

                    $('<button ><i class="fa fa-trash"></i> Delete Account</button>').click(function(){
                        swal({   title: "Are you sure?",   text: "All of your account data will be removed as well as any Loyalty points.",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   closeOnConfirm: false }, function(){  
                                 $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?deleteuserSession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                        var data = JSON.parse(html);
                                        if(data.auth){
                                            delete window.localStorage['masterToken'];
                                            delete window.localStorage['inventoryUSERID'];
                                            window.location = "?";
                                            //user info profilepicture, firstname, cart with count, wishlist, logout
                                        }
                                        //silent failure
                                    } 
                                });
                          });
                        return false;
                    }).appendTo(".inv-iframe-module .cart-items");

                } else {
                    hideInventoryModal();
                }
                //silent failure
            } 
        });



}


Inventory.prototype.ShowWishlistPublic = function(userid){
     this.showModal();
   $(".inv-iframe-holder-in").css('display', 'none');
   $(".inv-iframe-module").remove();
   var wishlistshare = "";
   var shareablelink = '';
   if(window.localStorage['inventoryUSERID']){
    shareablelink =  window.location.href.split("?")[0] + '?sharewishlist=' + window.localStorage['inventoryUSERID'];
    wishlistshare = '<div ><h2>Share your wishlist today!</h2><p>' + shareablelink  + '</p> <div class="iframe-jssocial-target"></div></div>';
   }
   $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="column one-half cart-items"><div class="user-misc"></div></div><div class="column one-half subtotal"><p style="clear:both;text-align:center;padding:15px;"><button class="u-full-width" onclick="$inventory.Checkout()"><i class="fa fa-shopping-cart"></i> Checkout</button></p></div> <div style="clear:both"></div> ' + wishlistshare + ' </div>');
   if(window.localStorage['inventoryUSERID']){
    $(".iframe-jssocial-target").jsSocials({
            shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"],
            url: shareablelink,
            text: "",
            showLabel: true,
            showCount: true,
            shareIn: "popup"      
        });
   }
 // this.ShowCart();



    $.ajax({url:"https://orkiv.com/i/ext_js_api.php", type:"POST", data:{id:$inventoryStandard.accountid, key : this.jstoken,open: "wishlist", lookup:userid}, success:function(html){
        var data = JSON.parse(html);
     //  var data = {result:[]};

    /*    var cartem = $inventory.Wishlist();
      var added = {};
       for (var i = cartem.length - 1; i >= 0; i--) {
            
          //    console.log(cartem[i]);
   
           //   if(mdata.result[v].id == cartem[i].id.split("%^}")[0] ){
                //base item match
                if( !added[ cartem[i].id ]){
                  added[cartem[i].id] = true;
                  if(  mdata.result[ cartem[i].id.split("%^}")[0]  ] ) {
                var newset = Object.assign({},  mdata.result[ cartem[i].id.split("%^}")[0] ]);
                newset["setvariations"] = cartem[i].variations;
                  newset["setid"] = cartem[i].id;
                //   console.log(mdata);
                  data.result.push(newset);
                }
              }


        }; */

      

        //console.log(data);
        if(data.profile != ""){
            $(".inv-iframe-module .user-misc").append('<img style="width: 123px;border-radius: 50%;border: 1px solid #bbb8b8;    margin-left: 10px;"  src="' + data.profile + '"/>');
        }
        if(data.firstname != ""){
              $(".inv-iframe-module .user-misc").append('<h3>' + data.firstname + ' \'s Wishlist</h3>');
        }

        for (var v = data.result.length - 1; v >= 0; v--) {
       //   console.log(data.result[v]);
         var inv = data.result[v],itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="columns five"><img style="width:400px"/><p class="nav-pager"><a href="#"><i class="fa fa-circle"></i></a> <a href="#"><i class="fa fa-circle-thin"></i></a></p> </div><div class="columns seven add-fields"> </div> </div>'),pagertemplate = $(".nav-pager", itemscheme).clone().css("margin", "0"), activepage = $("a",pagertemplate).first().clone(), inactivepage = $("a",pagertemplate).last().clone();
                  if($(".nav-pager",itemscheme).prev("img").css("width") == "0px"){
            $(".nav-pager",  itemscheme).prev("img").css("width","500px");
            }

                 var slideshow = $("<div style='max-width: " + $(".nav-pager", itemscheme).prev("img").css("width") + ";margin: 0 auto" + ";'><ul class='slide-box' ></ul></div>");
                 slideshow.attr("uid",makeid(15));
              for (var o = data.result[v].media.length - 1; o >= 0; o--) {
                
              //  console.log(data.result[v]);

                 $("ul", slideshow).append('<li class="slide-box-slide" style="max-width: ' + $(".nav-pager", itemscheme).prev("img").css("width") + ';height:' +  ( $(".nav-pager", itemscheme).prev("img").css("height") == "0px" ? "180px" : $(".nav-pager", itemscheme).prev("img").css("height")  ) + ';background-image: url(' +  data.result[v].media[o] + ');background-size: contain;background-repeat: no-repeat;background-position: 50%;"></li>');
              };

              $(".nav-pager", itemscheme).prev().remove();
              slideshow.insertBefore($(".nav-pager", itemscheme));
              
              $(".nav-pager", itemscheme).html("");
              $('.slide-box-slide',  slideshow).each(function(e,i){
              //  console.log(i);
                var pager = inactivepage.clone();
                if(e == 0)
                  pager = activepage.clone();

                pager.attr("target-index", e).attr("target-slide", slideshow.attr("uid") ).click(function(){
                  //console.log(sliderame);
                  $('[uid="' + $(this).attr("target-slide") + '"]').unslider('animate:' + $(this).attr("target-index"));
                  // $(this).parents(".inventory-realm").unslider('next');

                  $("a", $(this).parent()).html(inactivepage.html());
                  $(this).html(activepage.html());
                
                //  $(this).html(inactivepage.html());
                

                  return false;
                }).css("margin-right","5px").css("margin-left","5px");

                $('.nav-pager',  itemscheme).append(pager);

              });

            
              var varstring = '';
              for (var i = inv.setvariations.length - 1; i >= 0; i--) {
                varstring += '\''+  inv.setvariations[i] + '\'';
                if((i - 1) >= 0){
                    varstring += ',';
                }
              };


          itemscheme.attr("inventory-cartid", inv.setid);
        $(".add-fields", itemscheme).append("<h1>" + inv.name + "</h1>").append( inv.setvariations.length > 0 ? '<p>Additional information : ' + inv.setvariations.join(",") + '</p>' : "").append('<p><button class="remove-from-cart"><i class="fa fa-trash"></i> Remove from Wishlist</button></p>').append('<button  data-id="' + inv.setid  + '" onclick="$inventoryStandard.Cart(\'' + inv.id + '\',1,[' + varstring +'])" data-variations="' + inv.setvariations.join(",") + '" data-link="cart" class="sync-dynamic" ><i class="fa fa-shopping-cart"></i> Add to cart</button>');
        //delte from cart as well
              //update price vars, add deletet button
/*
                        $(".sync-dynamic" ,itemscheme).click(function(){
               
                $inventoryStandard.Cart( $(this).attr("data-id"),1,$(this).attr("data-variations").split(","));
              
               
                return false;
              });
           */

                 $(".remove-from-cart" ,itemscheme).click(function(){
                var cartitem = $(this).parents("[inventory-cartid]");
              cartitem.remove();
                $inventory.RemoveFromWishlist(cartitem.attr("inventory-cartid") );
               
                return false;
              });

              $(".inv-iframe-module .cart-items").append(itemscheme);

                var localslideshow = $('[uid="' + slideshow.attr("uid") + '"]').unslider({nav:false,keys:false,arrows:false});
                  localslideshow.on('unslider.change.local', function(event, index, slide) {
              //  console.log( $(this) );
                $(".nav-pager a", this).each(function(e,i){
                  if(index == e)
                      $(this).html(activepage.html());
                  else  
                  $(this).html(inactivepage.html());
                });

                return false;
              });
        };

     $inventoryStandard.SyncDynamic();    
    } 


  });

}

Inventory.prototype.ShowWishlist = function(){
     this.showModal();
   $(".inv-iframe-holder-in").css('display', 'none');
   $(".inv-iframe-module").remove();
   var wishlistshare = "";
   var shareablelink = '';
   if(window.localStorage['inventoryUSERID']){
    shareablelink =  window.location.href.split("?")[0] + '?sharewishlist=' + window.localStorage['inventoryUSERID'];
    wishlistshare = '<div ><h2>Share your wishlist today!</h2><p>' + shareablelink  + '</p> <div class="iframe-jssocial-target"></div></div>';
   }
   $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="column one-half cart-items"><h3><i class="fa fa-bars"></i> WISHLIST</h3></div><div class="column one-half subtotal"><p style="clear:both;text-align:center;padding:15px;"><button class="u-full-width" onclick="$inventory.Checkout()"><i class="fa fa-shopping-cart"></i> Checkout</button></p></div> <div style="clear:both"></div> ' + wishlistshare + ' </div>');
   if(window.localStorage['inventoryUSERID']){
    $(".iframe-jssocial-target").jsSocials({
            shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"],
            url: shareablelink,
            text: "",
            showLabel: true,
            showCount: true,
            shareIn: "popup"      
        });
   }
 // this.ShowCart();
    var itemids = [];

    for (var i = $inventory.Wishlist().length - 1; i >= 0; i--) {
       itemids.push( $inventory.Wishlist()[i].id.split("%^}")[0] );
    };

    $.ajax({url:"https://orkiv.com/i/ext_js_api.php", type:"POST", data:{id:$inventoryStandard.accountid, key : this.jstoken,open: "openmanydictionary", lookup:itemids.join(",")}, success:function(html){
        var mdata = JSON.parse(html);
        var data = {result:[]};

        var cartem = $inventory.Wishlist();
      var added = {};
       for (var i = cartem.length - 1; i >= 0; i--) {
            
          //    console.log(cartem[i]);
   
           //   if(mdata.result[v].id == cartem[i].id.split("%^}")[0] ){
                //base item match
                if( !added[ cartem[i].id ]){
                  added[cartem[i].id] = true;
                  if(  mdata.result[ cartem[i].id.split("%^}")[0]  ] ) {
                var newset = Object.assign({},  mdata.result[ cartem[i].id.split("%^}")[0] ]);
                newset["setvariations"] = cartem[i].variations;
                  newset["setid"] = cartem[i].id;
                //   console.log(mdata);
                  data.result.push(newset);
                }
              }


        };

      

        //console.log(data);



        for (var v = data.result.length - 1; v >= 0; v--) {
       //   console.log(data.result[v]);
         var inv = data.result[v],itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="columns five"><img style="width:400px"/><p class="nav-pager"><a href="#"><i class="fa fa-circle"></i></a> <a href="#"><i class="fa fa-circle-thin"></i></a></p> </div><div class="columns seven add-fields"> </div> </div>'),pagertemplate = $(".nav-pager", itemscheme).clone().css("margin", "0"), activepage = $("a",pagertemplate).first().clone(), inactivepage = $("a",pagertemplate).last().clone();
                  if($(".nav-pager",itemscheme).prev("img").css("width") == "0px"){
            $(".nav-pager",  itemscheme).prev("img").css("width","500px");
            }

                 var slideshow = $("<div style='max-width: " + $(".nav-pager", itemscheme).prev("img").css("width") + ";margin: 0 auto" + ";'><ul class='slide-box' ></ul></div>");
                 slideshow.attr("uid",makeid(15));
              for (var o = data.result[v].media.length - 1; o >= 0; o--) {
                
              //  console.log(data.result[v]);

                 $("ul", slideshow).append('<li class="slide-box-slide" style="max-width: ' + $(".nav-pager", itemscheme).prev("img").css("width") + ';height:' +  ( $(".nav-pager", itemscheme).prev("img").css("height") == "0px" ? "180px" : $(".nav-pager", itemscheme).prev("img").css("height")  ) + ';background-image: url(' +  data.result[v].media[o] + ');background-size: contain;background-repeat: no-repeat;background-position: 50%;"></li>');
              };

              $(".nav-pager", itemscheme).prev().remove();
              slideshow.insertBefore($(".nav-pager", itemscheme));
              
              $(".nav-pager", itemscheme).html("");
              $('.slide-box-slide',  slideshow).each(function(e,i){
              //  console.log(i);
                var pager = inactivepage.clone();
                if(e == 0)
                  pager = activepage.clone();

                pager.attr("target-index", e).attr("target-slide", slideshow.attr("uid") ).click(function(){
                  //console.log(sliderame);
                  $('[uid="' + $(this).attr("target-slide") + '"]').unslider('animate:' + $(this).attr("target-index"));
                  // $(this).parents(".inventory-realm").unslider('next');

                  $("a", $(this).parent()).html(inactivepage.html());
                  $(this).html(activepage.html());
                
                //  $(this).html(inactivepage.html());
                

                  return false;
                }).css("margin-right","5px").css("margin-left","5px");

                $('.nav-pager',  itemscheme).append(pager);

              });

            
              var varstring = '';
              for (var i = inv.setvariations.length - 1; i >= 0; i--) {
                varstring += '\''+  inv.setvariations[i] + '\'';
                if((i - 1) >= 0){
                    varstring += ',';
                }
              };


          itemscheme.attr("inventory-cartid", inv.setid);
        $(".add-fields", itemscheme).append("<h1>" + inv.name + "</h1>").append( inv.setvariations.length > 0 ? '<p>Additional information : ' + inv.setvariations.join(",") + '</p>' : "").append('<p><button class="remove-from-cart"><i class="fa fa-trash"></i> Remove from Wishlist</button></p>').append('<button  data-id="' + inv.setid  + '" onclick="$inventoryStandard.Cart(\'' + inv.id + '\',1,[' + varstring +'])" data-variations="' + inv.setvariations.join(",") + '" data-link="cart" class="sync-dynamic" ><i class="fa fa-shopping-cart"></i> Add to cart</button>');
        //delte from cart as well
              //update price vars, add deletet button
/*
                        $(".sync-dynamic" ,itemscheme).click(function(){
               
                $inventoryStandard.Cart( $(this).attr("data-id"),1,$(this).attr("data-variations").split(","));
              
               
                return false;
              });
           */

                 $(".remove-from-cart" ,itemscheme).click(function(){
                var cartitem = $(this).parents("[inventory-cartid]");
              cartitem.remove();
                $inventory.RemoveFromWishlist(cartitem.attr("inventory-cartid") );
               
                return false;
              });

              $(".inv-iframe-module .cart-items").append(itemscheme);

                var localslideshow = $('[uid="' + slideshow.attr("uid") + '"]').unslider({nav:false,keys:false,arrows:false});
                  localslideshow.on('unslider.change.local', function(event, index, slide) {
              //  console.log( $(this) );
                $(".nav-pager a", this).each(function(e,i){
                  if(index == e)
                      $(this).html(activepage.html());
                  else  
                  $(this).html(inactivepage.html());
                });

                return false;
              });
        };

     $inventoryStandard.SyncDynamic();    
    } 


  });

}


Inventory.prototype.Wishlist = function(itemid,variations) {
    var data = this.getLocal("inventoryData",true); 
        
        if(itemid){
            var inalready = false


            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.wishlist.length - 1; i >= 0; i--) {
                if(data.wishlist[i].id == itemid){
                    inalready = true;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Wishlist Updated!");
                data.wishlist.push({id:itemid,variations:variations})
                  $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordwadd=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
                    this.saveLocal("inventoryData",data,true);
            } else {
                //this.Alert("item removed from withlist!");
                this.RemoveFromWishlist(itemid);
            }

            this.SyncDynamic(); 

        } else {
            return data.wishlist;
        }
};

Inventory.prototype.WishlistSafe = function(itemid,variations) {
    var data = this.getLocal("inventoryData",true); 
        
        if(itemid){
            var inalready = false


            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.wishlist.length - 1; i >= 0; i--) {
                if(data.wishlist[i].id == itemid){
                    inalready = true;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Wishlist Updated!");
                data.wishlist.push({id:itemid,variations:variations})
                  $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordwadd=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
                    this.saveLocal("inventoryData",data,true);
            } else {
                //this.Alert("item removed from withlist!");
              //  this.RemoveFromWishlist(itemid);
            }

            this.SyncDynamic(); 

        } else {
            return data.wishlist;
        }
};

Inventory.prototype.Buy = function(itemid,quantity,variations) {
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/cart-checkout" + stripeMod + "/?" + $inventoryStandard.accountid + "=";
    

    if(quantity == 0){
        quantity = 1;
    }
    
        var itemlink =  itemid + "";
        if(variations.length > 0){
            itemlink += "%^}";
        }
        for (var b = variations.length - 1; b >= 0; b--) {
            itemlink +=  variations[b];
                if(b != 0)
                    itemlink += "%^}";
        };
        //quantitychain.push(itemlink + "=" + item.quantity)

    cartlink += itemlink + "&" + itemlink + "=" + quantity;
    document.getElementById("InventoryIframe").src = cartlink + ( $inventoryStandard.user ?  "&userid=" + $inventoryStandard.user._id.$id  : ""  );
};

Inventory.prototype.BuyService = function(itemid) {
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/service-checkout" + stripeMod + "/?" + $inventoryStandard.accountid + "=";

    
        var itemlink =  itemid + "";
        
        //quantitychain.push(itemlink + "=" + item.quantity)

    cartlink += itemlink  ;
    document.getElementById("InventoryIframe").src = cartlink + ( $inventoryStandard.user ?  "&userid=" + $inventoryStandard.user._id.$id  : ""  );
};

Inventory.prototype.GenCartlink = function(){

var data = this.getLocal("inventoryData",true);   

    //InventoryIframe
    var cartlink = "https://orkiv.com/i/cart-one/?" + $inventoryStandard.accountid + "=";
    var data = this.getLocal("inventoryData",true); 

    var quantitychain = [];
    for (var i = data.cart.length - 1; i >= 0; i--) {
        var item = data.cart[i];
        var itemlink =  item.id ;
        
        quantitychain.push(itemlink + "=" + item.quantity)

        cartlink += itemlink;

        if(i != 0)
        cartlink += ",";
    }
    cartlink += "&";
    for (var i = quantitychain.length - 1; i >= 0; i--) {
        cartlink += quantitychain[i];

        if(i != 0) cartlink += "&";
    };

   return  cartlink  + ( $inventoryStandard.user ?  "&userid=" + $inventoryStandard.user._id.$id  : ""  );

         
}

Inventory.prototype.FilterImages = function( cart_item , db_item){
 //   var id = cart_item.id.split("%^}")[0];
    if(!db_item.gridvault ) return db_item.media;
    var newset = [];
    for (var i = db_item.media.length - 1; i >= 0; i--) {
       var iv =   db_item.media[i].split( $inventoryStandard.accountid +  "=")[1];
       //console.log(db_item.media[i].split( $inventoryStandard.accountid +  "=")[1]);
       var grid = db_item.gridvault[iv];
       var add = true;
       //iterate choices
       //
       if(grid){
       for (var o = cart_item.variations.length - 1; o >= 0 ; o--) {
           var set = cart_item.variations[o].split(":");
           // console.log(cart_item)
           if(set.length == 2){
                if(grid[set[0]] !=  set[1]){
                        add = false;
                }
           }
       };
        if(add) {
        newset.push(db_item.media[i]);
       }
     }
      

    };
    return newset;
}

Inventory.prototype.OneClick = function(){
      var data = this.getLocal("inventoryData",true);   
    if(data.cart.length == 0){
        this.Alert("Cart empty!");
        console.log("Cart empty");
    } else {
    this.showModal();
    //InventoryIframe
    var basepage = "data:text/html;base64," + window.btoa('<form id="vx_t" method="POST" action="' + this.GenCartlink() + '"><input type="hidden" name="user_token" value="' + window.localStorage['masterToken']   + '" /><input type="submit"> </form><script> document.getElementById("vx_t").submit()</script>');


    document.getElementById("InventoryIframe").src = basepage;
    }  
}
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
function MakeDiv(inv , targ){
        var itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="item-images"></div><div style="clear:both"></div><div class="item-body"><h1 class="name"> </h1><h3 class=""><b>Price </b> <span class="price drop-price label-primary"></span></h3><p class=""><span class="tags"></span></p> <p class=""><b> SKU / </b><span class="sku"></span></p> <div class="add-f"></div> <div class="desc"></div> </div></div>');
        for (var i = inv.media.length - 1; i >= 0; i--) {
            $(".item-images" , itemscheme ).append( '<img data-zoom-image="' + inv.media[i] +'" src="' + inv.media[i] + '" style="    float: left;height: 70px;margin: 10px;width: initial;"/>'  );
        };
               $(".name", itemscheme).html(inv.name);
               $(".desc",itemscheme).html(inv.desc); 
                $(".tags",itemscheme).html(inv.tags);
                  $(".price",itemscheme).html( ( inv.ordprice /100 ) .formatMoney(2,".", ",")); 
                 $(".sku",itemscheme).html(inv.sku); 
             $(".add-f",itemscheme).append("<p><b> <i class='fa fa-circle'></i> </b> <span class='drop-cat-dist'>Loading</span></p>"); 
                $item_temp = inv;
                $item_temp.media_b = inv.media;
                $inventoryStandard.Category(inv.category, function(data){
                    $(".drop-cat-dist").html(data.result.name);
                } )
                        for (var key in inv) {
                  if (inv.hasOwnProperty(key)) {
                    if(inv[key]["type"] ){
                        if(inv[key]["type"] == "select"){
                            choices = inv[key]["data"].split("%^}");
                            var selops = "<select class='choice' name='" + key +"'><option value=''>Choose</option>";
                            for (var i = choices.length - 1; i >= 0; i--) {
                                if(choices[i] != "")
                               selops +=  "<option>" + choices[i] + "</option>";
                            };
                             selops += "</select>";
                            $(".item-body", itemscheme).append("<p style='margin-top:1.5em;'><label>" + key  + "</label> " +  selops + " </p>");
                        }
                    }
                  }
                }
                 for (var key in inv) {
                  if (inv.hasOwnProperty(key)) {
                    if(inv[key]["type"] ){
                        if(inv[key]["type"] != "select"){
                              $(".add-f",itemscheme).append("<p><b>" + key + " / </b> " + inv[key]["data"] + "</p>"); 
                        }
                    }
                  }
                }

                      $(".item-body" , itemscheme).append('<div style="margin-bottom:10px;" class=" inventory-form-group" data-type="cart" data-id="57762fe070f8172e083c1792"><input min="0" type="number" data-isf="amt" class="item-cart-count" placeholder="Amount" /><button class="item-cart sync-orkivinv" ><i class="fa fa-shopping-cart"></i></button></div>');
                   $(".item-body" , itemscheme).append('<div class="inventory-form-group" data-type="cart" data-id="57762fe070f8172e083c1792"><input min="0" type="number" data-isf="amt" placeholder="Amount" class="item-buy-count" /><button class="sync-orkivinv item-buy" ><i class="fa fa-credit-card"></i></button></div>');
              $(targ).append(itemscheme);
              $(".inventory-realm .item-buy").click(function(){
                if(!$item_temp.setvars) return;
                if(   $(".inventory-realm .choice").length == $item_temp.setvars.length)
                $inventoryStandard.Buy($item_temp.id , parseInt( $(".inventory-realm-class-input .item-buy-count").val() ) ,$item_temp.setvars  )
              });
                $(".inventory-realm .item-cart").click(function(){

                    if(!$item_temp.setvars) return;

                    if(   $(".inventory-realm .choice").length == $item_temp.setvars.length)
                $inventoryStandard.Cart($item_temp.id  , parseInt( $(".inventory-realm-class-input .item-cart-count").val() ) ,$item_temp.setvars  )
              });
              $(".inventory-realm .choice").change(function(){
                //setTimeout(function(){
                    updateItemLayout();
               
              })
              if(  $(".inventory-realm .choice").length > 0 ){
                  $(".inventory-realm .drop-price").html("Customize your item first.");
              }
              $("[data-zoom-image]").elevateZoom();
}

function updateItemLayout(){
   //     alert("hey");
                   var price = $item_temp.ordprice;
                 $item_temp.setvars = [];
               //  var setvars = [];
                $(".inventory-realm .choice").each(function(e,i){

                        if($(this).val() != ""){
                            var cname = $(this).attr("name") + ":" +  $(this).val();
                                 if($item_temp.setvars.indexOf(cname) == -1)
                                  $item_temp.setvars.push(cname);
                            var variation = getVar($item_temp.variations, cname);
                            if(variation){
                                if(variation.type == "add"){
                           
                                    price += variation.priceChange;
                                }
                            }
                        }
                    });

                $(".inventory-realm .choice").each(function(e,i){

                        if($(this).val() != ""){

                             var cname = $(this).attr("name") + ":" +  $(this).val();
                             if($item_temp.setvars.indexOf(cname) == -1)
                                  $item_temp.setvars.push(cname);
                            var variation = getVar($item_temp.variations, $(this).attr("name"));
                            if(variation){
                                
                                if(variation.type != "add"){
                                
                                    price = variation.priceChange;
                                }
                            }
                        }
                    });
                    
               
                 $item_temp.media = $item_temp.media_b;
                  
                 $item_temp.media = $inventoryStandard.FilterImages({variations : $item_temp.setvars, id: $item_temp.id}, $item_temp);
                  console.log( $item_temp.media);
                    $("[data-zoom-image]").css('opacity', '0.2');
                    for (var i = $item_temp.media.length - 1; i >= 0; i--) {
                       $(".inventory-realm-class-input [src='" + $item_temp.media[i] + "']" ).css("opacity","1");
                    };
                    if(   $(".inventory-realm .choice").length == $item_temp.setvars.length){
                         $(".inventory-realm .drop-price").html( ( price /100 ) .formatMoney(2,".", ",")); 
                    } else {
                           $(".inventory-realm .drop-price").html("Customize your item first.");
                    }
                 

}
function getVar(set, name){
           for (var i = set.length - 1; i >= 0; i--) {
        if(set[i].name == name ){
            return set[i];
        }
    };
    return false;
}

Inventory.prototype.DefaultLayout = function(itemid , targ){
    $(targ).addClass("inventory-realm").addClass("inventory-realm-class-input");
    $inventoryStandard.Open(itemid, function(Data){
        MakeDiv(Data.result, targ);
    });
}

Inventory.prototype.Checkout = function() {

  //recalculate total 
       this.showModal();
   $(".inv-iframe-holder-in").css('display', 'none');
   $(".inv-iframe-module").remove();
   $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="column one-half cart-items"><h3><i class="fa fa-shopping-cart"></i> Items in cart</h3></div><div class="column one-half subtotal"><h2>Subtotal</h2><h1>subtotal</h1><div class="ext-oneclick"></div><p style="clear:both"><button class="update-to-oneclick u-full-width" onclick="$inventory.ShowCart()"><i class="fa fa-shopping-cart"></i> Checkout</button></p></div> <div style="clear:both"></div> </div>');
 // this.ShowCart();
    var itemids = [];

    for (var i = $inventory.Cart().length - 1; i >= 0; i--) {
       itemids.push( $inventory.Cart()[i].id.split("%^}")[0] );
    };

    $.ajax({url:"https://orkiv.com/i/ext_js_api.php", type:"POST", data:{id:$inventoryStandard.accountid, key : this.jstoken,open: "openmanydictionary", lookup:itemids.join(",")}, success:function(html){
        var mdata = JSON.parse(html);
        var data = {result:[]};

        var cartem = $inventory.Cart();
      var added = {};
       for (var i = cartem.length - 1; i >= 0; i--) {
            
          //    console.log(cartem[i]);
   
           //   if(mdata.result[v].id == cartem[i].id.split("%^}")[0] ){
                //base item match
                if( !added[ cartem[i].id ]){
                  added[cartem[i].id] = true;
                  if(  mdata.result[ cartem[i].id.split("%^}")[0]  ] ) {
                var newset = Object.assign({},  mdata.result[ cartem[i].id.split("%^}")[0] ]);
                newset["setvariations"] = cartem[i].variations;
                 newset["setquantity"] = cartem[i].quantity;
                  newset["setid"] = cartem[i].id;
                  newset["js_entry"] = cartem[i];
                //   console.log(mdata);
                  data.result.push(newset);
                }
              }


        };

      

        //console.log(data);

         window["InventoryTallyCart"] = function(){
            var grandtotal = 0;
            $("[inventory-cartid]").each(function(){
              grandtotal += parseInt( $(this).attr("price") ) * parseInt($(this).attr("quantity"));
            });
            //add additionals here

              if(window.localStorage['masterToken'] )
        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?onex=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"],cartlink : $inventoryStandard.GenCartlink() ,token:window.localStorage['masterToken']}, success:function(html){
            var data = JSON.parse(html);
                    if(data.auth){
                        // load valid reductions
                        $(".inventory-realm .update-to-oneclick").attr("onclick", "$inventoryStandard.OneClick()");
                     /*   if($(".inventory-realm .coupon-field").length == 0){
                            var couponfield = $('<div style="margin:15px;" class="coupon-field"><div class=""><p><input class="form-control tag-form" value="" type="text" placeholder="Coupon Code" name="rdCode"></p></div>  <div class=""><button class="rdmt">Redeem</button></div></div>');
                              $(".inventory-realm .ext-oneclick").parent().prepend(couponfield);
                            $(".inventory-realm .rdmt").click(function(){
                                window["InventoryTallyCart"]();
                                return false;
                            });
                            $(".inventory-realm .tag-form" ).tagsInput({  'height':'90px',
                               'width':'100%',
                               'interactive':true,
                               'defaultText':'Enter promotional codes here'});
                          
                        } */
                        //ext-oneclick
                        //red grand total as needed
                    }
                }
            });
            $("h1" , $(".inv-iframe-module .subtotal")).html("$ " + (grandtotal/100).toFixed(2) );
          }

        for (var v = data.result.length - 1; v >= 0; v--) {
       //   console.log(data.result[v]);
         var inv = data.result[v],itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="columns five"><img style="width:400px"/><p class="nav-pager"><a href="#"><i class="fa fa-circle"></i></a> <a href="#"><i class="fa fa-circle-thin"></i></a></p> </div><div class="columns seven add-fields"> </div> </div>'),pagertemplate = $(".nav-pager", itemscheme).clone().css("margin", "0"), activepage = $("a",pagertemplate).first().clone(), inactivepage = $("a",pagertemplate).last().clone();
                  if($(".nav-pager",itemscheme).prev("img").css("width") == "0px"){
            $(".nav-pager",  itemscheme).prev("img").css("width","500px");
            }

                 var slideshow = $("<div style='max-width: " + $(".nav-pager", itemscheme).prev("img").css("width") + ";margin: 0 auto" + ";'><ul class='slide-box' ></ul></div>");
                 slideshow.attr("uid",makeid(15));
                data.result[v].media = $inventoryStandard.FilterImages( inv.js_entry ,inv)
              for (var o = data.result[v].media.length - 1; o >= 0; o--) {
                
              //  console.log(data.result[v]);

                 $("ul", slideshow).append('<li class="slide-box-slide" style="max-width: ' + $(".nav-pager", itemscheme).prev("img").css("width") + ';height:' +  ( $(".nav-pager", itemscheme).prev("img").css("height") == "0px" ? "180px" : $(".nav-pager", itemscheme).prev("img").css("height")  ) + ';background-image: url(' +  data.result[v].media[o] + ');background-size: contain;background-repeat: no-repeat;background-position: 50%;"></li>');
              };

              $(".nav-pager", itemscheme).prev().remove();
              slideshow.insertBefore($(".nav-pager", itemscheme));
              
              $(".nav-pager", itemscheme).html("");
              $('.slide-box-slide',  slideshow).each(function(e,i){
              //  console.log(i);
                var pager = inactivepage.clone();
                if(e == 0)
                  pager = activepage.clone();

                pager.attr("target-index", e).attr("target-slide", slideshow.attr("uid") ).click(function(){
                  //console.log(sliderame);
                  $('[uid="' + $(this).attr("target-slide") + '"]').unslider('animate:' + $(this).attr("target-index"));
                  // $(this).parents(".inventory-realm").unslider('next');

                  $("a", $(this).parent()).html(inactivepage.html());
                  $(this).html(activepage.html());
                
                //  $(this).html(inactivepage.html());
                

                  return false;
                }).css("margin-right","5px").css("margin-left","5px");

                $('.nav-pager',  itemscheme).append(pager);

              });

          //      itemscheme.attr("expand-id", makeid(20)).attr("my-data",JSON.stringify(inv));
          var finalprice = inv.ordprice;
          for (var h = inv.setvariations.length - 1; h >= 0; h--) {
             var comparitor = inv.setvariations[h];
               for (var g = inv.variations.length - 1; g >= 0; g--) {
               if(comparitor == inv.variations[g].name)
                if(inv.variations[g].type != "add")
                  finalprice = parseInt(inv.variations[g].priceChange);
             };
             
           
          };

            for (var h = inv.setvariations.length - 1; h >= 0; h--) {
             var comparitor = inv.setvariations[h];
       
                for (var g = inv.variations.length - 1; g >= 0; g--) {
               if(comparitor == inv.variations[g].name)
                if(inv.variations[g].type == "add")
                  finalprice += parseInt(inv.variations[g].priceChange);
             };
           
          };
          //check for variations


          itemscheme.attr("inventory-cartid", inv.setid).attr("price", finalprice).attr("quantity", inv.setquantity);
        $(".add-fields", itemscheme).append("<h1>" + inv.name + "</h1>").append("<h2>$ " + (finalprice/100).toFixed(2) + " </h2>").append( inv.setvariations.length > 0 ? '<p>Additional information : ' + inv.setvariations.join(",") + '</p>' : "").append('<p>Quantity</p><p><input type="number" placeholder="quantity" class="cart-quantity-update" value="' + inv.setquantity + '" min="1" max="' + inv.quantity +'"/><button class="remove-from-cart"><i class="fa fa-trash"></i> Remove from cart</button> <a href="' + inv.link +'">Open item</a></p>');
        //delte from cart as well
              //update price vars, add deletet button

              $(".cart-quantity-update" ,itemscheme).change(function(){
                var cartitem = $(this).parents("[inventory-cartid]");
                cartitem.attr("quantity", $(this).val());
                $inventory.UpdateCart(cartitem.attr("inventory-cartid"), parseInt( $(this).val() ) );
                window["InventoryTallyCart"]();
              });

                 $(".remove-from-cart" ,itemscheme).click(function(){
                var cartitem = $(this).parents("[inventory-cartid]");
              cartitem.remove();
                $inventory.RemoveFromCart(cartitem.attr("inventory-cartid") );
                  window["InventoryTallyCart"]();
                 
                return false;
              });

              $(".inv-iframe-module .cart-items").append(itemscheme);

                var localslideshow = $('[uid="' + slideshow.attr("uid") + '"]').unslider({nav:false,keys:false,arrows:false});
                  localslideshow.on('unslider.change.local', function(event, index, slide) {
              //  console.log( $(this) );
                $(".nav-pager a", this).each(function(e,i){
                  if(index == e)
                      $(this).html(activepage.html());
                  else  
                  $(this).html(inactivepage.html());
                });

                return false;
              });
        };



        window["InventoryTallyCart"]();
    } 
  });

};


Inventory.prototype.saveLocal = function(key, data,decode){
    if(decode){
        window.localStorage[key] = JSON.stringify(data);
    } else window.localStorage[key] = data;

    if(window.localStorage['masterToken']){
        //send cart entirely
        //window.localStorage.inventoryData
            $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?backupSession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken'],payload:window.localStorage.inventoryData}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                    console.log("User data backed up");
                }
            }
        });
    }
}

Inventory.prototype.getLocal = function(key, decode){
    if(decode){
        return JSON.parse(window.localStorage[key]);
    } else return window.localStorage[key] 
}

Inventory.prototype.xFetch = function(url,payload,type,callback){
      var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        callback(xhttp.responseText);

    } 
  };


  xhttp.open(type, url, true);

  if(payload){
    payload.owner = this.accountid;
    payload.jstoken = this.jstoken
    payload.client = window.localStorage['inventoryID'];
  }

  if(type == "POST"){
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(serialize(payload));
} else  xhttp.send();
}

Inventory.prototype.xFetchapi = function(url,payload,type,callback){
      var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        callback(xhttp.responseText);

    } 
  };


  xhttp.open(type, url, true);

  if(payload){
    payload.id = this.accountid;
    payload.key = this.jstoken
   // payload.client = window.localStorage['inventoryID'];
  }

  if(type == "POST"){
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(serialize(payload));
} else  xhttp.send();
}

