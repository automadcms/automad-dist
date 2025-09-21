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
