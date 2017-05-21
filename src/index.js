import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import InnerHeader from './components/InnerHeader';
import InnerFooter from './components/InnerFooter';
import Main from './components/Main';

const App = () => (
  <div>
    <section className="todoapp">
      <InnerHeader />
      <Main />
      <InnerFooter />
    </section>

    <Footer />
  </div>
);

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);

