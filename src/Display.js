import React from 'react'
import SearchBar from './SearchBar'
import WeatherDisplay from './WeatherDisplay'

class Display extends React.Component{
    constructor () {
        super()
        this.state = {
            temperature : '10',
            precipitation: 'rain',
            wind: 'alot',
            summary: 'bad',
            
        }
    }

    componentDidMount () {
        fetch ('https://api.darksky.net/forecast/db3b0ba27138ac7fdc854f5529ba7e78/42.3601,42.3601')
        .then (results => results.json())
        .then (response => console.log(response))
    }

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