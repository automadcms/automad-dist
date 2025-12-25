<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@ set { :dateFormatted: @{ date | dateFormat (@{ :dateFormat }, @{ :lang }) | def (false) } } @>
<@ if @{ :dateFormatted } or @{ authorName } @>
	<span class="std-pagelist__item-date-author">
		<@~ if @{ :dateFormatted } @>
			@{ :dateFormatted }
		<@ end ~@>
		<@~ if @{ :dateFormatted } and @{ authorName } @>
			&mdash;
		<@ end ~@>
		@{ authorName }
	</span>
<@ end @>
