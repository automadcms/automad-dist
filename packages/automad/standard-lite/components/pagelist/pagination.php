<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@ if @{ :paginationCount } > 1 @>
	<nav class="std-pagination">
		<@ set { :page: @{ ?page | def (1) } } @>
		<@ if @{ :page } > 1 @>
			<a href="?<@ queryStringMerge { page: 1 } @>">
				<@ icon { name: 'chevron-double-left' } @>
			</a>
			<a href="?<@ queryStringMerge { page: @{ :page | -1 } } @>">
				<@ icon { name: 'chevron-left' } @>
			</a>
		<@ end @>
			<@ for @{ :page | -3 } to @{ :page | +3 } @>
				<@ if @{ :i } > 0 and @{ :i } <= @{ :paginationCount } @>
					<@ if @{ :i } = @{ :page } @>
						<span>@{ :i }</span>
					<@ else @>
						<a href="?<@ queryStringMerge { page: @{ :i } } @>">@{ :i }</a>
					<@ end @>
				<@ end @>
			<@ end @>
		<@ if @{ :page } < @{ :paginationCount } @>
			<a href="?<@ queryStringMerge { page: @{ :page | +1 } } @>">
				<@ icon { name: 'chevron-right' } @>
			</a>
			<a href="?<@ queryStringMerge { page: @{ :paginationCount } } @>">
				<@ icon { name: 'chevron-double-right' } @>
			</a>
		<@ end @>
	</nav>
<@ end @>
