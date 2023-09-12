/* eslint-disable no-unused-vars */
/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { Image } from 'semantic-ui-react';
import {
  getScaleUrl,
  getPath,
} from '@package/components/Blocks/SiteData/utils';
import { Container, Segment, Grid, Label } from 'semantic-ui-react';
import RenderBlocks from './RenderBlocks';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { useSiteDataContent } from '@package/helpers';
import { langmap } from '../../../../../omelette/src/helpers';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
  newsletter: {
    id: 'Newsletter',
    defaultMessage: 'Nieuws over Rietveld in je mail',
  },
  approve: {
    id: 'Approve',
    defaultMessage:
      'Thank you for registering. You will receive an email confirming your registration.',
  },
  unable: {
    id: 'Unable',
    defaultMessage: 'Unable to subscribe to newsletter.',
  },
  error: {
    id: 'Error',
    defaultMessage: 'An error occurred. Please try again.',
  },
});

const cookietranslations = {
  more_info_link: {
    en: '/nl/over-ons/over-het-museum/privacyverklaring-en-cookies',
    nl: '/nl/over-ons/over-het-museum/privacyverklaring-en-cookies',
  },
  more_info_text: {
    en: 'Read more',
    nl: 'Meer info',
  },
  text: {
    en: 'We use cookies to enhance our website.',
    nl: 'Wij gebruiken cookies om onze website te verbeteren.',
  },
  button_text: {
    en: 'Accept',
    nl: 'Accepteren',
  },
  approve: {
    en:
      'Thank you for registering. You will receive an email confirming your registration.',
    nl:
      'Bedankt voor je aanmelding. Je ontvangt een e-mail waarin je inschrijving wordt bevestigd.',
  },
  unable: {
    en: 'Unable to subscribe to newsletter.',
    nl: 'Aanmelden op nieuwsbrief mislukt.',
  },
};

const MailChimpForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <>
      <div id="newsletter-form">
        <div id="formfield-form-widgets-email">
          <input
            id="form-widgets-email"
            ref={(node) => (email = node)}
            type="email"
            placeholder="Je emailadres"
          />
          <br />
        </div>
        <div className="formControls">
          <button id="form-buttons-subscribe" onClick={submit}>
            Inschrijven
          </button>
        </div>
      </div>

      <div>
        <div className="message">
          {status === 'sending' && <div style={{ color: 'blue' }}>...</div>}
          {status === 'error' && (
            <div
              style={{ color: 'red' }}
              // dangerouslySetInnerHTML={{ __html: message }}
            >
              <p>{cookietranslations['unable']['nl']}</p>
            </div>
          )}
          {status === 'success' && (
            <div
              className="success-msg"
              style={{ color: 'blue' }}
              // dangerouslySetInnerHTML={{ __html: message }}
            >
              <p>{cookietranslations['approve']['nl']}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

const Footer = ({ intl }) => {
  const siteDataContent = useSiteDataContent();
  const mailchimp_url =
    'https://centraalmuseum.us2.list-manage.com/subscribe/post?u=c04600e3ceefae8c502cbabec&amp;id=42702e9770&group%5B15893%5D%5B1%5D=1';

  const content = {
    blocks: siteDataContent.blocks,
    blocks_layout: siteDataContent.blocks_layout,
  };

  const path = getPath(siteDataContent['@id']);

  const { siteActions = [] } = useSelector(
    (state) => ({
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      setMessage(null); // Clear the message when route changes
    });
  }, [history]);

  return (
    <Container id="Footer-wrapper">
      <div id="Newsletter">
        <h3 className="Header">{intl.formatMessage(messages.newsletter)}</h3>
        <MailchimpSubscribe
          url={mailchimp_url}
          render={({ subscribe, status, message }) => (
            <MailChimpForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
      <div id="view">
        <Container id="page-document" className="Footer">
          <RenderBlocks content={siteDataContent} path={path} intl={intl} />
        </Container>
      </div>
    </Container>
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
