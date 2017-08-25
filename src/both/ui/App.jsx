/**
  Our <App /> which gets rendered into the root node
*/
import React from 'react';
import styles from './app.scss';


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
        <p className={styles.text}>
          Brown text.
        </p>
      </div>
    );
  }
}
