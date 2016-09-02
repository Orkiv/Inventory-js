
/*
##############################################
#				Ready JS			         #
#											 #
##############################################
*/

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


if(!$.fn.unslider) { 

    
    $('head').append('<link rel="stylesheet" href="https://www.orkiv.com/sapphire/dist-unslider/css/unslider.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="https://www.orkiv.com/sapphire/dist-unslider/css/unslider-dots.css" type="text/css" />');
    !function($){return $?($.Unslider=function(t,n){var e=this;return e._="unslider",e.defaults={autoplay:!1,delay:3e3,speed:750,easing:"swing",keys:{prev:37,next:39},nav:!0,arrows:{prev:'<a class="'+e._+'-arrow prev">Prev</a>',next:'<a class="'+e._+'-arrow next">Next</a>'},animation:"horizontal",selectors:{container:"ul:first",slides:"li"},animateHeight:!1,activeClass:e._+"-active",swipe:!0,swipeThreshold:.2},e.$context=t,e.options={},e.$parent=null,e.$container=null,e.$slides=null,e.$nav=null,e.$arrows=[],e.total=0,e.current=0,e.prefix=e._+"-",e.eventSuffix="."+e.prefix+~~(2e3*Math.random()),e.interval=null,e.init=function(t){return e.options=$.extend({},e.defaults,t),e.$container=e.$context.find(e.options.selectors.container).addClass(e.prefix+"wrap"),e.$slides=e.$container.children(e.options.selectors.slides),e.setup(),$.each(["nav","arrows","keys","infinite"],function(t,n){e.options[n]&&e["init"+$._ucfirst(n)]()}),jQuery.event.special.swipe&&e.options.swipe&&e.initSwipe(),e.options.autoplay&&e.start(),e.calculateSlides(),e.$context.trigger(e._+".ready"),e.animate(e.options.index||e.current,"init")},e.setup=function(){e.$context.addClass(e.prefix+e.options.animation).wrap('<div class="'+e._+'" />'),e.$parent=e.$context.parent("."+e._);var t=e.$context.css("position");"static"===t&&e.$context.css("position","relative"),e.$context.css("overflow","hidden")},e.calculateSlides=function(){if(e.total=e.$slides.length,"fade"!==e.options.animation){var t="width";"vertical"===e.options.animation&&(t="height"),e.$container.css(t,100*e.total+"%").addClass(e.prefix+"carousel"),e.$slides.css(t,100/e.total+"%")}},e.start=function(){return e.interval=setTimeout(function(){e.next()},e.options.delay),e},e.stop=function(){return clearTimeout(e.interval),e},e.initNav=function(){var t=$('<nav class="'+e.prefix+'nav"><ol /></nav>');e.$slides.each(function(n){var i=this.getAttribute("data-nav")||n+1;$.isFunction(e.options.nav)&&(i=e.options.nav.call(e.$slides.eq(n),n,i)),t.children("ol").append('<li data-slide="'+n+'">'+i+"</li>")}),e.$nav=t.insertAfter(e.$context),e.$nav.find("li").on("click"+e.eventSuffix,function(){var t=$(this).addClass(e.options.activeClass);t.siblings().removeClass(e.options.activeClass),e.animate(t.attr("data-slide"))})},e.initArrows=function(){e.options.arrows===!0&&(e.options.arrows=e.defaults.arrows),$.each(e.options.arrows,function(t,n){e.$arrows.push($(n).insertAfter(e.$context).on("click"+e.eventSuffix,e[t]))})},e.initKeys=function(){e.options.keys===!0&&(e.options.keys=e.defaults.keys),$(document).on("keyup"+e.eventSuffix,function(t){$.each(e.options.keys,function(n,i){t.which===i&&$.isFunction(e[n])&&e[n].call(e)})})},e.initSwipe=function(){var t=e.$slides.width();"fade"!==e.options.animation&&e.$container.on({movestart:function(t){return t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY?!!t.preventDefault():void e.$container.css("position","relative")},move:function(n){e.$container.css("left",-(100*e.current)+100*n.distX/t+"%")},moveend:function(n){Math.abs(n.distX)/t>e.options.swipeThreshold?e[n.distX<0?"next":"prev"]():e.$container.animate({left:-(100*e.current)+"%"},e.options.speed/2)}})},e.initInfinite=function(){var t=["first","last"];$.each(t,function(n,i){e.$slides.push.apply(e.$slides,e.$slides.filter(':not(".'+e._+'-clone")')[i]().clone().addClass(e._+"-clone")["insert"+(0===n?"After":"Before")](e.$slides[t[~~!n]]()))})},e.destroyArrows=function(){$.each(e.$arrows,function(t,n){n.remove()})},e.destroySwipe=function(){e.$container.off("movestart move moveend")},e.destroyKeys=function(){$(document).off("keyup"+e.eventSuffix)},e.setIndex=function(t){return 0>t&&(t=e.total-1),e.current=Math.min(Math.max(0,t),e.total-1),e.options.nav&&e.$nav.find('[data-slide="'+e.current+'"]')._active(e.options.activeClass),e.$slides.eq(e.current)._active(e.options.activeClass),e},e.animate=function(t,n){if("first"===t&&(t=0),"last"===t&&(t=e.total),isNaN(t))return e;e.options.autoplay&&e.stop().start(),e.setIndex(t),e.$context.trigger(e._+".change",[t,e.$slides.eq(t)]);var i="animate"+$._ucfirst(e.options.animation);return $.isFunction(e[i])&&e[i](e.current,n),e},e.next=function(){var t=e.current+1;return t>=e.total&&(t=0),e.animate(t,"next")},e.prev=function(){return e.animate(e.current-1,"prev")},e.animateHorizontal=function(t){var n="left";return"rtl"===e.$context.attr("dir")&&(n="right"),e.options.infinite&&e.$container.css("margin-"+n,"-100%"),e.slide(n,t)},e.animateVertical=function(t){return e.options.animateHeight=!0,e.options.infinite&&e.$container.css("margin-top",-e.$slides.outerHeight()),e.slide("top",t)},e.slide=function(t,n){if(e.options.animateHeight&&e._move(e.$context,{height:e.$slides.eq(n).outerHeight()},!1),e.options.infinite){var i;n===e.total-1&&(i=e.total-3,n=-1),n===e.total-2&&(i=0,n=e.total-2),"number"==typeof i&&(e.setIndex(i),e.$context.on(e._+".moved",function(){e.current===i&&e.$container.css(t,-(100*i)+"%").off(e._+".moved")}))}var o={};return o[t]=-(100*n)+"%",e._move(e.$container,o)},e.animateFade=function(t){var n=e.$slides.eq(t).addClass(e.options.activeClass);e._move(n.siblings().removeClass(e.options.activeClass),{opacity:0}),e._move(n,{opacity:1},!1)},e._move=function(t,n,i,o){return i!==!1&&(i=function(){e.$context.trigger(e._+".moved")}),t._move(n,o||e.options.speed,e.options.easing,i)},e.init(n)},$.fn._active=function(t){return this.addClass(t).siblings().removeClass(t)},$._ucfirst=function(t){return(t+"").toLowerCase().replace(/^./,function(t){return t.toUpperCase()})},$.fn._move=function(){return this.stop(!0,!0),$.fn[$.fn.velocity?"velocity":"animate"].apply(this,arguments)},void($.fn.unslider=function(t){return this.each(function(){var n=$(this);if("string"==typeof t&&n.data("unslider")){t=t.split(":");var e=n.data("unslider")[t[0]];if($.isFunction(e))return e.apply(n,t[1]?t[1].split(","):null)}return n.data("unslider",new $.Unslider(n,t))})})):console.warn("Unslider needs jQuery")}(window.jQuery);
} 
$inventoryStandard = {};

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


