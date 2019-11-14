import React from 'react'
import SearchBar from './SearchBar'
import WeatherDisplay from './WeatherDisplay'

class Display extends React.Component{
    constructor () {
        super()
        this.state = {
            temperature : '',
            humidity: '',
            precipType: '',
            precipProbability: '',
            wind: '',
            summary: '',
            lat: '',
            lng: '',
            icon: 'CLEAR_DAY',
            
        }
    }

     
    update = ({lat,lng}) => {
        this.setState({
            lat,lng
        })
    }
    
    componentDidUpdate(prevProps,prevState) {
        if (prevState.lat !== this.state.lat) {
            console.log(prevProps)    

            const lat = this.state.lat;
            const lng = this.state.lng;
         
        fetch (`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/db3b0ba27138ac7fdc854f5529ba7e78/${lat},${lng}`)
        .then (results => results.json())
        .then (response => {
            this.setState ({
                temperature: response.currently.temperature,
                humidity: response.currently.humidity,
                wind: response.currently.windSpeed,
                icon: response.currently.icon,
                precipType: response.currently.precipType,  
                precipProbability: response.currently.precipProbability,
                summary: response.currently.summary,

            })
            console.log(response)
            console.log(lat,lng)
            
        })
    } else {console.log('error', prevProps.lat, this.props.data)}
    } 
    
    render () {
        return (
            <div>
                <SearchBar 
                update = {this.update} 
                />
                <WeatherDisplay 
                    data = {this.state}
                />
                
            </div>
            
        )
    }
}

export default Display