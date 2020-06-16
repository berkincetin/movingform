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
  phoneNumber:'',

  movingservices: false,
  supplyservices: false,
  storageservices: false,
  packingservices: false,
  rearrangingservices: false,

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
  validateFormInput(currentStep) {
    switch(currentStep) {
      case 2: 
        if (this.state.firstName ==="" || this.state.lastName ==="" || this.state.phoneNumber ==="" || this.state.email ==="") {
          console.log(this.state.firstName==="")
          return false;
        } else {
          return true;
        }
    }
  }

  _next = () => {
    let currentStep = this.state.currentStep;
    const { 
              firstName, 
              lastName, 
              email, 
              phoneNumber, 
          } = this.state
    console.log("State", this.state);
    let formValid = this.validateFormInput(currentStep)
    formValid =true;
    
    if (formValid) {
      currentStep = currentStep >= 5? 6: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    } else {
      alert(`Please enter fill out all the form fields \n
            First Name: ${firstName} \n
            Last Name: ${lastName} \n
            Email: ${email} \n
            Phone: ${phoneNumber} \n
      `)
    }

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
