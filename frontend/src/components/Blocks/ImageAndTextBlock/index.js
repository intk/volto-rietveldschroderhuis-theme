import quoteSVG from '@plone/volto/icons/quote.svg';

import ImageTextView from './ImageTextView';
import ImageTextEdit from './ImageTextEdit';

const installImageAndTextBlock = (config) => {
  config.blocks.blocksConfig.ImageAndTextBlock = {
    id: 'ImageAndTextBlock',
    title: 'Image and Text Block',
    icon: quoteSVG,
    group: 'Text',
    view: ImageTextView,
    edit: ImageTextEdit,
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

export default installImageAndTextBlock;
