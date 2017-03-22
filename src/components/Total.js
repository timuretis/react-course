import React from 'react';
import { connect } from 'react-redux';

const Total = ({ count }) => (
  <span>{ count }</span>
);

Total.propTypes = {
  count: React.PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  count: state.recipes.filter(r => r.favorite).length
});

export default connect(mapStateToProps)(Total);