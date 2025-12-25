<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<# Reset variable to false in case there is no match. #>
<@ set { :pagelistText: false } @>
<@ set { :pagelistText: 
	@{ 
		+hero | 
		findFirstParagraph |
		def (@{ +main }) |
		findFirstParagraph 
	}
} @>
