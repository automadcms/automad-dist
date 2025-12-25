<?php

use Automad\Core\Automad;

func(
	'pagelistLayout',
	function (array $options, Automad $Automad): string {
		$layout = __DIR__ . '/../blocks/pagelist/' . $options['layout'] . '.php';

		return inc($layout, $Automad);
	}
);

func('icon', function (array $options, Automad $Automad): string {
	return '<i class="std-icon-' . $options['name'] . '"></i>';
});
