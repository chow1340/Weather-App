import React from 'react'

function WeatherDisplay(props) {
        return (
            <div className = 'weatherContainer'>
                <div className = 'weatherGrid'>
                    <div className = 'temperature'>{props.data.temperature}</div>
                    <div className = 'precipitation'>{props.data.precipitation}</div>
                    <div className = 'wind'>{props.data.wind}</div>
                    
                </div>
            <div className = 'summary'> Summary </div>
            </div>
        )
}


export default WeatherDisplay