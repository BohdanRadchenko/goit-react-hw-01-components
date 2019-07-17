/*eslint-disable*/

import React, { Component } from 'react';
import styled from './Form.module.css';

class Form extends Component {
  state = {
    title: '',
    text: '',
    priority: 'normal',
  };

  hendleSubmt = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.getTask({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      title: '',
      text: '',
      priority: 'normal',
    });
  };

  render() {
    const { title, text, priority } = this.state;
    return (
      <form className={styled.form} onSubmit={this.handleFormSubmit}>
        <label>
          <input
            className={styled.input}
            type="text"
            value={title}
            name="title"
            placeholder="title"
            onChange={this.hendleSubmt}
          />
        </label>
        <label>
          <input
            className={styled.input}
            type="text"
            value={text}
            name="text"
            placeholder="text"
            onChange={this.hendleSubmt}
          />
        </label>
        <select
          name="priority"
          className={styled.select}
          value={priority}
          onChange={this.hendleSubmt}
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="higth">Hight</option>
        </select>
        <button className={styled.button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
