import React, {Component }  from 'react';
import './FormHome.css'

class FormHome extends Component {
    constructor(props) {
        super(props);

        }
    render () {
        const { onRouteChange } = this.props;
        return (
            <div>
                <h3 className="mb-5">Let's get you moving!</h3>
                <p onClick = {() => onRouteChange(2)} className ="btn book-your-move">Book your move</p>
            </div>
        )
    }
}

export default FormHome;