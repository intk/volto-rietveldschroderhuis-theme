import videoSVG from '@plone/volto/icons/video.svg';

import VideoPageView from './SocialMediaButtonsView';
import VideoPageEdit from './SocialMediaButtonsEdit';

const installSocialMediaButtons = (config) => {
  config.blocks.blocksConfig.SocialMediaButtons = {
    id: 'SocialMediaButtons',
    title: 'Social Media Buttons',
    icon: videoSVG,
    group: 'Site',
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

export default installSocialMediaButtons;
