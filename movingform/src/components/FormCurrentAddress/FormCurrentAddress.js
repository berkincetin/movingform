import React, {Component} from 'react';
import './FormCurrentAddress.css';

const google = window.google;


class FormCurrentAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initialState()
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.autocomplete = null
    }
    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
    
        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
      }
      initialState() {
        return {
            inputAddress: ''
        }
      }
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
      handleSubmit(event) {
        event.preventDefault()
        this.clearForm()
      }
      handlePlaceSelect() {
        const { handleAddressChange } = this.props;
        let addressObject = this.autocomplete.getPlace()
        let address = addressObject.address_components;
        let addressName = addressObject.formatted_address;

        // this.setState({
        //   name: addressObject.name,
        //   street_address: `${address[0].long_name} ${address[1].long_name}`,
        //   city: address[4].long_name,
        //   state: address[6].short_name,
        //   zip_code: address[6].short_name,
        //   googleMapLink: addressObject.url
        // })
      }
    
    render() {
        return(
            <div className="form-section">
            <h2 className ="mb-4">What is your current address?</h2>
            <div className="form-group form-row row mb-2">
                <div className="col-12 mb-5">
                    <input id="autocomplete"
                    className="form-control"
                    name="inputAddress"
                    onChange= {this.handleChange}
                    type="text"
                    />
                </div>
                </div>

        </div>
        )
    }


}

export default FormCurrentAddress;