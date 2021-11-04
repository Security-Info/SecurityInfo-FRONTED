import { MapContainer, Marker, TileLayer, useMapEvents, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import UserService from '../service/UserService';
import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider';
import Datos from './Datos';

export const SomeComponent = () => { 
    

    const { datos, setDatos } = useContext(DataContext)

    const [initialPosition, setInitialPosition] = useState([0,0])
    const [selectedPosition, setSelectedPosition] = useState([0,0])
    const [lat, setLatitud] = useState(0)
    const [long, setLongitud] = useState(0)
    const [val, setVal] = useState(0)



    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude]);

        });
        
        
        
        
    },[]);


    const Markers = () => {

        const map = useMapEvents({
            click(e) {                                
                setSelectedPosition([
                    e.latlng.lat,
                    e.latlng.lng
                ]); 
                

                const val = {
                    id : "1",
                    fecha:datos.fecha,
                    latitud:e.latlng.lat,
                    longitud:e.latlng.lng,
                    descripcion:datos.descripcion
                }

                setDatos(val);
                
                           
            },            
        })

        

        return (
            selectedPosition ? 
                <Marker           
                key={selectedPosition[0]}
                position={selectedPosition}
                interactive={false} 
                />
            : null

            

            
        )
           
        
    }

    

    UserService.getUsers().then(console.log)
    
    //UserService.addStole(JsonPrueba)

    return(
        <MapContainer className="Map-container" center={[4.667306,-74.092650]} zoom={11}>
            <Markers />
            <TileLayer 
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    
            />
            
            
        </MapContainer>
    )
}