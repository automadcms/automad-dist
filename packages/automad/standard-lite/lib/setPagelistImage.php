<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ set { :pagelistImage: false } @>
<@~ set { 
	:pagelistImage: @{ 
		imagePagelist | 
		def (@{ +hero | findFirstImage }) |
		def (@{ +main | findFirstImage })
	}
} @>
