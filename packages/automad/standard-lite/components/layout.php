<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet layout ~@>
	<@ set { :layoutClass: "std-layout std-layout--@{ template | sanitize }" } @>
	<@ navbar.php @>
	<div class="@{ :layoutClass }">
		<@ hero.php @>
		<@ breadcrumbs.php @>
		<@ title.php @>
		<@ sidebar.php @>
		<@ main.php @>
		<@ toc.php @>
		<@ prevNext.php @>
		<@ related.php @>
		<@ footer.php @>
	</div>
<@~ end ~@>

<@ layout @>
