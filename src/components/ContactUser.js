import React from 'react'
import '../styles/ContactUser.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import gmail from '../Image/Gmail.png'
import telefono from '../Image/Telefono.png'

function ContactUser() {
    const changePage = (event) => {
        if(event.target.name==="cerrarSesion"){
            window.location = "/";
          }
        if(event.target.name==="home" | event.target.name=="inicio"){
            window.location = "/Home";
          }
        if(event.target.name==="report" ){
            window.location = "/Report";
          }

        if(event.target.name==="aboutUser" ){
            window.location = "/AboutUser";
          }
        if(event.target.name==="contactUser" ){
            window.location = "/ContactUser";
          }
    }
    const handleStart = () => {
        window.location = "/Home";
    }

    return (
        <div>
            <div id="blockLogo1E">
            <button class="buttonImg1E appLogo1E" type="button" name="home" onClick={handleStart}>
                <img id="logo1E" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
            </button>
            <div class="blockOut1E">
                <button type="button" class="optHome1E out1E" name="cerrarSesion" onClick={changePage}>Cerrar Sesión</button>
            </div>
        </div>
        <div class="blockOption1E">
            <button type="button" class="optHome1E" name="inicio" onClick={changePage}>Inicio</button>
            <button type="button" class="optHome1E" name="report" onClick={changePage}>Reportar</button>
            <button type="button" class="optHome1E" name="aboutUser" onClick={changePage}>Nosotros</button>
            <button type="button" class="optHome1E" name="contactUser" onClick={changePage}>Contacto</button>
        </div>
        <div class="blockMain1E">
            <div class="blockUbi1E">
                <div class="blockSub1E">
                    <label class="subtitle1E">Ubicación</label>
                </div>
                <iframe id="map1E" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9260020351694!2d-74.04479988523742!3d4.7827152965266535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85e32ae0ca4b%3A0x5edd4c74e8f7220c!2sEscuela%20Colombiana%20de%20Ingenier%C3%ADa%20Julio%20Garavito!5e0!3m2!1ses-419!2sco!4v1635034869984!5m2!1ses-419!2sco"></iframe>
                <div class="blockAddress1E">
                    <label class="label1E">AK 45 (Autonorte) #205-59, Bogotá, Cundinamarca</label>
                </div>
            </div>
            <div class="blockEmail1E">
                <div class="blockSub1E">
                    <label class="subtitle1E">Email</label>
                </div>
                <div class="blockLogContact1E">
                    <img class="logoContact1E" src={gmail} alt="Logo de Google Gmail."/> 
                </div>
                <div class="blockInfLbl1E">
                    <label class="label1E">securtiyinfo98@gmail.com</label>
                </div>
            </div>
            <div class="blockTel1E">
                <div class="blockSub1E">
                    <label class="subtitle1E">Teléfono</label>
                </div>
                <div class="blockLogContact1E"> 
                    <img class="logoContact1E" src={telefono} alt="Logo de Teléfono Celular."/>
                </div>
                <div class="blockInfLbl1E">
                    <label class="label1E">+ (57) 312- 315 23 43</label>
                </div>
            </div>
        </div>
        <footer id="blockInfo1E">
            <a href="AboutUser" class="optFooter1E">Nosotros</a>
            <a href="ContactUser" class="optFooter1E">Contacto</a>
        </footer>
        </div>
    )
}

export default ContactUser