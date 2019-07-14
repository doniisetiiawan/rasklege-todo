import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { addTodo } from '../actions/todos';

class AddTodo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  addTodo(e) {
    e.preventDefault();
    const { text } = this.state;
    const value = text.trim();

    if (value) {
      const { dispatch } = this.props;
      dispatch(addTodo(value));
      this.setState({
        text: '',
      });
    }
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <form onSubmit={e => this.addTodo(e)}>
          <input
            className="form-control"
            type="text"
            placeholder="Enter ToDo"
            name="text"
            onChange={this.handleChange}
            value={text}
          />
        </form>
        <br />
      </div>
    );
  }
}

export default AddTodo;
