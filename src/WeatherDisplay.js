import React from 'react'

function WeatherDisplay(props) {
        return (
            <div>
                
                <div className = 'summary'> {props.data.summary} </div>
                <div className = 'weatherContainer'>
                    <div className = 'weatherGrid'>
                        <div className = 'col1'> 
                            <p className = 'temperature'>{props.data.temperature}°</p>
                            <p className = 'humidity'>Humidity : {props.data.humidity}</p> 
                        </div>
                        
                        <div className = 'col2'>
                        <div className = 'icon'>{props.data.icon}</div>
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

