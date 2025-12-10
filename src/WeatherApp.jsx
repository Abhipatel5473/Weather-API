import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from 'react';


function WeatherApp(){

    const[weatherInfo, setWeatherInfo] = useState({
        City: "Delhi",
        FeelsLike: 21.22,
        Humidity: 35,
        Temp: 22.05,
        TempMax: 22.05,
        TempMin: 22.05,
        Weather: "haze",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}

export default WeatherApp;