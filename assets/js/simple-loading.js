/**
 * Loading script.
 * 
 * @author Vitaliy Stepanenko <mail@vitaliy.in>
 * @copyright Copyright &copy; 2011 Vitaliy Stepanenko
 * @license BSD
 * 
 * @link http://www.yiiframework.com/extension/loading/
 * 
 * @package widgets.loading
 * @version $Id:$ (1.0)
 * 
 * Usage: Loading.show(); Loading.hide();
 */
$(function()
{

    function SimpleLoadingConstructor()
    {
	if(window.SimpleLoading)
	    return window.SimpleLoading;

	this.$divloading = $('<div>').attr('id', 'edwinhaq_simple_loading').addClass("simple-loading simple-loading-default").appendTo('body').hide();

    }

    SimpleLoadingConstructor.prototype =
    {
	init: function(config)
	{

	},
	start: function(clazz)
	{
	    if(!clazz)
		clazz = "default";

	    this.$divloading.removeClass().addClass("simple-loading simple-loading-" + clazz);
	    this.$divloading.show().css('opacity', 0).animate(
	    {
		opacity: 0.8
	    }, 250);
	},
	stop: function()
	{
	    this.$divloading.animate(
	    {
		opacity: 0
	    }, 250, function()
	    {
		$(this).hide();
	    });
	}
    }

    window.SimpleLoading = new SimpleLoadingConstructor();
});
