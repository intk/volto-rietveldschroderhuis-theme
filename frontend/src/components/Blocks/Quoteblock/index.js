import quoteSVG from '@plone/volto/icons/quote.svg';

import QuoteblockView from './QuoteblockView';
import QuoteblockEdit from './QuoteblockEdit';

const installQuoteblock = (config) => {
  config.blocks.blocksConfig.Quoteblock = {
    id: 'Quoteblock',
    title: 'Quote Page',
    icon: quoteSVG,
    group: 'Storytelling',
    view: QuoteblockView,
    edit: QuoteblockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
};

export default installQuoteblock;
