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

use Composer\Package\PackageInterface;
use Composer\Installer\LibraryInstaller;

class PackageInstaller extends LibraryInstaller {
	
    /**
     * {@inheritDoc}
     */
    
    public function getInstallPath(PackageInterface $package) {
        return 'packages/' . strtolower($package->getPrettyName());
    }

    /**
     * {@inheritDoc}
     */
    
    public function supports($packageType) {
        return 'automad-package' === $packageType;
    }
	
}