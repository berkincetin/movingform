import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';

const initialState = {
  route: 1
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onRouteChange = (route) => {
  this.setState({route:route})
  }
  renderSwitch(movingStep) {
    switch(movingStep) {
      case 1:
        return <h2>Form Step 1</h2>
      case 2:
          return <h1>Form Step 2</h1>
      case 3:
          return <h1>Form Step 3</h1>
      case 4:
          return <h1>Form Step 4</h1>
    }
  }
  render () {
    const { route } = this.state;
    return (
      <div className ="App">
        <Header />
        {      this.renderSwitch(route)  }
        
        
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
