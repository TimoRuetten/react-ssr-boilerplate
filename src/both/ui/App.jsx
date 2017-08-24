/**
  Our <App /> which gets rendered into the root node
*/
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1>Welcome to our React-App Component!</h1>
    );
  }
}

export default App;
