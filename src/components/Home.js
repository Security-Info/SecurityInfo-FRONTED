import React from 'react'
import '../styles/Home.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import foto from '../Image/Foto.jpg'


const Home = () => {
    const changePage = (event) => {
        if(event.target.name=="name"){
            window.location = "/Home";
          }
        if(event.target.name=="login"){
            window.location = "/";
          }
        if(event.target.name=="inicio"){
            window.location = "/Home";
          }
        if(event.target.name=="reportar"){
            window.location = "/Report";
          }

        if(event.target.name=="aboutUser"){
            window.location = "/AboutUser";
          }

        if(event.target.name=="contactUser"){
            window.location = "/ContactUser";
          }
        if(event.target.name=="profile"){
            console.log("entra a profile")
            window.location = "/Profile";
          }
    } 

    const handleBack = () => {
        window.location = "/Profile";
    }
    return (
        <div>
            <div id="blockLogo">
                <button class="buttonImg appLogo" type="button" name="volver" onClick={changePage}>
                    <img id="logo" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
                </button>
                <div class="blockOut">
                    <button type="button" class="optHome out" name="login" onClick={changePage}>Cerrar Sesión</button>
                </div>
            </div>
            <div class="blockOption">
                <button type="button" class="optHome" name="inicio" onClick={changePage}>Inicio</button>
                <button type="button" class="optHome" name="reportar" onClick={changePage}>Reportar</button>
                <button type="button" class="optHome" name="aboutUser" onClick={changePage}>Nosotros</button>
                <button type="button" class="optHome" name="contactUser" onclick={changePage}>Contacto</button>
            </div>
            <div class="blockMain">
                <div class="blockMenu">
                    <div class="blockUser">
                        <div id="blockPhoto">
                            <button class="buttonImg" type="button" name="profile" onClick={handleBack}>
                                <img id="userPhoto" src={foto} alt="Fotografia del usaurio."/>
                            </button>
                        </div>
                        <div id="blockInfo">
                            <label id="userName">User Name</label>
                        </div>
                    </div>
                    <div class="blockInput">
                        <input type="search" class="inputs" id="userInput" name="fname" placeholder="Dirección"></input>
                    </div>
                    <div class="blockSearch">
                        <button type="button" class="optHome search" onclick="">Buscar</button>
                    </div>
                </div>
                <div id="blockMap">
                </div>
            </div>
            <footer id="blockInfo">
                <a href="AboutUser" class="optFooter">Nosotros</a>
                <a href="ContactUser" class="optFooter">Contacto</a> 
            </footer>
            
        </div>
    )
}

export default Home
