import React from 'react';
import axios from 'axios';

export default function PollenInfo () {

    axios.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=48.857456&lon=2.354611&key=91a44f306dcc4cdca6c16800c540e44c')
   .then((response =>{
    //console.log(response.data)
    
    const pollenData = response.data;
    console.log(pollenData);
    return response.data.token;
    /*
<> 
    pollenData.map((item,index) => (
        <div key={index}>
            <div>{item.date}</div>
        </div> 
    ));
    </>
   */
    //this.setState({info});
    //setPollen(response.data + "..." + response.data.datetime);
   })
   )}