import installSiteDataBlock from './SiteData';
import installQuoteblock from './Quoteblock';
import installImageAndTextBlock from './ImageAndTextBlock';
import installSlidingTextBlock from './SlidingTextBlock';
import installVideoPageBlock from './VideoPageBlock';
import installVimeoBlock from './VimeoBlock';
import installSeethehouseBlock from './SeethehouseBlock';
import installSocialMediaButtons from './SocialMediaButtons';
import { compose } from 'redux';

const installBlocks = (config) => {
  return compose(
    installSiteDataBlock,
    installQuoteblock,
    installImageAndTextBlock,
    installSlidingTextBlock,
    installVideoPageBlock,
    installVimeoBlock,
    installSeethehouseBlock,
    installSocialMediaButtons,
  )(config);
};

export default installBlocks;
