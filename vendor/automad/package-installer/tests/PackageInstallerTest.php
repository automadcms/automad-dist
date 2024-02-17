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

namespace Automad\Composer\Tests;

use Automad\Composer\PackageInstaller;
use Composer\Config;
use Composer\Composer;
use Composer\Package\Package;
use Composer\Package\RootPackage;
use PHPUnit\Framework\TestCase;


final class PackageInstallerTest extends TestCase {
	
	/**
	 *	Tests the install path for a given package.
	 *	 
	 * 	@param string $name     
	 * 	@param string $type     
	 * 	@param string $expected 
	 * 	@return boolean  
	 *
	 * 	@dataProvider dataForGetInstallPath
	 */
	
	public function testGetInstallPath($name, $type, $expected) {
		
		$composer = new Composer();
        $config = new Config(false, realpath('.'));
        $composer->setConfig($config);
		
		$repository = $this->getMockBuilder('Composer\Repository\InstalledRepositoryInterface')->getMock();
        $io = $this->getMockBuilder('Composer\IO\IOInterface')->getMock();
		
		$installer = new PackageInstaller($io, $composer);
		
		$package = new Package($name, '1.0.0', '1.0.0');
        $package->setType($type);
        $consumerPackage = new RootPackage('foo/bar', '1.0.0', '1.0.0');
        $composer->setPackage($consumerPackage);
		
		$result = $installer->getInstallPath($package);
        $this->assertEquals($expected, $result);
		
	}
	
	
	/**
	 *	Data provider for the testGetInstallPath() method.
	 *	
	 * 	@return array
	 */
	
	public function dataForGetInstallPath() {
		
		return array(
			array(
				'vendor/test-theme',
				'automad-package',
				'packages/vendor/test-theme'
			),
			array(
				'vendor/test-extension',
				'automad-package',
				'packages/vendor/test-extension'
			)
			
		);
		
	}
	
	
}
