import videoSVG from '@plone/volto/icons/video.svg';

import VideoPageView from './VideoPageView';
import VideoPageEdit from './VideoPageEdit';

const installVideoPageBlock = (config) => {
  config.blocks.blocksConfig.VideoPageBlock = {
    id: 'VideoPageBlock',
    title: 'Video Page',
    icon: videoSVG,
    group: 'Storytelling',
    view: VideoPageView,
    edit: VideoPageEdit,
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

export default installVideoPageBlock;
