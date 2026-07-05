<# 

Standard Lite

© 2024-2026 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet layout ~@>
	<div class="std-layout std-layout--@{ template | sanitize }">
		<@ sidebar.php @>
		<@ navbar.php @>
		<@ hero.php @>
		<@ breadcrumbs.php @>
		<@ title.php @>
		<@ main.php @>
		<@ if @{ template | match ('/_toc/')} @>
			<@ toc.php @>
		<@ end @>
		<@ prevNext.php @>
		<@ related.php @>
		<@ footer.php @>
	</div>
<@~ end ~@>

<@ layout @>
