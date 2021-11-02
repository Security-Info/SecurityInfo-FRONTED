import React from 'react'
import '../styles/Contact.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import gmail from '../Image/Gmail.png'
import telefono from '../Image/Telefono.png'


function Contact() {
    const changePage = () =>{
        window.location = "/";

    } 
    return (
        <div>
            <div id="blockLogo">
            <button class="buttonImg appLogo" type="button" onClick={changePage}>
                <img id="logo" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
            </button>
        </div>
        <div class="blockOption">
            <button type="button" class="optHome" onClick={changePage}>Regresar</button>
        </div>
        <div class="blockMain">
            <div class="blockUbi">
                <div class="blockSub">
                    <label class="subtitle">Ubicación</label>
                </div>
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9260020351694!2d-74.04479988523742!3d4.7827152965266535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85e32ae0ca4b%3A0x5edd4c74e8f7220c!2sEscuela%20Colombiana%20de%20Ingenier%C3%ADa%20Julio%20Garavito!5e0!3m2!1ses-419!2sco!4v1635034869984!5m2!1ses-419!2sco"></iframe>
                <div class="blockAddress">
                    <label class="label">AK 45 (Autonorte) #205-59, Bogotá, Cundinamarca</label>
                </div>
            </div>
            <div class="blockEmail">
                <div class="blockSub">
                    <label class="subtitle">Email</label>
                </div>
                <div class="blockLogContact">
                    <img class="logoContact" src={gmail} alt="Logo de Google Gmail."/> 
                </div>
                <div class="blockInfLbl">
                    <label class="label">securtiyinfo98@gmail.com</label>
                </div>
            </div>
            <div class="blockTel">
                <div class="blockSub">
                    <label class="subtitle">Teléfono</label>
                </div>
                <div class="blockLogContact"> 
                    <img class="logoContact" src={telefono} alt="Logo de Teléfono Celular."/>
                </div>
                <div class="blockInfLbl">
                    <label class="label">+ (57) 312- 315 23 43</label>
                </div>
            </div>
        </div>
        <footer id="blockInfo">
            <a href="about" class="optFooter">Nosotros</a>
            <a href="Contact" class="optFooter">Contacto</a>
        </footer>
            
        </div>
    )
}

export default Contact
