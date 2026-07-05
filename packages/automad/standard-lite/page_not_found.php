<# 

Standard Lite

© 2024-2026 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ components/page.php ~@>

<@~ snippet main ~@>
	<@ with '/' @>
		<@ if @{ +pageNotFoundContent } @>
			<main class="std-layout__main std-content">
				@{ +pageNotFoundContent }
			</main>
		<@ else @>
			<main class="std-layout__main">
				<div class="std-layout__title std-title">
					<h1 class="am-block">404</h1>
				</div>
				<p class="am-block">
					<a href="@{ url }" class="std-button">
						<@ icon { name: 'arrow-left' } @>
						&nbsp;@{ title }
					</a>
				</p>
			</main>
		<@ end @>
	<@ end @>
<@~ end ~@>

<@ snippet title @>
<@ end @>

