import React from 'react'
import '../styles/About.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import vision from '../Image/Vision.png'
import desarrollo from '../Image/Desarrollo.png'
import mision from '../Image/Mision.png'

function About() {
    const changePage = () => {
        window.location = "/";
    } 
    return (
        <div>
            <div id="blockLogo0D">
                <button class="buttonImg0D appLogo0D" type="button" onClick={changePage}>
                    <img id="logo0D" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
                </button>
            </div>
            <div class="blockOption0D">
            <button type="button" class="optHome0D" onClick={changePage}>Regresar</button>
        </div>
        <div class="blockMain0D">
            <div class="blockMis0D">
                <div class="blockFirtImg0D">
                    <div class="blockSub0D">
                        <label class="subtitle0D">Misión</label>
                    </div>
                    <div class="blockLogAbt0D">
                        <img class="logoAbout0D" src={mision} alt="Flecha en objetivo."/>
                    </div>
                </div>
                <div class="blockTxtAbt0D">
                    <label class="label0D">"La misión de la aplicación gira entorno a mejorar la seguridad de los cliente ante peligros aledaños."</label>
                </div>
            </div>
            <div class="blockVis0D">
                <div class="blockFirtImg0D">
                    <div class="blockSub0D">
                        <label class="subtitle0D">Visión</label>
                    </div>
                    <div class="blockLogAbt0D">
                        <img class="logoAbout0D" src={vision} alt="Imagen de aprobación (Chulo)."/>
                    </div>
                </div>
                <div class="blockTxtAbt0D">
                    <label class="label0D">"La visión de la aplicación se centra en ser un factor importante en la disminución del número de robos."</label>
                </div>
            </div>
            <div class="blockMem0D">
                <div class="blockFirtImg0D">
                    <div class="blockSub0D">
                        <label class="subtitle0D">Miembros</label>
                    </div>
                    <div class="blockLogAbt0D">
                        <img class="logoAbout0D" src={desarrollo} alt="Engrage con bombilla."/>
                    </div>
                </div>
                <div class="blockTxtAbt0D">
                    <ul>
                        <li class="labelList0D" type="circle">Miguel Angel Rodriguez Siachoque</li>
                        <li class="labelList0D" type="circle">Daniel Santiago Ducuara Ardila</li>
                        <li class="labelList0D" type="circle">Jose Maria Castro Ortega</li>
                        <li class="labelList0D" type="circle">James Alexander Duck Torres</li>
                        <li class="labelList0D" type="circle">Andres Felipe Cubillos Hurtado</li>
                        <li class="labelList0D" type="circle">Brayan Santiago Buitrago Murillo</li>
                    </ul>
                </div>
            </div>
        </div>
        <footer id="blockInfo0D">
            <a href="About" class="optFooter0D">Nosotros</a>
            <a href="Contact" class="optFooter0D">Contacto</a>
        </footer>
        </div>
    )
}

export default About