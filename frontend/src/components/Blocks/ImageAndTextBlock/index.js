import imagerightSVG from '@plone/volto/icons/image-right.svg';
import ImageTextView from './ImageTextView';
import ImageTextEdit from './ImageTextEdit';

const installImageAndTextBlock = (config) => {
  config.blocks.blocksConfig.ImageAndTextBlock = {
    id: 'ImageAndTextBlock',
    title: 'Image&Text Page',
    icon: imagerightSVG,
    group: 'Storytelling',
    view: ImageTextView,
    edit: ImageTextEdit,
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

export default installImageAndTextBlock;
