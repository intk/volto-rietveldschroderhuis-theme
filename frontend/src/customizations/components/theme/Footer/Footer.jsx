/* eslint-disable no-unused-vars */
/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { map } from 'lodash';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';

import { useSiteDataContent } from '@package/helpers';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

export const Contact = ({
  addressTitle,
  address,
  addressSecond,
  addressButton,
  contactTitle,
  phone,
  email,
  contactButton,
  newsletterTitle,
  newsletterText,
}) => (
  <div className="footerInfoBox">
    <div className="titleWrapper">{addressTitle}</div>
    <div>{!!address && <p id="address">{address}</p>}</div>
    <div>{!!addressSecond && <p id="address">{addressSecond}</p>}</div>
    <div>
      {!!email && (
        <a
          id="mailadress"
          data-linktype="email"
          href={`mailto:${email}`}
          data-val={email}
          data-subject="Contact via Email"
        >
          {email}
        </a>
      )}
    </div>
  </div>
);

export const OpenningTimes = ({
  addressTitle,
  address,
  addressSecond,
  addressButton,
  contactTitle,
  phone,
  email,
  contactButton,
  newsletterTitle,
  newsletterText,
  timeLine1,
  timeLine2,
  timeLine3,
  planYourVisit,
}) => (
  <div className="footerInfoBox">
    <div>
      <div className="titleWrapper">{contactTitle}</div>
      <div>{!!timeLine1 && <p>{timeLine1}</p>}</div>
      <div>{!!timeLine2 && <p>{timeLine2}</p>}</div>
      <div>{!!timeLine3 && <p>{timeLine3}</p>}</div>
      <div>{!!planYourVisit && <p>{planYourVisit}</p>}</div>
    </div>
  </div>
);

const Footer = ({ intl }) => {
  const siteDataContent = useSiteDataContent();

  const { blocks = {} } = siteDataContent;
  const siteDataId = Object.keys(blocks).find(
    (id) => blocks[id]?.['@type'] === 'footerData',
  );

  const { siteActions = [] } = useSelector(
    (state) => ({
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );

  const footerData = blocks[siteDataId] || {};

  return (
    <Segment
      role="contentinfo"
      vertical
      padded
      inverted
      color="grey"
      textAlign="center"
      id="footer"
    >
      <Container>
        <Contact {...footerData} />
        <OpenningTimes {...footerData} />
      </Container>
    </Segment>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
