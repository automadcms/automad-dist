<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@ snippet prevNext @>
	<@ if not @{ checkboxHidePreviousAndNextPageNavigation } @>
		<@ newPagelist @>
		<div class="std-layout__prev-next std-prev-next">
			<@ with prev @>
				<a href="@{ url }" class="std-prev-next__item std-prev-next__item--prev">
					<@ icon { name: 'arrow-left' } @>
					<span>
						@{ title }
					</span>
				</a>
			<@ end @>
			<@ with next @>
				<a href="@{ url }" class="std-prev-next__item std-prev-next__item--next">
					<span>
						@{ title }
					</span>
					<@ icon { name: 'arrow-right' } @>
				</a>
			<@ end @>
		</div>
	<@ end @>
<@ end @>

<@ prevNext @>
