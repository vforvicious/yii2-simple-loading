/**
 * SimpleLoading script. (Based on Vitaliy Stepanenko widget
 * http://www.yiiframework.com/extension/loading/)
 *
 * @author Edwin Artunduaga <edwinhaq@gmail.com>
 * @copyright Copyright &copy; 2017 Edwin Artunduaga
 * @license BSD
 *
 * @link https://github.com/edwinhaq/yii2-simple-loading/
 *
 * Usage: SimpleLoading.start(class); //To start loading gif
 *
 * class parameter can be: box, clock, default, gears, hourglass, magnify,
 * reload, ring-alt, ring, ripple or rolling
 *
 * SimpleLoading.stop(); //To stop loading gif
 *
 */
$(function()
{
	function SimpleLoadingConstructor()
	{
		if(window.SimpleLoading)
			return window.SimpleLoading;
		this.$divloading = $('<div>').attr('id', 'edwinhaq_simple_loading').addClass("simple-loading simple-loading-default").appendTo('body').hide();

	}
	SimpleLoadingConstructor.prototype = {
		init : function(config)
		{
		},
		start : function(clazz)
		{
			if(!clazz)
				clazz = "default";

			this.$divloading.removeClass().addClass("simple-loading simple-loading-" + clazz);
			this.$divloading.show().css('opacity', 0).animate({
				opacity : 0.8
			}, 250);
		},
		stop : function()
		{
			this.$divloading.animate({
				opacity : 0
			}, 250, function()
			{
				$(this).hide();
			});
		}
	}
	window.SimpleLoading = new SimpleLoadingConstructor();
});
