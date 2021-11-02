import React from 'react'
import '../styles/Profile.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import foto from '../Image/Foto.jpg'



function Profile() {
    const changePage = (event) => {
        if(event.target.name=="cerrarSesion"){
            window.location = "/";
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
    } 
    return (
        <div>
            <div id="blockLogo">
                <button class="buttonImg appLogo" type="button" onclick="">
                    <img id="logo" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
                </button>
                <div class="blockOut">
                    <button type="button" class="optHome out" name="cerrarSesion" onClick={changePage}>Cerrar Sesión</button>
                </div>
            </div>
            <div class="blockOption">
                <button type="button" class="optHome" name="inicio" onClick={changePage}>Inicio</button>
                <button type="button" class="optHome" name="report" onClick={changePage}>Reportar</button>
                <button type="button" class="optHome" name="aboutUser" onClick={changePage}>Nosotros</button>
                <button type="button" class="optHome" name="contactUser" onClick={changePage}>Contacto</button>
            </div>
            <div class="blockMain">
                <div class="blockMenu">
                    <div class="blockUser">
                        <div id="blockPhoto">
                            <button class="buttonImg" type="button" onClick="">
                                <img id="userPhoto" src={foto} alt="Fotografia del usaurio."/>
                            </button>
                        </div>
                        <div id="blockName">
                            <label id="userName">User Name</label>
                        </div>
                    </div>
                    <div class="blockTitle">
                        <label class="title">Información del Usuario</label>
                    </div>
                    <div class="blockProfile">
                        <form action="/action_page.php">
                            <div>
                                <div class="blockContact">
                                    <div class="blockInfo email">
                                        <div class="blockSub">
                                            <label for="fname" class="subtitle">Email</label>
                                        </div>
                                        <div class="blockInput">
                                            <input type="email" class="inputs" id="userInput" pattern=".+@globex\.com" size="30" required value="correo@gmail.com"/>
                                        </div>
                                    </div>
                                    <div class="blockInfo tel">
                                        <div class="blockSub">
                                            <label for="lname" class="subtitle">Teléfono</label>
                                        </div>
                                        <div class="blockInput">
                                            <input type="text" class="inputs" id="userInput" name="fname" placeholder="" value="Number User"></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="blockPasswds">
                                    <div class="blockInfo firstPass">
                                        <div class="blockSub">
                                            <label for="fname" class="subtitle">Contraseña</label>
                                        </div>
                                        <div class="blockInput">
                                            <input type="password" class="inputs" id="userInput" name="fname" placeholder="" value="Password"/>
                                        </div>
                                    </div>
                                    <div class="blockInfo lastPass">
                                        <div class="blockSub">
                                            <label for="lname" class="subtitle">Repetir Contraseña</label>
                                        </div>
                                        <div class="blockInput">
                                            <input type="password" class="inputs" id="userInput" name="fname" placeholder="" value="Password"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                    <div class="blockSave">
                        <button type="button" class="optHome save" onclick="">Guardar Cambios</button>
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

export default Profile
