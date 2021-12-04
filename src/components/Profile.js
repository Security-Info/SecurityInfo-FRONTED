import React from 'react'
import '../styles/Profile.css';
import securityInfo2 from '../Image/SecurityInfo2.png'
import foto from '../Image/Foto.jpg'

function Profile() {
    const changePage = (event) => {
        if(event.target.name==="cerrarSesion"){
            window.location = "/";
          }
        if(event.target.name==="inicio"){
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
            <div id="blockLogo3A">
                <button class="buttonImg3A appLogo3A" type="button" onClick={handleStart}>
                    <img id="logo3A" src={securityInfo2} alt="Soldado con espada, securityInfo."/>
                </button>
                <div class="blockOut3A">
                    <button type="button" class="optHome3A out3A" name="cerrarSesion" onClick={changePage}>Cerrar Sesión</button>
                </div>
            </div>
            <div class="blockOption3A">
                <button type="button" class="optHome3A" name="inicio" onClick={changePage}>Inicio</button>
                <button type="button" class="optHome3A" name="report" onClick={changePage}>Reportar</button>
                <button type="button" class="optHome3A" name="aboutUser" onClick={changePage}>Nosotros</button>
                <button type="button" class="optHome3A" name="contactUser" onClick={changePage}>Contacto</button>
            </div>
            <div class="blockMain3A">
                <div class="blockMenu3A">
                    <div class="blockUser3A">
                        <div id="blockPhoto3A">
                            <button class="buttonImg3A" type="button" onClick="">
                                <img id="userPhoto3A" src={foto} alt="Fotografia del usaurio."/>
                            </button>
                        </div>
                        <div id="blockName3A">
                            <label id="userName3A">James Torres Segura</label>
                        </div>
                    </div>
                    <div class="blockTitle3A">
                        <label class="title3A">Información del Usuario</label>
                    </div>
                    <div class="blockProfile3A">
                        <form action="/action_page.php">
                            <div>
                                <div class="blockContact3A">
                                    <div class="blockInfo3A email3A">
                                        <div class="blockSub3A">
                                            <label for="fname" class="subtitle3A">Email</label>
                                        </div>
                                        <div class="blockInput3A">
                                            <input type="email" class="inputs3A" id="userInput3A" pattern=".+@globex\.com" size="30" required value="james1999torres@gmail.com"/>
                                        </div>
                                    </div>
                                    <div class="blockInfo3A tel3A">
                                        <div class="blockSub3A">
                                            <label for="lname" class="subtitle3A">Teléfono</label>
                                        </div>
                                        <div class="blockInput3A">
                                            <input type="text" class="inputs3A" id="userInput3A" name="fname" placeholder="" value="3208776212"></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="blockPasswds3A">
                                    <div class="blockInfo3A firstPass3A">
                                        <div class="blockSub3A">
                                            <label for="fname" class="subtitle3A">Contraseña</label>
                                        </div>
                                        <div class="blockInput3A">
                                            <input type="password" class="inputs3A" id="userInput3A" name="fname" placeholder="" value="Password"/>
                                        </div>
                                    </div>
                                    <div class="blockInfo3A lastPass3A">
                                        <div class="blockSub3A">
                                            <label for="lname" class="subtitle3A">Repetir Contraseña</label>
                                        </div>
                                        <div class="blockInput3A">
                                            <input type="password" class="inputs3A" id="userInput3A" name="fname" placeholder="" value="Password"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                    <div class="blockSave3A">
                        <button type="button" class="optHome3A save3A" onclick="">Guardar Cambios</button>
                    </div>
                </div>
                <div id="blockMap3A">
                </div>
            </div>
            <footer id="blockInfo3A">
                <a href="AboutUser" class="optFooter3A">Nosotros</a>
                <a href="ContactUser" class="optFooter3A">Contacto</a>
            </footer>
        </div>
    )
}

export default Profile
