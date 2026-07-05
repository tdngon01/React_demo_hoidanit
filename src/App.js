import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {

  state = {
    name: "Ngon",
    age: 20,
    address: "An Giang"
  }

  render() {
    return (
      <div>
        Hello wwoww
        My name is {this.state.name}<MyComponent></MyComponent>
      </div>
    );
  }


  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Hello Vite + React! Ngon
  //     </p>
  //     <div>Count = {count}</div>
  //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
  //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
  //   </header>
  // </div>
}

export default App;
