import downloadSVG from '@plone/volto/icons/download.svg';

import SeethehouseBlockView from './SeethehouseBlockView';
import SeethehouseBlockEdit from './SeethehouseBlockEdit';

const installSeethehouseBlock = (config) => {
  config.blocks.blocksConfig.seethehouse = {
    id: 'seethehouse',
    title: 'See the House Block',
    icon: downloadSVG,
    group: 'Homepage',
    view: SeethehouseBlockView,
    edit: SeethehouseBlockEdit,
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

export default installSeethehouseBlock;
