import React,{useState, useContext, createContext} from "react";

const WeatherContext= createContext();
export default function WeatherProvider({children}){
    const [lat, setLat]= useState('');
    const [long, setLong] = useState('');
    const [zcode, setZcode] = useState('');

    const [temp,setTemp] = useState('0');
    const [weathertext, setWeatherText] = useState('');
    const [humidity,setHumidity] = useState('0');
    const [precipitation, setPrecipitation] =useState('0');
    const [wind, setWind]= useState('0');
    const [cloudCover, setCloudCover] = useState('0');

    return(
        <WeatherContext.Provider value={{lat,setLat,long,setLong,zcode,setZcode,temp,setTemp,weathertext,setWeatherText,humidity,setHumidity,precipitation,setPrecipitation,wind,setWind,cloudCover,setCloudCover}}>{children}</WeatherContext.Provider>
    );
}

export const useWeatherContext= ()=> useContext(WeatherContext);
