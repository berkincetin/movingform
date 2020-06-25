import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormHome from './components/FormHome/FormHome';
import FormAbout from './components/FormAbout/FormAbout';
import FormServices from './components/FormServices/FormServices';
import FormCurrentAddress from './components/FormCurrentAddress/FormCurrentAddress';
import FormDate from './components/FormDate/FormDate';
import FormSuccess from './components/FormSuccess/FormSuccess';
import FormReview from './components/FormReview/FormReview';
import FormMovingNeeds from './components/FormMovingNeeds/FormMovingNeeds';

import ProgressBar from 'react-bootstrap/ProgressBar'
import emailjs from 'emailjs-com';
//import { ToastContainer, toast } from 'react-toastify';

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
  movingTime: '',

  squareFootage: 0,
  bedroomAmount: 0,
  kitchenAmount:0,
  familyRoomAmount:0,
  diningRoomAmount:0,
  basementAmount:0,
  atticAmount:0,
  officeAmount:0,
  otherRoomAmount:0,

  formProgressBar: 0

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
    // console.log("Event",event)
    console.log("Event target", event.target)
    // console.log("Event target name", event.target.name)
    // console.log("Event target value", event.target.value)

    const {name, value} = event.target
    this.setState({
      [name]: value
    })   
    console.log(this.state); 
  }

  handleCheck = event => {
    const {name,checked} = event.target;
    // console.log("Event Target", event.target)
    // console.log("Name", name); 
    // console.log("Checked", checked); 
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
  goHome() {
    const url = "https://bcetin14.wixsite.com/allrite-movers";
    window.open(url,"_self");
  }
  sendMessage(event) {
    event.preventDefault();
    console.log(event);

        var template_params = {
           "reply_to": "reply_to_value",
           "to_name": "All-Rite Movers",
           "from_name": this.state.firstName + ' ' +this.state.lastName,
           "firstName": this.state.firstName ,
           "lastName": this.state.lastName,
           "email": this.state.email,
           "phone": this.state.phoneNumber,
           "movingDate": this.state.movingDate,
           "movingTime": this.state.movingTime,
           "movingServices": this.state.movingServices,
           "supplyServices": this.state.supplyServices,
           "storageServices": this.state.storageServices,
           "packingServices": this.state.packingServices,
           "rearrangingServices": this.state.rearrangingServices
        }
        var service_id = "gmail";
        var template_id = "template_9o1HDHgp";
        var user_id = "user_l50RCXdnmPrK1z6Us7fP5";
        emailjs.send(service_id, template_id, template_params,user_id)

        this.setState({
          initialState
        })   
    this._next();

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
        return <FormDate 
        handleChange = {this.handleChange}
        movingDate = {this.state.movingDate}
        movingTime = {this.state.movingTime}
        
        />
      case 5:
        return <FormCurrentAddress
                addressType = "What is your current address?"
                moveType ="currentAddress" />

      case 6:
        return <FormCurrentAddress
        addressType = "What is your destination address?"
        moveType="destinationAddress" />
      case 7:
        return <FormMovingNeeds
        handleChange = {this.handleChange}
        squareFootage = {this.state.squareFootage}
        bedroomAmount = {this.state.bedroomAmount}
        kitchenAmount = {this.state.kitchenAmount}
        familyRoomAmount = {this.state.familyRoomAmount}
        diningRoomAmount = {this.state.diningRoomAmount}
        basementAmount = {this.state.basementAmount}
        atticAmount = {this.state.atticAmount}
        officeAmount = {this.state.officeAmount}
        otherRoomAmount = {this.state.otherRoomAmount}
              />
      case 8:
        return <FormReview 
        handleChange = {this.handleChange}

        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        phoneNumber={this.state.phoneNumber}
        movingServices={this.state.movingServices}
        supplyServices = {this.state.supplyServices}
        storageServices={this.state.storageServices}
        packingServices =   {this.state.packingServices}
        rearrangingServices = {this.state.rearrangingServices}
        
        movingDate = {this.state.movingDate}
        movingTime = {this.state.movingTime}
        />
      case 9:
        return <FormSuccess 
          _next =  {this._next}/>
      default:
        return <FormHome onRouteChange={this.onRouteChange}/>

    }
  }
  validateFormInput(currentStep) {
    switch(currentStep) {
      case 2: 
        if (this.state.firstName ==="" || this.state.lastName ==="" || this.state.phoneNumber ==="" || this.state.email ==="") {
          console.log(this.state.firstName==="")
         // alert(`Please enter fill out all the form information`)

          return false;
        } else {
          return true;
        }
      case 3:
        if (this.state.movingServices === false && this.state.supplyServices===false && this.state.storageServices === false && this.state.packingServices === false  && this.state.rearrangingServices ===false) {
         // alert(`Please pick a service`)

          return false;
        } else {
          return true;
        }
      case 4:
        if (this.state.movingDate ==="" || this.state.movingTime==='') {
         // alert(`Please pick a moving date and time`);
          return false;
        } else {
          return true;
        }
      case 5:
        return true;
      case 6:
        return true;
      case 7:
        return true;
      case 8:
        return true;
      case 9:
        return true
      default:
        return true;
    }
  }

  _next = () => {
    let currentStep = this.state.currentStep;
    // const { 
    //           firstName, 
    //           lastName, 
    //           email, 
    //           phoneNumber, 
    //       } = this.state
    console.log("State", this.state);
    let formValid = this.validateFormInput(currentStep)
    formValid =true;
    if (currentStep === 9) {
      this.goHome()
    } else {
      if (formValid) {
        currentStep =  currentStep + 1
        let progessValue =(currentStep-1)*100/7;
        this.setState({
          currentStep: currentStep,
          formProgressBar: progessValue
        })
        
      } 
    }


  }
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep,
      formProgressBar: (currentStep-1)*100/7

    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep > 1 && currentStep < 9){
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
    if(currentStep >1 && currentStep <8){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    } else if (currentStep === 8) {
      return (      
      
      <button 
      className="btn  btn-success float-right"
      type="button" onClick={this.sendMessage.bind(this)}>
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
        {
          currentStep === 1 || currentStep === 9 ? '' : <div className="progressBar"><ProgressBar now={this.state.formProgressBar} /></div>
        } 

      </div>


    )
  }
}



export default App;
