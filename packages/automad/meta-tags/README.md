# Automad Meta Tags Extension

This extension creates a couple of meta tags for the `<head></head>` section in a template. It also supports the Open Graph protocol to create beautiful preview cards for Facebook and Twitter. The following meta tags are available:

* `charset="..."`
* `name="viewport"`
* `property="og:type"`  
* `property="og:url"` 
* `property="og:image"`
* `property="og:title"`
* `property="og:description"`
* `name="description"`
* `name="twitter:card"`

## Usage

The extension can be used in templates as follows:

	<@ Automad/MetaTags { options } @>

## Options 

The following options are available:

| Name | Description |
|------|-------------|
| `charset` | The charset. The default is `utf-8`. |
| `viewport` | The viewport setting. The default is `width=device-width, initial-scale=1, shrink-to-fit=no`. |
| `description` | The meta description. By default there is no description. Any variable can be used. |
| `ogTitle` | The open graph title. By default, a combination of the `sitename` and `title` variables is used. |
| `ogDescription` | The open graph description. By default there is no description. Any variable can be used. |
| `ogType` | The open graph type. The default is 'website'. |
| `ogImage` | The open graph image. By default there is no image defined. Any variable or string can be used here. It is possible to use an external URL to an image as well as a glob pattern to a local image. | 
| `twitterCard` | The Twitter card style. The default is `false` (no tag). |

## Example

A full example for using this extension in the `<head></head>` section looks as follows:

	<head>
	<@ Automad/MetaTags { 
		description: @{ metaDescription | def(@{ text | stripTags }) },
		ogTitle: @{ ogTitle | def('@{ sitename } / @{ title }') },
		ogDescription: @{ ogDescription | def(@{ text | stripTags }) },
		ogType: 'website',
		ogImage: @{ ogImage | def('/shared/og*.png') }
	} @>
	<# Add some CSS or JS tags here ... #>
	</head>