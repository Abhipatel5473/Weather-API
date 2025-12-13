import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "2a485a9ff21d8056f7843a07f8da3d56"

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();

        let result = {
            City: city,
            Temp: jsonResponse.main.temp,
            FeelsLike: jsonResponse.main.feels_like,
            TempMin: jsonResponse.main.temp_min,
            TempMax: jsonResponse.main.temp_max,
            Humidity: jsonResponse.main.humidity,
            Weather: jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
    }


    let handleClick = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleClick} className='TextArea'
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "white",
                                borderRadius:"9px"    // default border
                            },
                            "&:hover fieldset": {
                                borderColor: "white",    // hover border
                            },
                        },
                        "& .MuiInputLabel-root": {
                            color: "white",            // label color default
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "white",            // label focused
                        },
                        input: { color: "white" },    // input text color
                    }} />
                <br /><br />
                <Button variant="contained" type='Submit' sx={{borderRadius:"8px"}}>Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
};

export default SearchBox;