from rietveld import PACKAGE_NAME


class TestSetupInstall:
    def test_addon_installed(self, installer):
        """Test if rietveld is installed."""
        assert installer.is_product_installed(PACKAGE_NAME) is True

    def test_browserlayer(self, browser_layers):
        """Test that IRIETVELDLayer is registered."""
        from rietveld.interfaces import IRIETVELDLayer

        assert IRIETVELDLayer in browser_layers

    def test_latest_version(self, profile_last_version):
        """Test latest version of default profile."""
        assert profile_last_version(f"{PACKAGE_NAME}:default") == "20230606001"
