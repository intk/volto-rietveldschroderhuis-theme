import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import './css/seethehouse.less';
import { useIntl } from 'react-intl';

const SeethehouseBlockView = (props) => {
  const messages = defineMessages({
    seewithyourowneyes: {
      id: 'Seewithyourowneyes',
      defaultMessage: 'Would you like to see the house with your own eyes?',
    },
    ticket: {
      id: 'Ticket',
      defaultMessage: 'Ticket',
    },
    menu: {
      id: 'Menu',
      defaultMessage: 'Menu',
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
      <h3 className="Header">
        {intl.formatMessage(messages.seewithyourowneyes)}
      </h3>
      <div className="buttons">
        <a
          className="button button1"
          href="https://tickets.rietveldschroderhuis.nl/nl/tickets"
        >
          {intl.formatMessage(messages.ticket)}
        </a>
        <button className="button button2" onClick={handleMenuOpen}>
          {intl.formatMessage(messages.menu)}
        </button>
      </div>
    </div>
  );
};

export default injectIntl(SeethehouseBlockView);
