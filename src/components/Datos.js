import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider';
function Datos({lat,long}) {

    let contador = 0;
    const { datos, setDatos } = useContext(DataContext)

    const val = {
        id : "1",
        fecha:datos.fecha,
        latitud:lat,
        longitud:long,
        descripcion: datos.descripcion
    }
    if(datos.latitud == 0 && datos.longitud ==0 ){

        
        
        setDatos({...datos, latitud: lat, longitud: long});
    }
    
    

    return (
        <div>
            
        </div>
        
    )
}

export default Datos
