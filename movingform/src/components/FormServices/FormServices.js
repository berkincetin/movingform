import React, {Component } from 'react';

class FormServices extends Component {
    constructor(props){
        super(props);
    }
    render () {
        const { handleCheck, movingServices, supplyServices, storageServices, packingServices, rearrangingServices } = this.props;
        return (
            <div className="form-section">
                <h2 className ="mb-4">How can All-Rite help you?</h2>
                <div className="col-12">
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="movingServices" 
            id="movingServices" 
            defaultChecked = {movingServices}
            onClick={handleCheck.bind(this)} 
          />
         <label>I need to move!</label>
        </div>

        <div>
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="supplyServices" 
            id="supplyServices" 
            defaultChecked = {supplyServices}
            onClick={handleCheck.bind(this)} 
          />
         <label>I need moving supplies</label>
        </div>
        <div>
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="storageServices" 
            id="storageServices" 
            defaultChecked = {storageServices}
            onClick={handleCheck.bind(this)} 
          />
         <label>I need storage services</label>
        </div>
        <div>
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="packingServices" 
            id="packingServices" 
            defaultChecked = {packingServices}
            onClick={handleCheck.bind(this)} 
          />
         <label>I need packing services</label>
        </div>
        <div>
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="rearrangingServices" 
            id="rearrangingServices" 
            defaultChecked = {rearrangingServices}
            onClick={handleCheck.bind(this)} 
          />
         <label>I need rearranging services</label>
        </div>

            </div>

        )
    }
}

export default FormServices;