function Inventory(accountid, jstoken,alerts,syncdynamic) {
    this.accountid = accountid;
    this.jstoken = jstoken;
    this.modal = false;
    this.alerts = true;
    this.syncdynamic = true;

    if(typeof alerts !== 'undefined') this.alerts = alerts;

    if(typeof syncdynamic !== 'undefined') this.syncdynamic = syncdynamic;
    //load styles for drop in ui
    loadjscssfile("https://orkiv.com/i/ext_css.css","css");
    if(!findCss("font-awesome"))
    loadjscssfile("https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css","css");

    if(window.localStorage){
        if(!window.localStorage['inventoryID']){
            window.localStorage['inventoryID'] = makeid(25);

            window.localStorage['inventoryData'] = JSON.stringify({cart:[], wishlist:[]});
            /*

                bind classes
            */
        
            
        } else {
            console.log("Restoring session");
        }

            
            this.SyncDynamic();
            this.xFetch("https://www.orkiv.com/i/ext_js.php",{},"POST",function(html){
                    //aalert(100);
                     $('body').append(html);
                    


            });

    
    } else {
        console.log("No local storage support!, will use ext_js of Orkiv");
    }

    $inventoryStandard = this;
 
}

Inventory.prototype.Data = function(){
    return this.getLocal("inventoryData",true);
}


