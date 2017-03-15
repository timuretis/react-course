import React from 'react';

const Recipe = ({ title }) => (
  <li onClick={ ()=> console.log('YEy') }>{ title }</li>
);

Recipe.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Recipe;