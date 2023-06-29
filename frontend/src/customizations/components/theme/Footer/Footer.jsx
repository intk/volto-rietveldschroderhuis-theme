/* eslint-disable no-unused-vars */
/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
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
  ticket: {
    id: 'Ticket',
    defaultMessage: 'Het huis met eigen ogen bekijken?',
  },
  newsletter: {
    id: 'Newsletter',
    defaultMessage: 'Nieuws over Rietveld in je mail',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

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
      <div id="Tickets">
        <h3 className="Header">{intl.formatMessage(messages.ticket)}</h3>
        <div className="buttons">
          <button className="button button1" href="/">
            Tickets
          </button>
          <button className="button button2" href="/">
            Menu
          </button>
        </div>
      </div>
      <div id="Newsletter">
        <h3 className="Header">{intl.formatMessage(messages.newsletter)}</h3>
        <form id="newsletter-form" method="get" action="https://centraalmuseum.us2.list-manage.com/subscribe/post-json?c=?">
          <div id="formfield-form-widgets-email">
            <input id="form-widgets-email" name="EMAIL" className="text-widget required textline-field" value="" type="text" placeholder="Je emailadres" />
          </div>

          <input type="hidden" value="c04600e3ceefae8c502cbabec" name="u" />
          <input type="hidden" value="42702e9770" name="id" />
          <input type="hidden" value="1" name="group[15893][1]" />

          <div className="formControls">
            <input id="form-buttons-subscribe" name="form.buttons.subscribe" className="submit-widget button-field context" value="Inschrijven" type="submit" />
          </div>

          <div id="subscribe-result">
            <p className="error-msg" style={{ display: 'none' }}>
              Aanmelden op nieuwsbrief mislukt.
            </p>

            <p className="success-msg" style={{ display: 'none' }}>
              Bedankt voor je aanmelding. Je ontvangt een e-mail waarin je inschrijving wordt bevestigd.
            </p>
          </div>
        </form>
      </div>

      <div id="Footer">
        <div className="site-logo">{!!footerData.siteLogo && <Image src={getScaleUrl(getPath(footerData.siteLogo), 'preview')} alt={footerData.siteLogo} href="/" />}</div>
        <div className="information-columns">
          <div className="column">
            <div className="row">
              {!!footerData.colOneTitle && <h3>{footerData.colOneTitle}</h3>}
              {!!footerData.rowOne && <p>{footerData.rowOne}</p>}
              {!!footerData.rowTwo && <p>{footerData.rowTwo}</p>}
              {!!footerData.rowThree && <p>{footerData.rowThree}</p>}
              {!!footerData.rowFour && (
                <a id="mailadress" data-linktype="email" href={`mailto:${footerData.rowFour}`} data-val={footerData.rowFour} data-subject="Contact via website">
                  {footerData.rowFour}
                </a>
              )}
            </div>
            <div className="row">
              {!!footerData.colTwoTitle && <h3>{footerData.colTwoTitle}</h3>}
              {!!footerData.secLine1 && <p>{footerData.secLine1}</p>}
              {!!footerData.secLine2 && <p>{footerData.secLine2}</p>}
              {!!footerData.secLine3 && <p>{footerData.secLine3}</p>}
              {!!footerData.planYourVisit && <a href={footerData.planYourVisitLink}>{footerData.planYourVisit}</a>}
            </div>
            <div className="row image">{!!footerData.colOneImage && <Image src={getScaleUrl(getPath(footerData.colOneImage), 'preview')} alt={footerData.colOneImage} href={footerData.colOneImageLink} target="_blank"></Image>}</div>
            <div className="row image">
              {' '}
              {!!footerData.colTwoImage && <Image src={getScaleUrl(getPath(footerData.colTwoImage), 'preview')} alt={footerData.colTwoImage} href={footerData.colTwoImageLink} target="_blank"></Image>}
              {!!footerData.secondImageCap && (
                <p id="photo-credit" className="photo-credit">
                  {footerData.secondImageCap}
                </p>
              )}
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
