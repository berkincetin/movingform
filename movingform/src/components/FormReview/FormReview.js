import React, { Component } from 'react';

const moveRate = 400;
const supplyRate= 200;
const storageRate = 200;
const packingRate=300;
const rearrangingRate = 100;
class FormReview extends Component {
    constructor(props) {
        super(props);
    }
    calculateQuoteTotal(movingServices,supplyServices,storageServices, packingServices, rearrangingServices) {
        let quoteTotal = 0;
        if (movingServices) {
            quoteTotal += moveRate;
        }
        if (supplyServices) {
            quoteTotal += supplyRate;
        }
        if (storageServices) {
            quoteTotal += storageRate;
        }
        if (packingServices) {
            quoteTotal += packingRate;
        }
        if (rearrangingServices) {
            quoteTotal += rearrangingRate;
        }
        return quoteTotal;
    }
    
    render () {
        const {handleChange, firstName, lastName, email, phoneNumber, movingServices, supplyServices,storageServices, packingServices, rearrangingServices, movingDate, movingTime } = this.props;
        const quoteTotal = this.calculateQuoteTotal(movingServices,supplyServices,storageServices, packingServices, rearrangingServices);
        console.log("Moving Date",movingDate);
        return (
            <div>
                <h2>Your moving date is:</h2>
                <p>{movingDate}</p>
                <p>{movingTime}</p>

                <h2>Based on your information {firstName}, your move will cost:</h2>
                {movingServices === false ? '': <p>Moving Services: $400</p> }
                {supplyServices === false ? '': <p>Supply Services: $200</p> }
                {storageServices === false ? '': <p>Storage Services: $200</p> }
                {packingServices === false ? '':<p>Packing Services: $300</p> }
                {rearrangingServices === false ? '': <p>Rearranging Services: $100</p> }
                <h3>Your total is: ${quoteTotal}</h3>



            </div>
        )
    }       
}
export default FormReview;