import installSiteDataBlock from './SiteData';
import installQuoteblock from './Quoteblock';
import { compose } from 'redux';

const installBlocks = (config) => {
  return compose(installSiteDataBlock, installQuoteblock)(config);
};

export default installBlocks;
