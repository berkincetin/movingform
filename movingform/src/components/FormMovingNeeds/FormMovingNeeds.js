import React, {Component } from 'react';

class FormMovingNeeds extends Component {

    render() {
        const {
            handleChange,
            squareFootage,
            bedroomAmount,
            kitchenAmount,
            familyRoomAmount,
            diningRoomAmount,
            basementAmount,
            atticAmount,
            officeAmount,
            otherRoomAmount 
        } = this.props
        console.log('SquareFootage',squareFootage);
        return (
            <div className="form-section">
                <h2 className ="mb-4">Moving Needs</h2>
              <h3 className ="mb-4">What is the estimated square footage of your? Your square footage will help us give you a guesstimate on your moving quote</h3>
              <h4 className ="mb-4">If you don't know your square footage take your best guess! (A 3 bedroom home is on average 1500 square feet)</h4>
              
              <div className="form-group form-row row">
                <div className="col-10 mx-auto">
                <label className="movingNeedsLabel">
                        Square Ft.                    
                    </label>
                    <input
                        name="squareFootage"
                        type="number"
                        min = "0"
                        placeholder ="0"
                        value={squareFootage}
                        onChange={handleChange} 
                    />

                </div>
             </div>

              <h3 className ="mb-4">How many rooms do you need to move?</h3>

              <div className="form-group form-row row mx-auto">
                <div className="col-5 ml-auto">
                <label className="movingNeedsLabel">
                    Bedroom
                    </label>
                    <input
                        className="movingNeedsInput"

                        name="bedroomAmount"
                        type="number"
                        min = "0"
                        placeholder ="0"
                        value={bedroomAmount}
                        onChange={handleChange} 
                    />

                </div>
                <div className="col-5 mr-auto">
                    <label className="movingNeedsLabel">
                    Kitchen
                    </label>
                    <input
                        className="movingNeedsInput"
                        name="kitchenAmount"
                        type="number"
                        min = "0"
                        placeholder ="0"
                        value={kitchenAmount}
                        onChange={handleChange} 
                    />

                </div>
             </div>

              <div className="form-group form-row row mx-auto">
                <div className="col-5 ml-auto">
                <label className="movingNeedsLabel">
                    Family Room
                    </label>
                    <input
                        className="movingNeedsInput"

                        name="familyRoomAmount"
                        type="number"
                        min = "0"
                        placeholder ="0"
                        value={familyRoomAmount}
                        onChange={handleChange} 
                    />

                </div>
                <div className="col-5 mr-auto">
                    <label className="movingNeedsLabel">
                    Dining Room
                    </label>
                    <input
                        className="movingNeedsInput"
                        name="diningRoomAmount"
                        type="number"
                        min = "0"
                        placeholder ="0"
                        value={diningRoomAmount}
                        onChange={handleChange} 
                    />

                </div>
             </div>
             <div className="form-group form-row row mx-auto">
                <div className="col-5 ml-auto">
                    <label className="movingNeedsLabel">
                        Basement                    
                    </label>
                    <input
                        className="movingNeedsInput"

                        name="basementAmount"
                        type="number"
                        min = "0"
                        placeholder ="0"
                        value={basementAmount}
                        onChange={handleChange} 
                    />

                </div>
                <div className="col-5 mr-auto">
                    <label className="movingNeedsLabel">
                    Attic
                    </label>
                    <input
                        className="movingNeedsInput"
                        name="atticAmount"
                        type="number"
                        min = "0"
                        placeholder ="0"
                        value={atticAmount}
                        onChange={handleChange} 
                    />

                </div>
             </div>
             <div className="form-group form-row row mx-auto">
                <div className="col-5 ml-auto">
                <label className="movingNeedsLabel">
                    Office
                    </label>
                    <input
                        className="movingNeedsInput"

                        name="officeAmount"
                        type="number"
                        min = "0"
                        value={officeAmount}
                        onChange={handleChange} 
                    />

                </div>
                <div className="col-5 mr-auto">
                    <label className="movingNeedsLabel">
                    Other Room
                    </label>
                    <input
                        className="movingNeedsInput"
                        name="otherRoomAmount"
                        type="number"
                        min = "0"
                        value={otherRoomAmount}
                        onChange={handleChange} 
                    />

                </div>
             </div>
            </div> // End Form Section
    
        )
    }

}

export default FormMovingNeeds;