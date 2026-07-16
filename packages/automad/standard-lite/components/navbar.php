<# 

Standard Lite

© 2024-2026 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet navbarLinks @>
	<@ ../lib/navbarLinksPagelist.php @>
	<@ if @{ :pagelistCount } @>
		<nav class="std-navbar__links">
			<span class="std-navbar__links-reveal">
				<@ icon { name: 'plus' } @>
			</span>
			<span class="std-navbar__links-items">
				<@ foreach in pagelist ~@>
					<a href="@{ url }" class="std-navbar__link">
						<span>@{ title }</span>
					</a>
				<@~ end ~@>
			</span>
		</nav>
	<@ end @>
<@ end @>

<@~ snippet navbarButtons @>
	<@ ../lib/navbarActionsPagelist.php @>
	<@ if @{ :pagelistCount } or not @{ checkboxDisableSearch } @>
		<nav class="std-navbar__buttons">
			<@ foreach in pagelist ~@>
				<a href="@{ url }" class="std-button">@{ title }</a>
			<@~ end ~@>
		</nav>
	<@ end @>
<@ end @>

<@ snippet themeSwitcher @>
	<@ themeSwitcher.php @>
<@ end @>

<@~ snippet sidebarOpen @>
	<@~ ../lib/navbarLinksPagelist.php @>
	<@~ set {
		:navCount: @{ :pagelistCount }
	} @>
	<@~ newPagelist {
		context: '/',
		type: 'children'
	} @>
	<@~ set {
		:navCount: @{ :navCount | + @{ :pagelistCount } }
	} @>
	<@~ if @{ :navCount } ~@>
		<std-sidebar-toggle class="std-navbar__icon std-sidebar-toggle--@{ selectSidebarToggleVisiblity | def ('automatic') }">
			<@ icon { name: 'menu' } @>
		</std-sidebar-toggle>
	<@~ end ~@>
<@ end @>

<@~ snippet search @>
	<@~ if not @{ checkboxDisableSearch } @>
		<std-search 
			src="/_api/public/pagelist" 
			context="@{ url }" 
		></std-search>
	<@ end @>	
<@~ end @>

<@~ snippet navbar ~@>
	<@ set { 
		:navbarSticky: @{ selectNavbarSticky | def('scroll') },
		:navbarLayout: @{ selectNavbarLayout | def('horizontal') },
	} ~@>
	<std-navbar class="std-layout__navbar @{ :navbarLayout }" sticky="@{ :navbarSticky }">
		<div class="std-layout__navbar-wrapper std-navbar">
			<div class="std-layout__navbar-brand">
				<@ brand.php @>
			</div>
			<div class="std-layout__navbar-nav">
				<@ navbarLinks @>
				<@ navbarButtons @>
				<@ search @>
				<@ themeSwitcher @>
				<@ sidebarOpen @>
			</div>
		</div>
	</std-navbar>
<@~ end ~@>

<@ navbar @>
