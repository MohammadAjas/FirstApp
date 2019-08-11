import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Ajas',
      age: 26
    }
    // this.fullName = this.fullName.bind(this)
  }
  fullName(payload) {
    this.setState({
      name: payload
    })
  }
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name'>{this.state.name}</h1>
        <span>Name:</span>
        <button onClick={() => this.fullName('New Name')}>Show full name</button>
      </header>
    </div>
  );
}
}

export default App;
