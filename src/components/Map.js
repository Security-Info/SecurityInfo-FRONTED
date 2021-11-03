import React from 'react'
import '../styles/mapa.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

function Map() {
    return (
        <div className="App">
            <div className="Map">
                <MapContainer className="Map-container" center={[4.606743681798983,-74.17935218423521]} zoom={15}>
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
      </div>

            
        </div>
    )
}

export default Map
