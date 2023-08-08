import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import './css/seethehouse.less';
import { useIntl } from 'react-intl';

const SeethehouseBlockView = (props) => {
  const messages = defineMessages({
    ticket: {
      id: 'Ticket',
      defaultMessage: 'Het huis met eigen ogen bekijken?',
    },
  });
  const intl = useIntl();

  const handleMenuOpen = () => {
    // Find the hamburger button by its class name
    const hamburgerButton = document.querySelector(
      '.hamburger.hamburger--arrow',
    );

    // Trigger a click event on the hamburger button
    if (hamburgerButton) {
      hamburgerButton.click();
    }
  };

  return (
    <div id="Tickets">
      <h3 className="Header">{intl.formatMessage(messages.ticket)}</h3>
      <div className="buttons">
        <a
          className="button button1"
          href="https://tickets.rietveldschroderhuis.nl/nl/tickets"
        >
          Tickets
        </a>
        <button className="button button2" onClick={handleMenuOpen}>
          Menu
        </button>
      </div>
    </div>
  );
};

export default injectIntl(SeethehouseBlockView);
