<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<div class="std-pagelist__item-img">
	<std-img-loader
		image="<?php echo AM_BASE_URL; ?>@{ :fileResized }"
		preload="<@ with @{ :fileResized } { width: 30 } @><?php echo AM_BASE_URL; ?>@{ :fileResized }<@ end @>"
		width="@{ :widthResized }"
		height="@{ :heightResized }"
	></std-img-loader>
</div>

