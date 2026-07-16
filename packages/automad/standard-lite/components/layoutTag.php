<# 

Standard Lite

© 2024-2026 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet layoutTag ~@>
	<@ set { 
		:navbarSticky: @{ selectNavbarSticky | def('scroll') },
	} ~@>

	<std-layout-tag-pagelist class="std-layout std-layout--tag">
		<std-navbar class="std-layout__navbar horizontal" sticky="@{ :navbarSticky }">
			<div class="std-layout__navbar-wrapper std-navbar">
				<div class="std-layout__navbar-brand">
					<@ brand.php @>
				</div>
				<div class="std-layout__navbar-nav">
					<@ themeSwitcher.php @>
					<a href="@{ url }" class="std-navbar__icon">
						<@ icon { name: 'x' } @>
					</a>
					<std-layout-tag-esc></std-layout-tag-esc>
				</div>
			</div>
		</std-navbar>

		<div class="std-layout__title std-title">
			<h1>@{ ?tag }</h1>
			<@ set { 
				:page: @{ ?page | def (1) },
				:dateFormat: @{ selectTagPagelistDateFormat | def ('M Y') }
			} @>
			<@ newPagelist {
				filter: @{ ?tag },
				sort: @{ selectTagPagelistSort | def (':index asc') },
				limit: @{ numberTagPagelistMaxNumberOfPages | def (12) },
				page: @{ :page }
			} @>	
			<div class="std-layout__main">
				<div class="std-tags">
					<@ foreach in filters @>
						<@ if @{ :filter } != @{ ?tag } @>
							<a href="?tag=@{ :filter }" class="std-tag">
								<@ icon { name: 'tag' } @>
								@{ :filter }
							</a>
						<@ end @>
					<@ end @>
				</div>
				<@ pagelistLayout { layout: @{ selectTagPagelistLayout | def ('masonry') } } @>
				<@ pagelist/pagination.php @>
			</div>
		</div>
	</std-layout-tag-pagelist>
<@~ end ~@>

<@ layoutTag @>
