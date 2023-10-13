import React,{useState, useContext, createContext} from "react";

const PollenContext= createContext();
export default function PollenProvider({children}){
    
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [zcode, setZcode] = useState('');
    const [treePollen, setTreePollen] = useState( '0');
    const [grassPollen, setGrassPollen] = useState( '0');
    const [weedPollen, setWeedPollen] = useState( '0');
    //plants
    const [graminales,setGraminales]= useState('0');
    const [mugwort, setMugwort]= useState('0');
    const [hazel,setHazel]=useState('0');
    const [oak,setOak]= useState('0');
    const [alder,setalder]= useState('0'); 

    return(
       
            <PollenContext.Provider value={{ lat, setLat , zcode, setZcode,long, setLong, treePollen, setTreePollen,grassPollen,setGrassPollen,weedPollen,setWeedPollen,graminales,setGraminales,mugwort,setMugwort,hazel,setHazel,oak,setOak,alder,setalder}}>
              {children}
            </PollenContext.Provider>
    );

}
export const usePollenContext = () => useContext(PollenContext);