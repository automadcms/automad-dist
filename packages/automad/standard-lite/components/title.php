<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet title @>
	<@ if not @{ checkboxHideTitle } @>
		<div class="std-layout__title std-title">
			<h1>@{ title }</h1>
			<@ if @{ date } or @{ authorName } @>
				<span>
					<@~ if @{ date } @>
						@{ date | dateFormat (@{ selectPageDateFormat | def ('j. M Y') }, @{ :lang }) }
					<@ end @>
					<@ if @{ date } and @{ authorName } @>
						&mdash;
					<@ end @>
					<@ author.php @>
				</span>
			<@ end @>
			<@ tags @>
		</div>
	<@ end @>
<@~ end @>

<@ snippet tags @>
	<@ if not @{ checkboxHideTags } and @{ tags } @>
		<div class="std-title__tags">
			<@ icon { name: 'tag' } @>
			<@ foreach in tags ~@>
				<a href="?tag=@{ :tag }">
					@{ :tag }
				</a>
			<@~ end @>
		</div>
	<@ end @>
<@ end @>

<@ title @>
