import React from 'react';
import { connect } from 'react-redux';

const User = ({ name }) => (
  <span>{ name }</span>
);

User.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default connect(({ user: { name }}) => ({ name }))(User);