<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<std-masonry class="std-pagelist std-pagelist--masonry">
	<@ ../../lib/setDefaultDateFormat.php @>
	<@ foreach in pagelist @>
		<div class="std-pagelist__masonry-item">
			<@ ../../components/pagelist/item.php @>
		</div>
	<@ end @>
	<@ ../../lib/resetDateFormat.php @>
</std-masonry>
