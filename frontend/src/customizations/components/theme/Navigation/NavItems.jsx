import React from 'react';
import NavItem from './NavItem';

const NavItems = ({ items, lang, onClose }) => {
  return (
    <ul className="nav-items">
      {items.map((item) =>
        item.title === 'Home' ? (
          ''
        ) : (
          <NavItem item={item} lang={lang} onClose={onClose} key={item.url} />
        ),
      )}
    </ul>
  );
};

export default NavItems;
