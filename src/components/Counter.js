import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter }) => (
  <span>{ counter }</span>
);

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  counter: state.recipes.length
});

export default connect(mapStateToProps)(Counter);