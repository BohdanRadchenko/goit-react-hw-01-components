/*eslint-disable*/
import React, { Component } from 'react';
import Form from './Form/Form';
import TaskList from './TaskList/TaskList';
import Task from './Task/Task';

class App extends Component {
  state = {
    items: [],
  };

  getTask = task => {
    this.setState(state => ({
      items: [...state.items, task],
    }));
  };

  render() {
    return (
      <>
        <Form getTask={this.getTask}>
          <TaskList>
            <Task />
          </TaskList>
        </Form>
      </>
    );
  }
}

export default App;
