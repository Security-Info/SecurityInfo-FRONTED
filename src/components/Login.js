import React from 'react'
import securityInfo from '../Image/SecurityInfo.png'
import '../styles/Login.css';

function Login() {
    const changePage = (event) => {
        if(event.target.name=="home"){
            window.location = "/Home";
          }
        else {
            window.location = "/Register";
        }

    }
    return (
        <div>
            <div id="blockLogo">
                <img id="logo" src={securityInfo} alt="Soldado con espada, securityInfo."/>
            </div>
            <div id="blockLogin">
            <form action="/action_page.php">
                <div>
                    <div class="blockSub">
                        <label for="fname" class="subtitle">Email</label>
                    </div>
                    <div class="blockInput">
                        <input type="email" class="inputs" id="userInput" name="fname" placeholder="" required/>
                    </div>
                    <div class="blockSub">
                        <label for="lname" class="subtitle">Contraseña</label>
                    </div>
                    <div class="blockInput">
                        <input type="password" class="inputs" id="passInput" name="pass" placeholder="" required/>
                    </div>
                </div>
                <div>
                    <div class="blockMainOpt">
                        <button type="button" class="optLogin login" name="home" onClick={changePage}>Ingresar</button>
                    </div>
                    <div class="blockSecOpt">
                        <a href="ForwardPassword" class="optLogin forget">Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </form> 
        </div>
        <div id="blockRegis">
            <button type="button" class="optLogin register" onClick={changePage}>Registrar</button>
        </div>
        <footer id="blockInfo">
            <a href="About" class="optFooter">Nosotros</a>
            <a href="Contact" class="optFooter">Contacto</a>
        </footer>
            
        </div>
    )
}

export default Login
