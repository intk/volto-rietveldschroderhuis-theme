/**
 * Search component.
 * @module components/theme/Search/Search
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { UniversalLink } from '@plone/volto/components';
import { asyncConnect } from '@plone/volto/helpers';
import { Portal } from 'react-portal';
import { Pagination } from 'semantic-ui-react';
import qs from 'query-string';
import { defineMessages, injectIntl } from 'react-intl';
import config from '@plone/volto/registry';
import { Helmet } from '@plone/volto/helpers';
import { searchContent } from '@plone/volto/actions';
// eslint-disable-next-line no-unused-vars
import { SearchTags, Toolbar, Icon } from '@plone/volto/components';
import { PreviewImage } from '@plone/volto/components';
import { When } from '@package/customizations/components/theme/View/EventDatesInfo';
import { withRouter } from 'react-router-dom';

import { HiMiniArrowLongLeft } from 'react-icons/hi2';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

const messages = defineMessages({
  Search: {
    id: 'Search',
    defaultMessage: 'Search',
  },
});

const translations = {
  searchresults: {
    en: 'Search results',
    nl: 'Zoekresultaten',
    de: 'Suchergebnisse',
  },
  results: {
    en: 'items matching your search terms.',
    nl: 'resultaten voor de zoekopdracht.',
    de: 'Artikel gefunden.',
  },
  for: {
    en: 'for',
    nl: 'voor',
    de: 'für',
  },
  mean: {
    en: 'You might have been looking for...',
    nl: 'Wellicht was u op zoek naar...',
    de: 'Sie haben eventuell folgendes gesucht...',
  },
};

function truncate(str, num) {
  if (str.length <= num) {
    return str;
  }

  const subString = str.substr(0, num);
  return subString.substr(0, subString.lastIndexOf(' ')) + ' ...';
}

// const test = withQuerystringResults(this.props);
// console.log(test);

/**
 * Search class.
 * @class SearchComponent
 * @extends Component
 */
