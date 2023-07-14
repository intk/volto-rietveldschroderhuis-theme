import imageTextSVG from './imagetext.svg';

import VideoPageView from './VideoPageView';
import VideoPageEdit from './VideoPageEdit';

const installVideoPageBlock = (config) => {
  config.blocks.blocksConfig.VideoPageBlock = {
    id: 'VideoPageBlock',
    title: 'Video Page',
    icon: imageTextSVG,
    group: 'Text',
    view: VideoPageView,
    edit: VideoPageEdit,
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

export default installVideoPageBlock;
