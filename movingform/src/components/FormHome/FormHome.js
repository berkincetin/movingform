import React, {Component }  from 'react';
import './FormHome.css'
import TruckIcon from './TruckIcon.png'


class FormHome extends Component {

    render () {
        const { onRouteChange } = this.props;
        return (
            <div>
                <img className ="truck-icon" src={TruckIcon} alt ='Moving truck icon'></img>
                <h2>Let's get you moving!</h2>
                <p onClick = {() => onRouteChange(2)} className ="btn book-your-move">Book your move</p>
            </div>
        )
    }
}

export default FormHome;