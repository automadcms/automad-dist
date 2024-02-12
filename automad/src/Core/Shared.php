<?php
/*
 *                    ....
 *                  .:   '':.
 *                  ::::     ':..
 *                  ::.         ''..
 *       .:'.. ..':.:::'    . :.   '':.
 *      :.   ''     ''     '. ::::.. ..:
 *      ::::.        ..':.. .''':::::  .
 *      :::::::..    '..::::  :. ::::  :
 *      ::'':::::::.    ':::.'':.::::  :
 *      :..   ''::::::....':     ''::  :
 *      :::::.    ':::::   :     .. '' .
 *   .''::::::::... ':::.''   ..''  :.''''.
 *   :..:::'':::::  :::::...:''        :..:
 *   ::::::. '::::  ::::::::  ..::        .
 *   ::::::::.::::  ::::::::  :'':.::   .''
 *   ::: '::::::::.' '':::::  :.' '':  :
 *   :::   :::::::::..' ::::  ::...'   .
 *   :::  .::::::::::   ::::  ::::  .:'
 *    '::'  '':::::::   ::::  : ::  :
 *              '::::   ::::  :''  .:
 *               ::::   ::::    ..''
 *               :::: ..:::: .:''
 *                 ''''  '''''
 *
 *
 * AUTOMAD
 *
 * Copyright (c) 2016-2021 by Marc Anton Dahmen
 * https://marcdahmen.de
 *
 * Licensed under the MIT license.
 * https://automad.org/license
 */

namespace Automad\Core;

defined('AUTOMAD') or die('Direct access not permitted!');

/**
 * The Shared class represents a collection of all shared site-wide data.
 *
 * @author Marc Anton Dahmen
 * @copyright Copyright (c) 2016-2018 Marc Anton Dahmen - https://marcdahmen.de
 * @license MIT license - https://automad.org/license
 */
class Shared {
	/**
	 * The shared data array.
	 */
	public $data = array();

	/**
	 * Parse the shared data file.
	 */
	public function __construct() {
		// Use the server name as default site name.
		$defaults = array(
			AM_KEY_SITENAME => $_SERVER['SERVER_NAME']
		);

		// Merge defaults with settings from file.
		$this->data = array_merge($defaults, Parse::dataFile(AM_FILE_SHARED_DATA));
		Debug::log(array('Defaults' => $defaults, 'Shared Data' => $this->data));

		// Check whether there is a theme defined in the Shared object data.
		if (!$this->get(AM_KEY_THEME) && AM_REQUEST != AM_PAGE_DASHBOARD && !AM_HEADLESS_ENABLED) {
			exit('<h1>No main theme defined!</h1><h2>Please define a theme in "/shared/data.txt"!</h2>');
		}
	}

	/**
	 * Return requested value.
	 *
	 * @param string $key
	 * @return string The requested value
	 */
	public function get(string $key) {
		if (array_key_exists($key, $this->data)) {
			return $this->data[$key];
		}

		return '';
	}

	/**
	 * Set key/value pair in data.
	 *
	 * @param string $key
	 * @param mixed $value
	 */
	public function set(string $key, $value) {
		$this->data[$key] = $value;
	}
}