class NotFoundSearch extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    searchContent: PropTypes.func.isRequired,
    searchableText: PropTypes.string,
    subject: PropTypes.string,
    path: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        '@id': PropTypes.string,
        '@type': PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    items: [],
    searchableText: null,
    subject: null,
    path: null,
  };

  constructor(props) {
    super(props);
    this.state = { currentPage: 1, isClient: false, active: 'relevance' };
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    const searchTerm = this.props.location.pathname.split('/').pop();
    this.doSearch(searchTerm);
    this.setState({ isClient: true });
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (this.props.location.search !== nextProps.location.search) {
      const searchTerm = nextProps.location.pathname.substring(1); // Remove the leading slash
      this.doSearch(searchTerm);
    }
  };

  /**
   * Search based on the given searchableText, subject and path.
   * @method doSearch
   * @param {string} searchableText The searchable text string
   * @param {string} subject The subject (tag)
   * @param {string} path The path to restrict the search to
   * @returns {undefined}
   */

  doSearch = (searchTerm) => {
    const options = { SearchableText: searchTerm };
    options['use_site_search_settings'] = 1;
    options['metadata_fields'] = ['start', 'end', 'whole_day', 'open_end']; // Add this line
    this.props.searchContent('', options);
  };

  handleQueryPaginationChange = (e, { activePage }) => {
    const { settings } = config;
    window.scrollTo(0, 0);
    let options = qs.parse(this.props.history.location.search);
    options['use_site_search_settings'] = 1;

    this.setState({ currentPage: activePage }, () => {
      this.props.searchContent('', {
        ...options,
        b_start: (this.state.currentPage - 1) * settings.defaultPageSize,
      });
    });
  };

  onSortChange = (event, sort_order) => {
    let options = qs.parse(this.props.history.location.search);
    options.sort_on = event.target.name;
    options.sort_order = sort_order || 'ascending';
    if (event.target.name === 'relevance') {
      delete options.sort_on;
      delete options.sort_order;
    }
    let searchParams = qs.stringify(options);
    this.setState({ currentPage: 1, active: event.target.name }, () => {
      // eslint-disable-next-line no-restricted-globals
      this.props.history.replace({
        search: searchParams,
      });
    });
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const { settings } = config;
    const { intl } = this.props;

    return (
      <div>
        <Helmet title={this.props.intl.formatMessage(messages.Search)} />
        <div className="container">
          <article id="content">
            <header>
              {/* <h1 className="documentFirstHeading">
                {translations.searchresults[intl.locale]}{' '}
                {translations.for[intl.locale]} {this.props.searchableText}
              </h1> */}
              <h2 className="NotFoundSearch-Header">
                {translations.mean[intl.locale]}
              </h2>

              {/* <SearchTags /> */}
              {/* <div className="search">
                <SearchBar />
              </div> */}
              {/* {this.props.search?.items_total > 0 ? (
                <>
                  <div className="items_total">
                    <strong>{this.props.search.items_total}</strong>
                    {translations.results[intl.locale]}
                  </div>
                  <Header>
                    <Header.Content className="header-content">
                      <div className="sort-by">
                        <FormattedMessage
                          id="Sort By:"
                          defaultMessage="Sort by:"
                        />
                      </div>
                      <Button
                        onClick={(event) => {
                          this.onSortChange(event);
                        }}
                        name="relevance"
                        size="tiny"
                        className={classNames('button-sort', {
                          'button-active': this.state.active === 'relevance',
                        })}
                      >
                        <FormattedMessage
                          id="Relevance"
                          defaultMessage="Relevance"
                        />
                      </Button>
                      <Button
                        onClick={(event) => {
                          this.onSortChange(event);
                        }}
                        name="sortable_title"
                        size="tiny"
                        className={classNames('button-sort', {
                          'button-active':
                            this.state.active === 'sortable_title',
                        })}
                      >
                        <FormattedMessage
                          id="Alphabetically"
                          defaultMessage="Alphabetically"
                        />
                      </Button>
                      <Button
                        onClick={(event) => {
                          this.onSortChange(event, 'reverse');
                        }}
                        name="effective"
                        size="tiny"
                        className={classNames('button-sort', {
                          'button-active': this.state.active === 'effective',
                        })}
                      >
                        <FormattedMessage
                          id="Date (newest first)"
                          defaultMessage="Date (newest first)"
                        />
                      </Button>
                    </Header.Content>
                  </Header>
                </>
              ) : (
                <div>
                  <FormattedMessage
                    id="No results found"
                    defaultMessage="No results found"
                  />
                </div>
              )} */}
            </header>
            <section id="content-core">
              {this.props.items.map((item) => (
                <article className="tileItem" key={item['@id']}>
                  {item.image_field !== '' ? (
                    <PreviewImage
                      item={item}
                      size="preview"
                      alt={item.image_caption ? item.image_caption : item.title}
                      className="ui image"
                    />
                  ) : (
                    <div className="image-placeholder"></div>
                  )}

                  <div className="search-text-wrapper">
                    <h2 className="tileHeadline">
                      <UniversalLink
                        item={item}
                        className="summary url"
                        title={item['@type']}
                      >
                        {item.title}
                      </UniversalLink>
                    </h2>
                    {item['@type'] === 'Event' ? (
                      <div className="listing-dates">
                        <div className={`listing-dates-wrapper`}>
                          <When
                            start={item.start}
                            end={item.end}
                            whole_day={item.whole_day}
                            open_end={item.open_end}
                          />
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    {item.description && (
                      <div className="tileBody">
                        <span className="description">
                          {truncate(item.description, 155)}
                        </span>
                      </div>
                    )}
                    {/* <div className="tileFooter">
                      <UniversalLink item={item}>
                        <FormattedMessage
                          id="Read More…"
                          defaultMessage="Read More…"
                        />
                      </UniversalLink>
                    </div> */}
                    <div className="visualClear" />
                  </div>
                </article>
              ))}

              {this.props.search?.batching && (
                <div className="pagination-wrapper">
                  <Pagination
                    activePage={this.state.currentPage}
                    totalPages={Math.ceil(
                      this.props.search.items_total / settings.defaultPageSize,
                    )}
                    onPageChange={this.handleQueryPaginationChange}
                    firstItem={null}
                    lastItem={null}
                    prevItem={{
                      content: <HiMiniArrowLongLeft />,
                      icon: true,
                      'aria-disabled': !this.props.search.batching.prev,
                      className: !this.props.search.batching.prev
                        ? 'disabled'
                        : null,
                    }}
                    nextItem={{
                      content: <HiMiniArrowLongRight />,
                      icon: true,
                      'aria-disabled': !this.props.search.batching.next,
                      className: !this.props.search.batching.next
                        ? 'disabled'
                        : null,
                    }}
                  />
                </div>
              )}
            </section>
          </article>
        </div>
        {this.state.isClient && (
          <Portal node={document.getElementById('toolbar')}>
            <Toolbar
              pathname={this.props.pathname}
              hideDefaultViewButtons
              inner={<span />}
            />
          </Portal>
        )}
      </div>
    );
  }
}

export const __test__ = compose(
  injectIntl,
  connect(
    (state, props) => ({
      items: state.search.items,
      searchableText: qs.parse(props.history.location.search).SearchableText,
      pathname: props.history.location.pathname,
    }),
    { searchContent },
  ),
)(NotFoundSearch);

export default compose(
  withRouter,
  injectIntl,
  connect(
    (state, props) => ({
      items: state.search.items,
      pathname: props.location.pathname,
      currentLang: state.intl?.locale,
    }),
    { searchContent },
  ),
  asyncConnect([
    {
      key: 'search',
      promise: ({ location, store: { dispatch } }) =>
        dispatch(
          searchContent('', {
            SearchableText: location.pathname.substring(1),
            use_site_search_settings: 1,
          }),
        ),
    },
  ]),
)(NotFoundSearch);
