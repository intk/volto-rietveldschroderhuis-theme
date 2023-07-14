import installSiteDataBlock from './SiteData';
import installQuoteblock from './Quoteblock';
import installImageAndTextBlock from './ImageAndTextBlock';
import installSlidingTextBlock from './SlidingTextBlock';
import { compose } from 'redux';

const installBlocks = (config) => {
  return compose(
    installSiteDataBlock,
    installQuoteblock,
    installImageAndTextBlock,
    installSlidingTextBlock,
  )(config);
};

export default installBlocks;
