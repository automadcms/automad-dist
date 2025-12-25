<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet layoutTag ~@>
	<@ set { 
		:navbarSticky: @{ selectNavbarSticky | def('scroll') },
	} ~@>
	<std-navbar class="std-navbar" sticky="@{ :navbarSticky }">
		<div class="std-navbar__backdrop">
			<div class="std-layout std-layout--tag">
				<div class="std-layout__navbar std-navbar__container">
					<div class="std-navbar__brand">
						<@ brand.php @>
					</div>
					<div class="std-navbar__nav">
						<@ themeSwitcher.php @>
						<a href="@{ url }" class="std-navbar__icon">
							<@ icon { name: 'x' } @>
						</a>
						<std-layout-tag-esc></std-layout-tag-esc>
					</div>
				</div>
			</div>
		</div>
	</std-navbar>
	<div class="std-layout std-layout--tag">
		<std-layout-tag-pagelist class="std-layout__main">
			<div class="std-layout__title">
				<h1>@{ ?tag }</h1>
			</div>
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
			<@ pagelistLayout { layout: @{ selectTagPagelistLayout | def ('masonry') } } @>
			<@ pagelist/pagination.php @>
		</std-layout-tag-pagelist>
	</div>
<@~ end ~@>

<@ layoutTag @>
