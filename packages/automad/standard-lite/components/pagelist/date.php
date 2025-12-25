<# 

Standard Lite

© 2024-2025 Marc Anton Dahmen. All rights reserved. Licensed under the MIT license.

https://marcdahmen.de

#>

@{ date | dateFormat (@{ :dateFormat }, @{ :lang }) | replace ('/(.+)/', '<div class="std-pagelist__item-date">$1</div>') }
