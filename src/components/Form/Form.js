/*eslint-disable*/

import React, { Component } from 'react';
import styled from './Form.module.css';

class Form extends Component {
  state = {
    title: '',
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
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form className={styled.form} onSubmit={this.handleFormSubmit}>
        <input
          className={styled.input}
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          onChange={this.hendleSubmt}
        />
        <button className={styled.button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
