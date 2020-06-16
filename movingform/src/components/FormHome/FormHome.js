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
                <h2 className="mb-2">Let's get you moving!</h2>
                <p onClick = {() => onRouteChange(2)} className ="btn book-your-move">Book your move</p>
            </div>
        )
    }
}

export default FormHome;