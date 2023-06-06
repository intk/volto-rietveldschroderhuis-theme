from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing.zope import WSGI_SERVER_FIXTURE

import rietveld


class RIETVELDLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        import plone.restapi

        self.loadZCML(package=plone.restapi)
        self.loadZCML(package=rietveld)

    def setUpPloneSite(self, portal):
        applyProfile(portal, "rietveld:default")
        applyProfile(portal, "rietveld:initial")


RIETVELD_FIXTURE = RIETVELDLayer()


RIETVELD_INTEGRATION_TESTING = IntegrationTesting(
    bases=(RIETVELD_FIXTURE,),
    name="RIETVELDLayer:IntegrationTesting",
)


RIETVELD_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(RIETVELD_FIXTURE, WSGI_SERVER_FIXTURE),
    name="RIETVELDLayer:FunctionalTesting",
)


RIETVELDACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        RIETVELD_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        WSGI_SERVER_FIXTURE,
    ),
    name="RIETVELDLayer:AcceptanceTesting",
)
