<?php

namespace edwinhaq\simpleloading;

use yii\base\Widget;
use yii\helpers\Json;

/**
 *
 * @package yii2-simple-loading
 * @author Edwin Artunduaga <edwinhaq@gmail.com>
 * @copyright Copyright &copy; Edwin Artunduaga, 2017
 * @version 1.0.0
 */
class SimpleLoading extends Widget
{
	/**
	 *
	 * {@inheritdoc}
	 *
	 * @see \yii\base\Widget::run()
	 */
	public function run()
	{
		$this->registerClientScript();
		return "";
	}
	
	/**
	 * Registers the required JavaScript.
	 */
	public function registerClientScript()
	{
		$view = $this->getView();
		SimpleLoadingAsset::register($view);
	}
}