import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

function WeatherDisplay(props) {
    const displayIcon = () => { 
        if (props.data.icon !== null) {
            return props.data.icon.replace(/-/g,'_').toUpperCase()}
    }
    const defaults = {
        icon: displayIcon()
    }
    
        return (
            <div>
                
                <div className = 'summary'> {props.data.summary} </div>
                <div className = 'weatherContainer'>
                    <div className = 'weatherGrid'>
                        <div className = 'col1'> 
                            <p className = 'temperature'>{Math.round((5/9)*(props.data.temperature-32))} °C </p>
                            <p className = 'humidity'>Humidity : {props.data.humidity}</p> 
                        </div>
                        
                        <div className = 'col2'>
                            
                            <div className = 'icon'>
                            <ReactAnimatedWeather 
                            icon = {defaults.icon}
                            />
                           
                            </div>
                            </div>
                        
                        <div className = 'col3'>
                            <p className = 'precipType'>Precipitation type: {props.data.precipType}</p>
                            <p className = 'precipProbability'>Probability of precipitation: {props.data.precipProbability}</p>
                            <p className = 'wind'>Windspeed: {props.data.wind}</p>
                        </div>
                        
                    </div>
                </div>
             </div>
             
             
        )

}




export default WeatherDisplay

