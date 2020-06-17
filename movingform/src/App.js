import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormHome from './components/FormHome/FormHome';
import FormAbout from './components/FormAbout/FormAbout';
import FormServices from './components/FormServices/FormServices';
import FormCurrentAddress from './components/FormCurrentAddress/FormCurrentAddress';
import FormDate from './components/FormDate/FormDate';
import FormSuccess from './components/FormSuccess/FormSucces';

const initialState = {
  currentStep: 1,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber:'',

  movingServices: false,
  supplyServices: false,
  storageServices: false,
  packingServices: false,
  rearrangingServices: false,

  movingFromAddress: '',
  movingFromNumber: '',
  movingFromStreet: '',
  movingFromCity: '',
  movingFromProvince: '',
  movingFromPostal: '',

  movingDate: '',
  movingTime: ''
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

  handleCheck = event => {
    const {name,checked} = event.target;
    console.log("Event Target", event.target)
    console.log("Name", name); 
    console.log("Checked", checked); 
    this.setState({
      [name]: checked
    })   


    console.log(this.state); 
  }
  handleAddressChange(target, event) {
    console.log("Address change",target, event);
    this.setState({
      target: event
    });
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
          return <FormServices 
          handleCheck={this.handleCheck}
          movingServices={this.state.movingServices}
          supplyServices = {this.state.supplyServices}
          storageServices={this.state.storageServices}
          packingServices =   {this.state.packingServices}
          rearrangingServices = {this.state.rearrangingServices}
          
          />
      case 4:
          return <h1>Current Address </h1>

      case 5:
        return <h1>Moving Address</h1>
      case 6:
        return <FormDate 
        handleChange = {this.handleChange}
        movingDate = {this.state.movingDate}
        movingTime = {this.state.movingTime}
        
        />
      case 7:
        return <FormSuccess 
          _next =  {this._next}/>
    }
  }
  validateFormInput(currentStep) {
    switch(currentStep) {
      case 2: 
        if (this.state.firstName ==="" || this.state.lastName ==="" || this.state.phoneNumber ==="" || this.state.email ==="") {
          console.log(this.state.firstName==="")
            //alert(`Please enter fill out all the form information`)

          return false;
        } else {
          return true;
        }
      case 3:
        if (this.state.movingServices === false && this.state.supplyServices===false && this.state.storageServices === false && this.state.packingServices === false  && this.state.rearrangingServices ===false) {
          //alert(`Please pick a service`)

          return false;
        } else {
          return true;
        }
      case 4:
        return true;
      case 5:
        return true;
      case 6:
        return true;
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
      currentStep = currentStep >= 7 ? 1: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
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
    if(currentStep > 2 && currentStep < 7){
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
    } else if (currentStep == 6) {
      return (      
      
      <button 
      className="btn  btn-success float-right"
      type="button" onClick={this._next}>
      Let's get you moving!
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
        <div className="form-wrapper mt-5">
          { this.renderSwitch(currentStep)  }

          {this.previousButton()}
          {this.nextButton()}

        </div>
      </div>

    )
  }
}



export default App;
