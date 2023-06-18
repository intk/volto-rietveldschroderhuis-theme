/**
 * Search widget component.
 * @module components/theme/SearchWidget/SearchWidget
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { Icon } from '@plone/volto/components';
import zoomSVG from '@plone/volto/icons/zoom.svg';

const messages = defineMessages({
  search: {
    id: 'Search',
    defaultMessage: 'Search',
  },
  searchSite: {
    id: 'Search Site',
    defaultMessage: 'Search Site',
  },
});

/**
 * SearchWidget component class.
 * @class SearchWidget
 * @extends Component
 */
const SearchWidget = ({ onClose }) => {
  const [text, setText] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const history = useHistory();
  const intl = useIntl();
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setText('');
      setVisible(false);
    },
  });
  const inputRef = React.useRef(null);

  const onChangeText = (e, { value }) => {
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setVisible(false);
    history.push(`/search?SearchableText=${encodeURIComponent(text)}`);
    // reset input value
    setText('');
    onClose();
  };

  return (
    <div ref={ref}>
      <Form action="/search" onSubmit={onSubmit}>
        <Form.Field className={`searchbox${visible ? ' visible' : ''}`}>
          <Input
            ref={inputRef}
            aria-label={intl.formatMessage(messages.searchSite)}
            onChange={onChangeText}
            name="SearchableText"
            value={text}
            transparent
            autoComplete="off"
            placeholder={intl.formatMessage(messages.search)}
            title={intl.formatMessage(messages.search)}
          />
          <button
            type="submit"
            aria-label={intl.formatMessage(messages.search)}
            onClick={(e) => {
              if (!text?.length) {
                e.preventDefault();

                if (inputRef?.current) {
                  inputRef.current.focus();
                }

                setVisible(true);
              } else {
                onSubmit();
              }
            }}
          >
            <Icon name={zoomSVG} size="40px" fill="#000" />
          </button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default SearchWidget;
