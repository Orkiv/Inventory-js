## Orkiv Inventory JS plugin
![enter image description here](http://www.devpointlabs.com/assets/javascript/javascript-icon-59b52f096f36f476bbdfac982a25240583d483b1157b76771e59077025f62d38.png)  ![enter image description here](https://www.orkiv.com/images/inventory.png)

## Navigation
 

 1. [Setup](#setup)
 2. [Initialization](#initialization)
 3. [Access cart](#cart)
 4. [Access Wishlist](#wishlist)
 5. [Performing checkout](#checkout)
 6. [HTML UI](#drop-in-ui)
 7. [Additional customization](#inventory-object)

### Setup

[Download](https://github.com/Orkiv/Inventory-js/archive/master.zip) this repository, unzip it and move it to your website root. 
	
	<script type="text/javascript" src="/your/path/inventory.min.js"></script>

Or host this one on us :

	<script type="text/javascript" src="https://www.orkiv.com/i/inventory.js"></script>

Initialize the class with the following code. Replace `accountid` with your actual account ID and `frontendkey` with a valid JS Key generated for your account.
You can access all of this information under the settings section of your account.

The variable  'itemid' is used throughout this document. It refers to any of your items' id.

# Initialization
The snippet below initializes the class
	
	<script>
	$inventory = new Inventory('accountid', 'frontendkey');
	</script>
    
## Cart 


### Cart Object
Cart object is an entry of an item within a user's cart.
		
	Cart Object { id : "itemid", 
	quantity: 0,
	variations:['variation'] }



### $inventory.Cart()

This will retrieve the current user's cart objects.


### $inventory.Cart(itemid,quantity,variations ) or 
### $inventory.addCart(itemid,quantity,variations )

This will add an item to the current user's cart.
*Variations is an array of strings used to add specifications to your products on checkout


### $inventory.RemoveFromCart(itemid)

This will remove an item from the current user's cart.

### $inventory.RemoveFromCart()

This will remove all items from the current user's cart.

## Wishlist 


### Wishlist Object
Wishlist object is an entry of an item within a user's Wishlist.
		
	Wishlist Object { id : "itemid", 
	variations:['variation'] }



### $inventory.Wishlist()

This will retrieve the current user's Wishlist objects.


### $inventory.Wishlist(itemid,variations )

This will add an item to the current user's Wishlist.


### $inventory.RemoveFromWishlist(itemid)

This will remove an item from the current user's Wishlist.

### $inventory.RemoveFromWishlist()

This will remove all items from the current user's Wishlist.

## Checkout

There two approaches to performing a checkout. 

The first approach is using the function '$inventory.Buy('itemid',1,['variation'])'

### $inventory.Buy('itemid',1,['variation'])

This will open a checkout modal with the item currently specified.

The second approach is by performing a checkout of the items within the current user's cart.

### $inventory.Checkout()

This will open a checkout modal with the current items within the current user's cart.


## Drop in UI

![enter image description here](https://www.orkiv.com/i/js-res/1.png) ![enter image description here](https://www.orkiv.com/i/js-res/2.png) ![enter image description here](https://www.orkiv.com/i/js-res/3.png) ![enter image description here](https://www.orkiv.com/i/js-res/6.png) ![enter image description here](https://www.orkiv.com/i/js-res/4.png) ![enter image description here](https://www.orkiv.com/i/js-res/5.png) 


$inventory once initialized can be accessed via html elements. This enables quick manipulation of the current user's data without any additional JS.

Within your item or service viewer in the Inventory dashboard, you will also see a button with name snippet generator

### Add to cart
Adds the specified item to the current user's cart.

![enter image description here](https://www.orkiv.com/i/js-res/1.png) 

	<button onclick="$inventoryStandard.Cart('itemid',1,['variations'])" data-id="itemid" data-link="cart" class="sync-orkivinv sync-dynamic" ><i class="fa fa-shopping-cart"></i> Add to cart</button>


### Buy 
Opens a checkout window for the specified item.


![enter image description here](https://www.orkiv.com/i/js-res/2.png)

	<button onclick="$inventoryStandard.Buy('itemid',1,['variations'])" data-id="itemid"  class="sync-orkivinv" ><i class="fa fa-credit-card"></i> Buy</button>

### Checkout
Opens a checkout window for all of the items within the current user's cart.


![enter image description here](https://www.orkiv.com/i/js-res/7.png)

	<button onclick="$inventoryStandard.Checkout()" class="sync-orkivinv" ><i class="fa fa-shopping-cart"></i> Buy</button>

### Wishlist
Adds the specified item to the current user's Wishlist.


![enter image description here](https://www.orkiv.com/i/js-res/3.png) 

	<button onclick="$inventoryStandard.Wishlist('itemid',['variations'])" data-id="itemid" data-link="cart" class="sync-orkivinv sync-dynamic" ><i class="fa fa-bars"></i> Wishlist</button>


### Subscribe
Subscribes the current user to the specified serviceID


![enter image description here](https://www.orkiv.com/i/js-res/6.png) 
	
	  <button onclick="$inventoryStandard.BuyService('serviceID')" class="sync-orkivinv" ><i class="fa fa-circle"></i> Subscribe</button>


### Combo boxes

Combo boxes come with explicit user defined quantity. 

#### Add to cart
Sets the cart entry of this item to the specified amount by the user.


![enter image description here](https://www.orkiv.com/i/js-res/4.png) 

	<div class="inventory-form-group" data-type="cart" data-id="itemid">
	     <input min="0" type="number" data-isf="amt" placeholder="Amount" />
	     <button onclick="$inventoryStandard.ExplicitCart('itemid',['variation'])" class="sync-orkivinv" ><i class="fa fa-shopping-cart"></i></button>
	</div>

#### Buy
Opens a checkout window with the specified user quantity


![enter image description here](https://www.orkiv.com/i/js-res/5.png) 

	
	<div class="inventory-form-group" data-type="buy" data-id="itemid">
	     <input min="0" type="number" data-isf="amt" placeholder="Amount" />
	     <button onclick="$inventoryStandard.ExplicitCart('itemid',['variation'])" class="sync-orkivinv" ><i class="fa fa-shopping-cart"></i></button>
	</div>


## Inventory Object

Additional initializations :

### Inventory(accountid, jstoken,alerts,syncdynamic)

'alerts' decides how Inventory handles visual alert notifications. Setting it to false will revert to using a custom alert. If none is set no action is called.

'syncdynamic' decides if inventory should add dynamism to Drop in UI buttons. This dynamism ranges from automatically changing an add to cart button to a 'remove from cart' button; and refelling cart combo boxes to previous value.
		
	<script>
			$inventory = new Inventory('accountid', 'frontendkey',true,true);
	</script>


### $inventory.SetAlert(function(alerttext){ /* Your code */ })

This will set a custom alert. Please make sure alerts is set to false.

### $inventory.GenID(itemid,['variations'])

Generates a cart or wishlist id of the current itemid and variations supplied.
