<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@ ../../lib/setPagelistText.php @>
<@ if @{ :pagelistText } @>
	<div class="std-pagelist__item-text">
		@{ :pagelistText | 500 }
	</div>
<@ end @>
