import movefirst from '@plone/volto/icons/move-first.svg';

import SlidingTextView from './SlidingTextView';
import SlidingTextEdit from './SlidingTextEdit';

const SlidingTextBlock = (config) => {
  config.blocks.blocksConfig.SlidingTextBlock = {
    id: 'SlidingTextBlock',
    title: 'Fullscreen image slide',
    icon: movefirst,
    group: 'Storytelling',
    view: SlidingTextView,
    edit: SlidingTextEdit,
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

export default SlidingTextBlock;
