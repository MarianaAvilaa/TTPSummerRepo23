
import './App.css';
import React from "react";
import { useState } from "react";
import axios from 'axios';




function App() {

  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [zcode, setZcode] = useState('');
  const [treePollen, setTreePollen] = useState( '0');
  const [grassPollen, setGrassPollen] = useState( '0');
  const [weedPollen, setWeedPollen] = useState( '0');

    const latitude = () =>{
        axios.get("https://thezipcodes.com/api/v1/search?zipCode="+zcode+"&countryCode=US&apiKey=3bbcefb8b4912d2f67f5bc8cf37d9dbb").then(response=> {
        setLat(response.data.location[0].latitude);
        setLong(response.data.location[0].longitude);
    });
    }

    function getPollen(){
      latitude();
      axios.get("https://api.breezometer.com/pollen/v2/forecast/daily?lat="+lat+"&lon="+long+"&days=3&key=91a44f306dcc4cdca6c16800c540e44c")
      .then((response) => {
          setTreePollen(response.data.data[0].types.tree.index.value);
          setGrassPollen(response.data.data[0].types.grass.index.value);
          setWeedPollen(response.data.data[0].types.weed.index.value);
          console.log(response.data.data[0].types.tree.index.value);
          console.log(response.data.data[0].types.grass.index.value);
          console.log(response.data.data[0].types.weed.index.value);
   
      });
  }



  const handleChange = (event) => {
    setZcode(event.target.value);
  };

  const handleClick = () => {
    if (zcode !== ' '){
      getPollen();
      console.log("clicked");
      console.log(lat);
      console.log(long);
    }
  };

  return (
    <div className="App">
      <header class="App-header" >
        <h1>Eco Route</h1>
        <h>Enter a zip code and get the Pollen index of that location.</h>
        <div class="App-body">
          <label class="App-zcode"> ZipCode:
          </label>
          <input type="text" id="zcode" name="zcode" onChange={handleChange} value={zcode}/>
          <button class="App-button" onClick={handleClick} > Enter </button>

        
          <h3>pollen index for Tree: { treePollen }</h3>
          <h3>pollen index for Grass: { grassPollen }</h3>
          <h3>pollen index for Weed: { weedPollen }</h3>
          <h5>The Pollen Index is on a scale of 1 to 5. 1 being a low pollen area, 5 being a high pollen area</h5>
        </div>
      </header>
    </div>
  );

}

export default App;