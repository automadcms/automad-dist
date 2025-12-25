<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<@~ ../lib/functions.php ~@>
<@~ ../lib/resetDateFormat.php ~@>

<@~ if @{ selectColorTheme | def ('switcher') } != 'switcher' @> 
	<@~ set { :colorTheme: ' @{ selectColorTheme }' } @>
<@~ end @>

<@~ if @{ checkboxCompactLayout } @>
	<@~ set { :compact: ' compact' } @>
<@~ end @>

<@~ if @{ checkboxDisableAnimations } @>
	<@~ set { :noAnimations: ' no-animations' } @>
<@~ end @>

<@~ set { :dist: @{ theme | replace ('/automad\\//', '') } } ~@>

<# 

@{ imagePagelist }
@{ selectDefaultPagelistDateFormat }

#>
<!DOCTYPE html>
<html lang="en" class="@{ template | sanitize }@{ :colorTheme }@{ :compact }@{ :noAnimations }">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="/packages/@{ theme }/dist/@{ :dist }.css" rel="stylesheet">
	<script src="/packages/@{ theme }/dist/@{ :dist }.js" type="text/javascript"></script>
	<@~ ../lib/customizeColors.php ~@>
</head>
<body>
	<@ banner.php @>
	<@ if @{ ?tag } @>
		<@ layoutTag.php @>
	<@ else @>
		<@ layout.php @>
	<@ end @>
</body>
</html>
