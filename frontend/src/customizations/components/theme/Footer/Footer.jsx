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
import { Image } from 'semantic-ui-react';
import {
  getScaleUrl,
  getPath,
} from '@package/components/Blocks/SiteData/utils';

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
  name,
  address,
  addressSecond,
  addressButton,
  contactTitle,
  phone,
  email,
  contactButton,
  newsletterTitle,
  newsletterText,
  contactImage,
}) => (
  <div className="column-one">
    <div className="row-info">
      <h3>
        <b>{addressTitle}</b>
      </h3>
      <p>{name}</p>
      <p>{address}</p>
      <p>{addressSecond}</p>
      <p>{email}</p>
    </div>
    <div className="row-image">
      <Image
        src={getScaleUrl(getPath(contactImage), 'preview')}
        alt={contactImage}
      ></Image>
    </div>
  </div>
  // <div className="column-one">
  //   <div className="titleWrapper">{addressTitle}</div>
  //   <div>{!!address && <p id="address">{address}</p>}</div>
  //   <div>{!!addressSecond && <p id="address">{addressSecond}</p>}</div>
  //   <div>
  //     {!!email && (
  //       <a
  //         id="mailadress"
  //         data-linktype="email"
  //         href={`mailto:${email}`}
  //         data-val={email}
  //         data-subject="Contact via Email"
  //       >
  //         {email}
  //       </a>
  //     )}
  //   </div>
  // </div>
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
  <div className="column-two">
    <div>
      <div className="titleWrapper">{contactTitle}</div>
      <div>{!!timeLine1 && <p>{timeLine1}</p>}</div>
      <div>{!!timeLine2 && <p>{timeLine2}</p>}</div>
      <div>{!!timeLine3 && <p>{timeLine3}</p>}</div>
      <div>{!!planYourVisit && <p>{planYourVisit}</p>}</div>
    </div>
  </div>
);

// export const SiteLogo = ({ siteLogo }) => (
//          <div className="site-logo">
//            <Image src={getScaleUrl(getPath(footerData.siteLogo), 'preview')} alt={footerData.siteLogo} />
//          </div>
//        );

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
    <div id="footerWrapper">
      <div id="Footer">
        {console.log(footerData.siteLogo)}
        <div className="site-logo">
          <Image src={getScaleUrl(getPath(footerData.siteLogo), 'preview')} alt={footerData.siteLogo} />
        </div>
        <div className="information-columns">
          <div className="column">
            <div className="row">
              <h3>
                <b>{footerData.addressTitle}</b>
              </h3>
              <p>{footerData.name}</p>
              <p>{footerData.address}</p>
              <p>{footerData.addressSecond}</p>
              <p>{footerData.email}</p>
            </div>
            <div className="row">
              <h3>
                <b>{footerData.contactTitle}</b>
              </h3>
              <p>{footerData.timeLine1}</p>
              <p>{footerData.timeLine2}</p>
              <p>{footerData.timeLine3}</p>
              <p>{footerData.planYourVisit}</p>
            </div>
            <div className="row">
              <Image src={getScaleUrl(getPath(footerData.contactImage), 'preview')} alt={footerData.contactImage}></Image>
            </div>
            <div className="row">
              {' '}
              <Image src={getScaleUrl(getPath(footerData.timesImage), 'preview')} alt={footerData.timesImages}></Image>
              <p id="photo-credit" className="photo-credit">
                {footerData.timesImageCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
