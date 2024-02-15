> :bell: Note that is the distribution-only repository for [Automad](https://automad.org). Head over to [marcantondahmen/automad](https://github.com/marcantondahmen/automad) for the source code and issues.
---

# Automad

A flat-file content management system and template engine

![Tag](https://img.shields.io/github/v/tag/marcantondahmen/automad?include_prereleases&sort=semver&color=222222)
![PHP](https://img.shields.io/packagist/dependency-v/automad/dist/php?color=222222)
![Language](https://img.shields.io/github/languages/top/marcantondahmen/automad?color=222222)
![Size](https://img.shields.io/github/languages/code-size/marcantondahmen/automad?color=222222)
![License](https://img.shields.io/github/license/marcantondahmen/automad?color=222222)
[![Twitter](https://img.shields.io/twitter/follow/automadcms?label=Follow)](https://twitter.com/automadcms)

## :wave: Version 2

Currently, the development of version 2 is _very, very active_. New features and fixes are implemented on a daily basis.
The version 2 update will essentially be a full rewrite of the entire application, including the _backend_, _frontend_, _standard theme_ and _blocks_.
The goal is to also include as many open feature requests and resolve as many open issues as possible until the day of the release.
Existing themes and extensions will continue to work just fine and will be compatible with version 2.
Minor breaking changes will be communicated with the relase notes.

The new dashboard will be entirely written in _TypeScript_ and will no longer have jQuery and UIkit as dependencies.
The new backend will require at least _PHP 8.2_ or newer.

Please note that this is an open-source project that is free to use and the maintainer spends a substatial portion of his free time, weekends and nights in
order to finish the release as soon as possible. That said, there is no fix release date yet. It is done whenever it is done. In the meantime you can
safely start new website using version 1 and migrate to version 2 afterwards.

**Please also consider the above when opening new issues in order to not waste anybody's time.**

And as always, **pull-request will continue to be ignored** as stated below.

In case you want to help, **please give this repository a star**, consider a small donation or take a look a these other possible ways to [contribute](#contributing) to the project.

---

![Mockup](https://raw.githubusercontent.com/marcantondahmen/media-files/master/automad/readme.png)

## Installation

Automad can be installed using [Docker](https://docker.com), [Composer](https://getcomposer.org) or manually.

### Composer

The fastest way to get Automad up and running is to use Composer.

    composer create-project automad/automad .

Follow this [guide](https://automad.org/getting-started#composer) to finish the installation and get started quickly.

### Docker

It is also possible to run Automad in a [Docker](https://hub.docker.com/r/automad/automad) container including **Nginx** and **PHP 8**.

    docker run -dp 80:80 -v ./app:/app --name mysite automad/automad

The first time you run the image, a new user account for the Automad dashboard will be created automatically. The account details will be logged by the running container. You can show these logs using the following command:

    docker logs mysite

Your can now navigate to [localhost](http://localhost) to view your new site.

### Manual Download

Alternatively Automad can also be [installed manually](https://automad.org/getting-started#manual-installation).

## Documentation

Take a look at the [documentation](https://automad.org) to get started with [using](https://automad.org/user-guide) Automad or to learn how to [develop](https://automad.org/developer-guide) themes and extensions. In case you are interested in using [plain PHP](https://automad.org/developer-guide/building-themes/plain-php) in your themes or to develop more complex extensions, check out Automad's [API reference](https://api.automad.org).

## Packages

Visit the [Automad package browser](https://packages.automad.org) to get free themes and extensions for your Automad site.

## Community

Join the community, ask questions or start a discussion on the Automad [discussion platform](https://discuss.automad.org).

## Contributing

In case you are interested in contributing, the following types of contribution are welcome:

-   Improving [language packs](https://github.com/automadcms/automad-language-packs) by fixing translation errors or adding new languages
-   [Publishing packages](https://automad.org/developer-guide/publishing-packages) like themes or extensions to the Automad package [browser](https://packages.automad.org)
-   Giving feedback and helping to grow a [community](https://discuss.automad.org)
-   Reporting bugs or requesting features at [GitHub](https://github.com/marcantondahmen/automad/issues)

However, I do not exclude at this point using parts of Automad's source in future projects under different licenses. In order to avoid having to ask anybody for permission when doing so, I will not accept any contributions to **this** repository. Please understand that pull requests will therefore be ignored.

## Text Editors Plugins

To make the development of themes more efficient, plugins providing syntax highlighting and snippets for Automad's template language are available for the following editors:

-   [Neovim (Tree-Sitter)](https://github.com/automadcms/tree-sitter-automad)
-   [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MarcAntonDahmen.automad)
-   [Atom](https://atom.io/packages/language-automad)
-   [Textmate 2](https://github.com/marcantondahmen/automad.tmbundle)

---

© 2013-2023 [Marc Anton Dahmen](https://marcdahmen.de)  
Released under the [MIT license](https://automad.org/license)
