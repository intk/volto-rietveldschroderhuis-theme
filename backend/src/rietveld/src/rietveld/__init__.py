"""Init and utils."""
from zope.i18nmessageid import MessageFactory

import logging


PACKAGE_NAME = "rietveld"

_ = MessageFactory("rietveld")

logger = logging.getLogger("rietveld")
