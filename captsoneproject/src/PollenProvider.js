import React,{useState, useContext, createContext} from "react";

const PollenContext= createContext();
export function PollenProvider({children}){
    
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [zcode, setZcode] = useState('');
    const [treePollen, setTreePollen] = useState( '0');
    const [grassPollen, setGrassPollen] = useState( '0');
    const [weedPollen, setWeedPollen] = useState( '0');
    
    return(
       
            <PollenContext.Provider value={{ lat, setLat , zcode, setZcode,long, setLong, treePollen, setTreePollen,grassPollen,setGrassPollen,weedPollen,setWeedPollen}}>
              {children}
            </PollenContext.Provider>
    );

}
export const usePollenContext = () => useContext(PollenContext);