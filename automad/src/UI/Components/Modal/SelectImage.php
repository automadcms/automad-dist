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
 * Copyright (c) 2020-2021 by Marc Anton Dahmen
 * https://marcdahmen.de
 *
 * Licensed under the MIT license.
 * https://automad.org/license
 */

namespace Automad\UI\Components\Modal;

use Automad\UI\Utils\Text;

defined('AUTOMAD') or die('Direct access not permitted!');

/**
 * The select image modal component.
 *
 * @author Marc Anton Dahmen
 * @copyright Copyright (c) 2020-2021 by Marc Anton Dahmen - https://marcdahmen.de
 * @license MIT license - https://automad.org/license
 */
class SelectImage {
	/**
	 * Create the modal dialog for selecting images.
	 *
	 * @param string $url
	 * @return string The HTML for the modal dialog
	 */
	public static function render(string $url = '') {
		if ($url) {
			$url = 'data-am-url="' . $url . '"';
		}

		// Include dashboard URL to make dialog work in in-Page edit mode.
		$dashboard = AM_BASE_INDEX . AM_PAGE_DASHBOARD;

		$Text = Text::getObject();

		return <<< HTML
			<div id="am-select-image-modal" class="am-select-image-modal uk-modal">
				<div class="uk-modal-dialog">
					<div class="uk-modal-header">
						$Text->image_select
						<a href="#" class="uk-modal-close uk-close"></a>
					</div>
					<form 
					class="uk-form" 
					data-am-controller="Image::select" 
					$url
					data-am-dashboard="$dashboard"
					data-am-init
					></form>
					<div class="uk-modal-footer uk-text-right">
						<button type="button" class="uk-modal-close uk-button">
							<i class="uk-icon-close"></i>&nbsp;
							$Text->btn_close
						</button>
					</div>
				</div>
			</div>
		HTML;
	}
}
