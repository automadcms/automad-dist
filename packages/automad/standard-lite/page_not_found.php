<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ components/page.php ~@>

<@~ snippet main ~@>
	<main class="std-layout__main">
		<@ with '/' @>
			<p class="am-block">
				<a href="@{ url }" class="std-button">
					<@ icon { name: 'arrow-left' } @>
					&nbsp;@{ title }
				</a>
			</p>
		<@ end @>
	</main>
<@~ end ~@>

<@ snippet toc @>
<@ end @>
