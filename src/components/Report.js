import React, {useContext, useState} from 'react'
import securityInfo2 from '../Image/SecurityInfo2.png'
import foto from '../Image/Foto.jpg'
import fiscalia from '../Image/Fiscalia.png'
import policia from '../Image/Policia.png'
import '../styles/Report.css';
import Map from './Map'
import UserService from '../service/UserService';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { SomeComponent } from './SomeComponent';
import { DataContext } from '../providers/DataProvider';



function Report() {

    const { datos, setDatos } = useContext(DataContext)
    const [textId, setTextId] = useState(datos.id);
    const [textDate, setTextDate] = useState(datos.fecha);
    const [textLat, setTextLat] = useState(datos.latitud);
    const [textLng, setTextLng] = useState(datos.longitud);
    const [textDesc, setTextDesc] = useState(datos.descripcion);

    


            
            


    const changePage = (event) => {
        if(event.target.name==="cerrarSesion"){
            window.location = "/";
          }
        if(event.target.name==="home" | event.target.name=="inicioReport"){
            window.location = "/Home";
          }
        if(event.target.name==="inicio"){
            window.location = "/Home";
          }
        if(event.target.name==="report"){
            window.location = "/Report";
          }
        if(event.target.name==="aboutUser"){
            window.location = "/AboutUser";
          }
        if(event.target.name==="contactUser"){
            window.location = "/ContactUser";
          }
        if(event.target.name==="profile"){
            window.location = "/Profile";
          }
    }
    const handleStart = () => {
        window.location = "/Home";
    }


    const onChangeSelect = (event) => {
        setTextDesc(event.target.value)
        const temp2 = {
            id : textId,
            fecha: textDate,
            latitud:textLat,
            longitud: textLng,
            descripcion:event.target.value,
            }

        setDatos(temp2)

        
    }
    
    const onChangeDate = (event) => {
        
        
        
        setTextDate(event.target.value)
        const temp = {
                id : "1",
                fecha: event.target.value,
                latitud:textLat,
                longitud: textLng,
                descripcion:textDesc,
                }
        setDatos(temp)
        
        
        
        
    }


    const onReport = () => {
        alert("Se envio satisfactoriamente")
        if(datos.longitud != 0 && datos.latitud !=0){
            alert("entra!!")
            UserService.addStole(datos)

        }
        

    }
    


    console.log("el objeto id: "+ datos.id)
    console.log("el objeto fecha: "+ datos.fecha)
    console.log("el objeto lat: "+ datos.latitud)
    console.log("el objeto lng: "+ datos.longitud)
    console.log("el objeto desc: "+ datos.descripcion)
    

    return (
        <div>
            <div id="blockLogo2A">
            <button class="buttonImg2A appLogo2A" type="button" name="home" onClick={handleStart}>
                <img id="logo2A" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
            </button>
            <div class="blockOut2A">
                <button type="button" class="optHome2A out2A" name="cerrarSesion" onClick={changePage}>Cerrar Sesión</button>
            </div> 
        </div>
        <div class="blockOption2A">
            <button type="button" class="optHome2A" name="inicioReport" onClick={changePage}>Inicio</button>
            <button type="button" class="optHome2A" name="report" onClick={changePage}>Reportar</button>
            <button type="button" class="optHome2A" name="aboutUser" onClick={changePage}>Nosotros</button>
            <button type="button" class="optHome2A" name="contactUser" onClick={changePage}>Contacto</button>
        </div>
        <div class="blockMain2A">
            <div class="blockMenu2A">
                <div class="blockUser2A">
                    <div id="blockPhoto2A">
                        <button class="buttonImg2A" type="button" name="profile" onClick={changePage}>
                            <img id="userPhoto2A" src={foto} alt="Fotografia del usaurio."/>
                        </button>
                    </div>
                    <div id="blockInfo2A">
                        <label id="userName2A">User Name</label>
                    </div>
                </div> 
                <div class="blockInput2A">
                    <div>
                        <input type="date" class="inputs2A" id="userInput2A" name="userInput2A" min="2021-01-01" max="2021-12-31" onChange={onChangeDate} required></input>
                    </div>
                    <div>
<<<<<<< HEAD
                        <textarea name="inputs2A" rows="10" cols="50" placeholder="Descripción" onChange={onChangeSelect} required></textarea>
=======
                        <textarea name="inputs2A" rows="10" cols="50" placeholder="Descripción" required></textarea>
>>>>>>> 6a1afaa2fbecc805ae0ed937b384f67071223156
                    </div>
                </div>
                <div class="blockBtRpt2A">
                    <button type="button" class="optHome2A rpt2A" onClick={onReport}>Reportar Robo</button>
                </div>
            </div>
            <div id="blockMap2A">
                
                <SomeComponent />
            </div>
        </div>
        <div class="blockReport2A">
            <div class="blockTitle2A">
                <label class="title2A">Medios de denuncia ante entidades de control y seguridad</label>
            </div>
            <div class="blockOptRpt2A">
                <div class="blockSub2A">
                    <label class="subtitle2A">Fiscalía General</label>
                </div>
                <div class="blockLgEt2A">
                    <img class="logoEnti2A" src={fiscalia} alt="Fiscalía General de la Nación."/>
                </div>
                <a type="button" class="optReport2A" target="_blank" href="https://www.fiscalia.gov.co/colombia/servicios-de-informacion-al-ciudadano/donde-y-como-denunciar/">Denuncia Presencial</a>
            </div>
            <div class="blockOptRpt2A">
                <div class="blockSub2A">
                    <label class="subtitle2A">Policía Nacional</label>
                </div>
                <div class="blockLgEt2A">
                    <img class="logoEnti2A" src={policia} alt="Policía Nacional."/>
                </div>
                <a type="button" class="optReport2A" target="_blank" href="https://adenunciar.policia.gov.co/Adenunciar/Login.aspx?ReturnUrl=%2fadenunciar%2f">Denuncia Virtual</a>
            </div>
        </div>
        <div></div>
        <footer id="blockInfo2A">
            <a href="AboutUser" class="optFooter2A">Nosotros</a>
            <a href="ContactUser" class="optFooter2A">Contacto</a> 
        </footer>
        </div>
    )
}

export default Report
