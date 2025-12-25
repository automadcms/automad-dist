<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

<# Set a default date format in case the laout is used in a block. #>
<@ set { :dateFormat: @{ :dateFormat | def (@{ selectDefaultPagelistDateFormat }) | def ('M Y') }} @>
