import React, {Component } from 'react';
import ChecklistIcon from './Checklist.svg';
class FormServices extends Component {
    constructor(props){
        super(props);
    }
    render () {
        const { handleCheck, movingServices, supplyServices, storageServices, packingServices, rearrangingServices } = this.props;
        return (
          <div className="form-section">
              <img className ="form-icon" src={ChecklistIcon} alt ='Checklist icon'></img>

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

        <div className="form-group form-row row">
          <div>
            <input 
            className = "mr-2"
              type ="checkbox" 
              name="supplyServices" 
              id="supplyServices" 
              defaultChecked = {supplyServices}
              onClick={handleCheck.bind(this)} 
            />
          </div>
          <div className="col-8">
          <label>I need moving supplies</label>

          </div>
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