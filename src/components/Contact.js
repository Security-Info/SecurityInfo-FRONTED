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
            <div id="blockLogo0E">
            <button class="buttonImg0E appLogo0E" type="button" onClick={changePage}>
                <img id="logo0E" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
            </button>
        </div>
        <div class="blockOption0E">
            <button type="button" class="optHome0E" onClick={changePage}>Regresar</button>
        </div>
        <div class="blockMain0E">
            <div class="blockUbi0E">
                <div class="blockSub0E">
                    <label class="subtitle0E">Ubicación</label>
                </div>
                <iframe id="map0E" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9260020351694!2d-74.04479988523742!3d4.7827152965266535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85e32ae0ca4b%3A0x5edd4c74e8f7220c!2sEscuela%20Colombiana%20de%20Ingenier%C3%ADa%20Julio%20Garavito!5e0!3m2!1ses-419!2sco!4v1635034869984!5m2!1ses-419!2sco"></iframe>
                <div class="blockAddress0E">
                    <label class="label0E">AK 45 (Autonorte) #205-59, Bogotá, Cundinamarca</label>
                </div>
            </div>
            <div class="blockEmail0E">
                <div class="blockSub0E">
                    <label class="subtitle0E">Email</label>
                </div>
                <div class="blockLogContact0E">
                    <img class="logoContact0E" src={gmail} alt="Logo de Google Gmail."/> 
                </div>
                <div class="blockInfLbl0E">
                    <label class="label0E">securtiyinfo98@gmail.com</label>
                </div>
            </div>
            <div class="blockTel0E">
                <div class="blockSub0E">
                    <label class="subtitle0E">Teléfono</label>
                </div>
                <div class="blockLogContact0E"> 
                    <img class="logoContact0E" src={telefono} alt="Logo de Teléfono Celular."/>
                </div>
                <div class="blockInfLbl0E">
                    <label class="label0E">+ (57) 312- 315 23 43</label>
                </div>
            </div>
        </div>
        <footer id="blockInfo0E">
            <a href="about" class="optFooter0E">Nosotros</a>
            <a href="Contact" class="optFooter0E">Contacto</a>
        </footer>
        </div>
    )
}

export default Contact