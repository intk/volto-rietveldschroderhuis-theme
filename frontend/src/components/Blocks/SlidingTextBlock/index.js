import quoteSVG from '@plone/volto/icons/quote.svg';

import SlidingTextView from './SlidingTextView';
import SlidingTextEdit from './SlidingTextEdit';

const SlidingTextBlock = (config) => {
  config.blocks.blocksConfig.SlidingTextBlock = {
    id: 'SlidingTextBlock',
    title: 'Sliding Text Page',
    icon: quoteSVG,
    group: 'Text',
    view: SlidingTextView,
    edit: SlidingTextEdit,
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

export default SlidingTextBlock;
