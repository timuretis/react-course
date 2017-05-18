import React from 'react';

const Header = ({ msg }) => (
  <h1>{ msg }</h1>
);

Header.propTypes = {
  msg: React.PropTypes.string.isRequired
};

export default Header;