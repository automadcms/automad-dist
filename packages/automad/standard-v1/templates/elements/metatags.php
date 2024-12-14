<?php if (substr(AM_VERSION, 0, 1) == '1') { ?>
	<@ set_teaser_variable.php @>
	<@ set { :description: @{ metaDescription | def(@{ :teaser | stripTags }) } } @>
	<@ Automad/MetaTags { 
		description: @{ :description },
		ogDescription: @{ :description },
		ogType: 'website',
		ogTitle: @{ metaTitle | def('@{ sitename } / @{ title | def ("404") }') },
		ogImage: @{ 
			ogImage | 
			def('@{ +hero | findFirstImage }') | 
			def('@{ +main | findFirstImage }') | 
			def('*.jpg, *.png, *.gif, /shared/*.jpg, /shared/*.png, /shared/*.gif') 
		}
	} @>
<?php } else { ?>
	<@ Automad/MetaTags { ogTitle: false, ogImage: @{ ogImage } } @>
<?php } ?>
