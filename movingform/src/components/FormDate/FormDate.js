import React, { Component } from 'react';
import CalendarIcon from './calendar.svg';



class FormDate extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { handleChange, movingDate, movingTime } = this.props;

        return (
            <div>
            <img className ="form-icon" src={CalendarIcon} alt ='Checklist icon'></img>

            <h2 className ="mb-4">What day would you like to move?</h2>
            <div className="form-group form-row row">
            <div className="col-6 mx-auto">
                <label htmlFor="movingDate">Moving Date</label>
                <input
                  className="form-control"
                  id="movingDate"
                  name="movingDate"
                  type="date"
                  value={movingDate}
                  onChange={handleChange}
                />   
            </div>
            </div>
            <div className="form-group form-row row">

            <div className="col-6 mx-auto">
                <label htmlFor="movingDate">Moving Time</label>
                <input
                  className="form-control"
                  id="movingTime"
                  name="movingTime"
                  type="time"
                  value={movingTime}
                  onChange={handleChange}
                />   
            </div>
          </div>

            </div>
        )
    }
}

export default FormDate;