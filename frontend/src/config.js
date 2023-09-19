/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

// All your imports required for the config here BEFORE this line
import '@plone/volto/config';
import { getContent } from '@plone/volto/actions';
import installFooter from './footer';
import installBlocks from './components/Blocks';

export default function applyConfig(config) {
  const DEFAULT_LANG = 'nl';

  config.settings = {
    ...config.settings,
    isMultilingual: true,
    supportedLanguages: ['nl', 'en', 'de'],
    defaultLanguage: DEFAULT_LANG,
  };
  config.settings.cookiebotDomainGroupId =
    'c6718f17-016b-4d02-9bc2-9f1467f610fb';

  config.settings.navDepth = 2;
  config.settings.siteDataPageId = 'footer';

  config.blocks.initialBlocks = {
    ...config.blocks.initialBlocks,
    Document: ['title', 'description'],
    Event: ['title', 'description'],
    'News Item': ['title', 'description'],
  };
  config.blocks.initialBlocksFocus = {
    ...config.blocks.initialBlocksFocus,
    Document: 'title',
    Event: 'title',
    'News Item': 'title',
  };

  config.blocks.groupBlocksOrder.push({
    id: 'Storytelling',
    title: 'Storytelling',
  });
  config.blocks.groupBlocksOrder.push({
    id: 'Site',
    title: 'Site',
  });
  config.blocks.groupBlocksOrder.push({
    id: 'Homepage',
    title: 'Homepage',
  });

  config.settings.asyncPropsExtenders = [
    ...config.settings.asyncPropsExtenders,
    {
      path: '/',
      key: 'footer',
      extend: (dispatchActions) => {
        const action = {
          key: 'footer',
          promise: ({ location, store }) => {
            // const currentLang = state.intl.locale;
            const bits = location.pathname.split('/');
            const currentLang =
              bits.length >= 2 ? bits[1] || DEFAULT_LANG : DEFAULT_LANG;

            const state = store.getState();
            if (state.content.subrequests?.[`footer-${currentLang}`]?.data) {
              return;
            }

            const siteDataPageId = config.settings.siteDataPageId;
            const url = `/${currentLang}/${siteDataPageId}`;
            const action = getContent(url, null, `footer-${currentLang}`);
            return store.dispatch(action).catch((e) => {
              // eslint-disable-next-line
              // console.log(
              //   `Footer links folder not found: ${url}. Please create as page
              //   named ${siteDataPageId} in the root of your current language and
              //   fill it with the appropriate action blocks`,
              // );
            });
          },
        };
        return [...dispatchActions, action];
      },
    },
  ];

  return installFooter(installBlocks(config));
}
