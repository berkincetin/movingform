import React, { Component } from 'react';
import person from './person.svg'

class FormAbout extends Component {

    render () {
        const {handleChange, firstName, lastName, email, phoneNumber } = this.props;
        return (
            <div className="form-section">
            <img className ="customer-icon" src={person} alt ='Customer Profile Icon'></img>

            <h2 className ="mb-4">Tell us about yourself</h2>
            <div className="form-group form-row row mb-2">
              <div className="col-sm-6 mx-auto">
                <input
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={handleChange}
                  required
                  />
              </div>
            </div>
            <div className="form-group form-row row mb-2">
            <div className="col-sm-6 mx-auto">
                <input
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={handleChange}
                  />
              </div>
            </div>
            
            <div className="form-group form-row row mb-2">
            <div className="col-sm-6 mx-auto">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleChange}
                  />
              </div>
            </div>
            <div className="form-group form-row row mb-2">
            <div className="col-sm-6 mx-auto">
                <input
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handleChange}
                  />
              </div>
            </div>
    
          </div>
        )
    }
}

export default FormAbout;