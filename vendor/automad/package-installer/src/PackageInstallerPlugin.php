<?php
/**
 *	Automad Composer Package Installer
 *
 * 	A custom Composer installer for Automad packages.
 *
 * 	@author Marc Anton Dahmen
 * 	@copyright Copyright (C) 2018 Marc Anton Dahmen - <https://marcdahmen.de> 
 * 	@license MIT license
 */

namespace Automad\Composer;

use Composer\Composer;
use Composer\IO\IOInterface;
use Composer\Plugin\PluginInterface;

class PackageInstallerPlugin implements PluginInterface {
	
	public function activate(Composer $composer, IOInterface $io) {
        $installer = new PackageInstaller($io, $composer);
        $composer->getInstallationManager()->addInstaller($installer);
    }

    public function deactivate(Composer $composer, IOInterface $io) {}

    public function uninstall(Composer $composer, IOInterface $io) {}
	
}