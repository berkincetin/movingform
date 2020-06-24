import React, { Component } from 'react';
import BoxIcon from './BoxIcon.png';
class FormSuccess extends Component {


    render () {
        const { _next } = this.props;
        return (
            <div>
                <img className ="box-icon" src={BoxIcon} alt ='Moving truck icon'></img>

                <h2 className="mb-2">Thanks for submitting a moving request!</h2>
                <h3 className="mb-4">You should be expecting a confirmation email from us shortly</h3>
                <p onClick = {_next} className ="btn book-your-move">Go home</p>
                
            </div>
        )
    }
}



export default FormSuccess;