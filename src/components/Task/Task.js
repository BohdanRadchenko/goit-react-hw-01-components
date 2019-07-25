/*eslint-disable */
import React from 'react';
import styles from './Task.module.css';

const Task = ({ id, title, text, date, priority, deleteId, getPrior }) => {
  return (
    <div className={styles.container}>
      <select value={priority} onChange={e => getPrior(id, e.target.value)}>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="higth">Hight</option>
      </select>
      <button
        className={styles.button}
        type="button"
        onClick={() => deleteId(id)}
      ></button>
      <p className={styles.id}>id: {id}</p>
      <p className={styles.date}>date: {date}</p>
      <p className={styles.title}>
        Title:
        <span> {title}</span>
      </p>
      <p className={styles.text}>
        Text:
        <span> {text}</span>
      </p>
    </div>
  );
};

export default Task;
