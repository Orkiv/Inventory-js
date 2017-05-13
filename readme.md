## Epic Commerce JS plugin
![enter image description here](https://github.com/Orkiv/Inventory-js/raw/master/logog.png) 

Build ecommerce websites with the `Epic commerce` toolkit

## Navigation
 

 1. [Setup](#setup)
 2. [Initialization](#initialization)
 3. [Access cart](#cart)
 4. [Access Wishlist](#wishlist)
 5. [Performing checkout](#checkout)
 6. [HTML UI](#drop-in-ui)
	 7. [Item UI](#item-ui) 
 7. [Additional customization](#inventory-object)
 8. [User management](#user-management)
 9.  [Inventory object](#inventory-object)
 10. [User management](#user-management)
 11. [JS RESTful functions](#js-restful-functions)
 9. [Eval customer metric](#inventoryprototypeevalstring-guide_id-callback-onfinishistrue)
 10. [Record user interest](#inventoryprototypesaveintereststring-item) 

### Updates

 - User login support
 - Wishlist Sharing
 - Social media Sign in
 

### Requirements

Inventory JS requires `jQuery 1.9+`
Epic Commerce account


### Setup

#### Install via bower

		bower install epic-commerce

#### Install via npm

		npm install epic-commerce

[Download](https://github.com/Orkiv/Inventory-js/archive/master.zip) this repository, unzip it and move it to your website root. 
	
	<script type="text/javascript" src="/your/path/inventory.min.js"></script>

Or host this one on us :

	<script type="text/javascript" src="https://www.orkiv.com/i/inventory.js"></script>

Initialize the class with the following code. Replace `accountid` with your actual account ID and `frontendkey` with a valid JS Key generated for your account.
You can access all of this information under the settings section of your account within Epic commerce.

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

### Item ui 

Item UI's allow for easy placement of item customization controls. This [function](#inventoryprototypedefaultlayoutstring-itemid-string-selector) will place the following ui in the desired location.
![enter image description here](https://github.com/Orkiv/Inventory-js/raw/master/ItemPage.png)

### Add to cart
Adds the specified item to the current user's cart.

![enter image description here](https://www.orkiv.com/i/js-res/1.png) 

	<button onclick="$inventoryStandard.Cart('itemid',1,['variations'])" data-id="itemid" data-link="cart" class="sync-orkivinv sync-dynamic" ><i class="fa fa-shopping-cart"></i> Add to cart</button>


### Buy 
Opens a checkout window for the specified item.


![enter image description here](https://www.orkiv.com/i/js-res/2.png)

	<button onclick="$inventoryStandard.Buy('itemid',1,['variations'])" data-id="itemid"  class="sync-orkivinv" ><i class="fa fa-credit-card"></i> Buy</button>

### Checkout Cart
Displays the checkout page without the user being able to update their cart.

![enter image description here](https://www.orkiv.com/i/js-res/7.png)

	<button onclick="$inventoryStandard.ShowCart()" class="sync-orkivinv" ><i class="fa fa-shopping-cart"></i> Checkout</button>

### Checkout
Opens the current user's cart.

![enter image description here](https://www.orkiv.com/i/js-res/7.png)

	<button onclick="$inventoryStandard.Checkout()" class="sync-orkivinv" ><i class="fa fa-shopping-cart"></i> Checkout</button>

### Wishlist
Adds the specified item to the current user's Wishlist.


![enter image description here](https://www.orkiv.com/i/js-res/3.png) 

	<button onclick="$inventoryStandard.Cart('itemid',['variations'])" data-id="itemid" data-link="cart" class="sync-orkivinv sync-dynamic" ><i class="fa fa-bars"></i> Wishlist</button>


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

### Additional Drop in support

### Display editable user cart

	Inventory.prototype.Checkout()

![enter image description here](https://github.com/Orkiv/Inventory-js/raw/master/cart.png)
To display an editable view of your user's cart use the `Checkout` function.


### Display editable user Wishlist 

	Inventory.prototype.ShowWishlist()

![enter image description here](https://github.com/Orkiv/Inventory-js/raw/master/wishlist.png)
To display an editable view of your user's wish list use the `ShowWishlist` function.

## Inventory Object

Additional initializations :

### Inventory(accountid, jstoken,alerts,syncdynamic)

'accountid' is your account id obtained from the settings section within your epic commerce [portal](https://www.orkiv.com/i)


'jstoken' is your front end key obtained from the settings section within your epic commerce [portal](https://www.orkiv.com/i)

'alerts' decides how Inventory handles visual alert notifications. Setting it to false will revert to using a custom alert. If none is set no action is called.

'syncdynamic' decides if inventory should add dynamism to Drop in UI buttons. This dynamism ranges from automatically changing an add to cart button to a 'remove from cart' button; and refelling cart combo boxes to previous value.
		
	<script>
			$inventory = new Inventory('accountid', 'frontendkey',true,true);
	</script>


### Inventory.prototype.SetAlert(function(alerttext){ /* Your code */ })

This will set a custom alert. Please make sure alerts is set to false.

### Inventory.prototype.GenID(string itemid,['variations'])

Generates a cart or wishlist id of the current itemid and variations supplied.

### Inventory.prototype.ShowWishlist()

To display an editable view of your user's wish list use the `ShowWishlist` function.

### Inventory.prototype.Checkout()

To display an editable view of your user's cart use the `ShowWishlist` function.

### Inventory.prototype.DefaultLayout(string itemid, string selector)

Place full item customization form.

- Parameters
	- itemid : Valid inventory item id.
	- selector : jQuery `css` selector of element to add item information to. 

## User management

Inventory JS supports out of the box basic user authentication. It works with the parameters defined within Inventory to help you convert visitors to returning customers.

### Inventory.prototype.user - Object

	- Information about user
	- Any custom set key within Epic commerce's interfaces will be available within this object.


### Inventory.prototype.CreateSocialSupport(string panel, array[ userinfo)

	- panel attribute will specify which jQuery selector to append the login prompt to.
	
![enter image description here](https://github.com/Orkiv/Inventory-js/raw/master/logprompt.png)
	
	- userinfo is a string array of jQuery selectors to append logged in user information.

![enter image description here](https://github.com/Orkiv/Inventory-js/raw/master/logtab.png)

### Inventory.prototype.DestroyUserinfo()
Delete current user session.

## JS RESTful functions

The following functions can be used to retrieve inventory data from your account.

### Inventory.prototype.Reviews(string itemid, callback onFinish(data))
Get reviews for the specified item.

- Parameters :
 	- itemid : Valid inventory item to open
	- onFinish: Function called once data is retrieved. Function variable  data has 4 keys :
	- usercount :  integer of how many users have reviewed your product.
	- rating : double of the specified item's average rating.
	- comments : Array of user comments. Each object has 2 parameters :
		- Comments : String of user feedback
		- ratings : string number of stars user has given for product. 
	- 
### Inventory.prototype.Categories(callback onFinish(data))
Fetch item categorization from your account.

- Parameters :
	- onFinish :  Function called once data is retrieved. Function variable  data has 1 key :
		- result : Array of categories. Please refer to the [category schema](#category-schema) 

### Inventory.prototype.Category(string cat_id,callback onFinish(data))
Fetch item categorization from your account.

- Parameters :
	- cat_id : Valid inventory category id.
	- onFinish :  Function called once data is retrieved. Function variable  data has 1 key :
		- result : Data of requested category. Please refer to the [category schema](#category-schema) 

### Inventory.prototype.SaveInterest(string item)
Add category or item to user interests.

- Parameters :
 - item : String of item id to add to user interest. You may also use a category id  instead of an item id as well. The system will automatically add an item's parent to the user's interests. 



### Inventory.prototype.Eval(string guide_id ,callback onFinish(isTrue))
Determine if current user returns true on decision guide.

- Parameters :
    - guide_id : String of decision guide id to use. Find your decision guides [here](https://www.orkiv.com/i/ai/#/guides)
	- onFinish :  Function called once guide is evaluated. Function variable  isTrue is `bool` of guide evaluation.

### Inventory.prototype.Query(int page, object query, callback onFinish(data))

- Parameters :  
	-  page : Current page to load
	- query : Properties to compare items with, Nonetheless there are [reserved properties](#query-addons) to provide more functionality.
	- onFinish : Function called once data is retrieved. Function variable has three keys :
				- pages : Available pages, starting from 0
				- result : Array of inventory item. Please refer to the [General schema](#general-schema)  
This function will return items which match the specified query.

### Inventory.prototype.Open(string itemid, callback onFinish(data))

- Parameters :
	- itemid : Valid inventory item to open
	- onFinish : Function called once data is retrieved. Function variable keys :
		- media : An array of URI strings
		- result : Data of the requested item. Please refer to the [General schema](#general-schema)  


## Category schema

### Property list

- string id : ID of inventory category.
- string name : Name of inventory category.
- The Following are not available with function `Inventory.prototype.Category` and Epic [restful](#restful-api) endpoints : 
- string tmp : URI to image of an item under such category.
- array children : Array of categories. Using the same schema.
	- *With one key difference `tmp` is replaced by `sampleimage` 

## General schema
### (KNOWN AS ITEM)
General schema is the minimum amount of data the platform will return. If you plan on using extra fields please refer to the custom set fields section below, for information on retrieving such data.

### Minimum data
Here are some properties of an item object.

- string category : Category Id of item.
- string desc : Description of item
- string id : Inventory item ID
- int ordprice : Price in hundreds (ie : $1 = 100)
- string quantity : Item quantity in stock.
- array variations : Array of item variations. Here is the property list of a variation : 
	- string id : ID of variation.
	- string name : Name of variation.
	- int priceChange : New price of item in hundreds. 

### Custom set fields.

Use the same name as set for field directly with your inventory item. This property will be an object, from here on you can access your custom data within the `data` property.


## Query addons

### Special query properties

- 	search : Text string to match item name with.
- sortfield :  Item property should the system use whilst sorting.
- sortorder :  The order the API should follow. -1  for Descending and 1 for ascending.
- ext_cat_search : A valid inventory category ID. This value will be used to find any subset of this category.
- minp : Minimum price of an item allowed to be returned.
- maxp : Maximum price of an item allowed to be returned.


# RESTful API

Here is a set of end points to help you retrieve data via api.

## API information

 - [Base url] : https://www.orkiv.com/i/ext_epic.php
 - [Authentication headers]  
	 -  `account` :  Your account id. ie : `{ "account" : YOUR_ACCOUNT_ID }` 
 - [Response format] : `application/json` 


## Endpoints

### GET /category/{ID}/
Get a category.

- Parameters :
 - id : ID of category to open.

- Result :
	- [Category](#category-schema) 

### GET /categories/

Get categories.
- Result :
	- [[Category](#category-schema) ... ] 

### GET /item/{ID}/

Get an item.

- Parameters :
 - id : ID of item to open.

- Result :
	- [Item](#general-schema) 
