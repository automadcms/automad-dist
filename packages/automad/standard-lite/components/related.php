<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@ snippet related @>
	<@ if not @{ checkboxHideRelatedPages } @>
		<@ newPagelist {
			type: 'related',
			sort: @{ selectRelatedPagelistSort | def (':index asc') },
			limit: @{ numberRelatedPagelistMaxNumberOfPages | def (8) }
		} @>
		<@ set {
			:dateFormat: @{ selectRelatedPagelistDateFormat | def ('M Y') }
		} @>
		<@ if @{ :pagelistCount } @>
			<div class="std-layout__related">
				<@ pagelistLayout { layout: @{ selectRelatedPagelistLayout | def ('masonry') } } @>
			</div>
		<@ end @>
	<@ end @>
<@ end @>

<@ related @>
