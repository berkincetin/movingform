import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormHome from './components/FormHome/FormHome';
import FormAbout from './components/FormAbout/FormAbout';


const initialState = {
  currentStep: 1,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber:''
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onRouteChange = (currentStep) => {
  this.setState({currentStep:currentStep})
  }
  handleChange = event => {
    console.log("Event",event)
    console.log("Event target", event.target)
    console.log("Event target name", event.target.name)
    console.log("Event target value", event.target.value)

    const {name, value} = event.target
    this.setState({
      [name]: value
    })   
    console.log(this.state); 
  }

  renderSwitch(movingFormStep) {
    switch(movingFormStep) {
      case 1:
        return <FormHome onRouteChange={this.onRouteChange}/>

      case 2:
          return <FormAbout             
            handleChange={this.handleChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
          />
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
        <div class="form-wrapper mt-5">
          { this.renderSwitch(currentStep)  }

          {this.previousButton()}
          {this.nextButton()}

        </div>
      </div>

    )
  }
}



export default App;
