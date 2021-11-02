import React from 'react'
import '../styles/About.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import mision from '../Image/Mision.png'
import vision from '../Image/Vision.png'
import desarrollo from '../Image/Desarrollo.png'



function AboutUser() {
    const changePage = (event) => {
        if(event.target.name=="cerrarSesion"){
            window.location = "/";
          }
        if(event.target.name=="home" | event.target.name=="inicioAbout"){
            window.location = "/Home";
          }
        if(event.target.name=="report"){
            window.location = "/Report";
          }
        if(event.target.name=="aboutUser"){
            window.location = "/AboutUser";
          }
        if(event.target.name=="contactUser"){
            window.location = "/ContactUser";
          }
    } 
    return (
        <div>
            <div id="blockLogo">
                <button class="buttonImg appLogo" type="button" name="home" onClick={changePage}>
                    <img id="logo" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
                </button>
                <div class="blockOut">
                    <button type="button" class="optHome out" name="cerrarSesion" onClick={changePage}>Cerrar Sesión</button>
                </div>
            </div>
            <div class="blockOption">
                <button type="button" class="optHome" name="inicioAbout" onClick={changePage}>Inicio</button>
                <button type="button" class="optHome" name="report" onClick={changePage}>Reportar</button>
                <button type="button" class="optHome" name="aboutUser" onClick={changePage}>Nosotros</button>
                <button type="button" class="optHome" name="contactUser" onClick={changePage}>Contacto</button>
            </div>
            <div class="blockMain">
                <div class="blockMis">
                    <div class="blockFirtImg">
                        <div class="blockSub">
                            <label class="subtitle">Misión</label>
                        </div>
                        <div class="blockLogAbt">
                            <img class="logoAbout" src={mision} alt="Flecha en objetivo."/>
                        </div>
                    </div>
                    <div class="blockTxtAbt">
                        <label class="label">"La misión de la aplicación gira entorno a mejorar la seguridad de los cliente ante peligros aledaños."</label>
                    </div>
                </div>
                <div class="blockVis">
                    <div class="blockFirtImg">
                        <div class="blockSub">
                            <label class="subtitle">Visión</label>
                        </div>
                        <div class="blockLogAbt">
                            <img class="logoAbout" src={vision} alt="Imagen de aprobación (Chulo)."/>
                        </div>
                    </div>
                    <div class="blockTxtAbt">
                        <label class="label">"La visión de la aplicación se centra en ser un factor importante en la disminución del número de robos."</label>
                    </div>
                </div>
                <div class="blockMem">
                    <div class="blockFirtImg">
                        <div class="blockSub">
                            <label class="subtitle">Miembros</label>
                        </div>
                        <div class="blockLogAbt">
                            <img class="logoAbout" src={desarrollo} alt="Engrage con bombilla."/>
                        </div>
                    </div>
                    <div class="blockTxtAbt">
                        <ul>
                            <li class="labelList" type="circle">Miguel Angel Rodriguez Siachoque</li>
                            <li class="labelList" type="circle">Daniel Santiago Ducuara Ardila</li>
                            <li class="labelList" type="circle">Jose Maria Castro Ortega</li>
                            <li class="labelList" type="circle">James Alexander Duck Torres</li>
                            <li class="labelList" type="circle">Andres Felipe Cubillos Hurtado</li>
                            <li class="labelList" type="circle">Brayan Santiago Buitrago Murillo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer id="blockInfo">
                <a href="AboutUser" class="optFooter">Nosotros</a>
                <a href="ContactUser" class="optFooter">Contacto</a>
            </footer>
            
        </div>
    )
}

export default AboutUser
