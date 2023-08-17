import React from 'react';
import axios from 'axios';
import './pollen.css';
import 'animate.css';
import { usePollenContext } from './PollenProvider';
export default function PollenInformation() {

    const {lat, setLat} =  usePollenContext();
    const {long, setLong} = usePollenContext();
    const {zcode, setZcode} = usePollenContext();
    const {treePollen, setTreePollen} = usePollenContext();
    const {grassPollen, setGrassPollen} = usePollenContext();
    const {weedPollen, setWeedPollen} = usePollenContext();
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
    async function getPollen() {
      try {
          await latitude();
          if (lat !== '' && long !== '') {
              console.log("Fetching pollen data...");
              const response = await axios.get(`https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${long}&days=3&key=91a44f306dcc4cdca6c16800c540e44c`);
              console.log("Pollen data:", response);
              setTreePollen(response.data.data[0].types.tree.index.value);
              setGrassPollen(response.data.data[0].types.grass.index.value);
              setWeedPollen(response.data.data[0].types.weed.index.value);
          }
      } catch (error) {
          console.error("Error fetching pollen data:", error);
      }
    }
    const handleChange = (event) => {
        setZcode(event.target.value);
    };
    const handleClick = () => {
        if (zcode.trim() !== '') {
            getPollen();
            console.log("clicked");
            console.log(lat);
            console.log(long);
        }
    };
    return (
      <div className="App">
          <header className="App-header">
              
              <h1 class="animate__animated animate__bounce animate__faster=100ms animate__infinte ">Eco Route</h1>
              <h1>Enter a zip code and get the Pollen index of that location.</h1>
              <div className="App-body">
                  <label className="App-zcode"> ZipCode:</label>
                  <input type="text" id="zcode" name="zcode" onChange={handleChange} value={zcode} />
                  <button className="App-button" onClick={handleClick}> Enter </button>
                  <h3>pollen index for Tree: {treePollen}</h3>
                  <h3>pollen index for Grass: {grassPollen}</h3>
                  <h3>pollen index for Weed: {weedPollen}</h3>
                  <h5>The Pollen Index is on a scale of 1 to 5. 1 being a low pollen area, 5 being a high pollen area</h5>
              </div>
          </header>
      </div>
    );
}