import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import RecipesView from './components/RecipesView';
import Header from './components/Header';
import Footer from './components/Footer';
import store from 'store';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

window.browserHistory = browserHistory;

const App = (props) => (
  <div>
    <Header />
    { props.children }
    <Footer />
  </div>
);

const About = (props) => (
  <h2>About this app</h2>
);

const StaticPages = (props) => (
  <h2>Static page: { props.params.name } </h2>
);

const NotFound = () => (
  <div>
    <h1>Are you lost?</h1>
    <Link to="/">Home</Link>
  </div>
);

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>

      <Route path="/" component={ App }>
        <IndexRoute component={ RecipesView }/>
        <Route path="about" component={ About }/>
        <Route path="static/:name" component={ StaticPages }/>
      </Route>

      <Route path="*" component={ NotFound } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
