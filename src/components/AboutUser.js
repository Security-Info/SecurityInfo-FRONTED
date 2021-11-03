import React from 'react'
import '../styles/AboutUser.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import mision from '../Image/Mision.png'
import vision from '../Image/Vision.png'
import desarrollo from '../Image/Desarrollo.png'

function AboutUser() {
    const changePage = (event) => {
        if(event.target.name==="cerrarSesion"){
            window.location = "/";
          }
        if(event.target.name==="home" | event.target.name=="inicioAbout"){
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
    } 
    const handleStart = () => {
        window.location = "/Home";
    }

    return (
        <div>
            <div id="blockLogo1D">
                <button class="buttonImg1D appLogo1D" type="button" name="home" onClick={handleStart}>
                    <img id="logo1D" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
                </button>
                <div class="blockOut1D">
                    <button type="button" class="optHome1D out1D" name="cerrarSesion" onClick={changePage}>Cerrar Sesión</button>
                </div>
            </div>
            <div class="blockOption1D">
                <button type="button" class="optHome1D" name="inicioAbout" onClick={changePage}>Inicio</button>
                <button type="button" class="optHome1D" name="report" onClick={changePage}>Reportar</button>
                <button type="button" class="optHome1D" name="aboutUser" onClick={changePage}>Nosotros</button>
                <button type="button" class="optHome1D" name="contactUser" onClick={changePage}>Contacto</button>
            </div>
            <div class="blockMain1D">
                <div class="blockMis1D">
                    <div class="blockFirtImg1D">
                        <div class="blockSub1D">
                            <label class="subtitle1D">Misión</label>
                        </div>
                        <div class="blockLogAbt1D">
                            <img class="logoAbout1D" src={mision} alt="Flecha en objetivo."/>
                        </div>
                    </div>
                    <div class="blockTxtAbt1D">
                        <label class="label1D">"La misión de la aplicación gira entorno a mejorar la seguridad de los cliente ante peligros aledaños."</label>
                    </div>
                </div>
                <div class="blockVis1D">
                    <div class="blockFirtImg1D">
                        <div class="blockSub1D">
                            <label class="subtitle1D">Visión</label>
                        </div>
                        <div class="blockLogAbt1D">
                            <img class="logoAbout1D" src={vision} alt="Imagen de aprobación (Chulo)."/>
                        </div>
                    </div>
                    <div class="blockTxtAbt1D">
                        <label class="label1D">"La visión de la aplicación se centra en ser un factor importante en la disminución del número de robos."</label>
                    </div>
                </div>
                <div class="blockMem1D">
                    <div class="blockFirtImg1D">
                        <div class="blockSub1D">
                            <label class="subtitle1D">Miembros</label>
                        </div>
                        <div class="blockLogAbt1D">
                            <img class="logoAbout1D" src={desarrollo} alt="Engrage con bombilla."/>
                        </div>
                    </div>
                    <div class="blockTxtAbt1D">
                        <ul>
                            <li class="labelList1D" type="circle">Miguel Angel Rodriguez Siachoque</li>
                            <li class="labelList1D" type="circle">Daniel Santiago Ducuara Ardila</li>
                            <li class="labelList1D" type="circle">Jose Maria Castro Ortega</li>
                            <li class="labelList1D" type="circle">James Alexander Duck Torres</li>
                            <li class="labelList1D" type="circle">Andres Felipe Cubillos Hurtado</li>
                            <li class="labelList1D" type="circle">Brayan Santiago Buitrago Murillo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer id="blockInfo1D">
                <a href="AboutUser" class="optFooter1D">Nosotros</a>
                <a href="ContactUser" class="optFooter1D">Contacto</a>
            </footer>
        </div>
    )
}

export default AboutUser