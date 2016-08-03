
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
	 var x = document.getElementsByClassName("to-fade");
							      x[0].className = x[0].className.replace("faded","");
							  	  x[1].className = x[1].className.replace("faded","");
							  	  $inventoryStandard.modal = false;
								 document.getElementById("InventoryIframe").src = "https://orkiv.com/i/loading.php";
}

/*
##############################################
#				Orkiv inventory	             #
#											 #
##############################################
*/
var stripeMod = "";
$inventoryStandard = {};
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
    				document.getElementsByTagName("body")[0].innerHTML += html;
    				


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
     		x[i].innerHTML = "<i class='fa fa-shopping-cart'></i> Remove from cart";
     	} else {
     		x[i].innerHTML = "<i class='fa fa-shopping-cart'></i> Add to cart";
     	}
     	} else 	if(x[i].dataset.link == "wishlist"){
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

	document.getElementsByTagName("body")[0].innerHTML += actalert;

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
 			} else {
 			// /	this.Alert("Item removed from cart!");
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
 			// /	this.Alert("Item removed from cart!");
 			
 			}

 					this.saveLocal("inventoryData",data,true);
 		//	this.SyncDynamic();	


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

 	document.getElementById("InventoryIframe").src = cartlink;
	}			  
}

Inventory.prototype.showModal = function(){
	if(!this.modal){
			if(document.getElementsByClassName("inventory-alert").length == 0){
		var x = document.getElementsByClassName("to-fade");
      x[0].className += " faded";
  	  x[1].className+= " faded";	
  	  this.modal = true;
  		}
  	}
}

Inventory.prototype.hideModal = function(){
		

  	  	 var x = document.getElementsByClassName("to-fade");
      x[0].className = x[0].className.replace("faded","");
  	  x[1].className = x[1].className.replace("faded","");
  	  this.modal = false;
  	  document.getElementById("InventoryIframe").src = "https://orkiv.com/i/loading.php";
}


Inventory.prototype.ShowWishlist = function(){
	this.showModal();
 	//InventoryIframe
 	var cartlink = "https://www.orkiv.com/i/render-bookmarks/?" + this.accountid + "=";
 	var data = this.getLocal("inventoryData",true);	

 	//var quantitychain = [];
 	for (var i = data.wishlist.length - 1; i >= 0; i--) {
 		var item = data.wishlist[i];
 		var itemlink =  item.id ;
 
 		//quantitychain.push(itemlink + "=" + item.quantity)

 		cartlink += itemlink;

 		if(i != 0)
 		cartlink += ",";
 	}

 	

 	document.getElementById("InventoryIframe").src = cartlink;
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
 	this.ShowCart();
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

