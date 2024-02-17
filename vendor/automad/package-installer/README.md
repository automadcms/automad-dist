# Automad Composer Package Installer 

This is a custom Composer installer for [Automad](https://automad.org) packages.

---

## Using the Installer 

To be able to be installed with Composer, Automad packages must have the following items set in the `composer.json` file:

	{
	    "type": "automad-package",
        "require": {
            "automad/package-installer": ">=1.1-stable"
        }
	} 