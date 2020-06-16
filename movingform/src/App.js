import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormHome from './components/FormHome/FormHome';

const initialState = {
  currentStep: 1
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onRouteChange = (currentStep) => {
  this.setState({currentStep:currentStep})
  }
  renderSwitch(movingFormStep) {
    switch(movingFormStep) {
      case 1:
        return <FormHome onRouteChange={this.onRouteChange}/>

      case 2:
          return <h1>Form Step 1</h1>
      case 3:
          return <h1>Form Step 2</h1>
      case 4:
          return <h1>Form Step 3</h1>
      case 5:
        return <h1>Form Step 4</h1>
      case 6:
        return <h1>Form Success</h1>
    }
  }

  _next = () => {
    let currentStep = this.state.currentStep
    console.log(this.state);
    currentStep = currentStep >= 5? 6: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep > 2 && currentStep < 6){
      return (
        <button 
          className="btn btn-secondary float-left" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep >1 && currentStep <6){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }

  render () {
    const { currentStep } = this.state;
    return (
      <div className ="App">
        <Header />
        {      this.renderSwitch(currentStep)  }

        {this.previousButton()}
        {this.nextButton()}

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
