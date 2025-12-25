<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet isActive @>
	<@~ if @{ :current } @> std-sidebar__item--active<@ end @>
<@~ end @>

<@~ snippet sidebarLink ~@>
	<a href="@{ url }" class="std-sidebar__item<@ isActive @>">
		@{ title }
	</a>
<@~ end @>

<@~ snippet treeNode ~@>
	<li class="std-sidebar__node">
		<@ if @{ :pagelistCount } ~@>
			<details name="@{ :level }"<@ if @{ :currentPath } @> open<@ end @>>
				<summary class="std-sidebar__item<@ isActive @>">
					<a href="@{ url }">
						@{ title }
					</a>
					<@ icon { name: 'chevron-right' } @>
				</summary>
				<ul class="std-sidebar__tree">
					<@~ tree ~@>
				</ul>
			</details>
		<@ else @>
			<@ sidebarLink @>
		<@~ end ~@>
	</li>	
<@~ end @>

<@~ snippet tree ~@>
	<@ newPagelist {
		context: false,
		type: 'children'
	} ~@>

	<@~ foreach in pagelist @>
		<@~ treeNode ~@>
	<@ end ~@>
<@~ end @>

<@~ snippet sidebarNav @>
	<@ if @{ checkboxCollapseSidebarNavigation } @>
		<@ if @{ :level } > 1 @>
			<@ newPagelist {
				type: 'breadcrumbs',
				excludeCurrent: true
			} ~@>
			<ul class="std-sidebar__breadcrumbs">
				<@ foreach in pagelist @>
					<li class="std-sidebar__node">
						<a href="@{ url }" class="std-sidebar__item<@ isActive @>">
							<@ icon { name: 'arrow-left' } @>
							@{ title }
						</a>
					</li>	
				<@ end @>
			</ul>
		<@ end @>
		<@ with @{ :parent | def ('/') } ~@>
			<ul class="std-sidebar__tree">
				<@ if not @{ hidden } and @{ url } = '/' @>
					<li class="std-sidebar__node"><@ sidebarLink @></li>	
				<@ end @>
				<@~ tree ~@>
			</ul>
		<@~ end @>
	<@ else @>
		<@ with '/' ~@>
			<ul class="std-sidebar__tree">
				<@ if not @{ hidden } @>
					<li class="std-sidebar__node"><@ sidebarLink @></li>	
				<@ end @>
				<@~ tree ~@>
			</ul>
		<@~ end @>
	<@ end @>
<@ end @>

<@~ snippet sidebar ~@>
	<# Backdrop #>
	<std-sidebar-backdrop class="std-sidebar-backdrop"></std-sidebar-backdrop>

	<aside class="std-layout__sidebar">
		<nav id="std-sidebar" class="std-sidebar">
			<# Navbar items #>	
			<@ if not @{ checkboxHideNavbarLinksInMobileSidebar} @>
				<@ ../lib/navbarActionsPagelist.php @>	
				<@ if @{ :pagelistCount } @>
					<div class="std-sidebar__navbar-buttons">
						<@ foreach in pagelist @>
							<a href="@{ url }" class="std-button">@{ title }</a>
						<@ end @>
					</div>
				<@ end @>

				<@ ../lib/navbarLinksPagelist.php @>	
				<@ if @{ :pagelistCount } @>
					<ul class="std-sidebar__navbar-links">
						<@ foreach in pagelist @>
							<li class="std-sidebar__node"><@ sidebarLink @></li>	
						<@ end @>
					</ul>
				<@ end @>
			<@ end @>

			<# Tree #>
			<@ sidebarNav @>
		</nav>
	</aside>
<@~ end ~@>

<@ sidebar @>
