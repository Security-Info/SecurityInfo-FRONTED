import React from 'react'
import '../styles/Home.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import foto from '../Image/Foto.jpg'
import Map from './Map';


const Home = () => {
    const changePage = (event) => {
        if(event.target.name==="name"){
            window.location = "/Home";
          }
        if(event.target.name==="login"){
            window.location = "/";
          }
        if(event.target.name==="inicio"){
            window.location = "/Home";
          }
        if(event.target.name==="reportar"){
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
    const handleBack = () => {
        window.location = "/Profile";
    }
    const handleStart = () => {
        window.location = "/Home";
    }

    return (
        <div>
            <div id="blockLogo">
                <button class="buttonImg1A appLogo1A" type="button" name="volver" onClick={handleStart}>
                    <img id="logo1A" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
                </button>
                <div class="blockOut1A">
                    <button type="button" class="optHome1A out1A" name="login" onClick={changePage}>Cerrar Sesión</button>
                </div>
            </div>
            <div class="blockOption1A">
                <button type="button" class="optHome1A" name="inicio" onClick={changePage}>Inicio</button>
                <button type="button" class="optHome1A" name="reportar" onClick={changePage}>Reportar</button>
                <button type="button" class="optHome1A" name="aboutUser" onClick={changePage}>Nosotros</button>
                <button type="button" class="optHome1A" name="contactUser" onclick={changePage}>Contacto</button>
            </div>
            <div class="blockMain1A">
                <div class="blockMenu1A">
                    <div class="blockUser1A">
                        <div id="blockPhoto1A">
                            <button class="buttonImg1A" type="button" name="profile" onClick={handleBack}>
                                <img id="userPhoto1A" src={foto} alt="Fotografia del usaurio."/>
                            </button>
                        </div>
                        <div id="blockInfo1A">
                            <label id="userName1A">User Name</label>
                        </div>
                    </div>
                    <div class="blockInput1A">
                        <input type="search" class="inputs1A" id="userInput1A" name="fname" placeholder="Dirección"></input>
                    </div>
                    <div class="blockSearch1A">
                        <button type="button1A" class="optHome1A search1A" onclick="">Buscar</button>
                    </div>
                </div>
                <div id="blockMap1A">
                    <Map />
                </div>
            </div>
            <footer id="blockInfo1A">
                <a href="AboutUser" class="optFooter1A">Nosotros</a>
                <a href="ContactUser" class="optFooter1A">Contacto</a> 
            </footer>
        </div>
    )
}

export default Home