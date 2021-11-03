import { MapContainer, Marker, TileLayer, useMapEvents, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import UserService from '../service/UserService';

export const SomeComponent = () => {  

    const [initialPosition, setInitialPosition] = useState([0,0])
    const [selectedPosition, setSelectedPosition] = useState([0,0])
    const [lat, setLatitud] = useState(0)
    const [long, setLongitud] = useState(0)


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude]);

        });
    }, []);


    const Markers = () => {

        const map = useMapEvents({
            click(e) {                                
                setSelectedPosition([
                    e.latlng.lat,
                    e.latlng.lng
                ]);   
                           
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

    console.log("la posicion de latitud es: " + selectedPosition[0])
    console.log("la posicion de longitud es: " + selectedPosition[1])   

    UserService.getUsers().then(console.log)
    const JsonPrueba = {
        fecha: "2021-11-03T14:45:15",
        latitud: 4.610886,
        longitud: -74.091565,
        descripcion: "Esta es una prueba desde react"
    }

    //UserService.addStole(JsonPrueba)

    return(
        <MapContainer className="Map-container" center={[4.667306,-74.092650]} zoom={11}>
            <Markers />
            <TileLayer 
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    
            />
            <Marker position={[4.606743681798983,-74.17935218423521]}>
                <Popup>
                    Este es un punto <br /> Barrio Bosa
                </Popup>
            </Marker>
        </MapContainer>
    )
}