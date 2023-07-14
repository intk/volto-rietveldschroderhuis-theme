import imageTextSVG from './imagetext.svg';

import ImageTextView from './ImageTextView';
import ImageTextEdit from './ImageTextEdit';

const installImageAndTextBlock = (config) => {
  config.blocks.blocksConfig.ImageAndTextBlock = {
    id: 'ImageAndTextBlock',
    title: 'Image&Text Page',
    icon: imageTextSVG,
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
