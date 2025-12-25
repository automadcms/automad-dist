<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet footerNav @>
	<@ if @{ :pagelistCount} @>
		<nav>
			<@ foreach in pagelist ~@>
				<a href="@{ url }">@{ title }</a>
			<@~ end @>
		</nav>
	<@ end @>
<@ end @>

<@~ snippet footerNavPrimary ~@>
	<@ ../lib/footerPrimaryPagelist.php ~@>
	<@ footerNav @>
<@~ end @>

<@~ snippet footerNavSecondary ~@>
	<@ ../lib/footerSecondaryPagelist.php ~@>
	<@ footerNav @>
<@~ end @>

<@~ snippet footer ~@>
	<footer class="std-layout__footer std-footer">
		<@ footerNavPrimary @>
		<@ footerNavSecondary @>
		@{ +footer | trim | replace ('/\\s*(.+)\\s*/is', '<section>$1</section>') }
	</footer>
<@~ end ~@>

<@ footer @>
