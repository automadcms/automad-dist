<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<div class="std-pagelist__item" style="--index: @{ :i }">
	<@ ../../lib/setPagelistImage.php @>
	<@ with @{ :pagelistImage } { width: 900 } @>
		<a href="@{ url }">
			<@ image.php @>
		</a>
	<@ end @>
	<div class="std-pagelist__item-body">
		<@ titleLink.php @>
		<@ if @{ date | dateFormat } or @{ tags } or @{ authorName } @>
			<div>
				<@ dateAuthor.php @>
				<@ tags.php @>
			</div>
		<@ end @>
		<@ text.php @>
		<a href="@{ url }" class="std-pagelist__item-more">
			<@ icon { name: 'plus' } @>
		</a>
	</div>
</div>
