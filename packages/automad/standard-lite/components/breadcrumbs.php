<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

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
				<@ if @{ :i } > 1 @>
					/
				<@ end @>
				<a href="@{ url }">@{ title }</a>
			<@ end @>
		</nav>	
	<@ end @>
<@~ end ~@>

<@ breadcrumbs @>
