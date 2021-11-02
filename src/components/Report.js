import React from 'react'
import securityInfo2 from '../Image/SecurityInfo2.png'
import foto from '../Image/Foto.jpg'
import fiscalia from '../Image/Fiscalia.png'
import policia from '../Image/Policia.png'
import '../styles/Report.css';



function Report() {
    const changePage = (event) => {
        if(event.target.name=="cerrarSesion"){
            window.location = "/";
          }
        if(event.target.name=="home" | event.target.name=="inicioReport"){
            window.location = "/Home";
          }
        if(event.target.name=="inicio"){
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
        if(event.target.name=="profile"){
            window.location = "/Profile";
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
            <button type="button" class="optHome" name="inicioReport" onClick={changePage}>Inicio</button>
            <button type="button" class="optHome" name="report" onClick={changePage}>Reportar</button>
            <button type="button" class="optHome" name="aboutUser" onClick={changePage}>Nosotros</button>
            <button type="button" class="optHome" name="contactUser" onClick={changePage}>Contacto</button>
        </div>
        <div class="blockMain">
            <div class="blockMenu">
                <div class="blockUser">
                    <div id="blockPhoto">
                        <button class="buttonImg" type="button" name="profile" onClick={changePage}>
                            <img id="userPhoto" src={foto} alt="Fotografia del usaurio."/>
                        </button>
                    </div>
                    <div id="blockInfo">
                        <label id="userName">User Name</label>
                    </div>
                </div> 
                <div class="blockInput">
                    <div>
                        <input type="date" class="inputs" id="userInput" name="trip-start" value="YYYY-MM-DD" min="2021-01-01" max="2021-12-31" required/>
                    </div>
                    <div>
                        <select name="select" class="inputs" required>
                            <option value="value1" selected>Tipo de robo...</option>
                            <option value="value2">Arma de Fuego</option>
                            <option value="value3">Arma Blanca</option>
                            <option value="value4">Sin Armas</option>
                        </select>
                    </div>
                </div>
                <div class="blockBtRpt">
                    <button type="button" class="optHome rpt" onClick="">Reportar Robo</button>
                </div>
            </div>
            <div id="blockMap">
            </div>
        </div>
        <div class="blockReport">
            <div class="blockTitle">
                <label class="title">Medios de denuncia ante entidades de control y seguridad</label>
            </div>
            <div class="blockOptRpt">
                <div class="blockSub">
                    <label class="subtitle">Fiscalía General</label>
                </div>
                <div class="blockLgEt">
                    <img class="logoEnti" src={fiscalia} alt="Fiscalía General de la Nación."/>
                </div>
                <a type="button" class="optReport" target="_blank" href="https://www.fiscalia.gov.co/colombia/servicios-de-informacion-al-ciudadano/donde-y-como-denunciar/">Denuncia Presencial</a>
            </div>
            <div class="blockOptRpt">
                <div class="blockSub">
                    <label class="subtitle">Policía Nacional</label>
                </div>
                <div class="blockLgEt">
                    <img class="logoEnti" src={policia} alt="Policía Nacional."/>
                </div>
                <a type="button" class="optReport" target="_blank" href="https://adenunciar.policia.gov.co/Adenunciar/Login.aspx?ReturnUrl=%2fadenunciar%2f">Denuncia Virtual</a>
            </div>
        </div>
        <div></div>
        <footer id="blockInfo">
            <a href="AboutUser" class="optFooter">Nosotros</a>
            <a href="ContactUser" class="optFooter">Contacto</a> 
        </footer>
            
        </div>
    )
}

export default Report
