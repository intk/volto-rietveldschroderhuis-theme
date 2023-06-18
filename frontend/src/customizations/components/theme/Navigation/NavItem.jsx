import React from 'react';
import { NavLink } from 'react-router-dom';
import { isInternalURL } from '@plone/volto/helpers';
import config from '@plone/volto/registry';
import cx from 'classnames';

const NavItem = ({ item, lang, onClose, level = 0 }) => {
  const { settings } = config;
  // The item.url in the root is ''
  // TODO: make more consistent it everywhere (eg. reducers to return '/' instead of '')
  if (isInternalURL(item.url) || item.url === '') {
    return (
      <li className={cx('item', `level-${level}`, item.review_state)}>
        <NavLink
          to={item.url === '' ? '/' : item.url}
          key={item.url}
          activeClassName="active"
          exact={
            settings.isMultilingual ? item.url === `/${lang}` : item.url === ''
          }
          onClick={onClose}
        >
          <span>{item.title}</span>
        </NavLink>
        {!!item.items?.length && (
          <ul className="nav-items nav-items-nested">
            {item.items.map((child) => (
              <NavItem
                item={child}
                lang={lang}
                level={level + 1}
                key={child.url}
                onClose={onClose}
              />
            ))}
          </ul>
        )}
      </li>
    );
  } else {
    return (
      <li className={cx('item', `level-${level}`)}>
        <a
          href={item.url}
          key={item.url}
          className="item-link"
          rel="noopener noreferrer"
          level={level}
        >
          <span>{item.title}</span>
        </a>
        {!!item.items?.length && (
          <ul className="nav-items nav-items-nested">
            {item.items.map((child) => (
              <NavItem
                item={child}
                lang={lang}
                level={level + 1}
                key={child.url}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }
};

export default NavItem;
