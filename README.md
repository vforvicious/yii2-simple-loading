yii2-simple-loading
============
Simple Loading images for Yii framework 2.0 or later

Description
-----------

**edwinhaq\simpleloading\SimpleLoading** widget is a simple way to control listbox items

Requirements
------------
+ Yii Version 2.0.0 or later

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist edwinhaq/yii2-simple-loading "*"
```

or add

```
"edwinhaq/yii2-simple-loading": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by:

```php
	
	// ...
	use edwinhaq\simpleloading;
	// ...
	SimpleLoading::widget();
	// ...
```

```javascript
	
	/*
	 * start(image type)
	 * Allows to start the loading image and select the image to show
	 * options: [box, clock, default, gears, hourglass, magnify, reload, ring-alt, ring, ripple, rolling]
	 */
	SimpleLoading.start('gears'); 	// Load gears.gif
	SimpleLoading.start('default'); // Load default.gif
	SimpleLoading.start(); 			// Load default.gif
	
	/*
	 *
	 * Allows to stop the loading image
	 */
	SimpleLoading.stop();
	
	
	// Example:
	
	$.ajax(
		{
			'type':'POST',
			'dataType':'json',
			'url':'index.php?r=controller/action',
			'beforeSend':function(json)
			{ 
				SimpleLoading.start('gears'); 
			},
			'success':function(json){/* ... */},
			'error':function(json,status,errorThrown ){/* ... */},
			'complete':function(json)
			{
				SimpleLoading.stop();
			},
			'cache':false,
			'data':jQuery(this).parents("form").serialize()
		}
	);
	

```

History
-------

+ Version 1.0.0 (2017-05-30)
    + Tested on Yii 2.0.6
