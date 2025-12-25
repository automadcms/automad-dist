<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ if @{ authorName } @>
	<@ if @{ authorContact } @>
		<@ if @{ authorContact | match ('/@/')} @>
			<a href="mailto:@{ authorContact }">@{ authorName }</a>
		<@ else @>
			<a href="@{ authorContact }" target="_blank">@{ authorName }</a>
		<@ end @>
	<@ else @>
		@{ authorName }
	<@ end @>
<@ end @>
