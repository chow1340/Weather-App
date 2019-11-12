import React from 'react'
import SearchBar from './SearchBar'
import WeatherDisplay from './WeatherDisplay'

class Display extends React.Component{
    constructor () {
        super()
        this.state = {
            temperature : '10',
            humidity: '0.65',
            precipType: 'rain',
            precipProbability: '0.9',
            wind: '5.59',
            summary: 'bad',
            
        }
    }

     /*componentDidMount () {
        fetch ('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/db3b0ba27138ac7fdc854f5529ba7e78/42.3601,42.3601')
        .then (results => results.json())
        .then (response => {
            this.setState ({
                temperature: response.currently.data,
                humidity: response.currently.humidity,
                wind: response.currently.windSpeed,
                icon: response.currently.icon,
                precipType: response.currently.precipType,  
                precipProbability: response.currently.precipProbability,
                summary: response.currently.summary,

            })
            console.log(response)
        })
    } */

    render () {
        return (
            <div>
                <SearchBar />
                <WeatherDisplay 
                    data = {this.state}
                />
            </div>
        )
    }
}

export default Display