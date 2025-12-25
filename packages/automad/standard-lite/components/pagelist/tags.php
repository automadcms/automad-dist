<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ if @{ tags } @>
	<div class="std-pagelist__item-tags">
		<@ icon { name: 'tag' } @>
		<@ foreach in tags ~@>
			<@ if @{ :i } > 1 @>,<@ end @>
			@{ :tag }
		<@~ end @>
	</div>
<@~ end @>
