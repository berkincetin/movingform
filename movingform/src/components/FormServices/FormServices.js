import React, {Component } from 'react';
import ChecklistIcon from './Checklist.svg';
class FormServices extends Component {

    render () {
        const { handleCheck, movingServices, supplyServices, storageServices, packingServices, rearrangingServices } = this.props;
        return (
          <div className="form-section">
              <img className ="form-icon" src={ChecklistIcon} alt ='Checklist icon'></img>

              <h2 className ="mb-4">How can All-Rite help you?</h2>
              <h3 className ="mb-4">Please select all the services you need</h3>

              <div className="form-group services-row form-row row">

                  <input 
                  className = "mr-2"
                    type ="checkbox" 
                    name="movingServices" 
                    id="movingServices" 
                    defaultChecked = {movingServices}
                    onClick={handleCheck.bind(this)} 
                  />
                  <label className="my-auto">I need to move!</label>
              </div>

            <div className="form-group services-row form-row row">

              <input 
              className = "mr-2"
                type ="checkbox" 
                name="supplyServices" 
                id="supplyServices" 
                defaultChecked = {supplyServices}
                onClick={handleCheck.bind(this)} 
              />
            <label className="my-auto">I need moving supplies</label>
            </div>
            {supplyServices === true ? 
            <div>            
                <div className="form-group services-sub-row form-row row">
                <input 
                className = "mr-2"
                  type ="checkbox" 
                  name="supplyServicesBoxes" 
                  id="supplyServicesBoxes" 
                />
                <label className="my-auto">I need boxes</label>
                </div>
                <div className="form-group services-sub-row form-row row">
                <input 
                className = "mr-2"
                  type ="checkbox" 
                  name="supplyServicesFiller" 
                  id="supplyServicesFiller" 
                />
                <label className="my-auto">I need filler</label>
                </div>
                <div className="form-group services-sub-row form-row row">
                <input 
                className = "mr-2"
                  type ="checkbox" 
                  name="supplyServicesCovers" 
                  id="supplyServicesCovers" 
                />
                <label className="my-auto">I need covers</label>
            </div>
          </div> 
            : ''}
            <div className="form-group services-row form-row row">
              <input 
              className = "mr-2"
                type ="checkbox" 
                name="storageServices" 
                id="storageServices" 
                defaultChecked = {storageServices}
                onClick={handleCheck.bind(this)} 
              />
            <label  className="my-auto">I need storage services</label>
            </div>
            <div className="form-group services-row form-row row">
              <input 
              className = "mr-2"
                type ="checkbox" 
                name="packingServices" 
                id="packingServices" 
                defaultChecked = {packingServices}
                onClick={handleCheck.bind(this)} 
              />
            <label className="my-auto">I need packing services</label>
            </div>
            <div className="form-group services-row form-row row">
              <input 
              className = "mr-2"
                type ="checkbox" 
                name="rearrangingServices" 
                id="rearrangingServices" 
                defaultChecked = {rearrangingServices}
                onClick={handleCheck.bind(this)} 
              />
            <label  className="my-auto">I need rearranging services</label>
            </div>

            </div>

        )
    }
}

export default FormServices;