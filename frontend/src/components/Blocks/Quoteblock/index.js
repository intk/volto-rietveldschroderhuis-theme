import quoteSVG from '@plone/volto/icons/quote.svg';

import QuoteblockView from './QuoteblockView';
import QuoteblockEdit from './QuoteblockEdit';
import BlockRenderer from './BlockRenderer';

const installQuoteblock = (config) => {
  config.blocks.blocksConfig.Quoteblock = {
    id: 'Quoteblock',
    title: 'Quote Block',
    icon: quoteSVG,
    group: 'Storytelling',
    view: QuoteblockView,
    edit: QuoteblockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
};

export default installQuoteblock;
