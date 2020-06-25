import React, { Component } from 'react';

const moveRate = 200;
const supplyRate= 200;
const storageRate = 200;
const packingRate=200;
const rearrangingRate = 100;
const roomRate = 100;
class FormReview extends Component {

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
    calculateRooms(bedroomAmount, kitchenAmount, familyRoomAmount,diningRoomAmount, basementAmount,atticAmount,officeAmount,otherRoomAmount) {
        let roomTotal = parseInt(bedroomAmount)+parseInt(kitchenAmount)+parseInt(familyRoomAmount)+parseInt(diningRoomAmount)+parseInt(basementAmount)+parseInt(atticAmount)+ parseInt(officeAmount)+parseInt(otherRoomAmount);
        return roomTotal;
    }
    render () {
        const { firstName, movingServices, supplyServices,storageServices, packingServices, rearrangingServices, movingDate, movingTime } = this.props;
        const {squareFootage,
        bedroomAmount,
        kitchenAmount,
        familyRoomAmount,
        diningRoomAmount,
        basementAmount,
        atticAmount,
        officeAmount,
        otherRoomAmount } = this.props;
        let quoteTotal = this.calculateQuoteTotal(movingServices,supplyServices,storageServices, packingServices, rearrangingServices);
        let numRooms = this.calculateRooms(bedroomAmount, kitchenAmount, familyRoomAmount,diningRoomAmount, basementAmount,atticAmount,officeAmount,otherRoomAmount)
        quoteTotal = quoteTotal + numRooms*roomRate;
        console.log("Moving Date",movingDate);
        return (
            <div>
                <h2>Your moving date is:</h2>
                <p>{movingDate}</p>
                <p>{movingTime}</p>

                <h2>Based on your information {firstName}, your move will cost:</h2>
                {movingServices === false ? '': <p>Moving Services: ${moveRate}</p> }
                {supplyServices === false ? '': <p>Supply Services: ${supplyRate}</p> }
                {storageServices === false ? '': <p>Storage Services: ${storageRate}</p> }
                {packingServices === false ? '':<p>Packing Services: ${packingRate}</p> }
                {rearrangingServices === false ? '': <p>Rearranging Services: ${rearrangingRate}</p> }
                {numRooms === 1 ? <p>{numRooms} room at ${roomRate} per room: ${numRooms*roomRate}</p> : <p>{numRooms} rooms at ${roomRate} per room: ${numRooms*roomRate}</p> }
                <h3>Your total is: ${quoteTotal}</h3>



            </div>
        )
    }       
}
export default FormReview;