import React from 'react'

import Script, {
  geocodeByAddress,
  getLatLng,
} from 'react-load-script';
/*global google*/

class Search extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        city: '',
        query: '',
        lat: '2',
        lng: '3'
      };
      
      this.handleSubmit = this.handleSubmit.bind(this)
  
    }
  
    handleScriptLoad = () => {
      const options = {
        types: ['(cities)'],
      };
  
       this.autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        options,
      );
      this.autocomplete.setFields(['geometry']) //limit field to geometry

      
    }
    
    handleSubmit = (event) => {
      const addressObject = this.autocomplete.getPlace();
      const address = addressObject.address_components;
      
        this.setState(
          {
           
            
            lat: addressObject.geometry.location.lat(),
            lng: addressObject.geometry.location.lng(),
          }
        );
        
      
      console.log (addressObject.geometry.location.lng())
      event.preventDefault()
      
    }
    
  
    render() {
        return (
          <div>
            <Script
              url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnqBcICpcIUF4OcyIjqIEoIMXYOXqZnG8&libraries=places"
              onLoad={this.handleScriptLoad}
            />
            <div className = 'search-box'>
            <form onSubmit = {this.handleSubmit}>
              <input className = 'search-text'type = 'textbox' id="autocomplete" placeholder="Type your city"  
              />
              <button> submit</button>
              
            </form>
              {this.state.lat}, {this.state.lng}
            </div>
          </div>
        );
      }
}

export default Search