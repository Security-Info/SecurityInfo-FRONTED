import React,{ useState,useEffect} from 'react'
import '../styles/mapa.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import UserService from '../service/UserService';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon.png').default,
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
});





function Map() {
    
    

    
    const [array, setArray] = useState([])
    const [latUsuario,setLatUsuario] = useState(0);
    const [longUsuario,setLongUsuario] = useState(0);
    useEffect(() => {
        UserService.getAllZones().then(response => {
            const a = response.data;
            setArray(a);
                 
        });

        
       
    },[])


    
    

   
    
   
    

    return (
        <div className="App">
            <div className="Map">
                <MapContainer className="Map-container" center={[4.606743681798983,-74.17935218423521]} zoom={15}>
                    <TileLayer 
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            
                    />

                    

                    {array.map((positions) =>
                        <Marker position={[positions.latitud,positions.longitud]}>
                            <Popup>
                                {positions.descripcion} <br /> 
                            </Popup>
                        </Marker>

                    )}

                    
                    
                </MapContainer>
      </div>

            
        </div>
    )
}

export default Map
