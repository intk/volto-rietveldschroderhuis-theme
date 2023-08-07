import downloadSVG from '@plone/volto/icons/download.svg';

import VimeoBlockView from './VimeoBlockView';
import VimeoBlockEdit from './VimeoBlockEdit';

const installVimeoBlock = (config) => {
  config.blocks.blocksConfig.vimeoblock = {
    id: 'vimeoblock',
    title: 'Vimeo Block',
    icon: downloadSVG,
    group: 'Homepage',
    view: VimeoBlockView,
    edit: VimeoBlockEdit,
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

export default installVimeoBlock;
