<# 

Standard Lite

© 2024-2026 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet brand @>
	<a href="<@ with '/' @>@{ url }<@ end @>" class="std-brand">
		<@~ with @{ imageLogo } { height: 80 } @>
			<img 
				src="@{ :fileResized }" 
				class="std-brand__img"
				alt="@{ :caption | def (@{ :basename }) }"
			/>	
		<@~ else ~@>
			@{ brand | def (@{ sitename }) }	
		<@~ end ~@>
	</a>
<@ end ~@>

<@ brand @>	
