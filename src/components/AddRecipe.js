import React from 'react';

class AddRecipe extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.cb(this.titleElem.value);

    this.titleElem.value = '';
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input ref={ (elem) => this.titleElem = elem } type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  cb: React.PropTypes.func.isRequired
};

export default AddRecipe;