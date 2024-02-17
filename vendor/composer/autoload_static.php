<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5ac4b01b9294bbaf36b9bc73499bc73c
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Automad\\Composer\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Automad\\Composer\\' => 
        array (
            0 => __DIR__ . '/..' . '/automad/package-installer/src',
        ),
    );

    public static $classMap = array (
        'Automad\\MetaTags' => __DIR__ . '/../..' . '/packages/automad/meta-tags/MetaTags.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5ac4b01b9294bbaf36b9bc73499bc73c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5ac4b01b9294bbaf36b9bc73499bc73c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5ac4b01b9294bbaf36b9bc73499bc73c::$classMap;

        }, null, ClassLoader::class);
    }
}
