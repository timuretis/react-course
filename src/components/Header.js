import React from 'react';

class Header extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.add(this.titleElem.value);

    this.titleElem.value = '';
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={ this.handleSubmit }>
          <input className="new-todo"
                 placeholder="What needs to be done?"
                 ref={ elem => this.titleElem = elem }
                 autoFocus/>
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  add: React.PropTypes.func.isRequired
};

export default Header;