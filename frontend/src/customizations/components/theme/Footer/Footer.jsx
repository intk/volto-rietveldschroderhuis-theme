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

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

const Footer = ({ intl }) => {
  const siteDataContent = useSiteDataContent();

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

  // useEffect(() => {
  //   return history.listen(() => {
  //     setMessage(null); // Clear the message when route changes
  //   });
  // }, [history]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const data = {
  //     EMAIL: email,
  //     u: 'c04600e3ceefae8c502cbabec',
  //     id: '42702e9770',
  //     'group[15893][1]': '1',
  //   };

  //   try {
  //     const response = await fetch(
  //       'https://centraalmuseum.us2.list-manage.com/subscribe/post-json?c=?',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(data),
  //       },
  //     );

  //     const result = await response.json();

  //     if (response.ok) {
  //       setMessage(
  //         'Bedankt voor je aanmelding. Je ontvangt een e-mail waarin je inschrijving wordt bevestigd.',
  //       );
  //       // setMessage(
  //       //   {intl.formatMesssage(messages.approve)}
  //       // )
  //     } else {
  //       setMessage('Aanmelden op nieuwsbrief mislukt.');
  //     }
  //   } catch (error) {
  //     setMessage('Er is een fout opgetreden. Probeer het opnieuw.');
  //   }
  // };

  return (
    <main>
      <div id="view">
        <Container id="page-document" className="Footer">
          <RenderBlocks content={siteDataContent} path={path} intl={intl} />
        </Container>
      </div>
    </main>
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
