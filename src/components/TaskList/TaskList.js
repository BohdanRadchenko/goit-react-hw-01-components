/*eslint-disable*/
import React from 'react';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteId, getPrior }) => {
  return (
    <ul className={styles.list}>
      {tasks.map(el => (
        <li className={styles.item} key={el.id}>
          <Task {...el} deleteId={deleteId} getPrior={getPrior} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
