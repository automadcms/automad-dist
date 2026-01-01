<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ snippet brand @>
	<a href="<@ with '/' @>@{ url }<@ end @>" class="std-brand">
		<@~ with @{ imageLogo } @>
			<@~ with @{ imageLogo } { width: @{ numberLogoWidthMobile | def (40) } } @>
				<@~ set { 
					:logoMobile: @{ :fileResized }, 
					:logoMobileWidth: @{ :widthResized } 
				} @>
			<@~ end @>
			<@~ with @{ imageLogo } { width: @{ numberLogoWidthDesktop | def (65) } } @>
				<@~ set { 
					:logoDesktop: @{ :fileResized }, 
					:logoDesktopWidth: @{ :widthResized } 
				} @>
			<@~ end ~@>
			<# 
			Multiply the desktop logo size with a 
			factor of 1.0625 in order match the large 
			font size on large screens.

			See client/styles/base.less
			#>
			<@~ with @{ imageLogo } { width: @{ numberLogoWidthDesktop | def (65) | * 1.0625 } } @>
				<@~ set { :logoDesktopLarge: @{ :fileResized }, :logoDesktopLargeWidth: @{ :widthResized } } @>
			<@~ end ~@>
			<img 
				src="@{ :logoDesktop }" 
				srcset="
					@{ :logoMobile } @{ :logoMobileWidth }w, 
					@{ :logoDesktop } @{ :logoDesktopWidth }w, 
					@{ :logoDesktopLarge } @{ :logoDesktopLargeWidth }w
				"
				sizes="
					(max-width: 768px) @{ :logoMobileWidth }px,
					<# 
					Note that this has to match the base font 
					size breakpoint for 1rem in client/styles/base.less 
					#>
					(max-width: 1599px) @{ :logoDesktopWidth }px, 
					@{ :logoDesktopLargeWidth }px
				"
				class="std-brand__img"
				alt="@{ :caption | def (@{ :basename }) }"
			/>	
		<@~ else ~@>
			@{ brand | def (@{ sitename }) }	
		<@~ end ~@>
	</a>
<@ end ~@>

<@ brand @>	
