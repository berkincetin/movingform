import React, { Component } from 'react';

class FormReview extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {handleChange, firstName, lastName, email, phoneNumber, movingServices, supplyServices,storageServices, packingServices, rearrangingServices } = this.props;
        return (
            <div>
                <h2>Please review the information below</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email Name: {email}</p>
                <p>Phone Number: {phoneNumber}</p>
                {movingServices === false ? <p>Moving Services: none</p> : <p>Moving Services: Required</p> }
                {supplyServices === false ? <p>Supply Services: none</p> : <p>Supply Services: Required</p> }
                {storageServices === false ? <p>Storage Services: none</p> : <p>Storage Services: Required</p> }
                {packingServices === false ? <p>Packing Services: none</p> : <p>Packing Services: Required</p> }
                {rearrangingServices === false ? <p>Rearranging Services: none</p> : <p>Rearranging Services: Required</p> }

            </div>
        )
    }       
}
export default FormReview;