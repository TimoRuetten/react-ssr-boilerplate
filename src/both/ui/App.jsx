/**
  Our <App /> which gets rendered into the root node
*/
import React from 'react';
import styles from './app.css';
// const styles = { title: 'a' };


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={styles.title}>
          Isomorphic React App
        </h1>
      </div>
    );
  }
}
