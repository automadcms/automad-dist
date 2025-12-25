<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<a href="@{ url }" class="std-pagelist__item" style="--index: @{ :i }">
	<@ ../../lib/setPagelistImage.php @>
	<@ with @{ :pagelistImage } { width: 600 } @>
		<@ image.php @>
	<@ else @>
		<div class="std-pagelist__item-img-fallback"></div>
	<@ end @>
	<div class="std-pagelist__item-body">
		<@ title.php @>
		<@ date.php @>
		<@ tags.php @>
	</div>
</a>
