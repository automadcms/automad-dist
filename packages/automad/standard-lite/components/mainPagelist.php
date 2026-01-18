<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@ snippet tagIcon @>
	<@ icon { name: 'tag' } @>
	<@ icon { name: 'x' } @>
<@ end @>

<main class="std-layout__main">
	@{ +main }
	<@ set {
		:page: @{ ?page | def (1) },
		:dateFormat: @{ selectMainPagelistDateFormat | def ('M Y') }
	} @>
	<@ newPagelist {
		context: @{ urlMainPagelistContext },
		type: @{ selectMainPagelistSubset },
		sort: @{ selectMainPagelistSort | def (':index asc') },
		filter: @{ ?filter },
		limit: @{ numberMainPagelistMaxNumberOfPages | def (12) },
		page: @{ :page }
	} @>	
	<@ if not @{ checkboxNarrowMainPagelist } @><am-stretched><@ end @>
	<div class="am-block">
		<std-pagelist-filters target="std-pagelist" class="std-tags">
			<@ foreach in filters @>
				<@ if @{ :filter } != @{ ?filter } @>
					<a href="@{ url }?filter=@{ :filter }" class="std-tag">
						<@ tagIcon @>
						@{ :filter } 
					</a>
				<@ else @>
					<a href="@{ url }" class="std-tag std-tag--active">
						<@ tagIcon @>
						@{ :filter }
					</a>
				<@ end @>
			<@ end @>
		</std-pagelist-filters>
		<div id="std-pagelist">
			<@ pagelistLayout { layout: @{ selectMainPagelistLayout | def ('masonry') } } @>
			<@ pagelist/pagination.php @>
		</div>
	</div>	
	<@ if not @{ checkboxNarrowMainPagelist } @></am-stretched><@ end @>
</main>
