<# 

Standard Lite

© 2024-2026 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet breadcrumbs @>
	<@ if @{ :level } > 1 and not @{ checkboxHideBreadcrumbs } @>
		<@ newPagelist {
			type: 'breadcrumbs',
			excludeCurrent: true
		} @>
		<nav class="std-layout__breadcrumbs std-breadcrumbs">
			<@ foreach in pagelist @>
				<a href="@{ url }">
					<span>@{ title }</span>
				</a>
			<@ end @>
		</nav>	
	<@ end @>
<@~ end ~@>

<@ breadcrumbs @>