Inventory.prototype.SyncDynamic = function(){
    if(this.syncdynamic){
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
     $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recorddrop=" + this.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
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
          $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordwdrop=" + this.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
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
         $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordadd=" + this.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
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

Inventory.prototype.ShowCart = function(){
  var data = this.getLocal("inventoryData",true);   
    if(data.cart.length == 0){
        this.Alert("Cart empty!");
        console.log("Cart empty");
    } else {
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/cart-checkout" + stripeMod + "/?" + this.accountid + "=";
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

    document.getElementById("InventoryIframe").src = cartlink + "&sessionid=" + window.localStorage.inventoryID;
    }             
}

Inventory.prototype.showModal = function(){
    if(!this.modal){
            if(document.getElementsByClassName("inventory-alert").length == 0){
        var x = document.getElementsByClassName("inv-to-fade");
      x[0].className += " faded";
      x[1].className+= " faded";    
      this.modal = true;
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


Inventory.prototype.ShowWishlist = function(){
     this.showModal();
   $(".inv-iframe-holder-in").css('display', 'none');
   $(".inv-iframe-module").remove();
   $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="column one-half cart-items"><h3><i class="fa fa-bars"></i> WISHLIST</h3></div><div class="column one-half subtotal"><p style="clear:both;text-align:center;padding:15px;"><button class="u-full-width" onclick="$inventory.Checkout()"><i class="fa fa-shopping-cart"></i> Checkout</button></p></div> <div style="clear:both"></div> </div>');
 // this.ShowCart();
    var itemids = [];

    for (var i = $inventory.Wishlist().length - 1; i >= 0; i--) {
       itemids.push( $inventory.Wishlist()[i].id.split("%^}")[0] );
    };

    $.ajax({url:"https://orkiv.com/i/ext_js_api.php", type:"POST", data:{id:this.accountid, key : this.jstoken,open: "openmanydictionary", lookup:itemids.join(",")}, success:function(html){
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
                  $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordwadd=" + this.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
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

Inventory.prototype.Buy = function(itemid,quantity,variations) {
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/cart-checkout" + stripeMod + "/?" + this.accountid + "=";
    

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
    document.getElementById("InventoryIframe").src = cartlink;
};

Inventory.prototype.BuyService = function(itemid) {
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/service-checkout" + stripeMod + "/?" + this.accountid + "=";

    
        var itemlink =  itemid + "";
        
        //quantitychain.push(itemlink + "=" + item.quantity)

    cartlink += itemlink  ;
    document.getElementById("InventoryIframe").src = cartlink;
};


Inventory.prototype.Checkout = function() {

  //recalculate total 
       this.showModal();
   $(".inv-iframe-holder-in").css('display', 'none');
   $(".inv-iframe-module").remove();
   $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="column one-half cart-items"><h3><i class="fa fa-shopping-cart"></i> Items in cart</h3></div><div class="column one-half subtotal"><h2>Subtotal</h2><h1>subtotal</h1><p style="clear:both"><button class="u-full-width" onclick="$inventory.ShowCart()"><i class="fa fa-shopping-cart"></i> Checkout</button></p></div> <div style="clear:both"></div> </div>');
 // this.ShowCart();
    var itemids = [];

    for (var i = $inventory.Cart().length - 1; i >= 0; i--) {
       itemids.push( $inventory.Cart()[i].id.split("%^}")[0] );
    };

    $.ajax({url:"https://orkiv.com/i/ext_js_api.php", type:"POST", data:{id:this.accountid, key : this.jstoken,open: "openmanydictionary", lookup:itemids.join(",")}, success:function(html){
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
                  finalprice = parseInt(inv.variations[g].priceChange);
             };
          };
          //check for variations


          itemscheme.attr("inventory-cartid", inv.setid).attr("price", finalprice).attr("quantity", inv.setquantity);
        $(".add-fields", itemscheme).append("<h1>" + inv.name + "</h1>").append("<h2>$ " + (finalprice/100).toFixed(2) + " </h2>").append( inv.setvariations.length > 0 ? '<p>Additional information : ' + inv.setvariations.join(",") + '</p>' : "").append('<p>Quantity</p><p><input type="number" placeholder="quantity" class="cart-quantity-update" value="' + inv.setquantity + '" min="1" max="' + inv.quantity +'"/><button class="remove-from-cart"><i class="fa fa-trash"></i> Remove from cart</button></p>');
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

