import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { getID } from './lib/ids';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as actions from './consts/action-types';
import RecipesView from './components/RecipesView';
import Header from './components/Header';
import Footer from './components/Footer';
import AddRecipe from './components/AddRecipe';

import { Router, Route, browserHistory, Link } from 'react-router';

window.browserHistory = browserHistory;

const reducer = (state, action) => {
  console.log("Got Action " + action.type, action);

  switch (action.type) {
    case actions.ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case actions.TOGGLE_FAVORITE:
      const updateRecipes = state.recipes.map(recipe =>
        recipe.id !== action.id
          ? recipe
          : Object.assign({}, recipe, {
            favorite: !recipe.favorite
          })
      );

      return Object.assign({}, state, {
        recipes: updateRecipes
      });

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: false },
    { id: getID(), title: 'Omelette', favorite: true },
    { id: getID(), title: 'Dog Food', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store

const App = ({ children }) => (
  <div>
    <Header />
    <RecipesView rightPane={ children } />
    <Footer />
  </div>
);

const About = () => (
  <h1>About this app</h1>
);

const Legal = () => (
  <h1>Legal stuff</h1>
);

const NotFound = () => (
  <div>
    <h1>Are you lost?</h1>
    <Link to="/">Go Home</Link>
  </div>
);

const User = (props) => {
  return (
    <h2>I am user: { props.params.id }</h2>
  )
};

const Page = (props) => (
  <div style={ { "border": "1px solid red"}}>
    Page:
    { props.children }
  </div>
);

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>

      <Route path="/" component={ App } >
        <Route path="add" component={ AddRecipe } />
      </Route>

      <Route path="user/:id/:name" component={ User } />

      <Route path="pages" component={ Page }>
        <Route path="about" component={ About } />
        <Route path="legal" component={ Legal } />
      </Route>

      <Route path="*" component={  NotFound } />

    </Router>
  </Provider>,
  document.getElementById('root')
);
