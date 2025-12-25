<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<div class="std-pagelist std-pagelist--list std-pagelist--grid">
	<@ foreach in pagelist @>
		<a href="@{ url }" class="std-pagelist__item">
			<div class="std-pagelist__item-title">@{ title }</div>
			<@ ../../components/pagelist/textNoTags.php @>
			<div class="std-pagelist__item-more">
				<@ icon { name: 'plus' } @>
			</div>
		</a>
	<@ end @>
</div>
