import React from 'react'

import Script from 'react-load-script';
/*global google*/

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lat: '',
        lng: ''
      }
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
        this.props.update(
          {
            lat: addressObject.geometry.location.lat(),
            lng: addressObject.geometry.location.lng(),
          }
        );
      /*console.log (addressObject.geometry.location.lng()) */
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
              <form className = 'form' onSubmit = {this.handleSubmit}>
                <input className = 'search-text'type = 'textbox' id="autocomplete" placeholder="Type your city"  
                />
                <button><img alt = 'search' src = 'https://cdn.imgbin.com/17/18/14/imgbin-computer-icons-search-box-button-button-EJe5CdpnFg2GQA6h6PpqD5L9X.jpg'></img> 
                </button>
              </form>
            </div>
          </div>
        );
      }
}

export default Search