import React from 'react';
import axios from 'axios';
import './WeatherStyle.css';

import { useWeatherContext } from './WeatherProvider';

export default function WeatherInformation(){
    const {lat, setLat}=  useWeatherContext();
    const {long, setLong}= useWeatherContext();
    const {zcode, setZcode} = useWeatherContext();

    const {temp,setTemp} = useWeatherContext();
    const {weathertext, setWeatherText} = useWeatherContext();
    const {humidity,setHumidity} = useWeatherContext();
    const {precipitation, setPrecipitation} = useWeatherContext();
    const {wind, setWind}= useWeatherContext();
    const {cloudCover, setCloudCover} = useWeatherContext();

    async function latitude() {
        try {
            const response = await axios.get("https://thezipcodes.com/api/v1/search?zipCode=" + zcode + "&countryCode=US&apiKey=3bbcefb8b4912d2f67f5bc8cf37d9dbb");
            const location = response.data.location[0];
            setLat(location.latitude);
            setLong(location.longitude);
        } catch (error) {
            console.error("Error fetching coordinates:", error);
        }
    }
    async function getWeather(){
        try{
            await latitude();
            if(lat !== '' && long !==''){
                console.log("Fetching pollen data...");
               const response= await axios.get(`https://api.breezometer.com/weather/v1/current-conditions?lat=${lat}&lon=${long}&key=91a44f306dcc4cdca6c16800c540e44c&units=F`);
                console.log("Weather data:",response);
               // const info= response.data.data[0];
               setTemp(response.data.data.temperature.value);
               console.log(setTemp);
               setWeatherText(response.data.data.weather_text);
               setHumidity(response.data.data.relative_humidity);
               setPrecipitation(response.data.data.precipitation.total_precipitation.value);
               setWind(response.data.data.wind.speed.value);
               setCloudCover(response.data.data.cloud_cover);
          

            }
        }catch(error){
            console.log("error");
        }
    }
    const handleChange = (event) => {
        setZcode(event.target.value);
    };
   const handleClick =()=>{
    if(zcode.trim() !==''){
        getWeather();
        console.log("clicked");
    }
   };

   return( 
    <div className="Weather">
        <h1>Today Weather</h1>
        <h1>Enter a zip code and get the weather of that location</h1>
        
        <div className="InputBox">
        <label className="App-zcode"> ZipCode:</label>

        <div className="search-box">
                 <input type="text" className="zcode" name="zcode" onChange={handleChange} value={zcode} />
                  <button className="App-button" onClick={handleClick}> Enter </button>
                  </div>

        <div className="textInfo">
            <ul class="weatherInfo">
            <li>Temperature: {temp}</li>
            <li>Text: {weathertext}</li>
            <li>Humidity: {humidity}</li>
            <li>Precipitation: {precipitation}</li>
            <li>Wind: {wind}</li>
            <li>Cloud Cover: {cloudCover}</li>
            </ul>
         </div>



        </div>



    </div>
   );

}